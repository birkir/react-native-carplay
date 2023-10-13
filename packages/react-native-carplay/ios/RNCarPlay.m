#import "RNCarPlay.h"
#import <React/RCTConvert.h>
#import <React/RCTRootView.h>

@implementation RNCarPlay
{
    bool hasListeners;
}

@synthesize interfaceController;
@synthesize window;
@synthesize searchResultBlock;
@synthesize selectedResultBlock;
@synthesize isNowPlayingActive;

-(void)startObserving {
    hasListeners = YES;
}

-(void)stopObserving {
    hasListeners = NO;
}

+ (NSDictionary *) getConnectedWindowInformation: (CPWindow *) window {
    return @{
        @"width": @(window.bounds.size.width),
        @"height": @(window.bounds.size.height),
        @"scale": @(window.screen.scale)
    };
}

+ (void) connectWithInterfaceController:(CPInterfaceController*)interfaceController window:(CPWindow*)window {
    RNCPStore * store = [RNCPStore sharedManager];
    store.interfaceController = interfaceController;
    store.window = window;
    [store setConnected:true];
    RNCarPlay *cp = [RNCarPlay allocWithZone:nil];
    if (cp.bridge) {
        [cp sendEventWithName:@"didConnect" body:[self getConnectedWindowInformation:window]];
    }
}

+ (void) disconnect {
    RNCarPlay *cp = [RNCarPlay allocWithZone:nil];
    RNCPStore *store = [RNCPStore sharedManager];
    [store setConnected:false];
    [[store.window subviews] makeObjectsPerformSelector:@selector(removeFromSuperview)];

    if (cp.bridge) {
        [cp sendEventWithName:@"didDisconnect" body:@{}];
    }
}

RCT_EXPORT_MODULE();

+ (id)allocWithZone:(NSZone *)zone {
    static RNCarPlay *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [super allocWithZone:zone];
    });
    return sharedInstance;
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[
        @"didConnect",
        @"didDisconnect",
        // interface
        @"barButtonPressed",
        @"backButtonPressed",
        @"didAppear",
        @"didDisappear",
        @"willAppear",
        @"willDisappear",
        @"buttonPressed",
        // grid
        @"gridButtonPressed",
        // information
        @"actionButtonPressed",
        // list
        @"didSelectListItem",
        // search
        @"updatedSearchText",
        @"searchButtonPressed",
        @"selectedResult",
        // tabbar
        @"didSelectTemplate",
        // nowplaying
        @"upNextButtonPressed",
        @"albumArtistButtonPressed",
        // poi
        @"didSelectPointOfInterest",
        // map
        @"mapButtonPressed",
        @"didUpdatePanGestureWithTranslation",
        @"didEndPanGestureWithVelocity",
        @"panBeganWithDirection",
        @"panEndedWithDirection",
        @"panWithDirection",
        @"didBeginPanGesture",
        @"didDismissPanningInterface",
        @"willDismissPanningInterface",
        @"didShowPanningInterface",
        @"didDismissNavigationAlert",
        @"willDismissNavigationAlert",
        @"didShowNavigationAlert",
        @"willShowNavigationAlert",
        @"didCancelNavigation",
        @"alertActionPressed",
        @"selectedPreviewForTrip",
        @"startedTrip",
    ];
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}


-(UIImage *)imageWithTint:(UIImage *)image andTintColor:(UIColor *)tintColor {
    UIImage *imageNew = [image imageWithRenderingMode:UIImageRenderingModeAlwaysTemplate];
    UIImageView *imageView = [[UIImageView alloc] initWithImage:imageNew];
    imageView.tintColor = tintColor;
    UIGraphicsBeginImageContextWithOptions(imageView.bounds.size, NO, 0.0);
    [imageView.layer renderInContext:UIGraphicsGetCurrentContext()];
    UIImage *tintedImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return tintedImage;
}

-(UIImage*)dynamicImageWithNormalImage:(UIImage*)normalImage darkImage:(UIImage*)darkImage {
  RNCPStore *store = [RNCPStore sharedManager];
    if (normalImage == nil || darkImage == nil) {
        return normalImage ? : darkImage;
    }
    if (@available(iOS 14.0, *)) {
      UIImageAsset* imageAsset = darkImage.imageAsset;

        // darkImage
        UITraitCollection* darkImageTraitCollection = [UITraitCollection traitCollectionWithTraitsFromCollections:
        @[[UITraitCollection traitCollectionWithUserInterfaceStyle:UIUserInterfaceStyleDark],
          [UITraitCollection traitCollectionWithDisplayScale:normalImage.scale]]];
        [imageAsset registerImage:normalImage withTraitCollection:darkImageTraitCollection];

        return [imageAsset imageWithTraitCollection: store.interfaceController.carTraitCollection];
    }
    else {
        return normalImage;
   }
}

- (UIImage *)imageWithSize:(UIImage *)image convertToSize:(CGSize)size {
    UIGraphicsBeginImageContext(size);
    [image drawInRect:CGRectMake(0, 0, size.width, size.height)];
    UIImage *destImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return destImage;
}

RCT_EXPORT_METHOD(checkForConnection) {
    RNCPStore *store = [RNCPStore sharedManager];
    if ([store isConnected] && hasListeners) {
        [self sendEventWithName:@"didConnect" body:[RNCarPlay getConnectedWindowInformation: store.window]];
    }
}

RCT_EXPORT_METHOD(createTemplate:(NSString *)templateId config:(NSDictionary*)config) {
    // Get the shared instance of the RNCPStore class
    RNCPStore *store = [RNCPStore sharedManager];

    // Extract values from the 'config' dictionary
    NSString *type = [RCTConvert NSString:config[@"type"]];
    NSString *title = [RCTConvert NSString:config[@"title"]];
    NSArray *leadingNavigationBarButtons = [self parseBarButtons:[RCTConvert NSArray:config[@"leadingNavigationBarButtons"]] templateId:templateId];
    NSArray *trailingNavigationBarButtons = [self parseBarButtons:[RCTConvert NSArray:config[@"trailingNavigationBarButtons"]] templateId:templateId];
    
    // Create a new CPTemplate object
    CPTemplate *carPlayTemplate = [[CPTemplate alloc] init];

    if ([type isEqualToString:@"search"]) {
        CPSearchTemplate *searchTemplate = [[CPSearchTemplate alloc] init];
        searchTemplate.delegate = self;
        carPlayTemplate = searchTemplate;
    }
    else if ([type isEqualToString:@"grid"]) {
        NSArray *buttons = [self parseGridButtons:[RCTConvert NSArray:config[@"buttons"]] templateId:templateId];
        CPGridTemplate *gridTemplate = [[CPGridTemplate alloc] initWithTitle:title gridButtons:buttons];
        [gridTemplate setLeadingNavigationBarButtons:leadingNavigationBarButtons];
        [gridTemplate setTrailingNavigationBarButtons:trailingNavigationBarButtons];
        carPlayTemplate = gridTemplate;
    }
    else if ([type isEqualToString:@"list"]) {
        NSArray *sections = [self parseSections:[RCTConvert NSArray:config[@"sections"]]];
        CPListTemplate *listTemplate;
        if (@available(iOS 15.0, *)) {
            if ([config objectForKey:@"assistant"]) {
                NSDictionary *assistant = [config objectForKey:@"assistant"];
                BOOL _enabled = [assistant valueForKey:@"enabled"];
                if (_enabled) {
                    CPAssistantCellConfiguration *conf = [[CPAssistantCellConfiguration alloc] initWithPosition:[RCTConvert CPAssistantCellPosition:[config valueForKey:@"position"]] visibility:[RCTConvert CPAssistantCellVisibility:[config valueForKey:@"visibility"]] assistantAction:[RCTConvert CPAssistantCellActionType:[config valueForKey:@"visibility"]]];
                    listTemplate = [[CPListTemplate alloc] initWithTitle:title sections:sections assistantCellConfiguration:conf];
                }
            }
        }
        if (listTemplate == nil) {
            // Fallback on earlier versions
            listTemplate = [[CPListTemplate alloc] initWithTitle:title sections:sections];
        }
        [listTemplate setLeadingNavigationBarButtons:leadingNavigationBarButtons];
        [listTemplate setTrailingNavigationBarButtons:trailingNavigationBarButtons];
        if (![RCTConvert BOOL:config[@"backButtonHidden"]]) {
            if (@available(iOS 14.0, *)) {
                CPBarButton *backButton = [[CPBarButton alloc] initWithTitle:@" Back" handler:^(CPBarButton * _Nonnull barButton) {
                    if (hasListeners) {
                        [self sendEventWithName:@"backButtonPressed" body:@{@"templateId":templateId}];
                    }
                    [self popTemplate:false];
                }];
                [listTemplate setBackButton:backButton];
            }
        }
        if (config[@"emptyViewTitleVariants"]) {
            if (@available(iOS 14.0, *)) {
                listTemplate.emptyViewTitleVariants = [RCTConvert NSArray:config[@"emptyViewTitleVariants"]];
            }
        }
        if (config[@"emptyViewSubtitleVariants"]) {
            if (@available(iOS 14.0, *)) {
                listTemplate.emptyViewSubtitleVariants = [RCTConvert NSArray:config[@"emptyViewSubtitleVariants"]];
            }
        }
        listTemplate.delegate = self;
        carPlayTemplate = listTemplate;
    }
    else if ([type isEqualToString:@"map"]) {
        CPMapTemplate *mapTemplate = [[CPMapTemplate alloc] init];

        [self applyConfigForMapTemplate:mapTemplate templateId:templateId config:config];
        [mapTemplate setLeadingNavigationBarButtons:leadingNavigationBarButtons];
        [mapTemplate setTrailingNavigationBarButtons:trailingNavigationBarButtons];
        [mapTemplate setUserInfo:@{ @"templateId": templateId }];
        mapTemplate.mapDelegate = self;

        carPlayTemplate = mapTemplate;
    } else if ([type isEqualToString:@"voicecontrol"]) {
        CPVoiceControlTemplate *voiceTemplate = [[CPVoiceControlTemplate alloc] initWithVoiceControlStates: [self parseVoiceControlStates:config[@"voiceControlStates"]]];
        carPlayTemplate = voiceTemplate;
    } else if ([type isEqualToString:@"nowplaying"]) {
        CPNowPlayingTemplate *nowPlayingTemplate = [CPNowPlayingTemplate sharedTemplate];
        [nowPlayingTemplate setAlbumArtistButtonEnabled:[RCTConvert BOOL:config[@"albumArtistButtonEnabled"]]];
        [nowPlayingTemplate setUpNextTitle:[RCTConvert NSString:config[@"upNextButtonTitle"]]];
        [nowPlayingTemplate setUpNextButtonEnabled:[RCTConvert BOOL:config[@"upNextButtonEnabled"]]];
        NSMutableArray<CPNowPlayingButton *> *buttons = [NSMutableArray new];
        NSArray<NSDictionary*> *_buttons = [RCTConvert NSDictionaryArray:config[@"buttons"]];
        
        NSDictionary *buttonTypeMapping = @{
            @"shuffle": CPNowPlayingShuffleButton.class,
            @"add-to-library": CPNowPlayingAddToLibraryButton.class,
            @"more": CPNowPlayingMoreButton.class,
            @"playback": CPNowPlayingPlaybackRateButton.class,
            @"repeat": CPNowPlayingRepeatButton.class,
            @"image": CPNowPlayingImageButton.class
        };
        
        for (NSDictionary *_button in _buttons) {
            NSString *buttonType = [RCTConvert NSString:_button[@"type"]];
            NSDictionary *body = @{@"templateId":templateId, @"id": _button[@"id"] };
            Class buttonClass = buttonTypeMapping[buttonType];
            if (buttonClass) {
                CPNowPlayingButton *button = [[buttonClass alloc] initWithHandler:^(__kindof CPNowPlayingButton * _Nonnull) {
                    if (self->hasListeners) {
                        [self sendEventWithName:@"buttonPressed" body:body];
                    }
                }];
                [buttons addObject:button];
            }
        }
        [nowPlayingTemplate updateNowPlayingButtons:buttons];
        carPlayTemplate = nowPlayingTemplate;
    } else if ([type isEqualToString:@"tabbar"]) {
        CPTabBarTemplate *tabBarTemplate = [[CPTabBarTemplate alloc] initWithTemplates:[self parseTemplatesFrom:config]];
        tabBarTemplate.delegate = self;
        carPlayTemplate = tabBarTemplate;
    } else if ([type isEqualToString:@"contact"]) {
        NSString *nm = [RCTConvert NSString:config[@"name"]];
        UIImage *img = [RCTConvert UIImage:config[@"image"]];
        CPContact *contact = [[CPContact alloc] initWithName:nm image:img];
        [contact setSubtitle:config[@"subtitle"]];
        [contact setActions:[self parseButtons:config[@"actions"] templateId:templateId]];
        CPContactTemplate *contactTemplate = [[CPContactTemplate alloc] initWithContact:contact];
        carPlayTemplate = contactTemplate;
    } else if ([type isEqualToString:@"actionsheet"]) {
        NSString *title = [RCTConvert NSString:config[@"title"]];
        NSString *message = [RCTConvert NSString:config[@"message"]];
        NSMutableArray<CPAlertAction *> *actions = [NSMutableArray new];
        NSArray<NSDictionary*> *_actions = [RCTConvert NSDictionaryArray:config[@"actions"]];
        for (NSDictionary *_action in _actions) {
            CPAlertAction *action = [[CPAlertAction alloc] initWithTitle:[RCTConvert NSString:_action[@"title"]] style:[RCTConvert CPAlertActionStyle:_action[@"style"]] handler:^(CPAlertAction *a) {
                if (self->hasListeners) {
                    [self sendEventWithName:@"actionButtonPressed" body:@{@"templateId":templateId, @"id": _action[@"id"] }];
                }
            }];
            [actions addObject:action];
        }
        CPActionSheetTemplate *actionSheetTemplate = [[CPActionSheetTemplate alloc] initWithTitle:title message:message actions:actions];
        carPlayTemplate = actionSheetTemplate;
    } else if ([type isEqualToString:@"alert"]) {
        NSMutableArray<CPAlertAction *> *actions = [NSMutableArray new];
        NSArray<NSDictionary*> *_actions = [RCTConvert NSDictionaryArray:config[@"actions"]];
        for (NSDictionary *_action in _actions) {
            CPAlertAction *action = [[CPAlertAction alloc] initWithTitle:[RCTConvert NSString:_action[@"title"]] style:[RCTConvert CPAlertActionStyle:_action[@"style"]] handler:^(CPAlertAction *a) {
                if (self->hasListeners) {
                    [self sendEventWithName:@"actionButtonPressed" body:@{@"templateId":templateId, @"id": _action[@"id"] }];
                }
            }];
            [actions addObject:action];
        }
        NSArray<NSString*>* titleVariants = [RCTConvert NSArray:config[@"titleVariants"]];
        CPAlertTemplate *alertTemplate = [[CPAlertTemplate alloc] initWithTitleVariants:titleVariants actions:actions];
        carPlayTemplate = alertTemplate;
    } else if ([type isEqualToString:@"poi"]) {
        NSString *title = [RCTConvert NSString:config[@"title"]];
        NSMutableArray<__kindof CPPointOfInterest *> * items = [NSMutableArray new];
        NSUInteger selectedIndex = 0;

        NSArray<NSDictionary*> *_items = [RCTConvert NSDictionaryArray:config[@"items"]];
        for (NSDictionary *_item in _items) {
            CPPointOfInterest *poi = [RCTConvert CPPointOfInterest:_item];
            [poi setUserInfo:_item];
            [items addObject:poi];
        }

        CPPointOfInterestTemplate *poiTemplate = [[CPPointOfInterestTemplate alloc] initWithTitle:title pointsOfInterest:items selectedIndex:selectedIndex];
        poiTemplate.pointOfInterestDelegate = self;
        carPlayTemplate = poiTemplate;
    } else if ([type isEqualToString:@"information"]) {
        NSString *title = [RCTConvert NSString:config[@"title"]];
        CPInformationTemplateLayout layout = [RCTConvert BOOL:config[@"leading"]] ? CPInformationTemplateLayoutLeading : CPInformationTemplateLayoutTwoColumn;
        NSMutableArray<__kindof CPInformationItem *> * items = [NSMutableArray new];
        NSMutableArray<__kindof CPTextButton *> * actions = [NSMutableArray new];

        NSArray<NSDictionary*> *_items = [RCTConvert NSDictionaryArray:config[@"items"]];
        for (NSDictionary *_item in _items) {
            [items addObject:[[CPInformationItem alloc] initWithTitle:_item[@"title"] detail:_item[@"detail"]]];
        }

        NSArray<NSDictionary*> *_actions = [RCTConvert NSDictionaryArray:config[@"actions"]];
        for (NSDictionary *_action in _actions) {
            CPTextButton *action = [[CPTextButton alloc] initWithTitle:_action[@"title"] textStyle:CPTextButtonStyleNormal handler:^(__kindof CPTextButton * _Nonnull contactButton) {
                if (self->hasListeners) {
                    [self sendEventWithName:@"actionButtonPressed" body:@{@"templateId":templateId, @"id": _action[@"id"] }];
                }
            }];
            [actions addObject:action];
        }

        CPInformationTemplate *informationTemplate = [[CPInformationTemplate alloc] initWithTitle:title layout:layout items:items actions:actions];
        carPlayTemplate = informationTemplate;
    }

    if (config[@"tabSystemItem"]) {
        carPlayTemplate.tabSystemItem = [RCTConvert NSInteger:config[@"tabSystemItem"]];
    }
    if (config[@"tabSystemImageName"]) {
        carPlayTemplate.tabImage = [UIImage systemImageNamed:[RCTConvert NSString:config[@"tabSystemImageName"]]];
    }
    if (config[@"tabImage"]) {
        carPlayTemplate.tabImage = [RCTConvert UIImage:config[@"tabImage"]];
    }
    if (config[@"tabTitle"]) {
        carPlayTemplate.tabTitle = [RCTConvert NSString:config[@"tabTitle"]];
    }

    [carPlayTemplate setUserInfo:@{ @"templateId": templateId }];
    [store setTemplate:templateId template:carPlayTemplate];
}

RCT_EXPORT_METHOD(createTrip:(NSString*)tripId config:(NSDictionary*)config) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTrip *trip = [self parseTrip:config];
    NSMutableDictionary *userInfo = trip.userInfo;
    if (!userInfo) {
        userInfo = [[NSMutableDictionary alloc] init];
        trip.userInfo = userInfo;
    }

    [userInfo setValue:tripId forKey:@"id"];
    [store setTrip:tripId trip:trip];
}

RCT_EXPORT_METHOD(updateTravelEstimatesForTrip:(NSString*)templateId tripId:(NSString*)tripId travelEstimates:(NSDictionary*)travelEstimates timeRemainingColor:(NSUInteger*)timeRemainingColor) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        CPTrip *trip = [[RNCPStore sharedManager] findTripById:tripId];
        if (trip) {
            CPTravelEstimates *estimates = [self parseTravelEstimates:travelEstimates];
            [mapTemplate updateTravelEstimates:estimates forTrip:trip withTimeRemainingColor:(CPTimeRemainingColor) timeRemainingColor];
        }
    }
}

RCT_REMAP_METHOD(startNavigationSession,
                 templateId:(NSString *)templateId
                 tripId:(NSString *)tripId
                 startNavigationSessionWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        CPTrip *trip = [[RNCPStore sharedManager] findTripById:tripId];
        if (trip) {
            CPNavigationSession *navigationSession = [mapTemplate startNavigationSessionForTrip:trip];
            [store setNavigationSession:tripId navigationSession:navigationSession];
            resolve(@{ @"tripId": tripId, @"navigationSessionId": tripId });
        }
    } else {
        reject(@"template_not_found", @"Template not found in store", nil);
    }
}

RCT_EXPORT_METHOD(updateManeuversNavigationSession:(NSString*)navigationSessionId maneuvers:(NSArray*)maneuvers) {
    CPNavigationSession* navigationSession = [[RNCPStore sharedManager] findNavigationSessionById:navigationSessionId];
    if (navigationSession) {
        NSMutableArray<CPManeuver*>* upcomingManeuvers = [NSMutableArray array];
        for (NSDictionary *maneuver in maneuvers) {
            [upcomingManeuvers addObject:[self parseManeuver:maneuver]];
        }
        [navigationSession setUpcomingManeuvers:upcomingManeuvers];
    }
}

RCT_EXPORT_METHOD(updateTravelEstimatesNavigationSession:(NSString*)navigationSessionId maneuverIndex:(NSUInteger)maneuverIndex travelEstimates:(NSDictionary*)travelEstimates) {
    CPNavigationSession* navigationSession = [[RNCPStore sharedManager] findNavigationSessionById:navigationSessionId];
    if (navigationSession) {
        CPManeuver *maneuver = [[navigationSession upcomingManeuvers] objectAtIndex:maneuverIndex];
        if (maneuver) {
            [navigationSession updateTravelEstimates:[self parseTravelEstimates:travelEstimates] forManeuver:maneuver];
        }
    }
}

RCT_EXPORT_METHOD(pauseNavigationSession:(NSString*)navigationSessionId reason:(NSUInteger*)reason description:(NSString*)description) {
    CPNavigationSession* navigationSession = [[RNCPStore sharedManager] findNavigationSessionById:navigationSessionId];
    if (navigationSession) {
        [navigationSession pauseTripForReason:(CPTripPauseReason) reason description:description];
    } else {
        NSLog(@"Could not find session");
    }
}

RCT_EXPORT_METHOD(cancelNavigationSession:(NSString*)navigationSessionId) {
    CPNavigationSession* navigationSession = [[RNCPStore sharedManager] findNavigationSessionById:navigationSessionId];
    if (navigationSession) {
        [navigationSession cancelTrip];
    } else {
        NSLog(@"Could not cancel. No session found.");
    }
}

RCT_EXPORT_METHOD(finishNavigationSession:(NSString*)navigationSessionId) {
    CPNavigationSession* navigationSession = [[RNCPStore sharedManager] findNavigationSessionById:navigationSessionId];
    if (navigationSession) {
        [navigationSession finishTrip];
    }
}

RCT_EXPORT_METHOD(setRootTemplate:(NSString *)templateId animated:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];

    store.interfaceController.delegate = self;

    if (template) {
        [store.interfaceController setRootTemplate:template animated:animated completion:^(BOOL done, NSError * _Nullable err) {
            NSLog(@"error %@", err);
            // noop
        }];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(pushTemplate:(NSString *)templateId animated:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        [store.interfaceController pushTemplate:template animated:animated completion:^(BOOL done, NSError * _Nullable err) {
            NSLog(@"error %@", err);
            // noop
        }];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(popToTemplate:(NSString *)templateId animated:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        [store.interfaceController popToTemplate:template animated:animated completion:^(BOOL done, NSError * _Nullable err) {
            NSLog(@"error %@", err);
            // noop
        }];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(popToRootTemplate:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    [store.interfaceController popToRootTemplateAnimated:animated completion:^(BOOL done, NSError * _Nullable err) {
        NSLog(@"error %@", err);
        // noop
    }];
}

RCT_EXPORT_METHOD(popTemplate:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    [store.interfaceController popTemplateAnimated:animated completion:^(BOOL done, NSError * _Nullable err) {
        NSLog(@"error %@", err);
        // noop
    }];
}

RCT_EXPORT_METHOD(presentTemplate:(NSString *)templateId animated:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        [store.interfaceController presentTemplate:template animated:animated completion:^(BOOL done, NSError * _Nullable err) {
            NSLog(@"error %@", err);
            // noop
        }];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(dismissTemplate:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    [store.interfaceController dismissTemplateAnimated:animated];
}

RCT_EXPORT_METHOD(updateListTemplate:(NSString*)templateId config:(NSDictionary*)config) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template && [template isKindOfClass:[CPListTemplate class]]) {
        CPListTemplate *listTemplate = (CPListTemplate *)template;
        if (config[@"leadingNavigationBarButtons"]) {
            NSArray *leadingNavigationBarButtons = [self parseBarButtons:[RCTConvert NSArray:config[@"leadingNavigationBarButtons"]] templateId:templateId];
            [listTemplate setLeadingNavigationBarButtons:leadingNavigationBarButtons];
        }
        if (config[@"trailingNavigationBarButtons"]) {
            NSArray *trailingNavigationBarButtons = [self parseBarButtons:[RCTConvert NSArray:config[@"trailingNavigationBarButtons"]] templateId:templateId];
            [listTemplate setTrailingNavigationBarButtons:trailingNavigationBarButtons];
        }
        if (config[@"emptyViewTitleVariants"]) {
            listTemplate.emptyViewTitleVariants = [RCTConvert NSArray:config[@"emptyViewTitleVariants"]];
        }
        if (config[@"emptyViewSubtitleVariants"]) {
            NSLog(@"%@", [RCTConvert NSArray:config[@"emptyViewSubtitleVariants"]]);
            listTemplate.emptyViewSubtitleVariants = [RCTConvert NSArray:config[@"emptyViewSubtitleVariants"]];
        }
    }
}

RCT_EXPORT_METHOD(updateTabBarTemplates:(NSString *)templateId templates:(NSDictionary*)config) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPTabBarTemplate *tabBarTemplate = (CPTabBarTemplate*) template;
        [tabBarTemplate updateTemplates:[self parseTemplatesFrom:config]];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}


RCT_EXPORT_METHOD(updateListTemplateSections:(NSString *)templateId sections:(NSArray*)sections) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPListTemplate *listTemplate = (CPListTemplate*) template;
        [listTemplate updateSections:[self parseSections:sections]];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(updateListTemplateItem:(NSString *)templateId config:(NSDictionary*)config) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPListTemplate *listTemplate = (CPListTemplate*) template;
        NSInteger sectionIndex = [RCTConvert NSInteger:config[@"sectionIndex"]];
        if (sectionIndex >= listTemplate.sections.count) {
            NSLog(@"Failed to update item at section %d, sections size is %d", index, listTemplate.sections.count);
            return;
        }
        CPListSection *section = listTemplate.sections[sectionIndex];
        NSInteger index = [RCTConvert NSInteger:config[@"itemIndex"]];
        if (index >= section.items.count) {
            NSLog(@"Failed to update item at index %d, section size is %d", index, section.items.count);
            return;
        }
        CPListItem *item = (CPListItem *)section.items[index];
        if (config[@"imgUrl"]) {
            [item setImage:[[UIImage alloc] initWithData:[NSData dataWithContentsOfURL:[NSURL URLWithString:[RCTConvert NSString:config[@"imgUrl"]]]]]];
        }
        if (config[@"image"]) {
            [item setImage:[RCTConvert UIImage:config[@"image"]]];
        }
        if (config[@"text"]) {
            [item setText:[RCTConvert NSString:config[@"text"]]];
        }
        if (config[@"detailText"]) {
            [item setDetailText:[RCTConvert NSString:config[@"detailText"]]];
        }
        if (config[@"isPlaying"]) {
            [item setPlaying:[RCTConvert BOOL:config[@"isPlaying"]]];
        }
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(updateInformationTemplateItems:(NSString *)templateId items:(NSArray*)items) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPInformationTemplate *informationTemplate = (CPInformationTemplate*) template;
        informationTemplate.items = [self parseInformationItems:items];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(updateInformationTemplateActions:(NSString *)templateId items:(NSArray*)actions) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPInformationTemplate *informationTemplate = (CPInformationTemplate*) template;
        informationTemplate.actions = [self parseInformationActions:actions templateId:templateId];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(getMaximumListItemCount:(NSString *)templateId
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPListTemplate *listTemplate = (CPListTemplate*) template;
        resolve(@(CPListTemplate.maximumItemCount));
    } else {
        NSLog(@"Failed to find template %@", template);
        reject(@"template_not_found", @"Template not found in store", nil);
    }
}

RCT_EXPORT_METHOD(getMaximumListSectionCount:(NSString *)templateId
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPListTemplate *listTemplate = (CPListTemplate*) template;
        resolve(@(CPListTemplate.maximumSectionCount));
    } else {
        NSLog(@"Failed to find template %@", template);
        reject(@"template_not_found", @"Template not found in store", nil);
    }
}

RCT_EXPORT_METHOD(updateMapTemplateConfig:(NSString *)templateId config:(NSDictionary*)config) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        [self applyConfigForMapTemplate:mapTemplate templateId:templateId config:config];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(showPanningInterface:(NSString *)templateId animated:(BOOL)animated) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        [mapTemplate showPanningInterfaceAnimated:animated];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(dismissPanningInterface:(NSString *)templateId animated:(BOOL)animated) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        [mapTemplate dismissPanningInterfaceAnimated:animated];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(enableNowPlaying:(BOOL)enable) {
    if (enable && !isNowPlayingActive) {
        [CPNowPlayingTemplate.sharedTemplate addObserver:self];
    } else if (!enable && isNowPlayingActive) {
        [CPNowPlayingTemplate.sharedTemplate removeObserver:self];
    }
}

RCT_EXPORT_METHOD(hideTripPreviews:(NSString*)templateId) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        [mapTemplate hideTripPreviews];
    }
}

RCT_EXPORT_METHOD(showTripPreviews:(NSString*)templateId tripIds:(NSArray*)tripIds tripConfiguration:(NSDictionary*)tripConfiguration) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    NSMutableArray *trips = [[NSMutableArray alloc] init];

    for (NSString *tripId in tripIds) {
        CPTrip *trip = [[RNCPStore sharedManager] findTripById:tripId];
        if (trip) {
            [trips addObject:trip];
        }
    }

    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        [mapTemplate showTripPreviews:trips textConfiguration:[self parseTripPreviewTextConfiguration:tripConfiguration]];
    }
}

RCT_EXPORT_METHOD(showRouteChoicesPreviewForTrip:(NSString*)templateId tripId:(NSString*)tripId tripConfiguration:(NSDictionary*)tripConfiguration) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    CPTrip *trip = [[RNCPStore sharedManager] findTripById:tripId];

    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        [mapTemplate showRouteChoicesPreviewForTrip:trip textConfiguration:[self parseTripPreviewTextConfiguration:tripConfiguration]];
    }
}

RCT_EXPORT_METHOD(presentNavigationAlert:(NSString*)templateId json:(NSDictionary*)json animated:(BOOL)animated) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        [mapTemplate presentNavigationAlert:[self parseNavigationAlert:json templateId:templateId] animated:animated];
    }
}

RCT_EXPORT_METHOD(dismissNavigationAlert:(NSString*)templateId animated:(BOOL)animated) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        [mapTemplate dismissNavigationAlertAnimated:YES completion:^(BOOL completion) {
            [self sendTemplateEventWithName:template name:@"didDismissNavigationAlert"];
        }];
    }
}

RCT_EXPORT_METHOD(activateVoiceControlState:(NSString*)templateId identifier:(NSString*)identifier) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    if (template) {
        CPVoiceControlTemplate *voiceTemplate = (CPVoiceControlTemplate*) template;
        [voiceTemplate activateVoiceControlStateWithIdentifier:identifier];
    }
}

RCT_EXPORT_METHOD(reactToUpdatedSearchText:(NSArray *)items) {
    NSArray *sectionsItems = [self parseListItems:items startIndex:0];

    if (self.searchResultBlock) {
        self.searchResultBlock(sectionsItems);
        self.searchResultBlock = nil;
    }
}

RCT_EXPORT_METHOD(reactToSelectedResult:(BOOL)status) {
    if (self.selectedResultBlock) {
        self.selectedResultBlock();
        self.selectedResultBlock = nil;
    }
}

RCT_EXPORT_METHOD(updateMapTemplateMapButtons:(NSString*) templateId mapButtons:(NSArray*) mapButtonConfig) {
    CPTemplate *template = [[RNCPStore sharedManager] findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        NSArray *mapButtons = [RCTConvert NSArray:mapButtonConfig];
        NSMutableArray *result = [NSMutableArray array];
        for (NSDictionary *mapButton in mapButtons) {
            NSString *_id = [mapButton objectForKey:@"id"];
            [result addObject:[RCTConvert CPMapButton:mapButton withHandler:^(CPMapButton * _Nonnull mapButton) {
                [self sendTemplateEventWithName:mapTemplate name:@"mapButtonPressed" json:@{ @"id": _id }];
            }]];
        }
        [mapTemplate setMapButtons:result];
    }
}

# pragma parsers

- (void) applyConfigForMapTemplate:(CPMapTemplate*)mapTemplate templateId:(NSString*)templateId config:(NSDictionary*)config {
    RNCPStore *store = [RNCPStore sharedManager];

    if ([config objectForKey:@"guidanceBackgroundColor"]) {
        [mapTemplate setGuidanceBackgroundColor:[RCTConvert UIColor:config[@"guidanceBackgroundColor"]]];
    }
    else {
      [mapTemplate setGuidanceBackgroundColor:UIColor.systemGray5Color];
    }
    
    if ([config objectForKey:@"tripEstimateStyle"]) {
        [mapTemplate setTripEstimateStyle:[RCTConvert CPTripEstimateStyle:config[@"tripEstimateStyle"]]];
    }
    else {
      [mapTemplate setTripEstimateStyle:CPTripEstimateStyleDark];
    }

    if ([config objectForKey:@"leadingNavigationBarButtons"]){
        NSArray *leadingNavigationBarButtons = [self parseBarButtons:[RCTConvert NSArray:config[@"leadingNavigationBarButtons"]] templateId:templateId];
        [mapTemplate setLeadingNavigationBarButtons:leadingNavigationBarButtons];
    }
  
    if ([config objectForKey:@"trailingNavigationBarButtons"]){
        NSArray *trailingNavigationBarButtons = [self parseBarButtons:[RCTConvert NSArray:config[@"trailingNavigationBarButtons"]] templateId:templateId];
        [mapTemplate setTrailingNavigationBarButtons:trailingNavigationBarButtons];
    }

    if ([config objectForKey:@"mapButtons"]) {
        NSArray *mapButtons = [RCTConvert NSArray:config[@"mapButtons"]];
        NSMutableArray *result = [NSMutableArray array];
        for (NSDictionary *mapButton in mapButtons) {
            NSString *_id = [mapButton objectForKey:@"id"];
            [result addObject:[RCTConvert CPMapButton:mapButton withHandler:^(CPMapButton * _Nonnull mapButton) {
                [self sendTemplateEventWithName:mapTemplate name:@"mapButtonPressed" json:@{ @"id": _id }];
            }]];
        }
        [mapTemplate setMapButtons:result];
    }

    if ([config objectForKey:@"automaticallyHidesNavigationBar"]) {
        [mapTemplate setAutomaticallyHidesNavigationBar:[RCTConvert BOOL:config[@"automaticallyHidesNavigationBar"]]];
    }

    if ([config objectForKey:@"hidesButtonsWithNavigationBar"]) {
        [mapTemplate setHidesButtonsWithNavigationBar:[RCTConvert BOOL:config[@"hidesButtonsWithNavigationBar"]]];
    }

    if ([config objectForKey:@"render"]) {
        RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:self.bridge moduleName:templateId initialProperties:@{}];
        [rootView setFrame:store.window.frame];
        [[store.window subviews] makeObjectsPerformSelector:@selector(removeFromSuperview)];
        [store.window addSubview:rootView];
    }
}

- (NSArray<__kindof CPTemplate*>*) parseTemplatesFrom:(NSDictionary*)config {
    RNCPStore *store = [RNCPStore sharedManager];
    NSMutableArray<__kindof CPTemplate*> *templates = [NSMutableArray new];
    NSArray<NSDictionary*> *tpls = [RCTConvert NSDictionaryArray:config[@"templates"]];
    for (NSDictionary *tpl in tpls) {
        CPTemplate *templ = [store findTemplateById:tpl[@"id"]];
        // @todo UITabSystemItem
        [templates addObject:templ];
    }
    return templates;
}

- (NSArray<CPButton*>*) parseButtons:(NSArray*)buttons templateId:(NSString *)templateId {
    NSMutableArray *result = [NSMutableArray array];
    for (NSDictionary *button in buttons) {
        CPButton *_button;
        NSString *_id = [button objectForKey:@"id"];
        NSString *type = [button objectForKey:@"type"];
        if ([type isEqualToString:@"call"]) {
            _button = [[CPContactCallButton alloc] initWithHandler:^(__kindof CPButton * _Nonnull contactButton) {
                if (self->hasListeners) {
                    [self sendEventWithName:@"buttonPressed" body:@{@"id": _id, @"templateId":templateId}];
                }
            }];
        } else if ([type isEqualToString:@"message"]) {
            _button = [[CPContactMessageButton alloc] initWithPhoneOrEmail:[button objectForKey:@"phoneOrEmail"]];
        } else if ([type isEqualToString:@"directions"]) {
            _button = [[CPContactDirectionsButton alloc] initWithHandler:^(__kindof CPButton * _Nonnull contactButton) {
                if (self->hasListeners) {
                    [self sendEventWithName:@"buttonPressed" body:@{@"id": _id, @"templateId":templateId}];
                }
            }];
        }

        BOOL _disabled = [button objectForKey:@"disabled"];
        [_button setEnabled:!_disabled];

        NSString *_title = [button objectForKey:@"title"];
        [_button setTitle:_title];

        [result addObject:_button];
    }
    return result;
}

- (NSArray<CPBarButton*>*) parseBarButtons:(NSArray*)barButtons templateId:(NSString *)templateId {
    NSMutableArray *result = [NSMutableArray array];
    for (NSDictionary *barButton in barButtons) {
        CPBarButtonType _type;
        NSString *_id = [barButton objectForKey:@"id"];
        NSString *type = [barButton objectForKey:@"type"];
        if (type && [type isEqualToString:@"image"]) {
            _type = CPBarButtonTypeImage;
        } else {
            _type = CPBarButtonTypeText;
        }
        CPBarButton *_barButton = [[CPBarButton alloc] initWithType:_type handler:^(CPBarButton * _Nonnull barButton) {
            if (self->hasListeners) {
                [self sendEventWithName:@"barButtonPressed" body:@{@"id": _id, @"templateId":templateId}];
            }
        }];
        BOOL _disabled = [barButton objectForKey:@"disabled"];
        [_barButton setEnabled:!_disabled];

        if (_type == CPBarButtonTypeText) {
            NSString *_title = [barButton objectForKey:@"title"];
            [_barButton setTitle:_title];
        } else if (_type == CPBarButtonTypeImage) {
            UIImage *_image = [RCTConvert UIImage:[barButton objectForKey:@"image"]];
            [_barButton setImage:_image];
        }
        [result addObject:_barButton];
    }
    return result;
}

- (NSArray<CPListSection*>*)parseSections:(NSArray*)sections {
    NSMutableArray *result = [NSMutableArray array];
    int index = 0;
    for (NSDictionary *section in sections) {
        NSArray *items = [section objectForKey:@"items"];
        NSString *_sectionIndexTitle = [section objectForKey:@"sectionIndexTitle"];
        NSString *_header = [section objectForKey:@"header"];
        NSArray *_items = [self parseListItems:items startIndex:index];
        CPListSection *_section = [[CPListSection alloc] initWithItems:_items header:_header sectionIndexTitle:_sectionIndexTitle];
        [result addObject:_section];
        int count = (int) [items count];
        index = index + count;
    }
    return result;
}

- (NSArray<CPListItem*>*)parseListItems:(NSArray*)items startIndex:(int)startIndex {
    NSMutableArray *_items = [NSMutableArray array];
    int index = startIndex;
    for (NSDictionary *item in items) {
        BOOL _showsDisclosureIndicator = [[item objectForKey:@"showsDisclosureIndicator"] isEqualToNumber:[NSNumber numberWithInt:1]];
        NSString *_detailText = [item objectForKey:@"detailText"];
        NSString *_text = [item objectForKey:@"text"];
        UIImage *_image = [RCTConvert UIImage:[item objectForKey:@"image"]];
        if (item[@"imgUrl"]) {
            _image = [[UIImage alloc] initWithData:[NSData dataWithContentsOfURL:[NSURL URLWithString:[RCTConvert NSString:item[@"imgUrl"]]]]];
        }
        CPListItem *_item;
        if (@available(iOS 14.0, *)) {
            CPListItemAccessoryType accessoryType = _showsDisclosureIndicator ? CPListItemAccessoryTypeDisclosureIndicator : CPListItemAccessoryTypeNone;
            _item = [[CPListItem alloc] initWithText:_text detailText:_detailText image:_image accessoryImage:nil accessoryType:accessoryType];
        } else {
            _item = [[CPListItem alloc] initWithText:_text detailText:_detailText image:_image showsDisclosureIndicator:_showsDisclosureIndicator];
        }
        if ([item objectForKey:@"isPlaying"]) {
            [_item setPlaying:[RCTConvert BOOL:[item objectForKey:@"isPlaying"]]];
        }
        [_item setUserInfo:@{ @"index": @(index) }];
        [_items addObject:_item];
        index = index + 1;
    }
    return _items;
}

- (NSArray<CPInformationItem*>*)parseInformationItems:(NSArray*)items {
    NSMutableArray *_items = [NSMutableArray array];
    for (NSDictionary *item in items) {
        [_items addObject:[[CPInformationItem alloc] initWithTitle:item[@"title"] detail:item[@"detail"]]];
    }
    
    return _items;
}

- (NSArray<CPTextButton*>*)parseInformationActions:(NSArray*)actions templateId:(NSString *)templateId {
    NSMutableArray *_actions = [NSMutableArray array];
    for (NSDictionary *action in actions) {
        CPTextButton *_action = [[CPTextButton alloc] initWithTitle:action[@"title"] textStyle:CPTextButtonStyleNormal handler:^(__kindof CPTextButton * _Nonnull contactButton) {
            if (self->hasListeners) {
                [self sendEventWithName:@"actionButtonPressed" body:@{@"templateId":templateId, @"id": action[@"id"] }];
            }
        }];
        [_actions addObject:_action];
    }
    
    return _actions;
}

- (NSArray<CPGridButton*>*)parseGridButtons:(NSArray*)buttons templateId:(NSString*)templateId {
    NSMutableArray *result = [NSMutableArray array];
    int index = 0;
    for (NSDictionary *button in buttons) {
        NSString *_id = [button objectForKey:@"id"];
        NSArray<NSString*> *_titleVariants = [button objectForKey:@"titleVariants"];
        UIImage *_image = [RCTConvert UIImage:[button objectForKey:@"image"]];
        CPGridButton *_button = [[CPGridButton alloc] initWithTitleVariants:_titleVariants image:_image handler:^(CPGridButton * _Nonnull barButton) {
            if (self->hasListeners) {
                [self sendEventWithName:@"gridButtonPressed" body:@{@"id": _id, @"templateId":templateId, @"index": @(index) }];
            }
        }];
        BOOL _disabled = [button objectForKey:@"disabled"];
        [_button setEnabled:!_disabled];
        [result addObject:_button];
        index = index + 1;
    }
    return result;
}

- (CPTravelEstimates*)parseTravelEstimates: (NSDictionary*)json {
    NSString *units = [RCTConvert NSString:json[@"distanceUnits"]];
    double value = [RCTConvert double:json[@"distanceRemaining"]];

    NSUnit *unit = [NSUnitLength kilometers];
    if (units && [units isEqualToString: @"meters"]) {
        unit = [NSUnitLength meters];
    }
    else if (units && [units isEqualToString: @"miles"]) {
        unit = [NSUnitLength miles];
    }
    else if (units && [units isEqualToString: @"feet"]) {
        unit = [NSUnitLength feet];
    }
    else if (units && [units isEqualToString: @"yards"]) {
        unit = [NSUnitLength yards];
    }

    NSMeasurement *distance = [[NSMeasurement alloc] initWithDoubleValue:value unit:unit];
    double time = [RCTConvert double:json[@"timeRemaining"]];

    return [[CPTravelEstimates alloc] initWithDistanceRemaining:distance timeRemaining:time];
}

- (CPManeuver*)parseManeuver:(NSDictionary*)json {
    CPManeuver* maneuver = [[CPManeuver alloc] init];

    if ([json objectForKey:@"junctionImage"]) {
        UIImage *junctionImage = [RCTConvert UIImage:json[@"junctionImage"]];
        [maneuver setJunctionImage:[self imageWithTint:junctionImage andTintColor:[UIColor whiteColor]]];
    }

    if ([json objectForKey:@"initialTravelEstimates"]) {
        CPTravelEstimates* travelEstimates = [self parseTravelEstimates:json[@"initialTravelEstimates"]];
        [maneuver setInitialTravelEstimates:travelEstimates];
    }

    if ([json objectForKey:@"symbolImage"]) {
        UIImage *symbolImage = [RCTConvert UIImage:json[@"symbolImage"]];
      
        if ([json objectForKey:@"resizeSymbolImage"]) {
            NSString *resizeType = [RCTConvert NSString:json[@"resizeSymbolImage"]];
            if ([resizeType isEqualToString: @"primary"]) {
                symbolImage = [self imageWithSize:symbolImage convertToSize:CGSizeMake(100, 100)];
            }
            if ([resizeType isEqualToString: @"secondary"]) {
                symbolImage = [self imageWithSize:symbolImage convertToSize:CGSizeMake(50, 50)];
            }
        }

        BOOL shouldTint = [RCTConvert BOOL:json[@"tintSymbolImage"]];
        if ([json objectForKey:@"tintSymbolImage"]) {
            UIColor *tintColor = [RCTConvert UIColor:json[@"tintSymbolImage"]];
            UIImage *darkImage = symbolImage;
            UIImage *lightImage = [self imageWithTint:symbolImage andTintColor:tintColor];
            symbolImage = [self dynamicImageWithNormalImage:lightImage darkImage:darkImage];
        }


        [maneuver setSymbolImage:symbolImage];
    }

    if ([json objectForKey:@"instructionVariants"]) {
        [maneuver setInstructionVariants:[RCTConvert NSStringArray:json[@"instructionVariants"]]];
    }

    return maneuver;
}

- (CPTripPreviewTextConfiguration*)parseTripPreviewTextConfiguration:(NSDictionary*)json {
    return [[CPTripPreviewTextConfiguration alloc] initWithStartButtonTitle:[RCTConvert NSString:json[@"startButtonTitle"]] additionalRoutesButtonTitle:[RCTConvert NSString:json[@"additionalRoutesButtonTitle"]] overviewButtonTitle:[RCTConvert NSString:json[@"overviewButtonTitle"]]];
}

- (CPTrip*)parseTrip:(NSDictionary*)config {
    if ([config objectForKey:@"config"]) {
        config = [config objectForKey:@"config"];
    }
    MKMapItem *origin = [RCTConvert MKMapItem:config[@"origin"]];
    MKMapItem *destination = [RCTConvert MKMapItem:config[@"destination"]];
    NSMutableArray *routeChoices = [NSMutableArray array];
    if ([config objectForKey:@"routeChoices"]) {
        NSInteger index = 0;
        for (NSDictionary *routeChoice in [RCTConvert NSArray:config[@"routeChoices"]]) {
            CPRouteChoice *cpRouteChoice = [RCTConvert CPRouteChoice:routeChoice];
            NSMutableDictionary *userInfo = cpRouteChoice.userInfo;
            if (!userInfo) {
                userInfo = [[NSMutableDictionary alloc] init];
                cpRouteChoice.userInfo = userInfo;
            }
            [userInfo setValue:[NSNumber numberWithInteger:index] forKey:@"index"];
            [routeChoices addObject:cpRouteChoice];
            index++;
        }
    }
    return [[CPTrip alloc] initWithOrigin:origin destination:destination routeChoices:routeChoices];
}

- (CPNavigationAlert*)parseNavigationAlert:(NSDictionary*)json templateId:(NSString*)templateId {
    CPImageSet *imageSet;
    if ([json objectForKey:@"lightImage"] && [json objectForKey:@"darkImage"]) {
        imageSet = [[CPImageSet alloc] initWithLightContentImage:[RCTConvert UIImage:json[@"lightImage"]] darkContentImage:[RCTConvert UIImage:json[@"darkImage"]]];
    }
    CPAlertAction *secondaryAction = [json objectForKey:@"secondaryAction"] ? [self parseAlertAction:json[@"secondaryAction"] body:@{ @"templateId": templateId, @"secondary": @(YES) }] : nil;

    return [[CPNavigationAlert alloc] initWithTitleVariants:[RCTConvert NSStringArray:json[@"titleVariants"]] subtitleVariants:[RCTConvert NSStringArray:json[@"subtitleVariants"]] imageSet:imageSet primaryAction:[self parseAlertAction:json[@"primaryAction"] body:@{ @"templateId": templateId, @"primary": @(YES) }] secondaryAction:secondaryAction duration:[RCTConvert double:json[@"duration"]]];
}

- (CPAlertAction*)parseAlertAction:(NSDictionary*)json body:(NSDictionary*)body {
    return [[CPAlertAction alloc] initWithTitle:[RCTConvert NSString:json[@"title"]] style:(CPAlertActionStyle) [RCTConvert NSUInteger:json[@"style"]] handler:^(CPAlertAction * _Nonnull action) {
        if (self->hasListeners) {
            [self sendEventWithName:@"alertActionPressed" body:body];
        }
    }];
}

- (NSArray<CPVoiceControlState*>*)parseVoiceControlStates:(NSArray<NSDictionary*>*)items {
    NSMutableArray<CPVoiceControlState*>* res = [NSMutableArray array];
    for (NSDictionary *item in items) {
        [res addObject:[self parseVoiceControlState:item]];
    }
    return res;
}

- (CPVoiceControlState*)parseVoiceControlState:(NSDictionary*)json {
    return [[CPVoiceControlState alloc] initWithIdentifier:[RCTConvert NSString:json[@"identifier"]] titleVariants:[RCTConvert NSStringArray:json[@"titleVariants"]] image:[RCTConvert UIImage:json[@"image"]] repeats:[RCTConvert BOOL:json[@"repeats"]]];
}

- (NSString*)panDirectionToString:(CPPanDirection)panDirection {
    switch (panDirection) {
        case CPPanDirectionUp: return @"up";
        case CPPanDirectionRight: return @"right";
        case CPPanDirectionDown: return @"down";
        case CPPanDirectionLeft: return @"left";
        case CPPanDirectionNone: return @"none";
    }
}

- (NSDictionary*)navigationAlertToJson:(CPNavigationAlert*)navigationAlert dismissalContext:(CPNavigationAlertDismissalContext)dismissalContext {
    NSString *dismissalCtx = @"none";
    if (dismissalContext) {
        switch (dismissalContext) {
            case CPNavigationAlertDismissalContextTimeout:
                dismissalCtx = @"timeout";
                break;
            case CPNavigationAlertDismissalContextSystemDismissed:
                dismissalCtx = @"system";
                break;
            case CPNavigationAlertDismissalContextUserDismissed:
                dismissalCtx = @"user";
                break;
        }
    }

    return @{
        @"todo": @(YES),
        @"reason": dismissalCtx
    };
}
- (NSDictionary*)navigationAlertToJson:(CPNavigationAlert*)navigationAlert {
    return @{ @"todo": @(YES) };
    //    NSMutableDictionary *res = [[NSMutableDictionary alloc] init];
    //    return @{
    //                            };
}

- (void)sendTemplateEventWithName:(CPTemplate *)template name:(NSString*)name {
    [self sendTemplateEventWithName:template name:name json:@{}];
}

- (void)sendTemplateEventWithName:(CPTemplate *)template name:(NSString*)name json:(NSDictionary*)json {
    NSMutableDictionary *body = [[NSMutableDictionary alloc] initWithDictionary:json];
    NSDictionary *userInfo = [template userInfo];
    [body setObject:[userInfo objectForKey:@"templateId"] forKey:@"templateId"];
    if (hasListeners) {
        [self sendEventWithName:name body:body];
    }
}


# pragma MapTemplate

- (void)mapTemplate:(CPMapTemplate *)mapTemplate selectedPreviewForTrip:(CPTrip *)trip usingRouteChoice:(CPRouteChoice *)routeChoice {
    NSDictionary *userInfo = trip.userInfo;
    NSString *tripId = [userInfo valueForKey:@"id"];

    NSDictionary *routeUserInfo = routeChoice.userInfo;
    NSString *routeIndex = [routeUserInfo valueForKey:@"index"];
    [self sendTemplateEventWithName:mapTemplate name:@"selectedPreviewForTrip" json:@{ @"tripId": tripId, @"routeIndex": routeIndex}];
}

- (void)mapTemplate:(CPMapTemplate *)mapTemplate startedTrip:(CPTrip *)trip usingRouteChoice:(CPRouteChoice *)routeChoice {
    NSDictionary *userInfo = trip.userInfo;
    NSString *tripId = [userInfo valueForKey:@"id"];

    NSDictionary *routeUserInfo = routeChoice.userInfo;
    NSString *routeIndex = [routeUserInfo valueForKey:@"index"];

    [self sendTemplateEventWithName:mapTemplate name:@"startedTrip" json:@{ @"tripId": tripId, @"routeIndex": routeIndex}];
}

- (void)mapTemplateDidCancelNavigation:(CPMapTemplate *)mapTemplate {
    [self sendTemplateEventWithName:mapTemplate name:@"didCancelNavigation"];
}

//- (BOOL)mapTemplate:(CPMapTemplate *)mapTemplate shouldShowNotificationForManeuver:(CPManeuver *)maneuver {
//    // @todo
//}
//- (BOOL)mapTemplate:(CPMapTemplate *)mapTemplate shouldUpdateNotificationForManeuver:(CPManeuver *)maneuver withTravelEstimates:(CPTravelEstimates *)travelEstimates {
//    // @todo
//}
//- (BOOL)mapTemplate:(CPMapTemplate *)mapTemplate shouldShowNotificationForNavigationAlert:(CPNavigationAlert *)navigationAlert {
//    // @todo
//}

- (void)mapTemplate:(CPMapTemplate *)mapTemplate willShowNavigationAlert:(CPNavigationAlert *)navigationAlert {
    [self sendTemplateEventWithName:mapTemplate name:@"willShowNavigationAlert" json:[self navigationAlertToJson:navigationAlert]];
}
- (void)mapTemplate:(CPMapTemplate *)mapTemplate didShowNavigationAlert:(CPNavigationAlert *)navigationAlert {
    [self sendTemplateEventWithName:mapTemplate name:@"didShowNavigationAlert" json:[self navigationAlertToJson:navigationAlert]];
}
- (void)mapTemplate:(CPMapTemplate *)mapTemplate willDismissNavigationAlert:(CPNavigationAlert *)navigationAlert dismissalContext:(CPNavigationAlertDismissalContext)dismissalContext {
    [self sendTemplateEventWithName:mapTemplate name:@"willDismissNavigationAlert" json:[self navigationAlertToJson:navigationAlert dismissalContext:dismissalContext]];
}
- (void)mapTemplate:(CPMapTemplate *)mapTemplate didDismissNavigationAlert:(CPNavigationAlert *)navigationAlert dismissalContext:(CPNavigationAlertDismissalContext)dismissalContext {
    [self sendTemplateEventWithName:mapTemplate name:@"didDismissNavigationAlert" json:[self navigationAlertToJson:navigationAlert dismissalContext:dismissalContext]];
}

- (void)mapTemplateDidShowPanningInterface:(CPMapTemplate *)mapTemplate {
    [self sendTemplateEventWithName:mapTemplate name:@"didShowPanningInterface"];
}
- (void)mapTemplateWillDismissPanningInterface:(CPMapTemplate *)mapTemplate {
    [self sendTemplateEventWithName:mapTemplate name:@"willDismissPanningInterface"];
}
- (void)mapTemplateDidDismissPanningInterface:(CPMapTemplate *)mapTemplate {
    [self sendTemplateEventWithName:mapTemplate name:@"didDismissPanningInterface"];
}
- (void)mapTemplateDidBeginPanGesture:(CPMapTemplate *)mapTemplate {
    [self sendTemplateEventWithName:mapTemplate name:@"didBeginPanGesture"];
}
- (void)mapTemplate:(CPMapTemplate *)mapTemplate panWithDirection:(CPPanDirection)direction {
    [self sendTemplateEventWithName:mapTemplate name:@"panWithDirection" json:@{ @"direction": [self panDirectionToString:direction] }];
}
- (void)mapTemplate:(CPMapTemplate *)mapTemplate panBeganWithDirection:(CPPanDirection)direction {
    [self sendTemplateEventWithName:mapTemplate name:@"panBeganWithDirection" json:@{ @"direction": [self panDirectionToString:direction] }];
}
- (void)mapTemplate:(CPMapTemplate *)mapTemplate panEndedWithDirection:(CPPanDirection)direction {
    [self sendTemplateEventWithName:mapTemplate name:@"panEndedWithDirection" json:@{ @"direction": [self panDirectionToString:direction] }];
}
- (void)mapTemplate:(CPMapTemplate *)mapTemplate didEndPanGestureWithVelocity:(CGPoint)velocity {
    [self sendTemplateEventWithName:mapTemplate name:@"didEndPanGestureWithVelocity" json:@{ @"velocity": @{ @"x": @(velocity.x), @"y": @(velocity.y) }}];
}
- (void)mapTemplate:(CPMapTemplate *)mapTemplate didUpdatePanGestureWithTranslation:(CGPoint)translation velocity:(CGPoint)velocity {
    [self sendTemplateEventWithName:mapTemplate name:@"didUpdatePanGestureWithTranslation" json:@{ @"translation": @{ @"x": @(translation.x), @"y": @(translation.y) }, @"velocity": @{ @"x": @(velocity.x), @"y": @(velocity.y) }}];
}



# pragma SearchTemplate

- (void)searchTemplate:(CPSearchTemplate *)searchTemplate selectedResult:(CPListItem *)item completionHandler:(void (^)(void))completionHandler {
    NSNumber* index = [item.userInfo objectForKey:@"index"];
    [self sendTemplateEventWithName:searchTemplate name:@"selectedResult" json:@{ @"index": index }];
    self.selectedResultBlock = completionHandler;
}

- (void)searchTemplateSearchButtonPressed:(CPSearchTemplate *)searchTemplate {
    [self sendTemplateEventWithName:searchTemplate name:@"searchButtonPressed"];
}

- (void)searchTemplate:(CPSearchTemplate *)searchTemplate updatedSearchText:(NSString *)searchText completionHandler:(void (^)(NSArray<CPListItem *> * _Nonnull))completionHandler {
    [self sendTemplateEventWithName:searchTemplate name:@"updatedSearchText" json:@{ @"searchText": searchText }];
    self.searchResultBlock = completionHandler;
}

# pragma ListTemplate

- (void)listTemplate:(CPListTemplate *)listTemplate didSelectListItem:(CPListItem *)item completionHandler:(void (^)(void))completionHandler {
    NSNumber* index = [item.userInfo objectForKey:@"index"];
    [self sendTemplateEventWithName:listTemplate name:@"didSelectListItem" json:@{ @"index": index }];
    self.selectedResultBlock = completionHandler;
}

# pragma TabBarTemplate
- (void)tabBarTemplate:(CPTabBarTemplate *)tabBarTemplate didSelectTemplate:(__kindof CPTemplate *)selectedTemplate {
    NSString* selectedTemplateId = [[selectedTemplate userInfo] objectForKey:@"templateId"];
    [self sendTemplateEventWithName:tabBarTemplate name:@"didSelectTemplate" json:@{@"selectedTemplateId":selectedTemplateId}];
}

# pragma PointOfInterest
-(void)pointOfInterestTemplate:(CPPointOfInterestTemplate *)pointOfInterestTemplate didChangeMapRegion:(MKCoordinateRegion)region {
    // noop
}

-(void)pointOfInterestTemplate:(CPPointOfInterestTemplate *)pointOfInterestTemplate didSelectPointOfInterest:(CPPointOfInterest *)pointOfInterest {
    [self sendTemplateEventWithName:pointOfInterestTemplate name:@"didSelectPointOfInterest" json:[pointOfInterest userInfo]];
}

# pragma InterfaceController

- (void)templateDidAppear:(CPTemplate *)aTemplate animated:(BOOL)animated {
    [self sendTemplateEventWithName:aTemplate name:@"didAppear" json:@{ @"animated": @(animated) }];
}

- (void)templateDidDisappear:(CPTemplate *)aTemplate animated:(BOOL)animated {
    [self sendTemplateEventWithName:aTemplate name:@"didDisappear" json:@{ @"animated": @(animated) }];
}

- (void)templateWillAppear:(CPTemplate *)aTemplate animated:(BOOL)animated {
    [self sendTemplateEventWithName:aTemplate name:@"willAppear" json:@{ @"animated": @(animated) }];
}

- (void)templateWillDisappear:(CPTemplate *)aTemplate animated:(BOOL)animated {
    [self sendTemplateEventWithName:aTemplate name:@"willDisappear" json:@{ @"animated": @(animated) }];
}

# pragma NowPlaying

- (void)nowPlayingTemplateUpNextButtonTapped:(CPNowPlayingTemplate *)nowPlayingTemplate {
    [self sendTemplateEventWithName:nowPlayingTemplate name:@"upNextButtonPressed"];
}

- (void)nowPlayingTemplateAlbumArtistButtonTapped:(CPNowPlayingTemplate *)nowPlayingTemplate {
    [self sendTemplateEventWithName:nowPlayingTemplate name:@"albumArtistButtonPressed"];
}

@end
