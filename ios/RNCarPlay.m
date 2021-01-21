//
//  RNCarPlay.m
//  RNCarPlay
//
//  Created by Birkir Gudjonsson on 3/25/19.
//  Copyright © 2019 SOLID Mobile. All rights reserved.
//

#import "RNCarPlay.h"
#import <React/RCTConvert.h>
#import <React/RCTRootView.h>

@implementation RNCarPlay

@synthesize interfaceController;
@synthesize window;
@synthesize searchResultBlock;
@synthesize selectedResultBlock;

+ (void) connectWithInterfaceController:(CPInterfaceController*)interfaceController window:(CPWindow*)window {
    RNCPStore * store = [RNCPStore sharedManager];
    store.interfaceController = interfaceController;
    store.window = window;

//    RNCarPlay *cp = [RNCarPlay allocWithZone:nil];
//    if (cp.bridge) {
//        [cp sendEventWithName:@"didConnect" body:@{}];
//    }
}

+ (void) disconnect {
//    RNCarPlay *cp = [RNCarPlay allocWithZone:nil];
//    if (cp.bridge) {
//        [cp sendEventWithName:@"didDisconnect" body:@{}];
//    }
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
             @"didAppear",
             @"didDisappear",
             @"willAppear",
             @"willDisappear",
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
             @"startedTrip"
             ];
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(createTemplate:(NSString *)templateId config:(NSDictionary*)config) {
    RNCPStore *store = [RNCPStore sharedManager];

    NSString *type = [RCTConvert NSString:config[@"type"]];
    NSString *title = [RCTConvert NSString:config[@"title"]];
    NSArray *leadingNavigationBarButtons = [self parseBarButtons:[RCTConvert NSArray:config[@"leadingNavigationBarButtons"]] templateId:templateId];
    NSArray *trailingNavigationBarButtons = [self parseBarButtons:[RCTConvert NSArray:config[@"trailingNavigationBarButtons"]] templateId:templateId];

    NSLog(@"id: %@", templateId);
    NSLog(@"type: %@", type);
    NSLog(@"title %@", title);
    NSLog(@"config %@", config);

    CPTemplate *template = [[CPTemplate alloc] init];

    if ([type isEqualToString:@"search"]) {
        CPSearchTemplate *searchTemplate = [[CPSearchTemplate alloc] init];
        searchTemplate.delegate = self;
        template = searchTemplate;
    }
    else if ([type isEqualToString:@"grid"]) {
        NSArray *buttons = [self parseGridButtons:[RCTConvert NSArray:config[@"buttons"]] templateId:templateId];
        CPGridTemplate *gridTemplate = [[CPGridTemplate alloc] initWithTitle:title gridButtons:buttons];
        [gridTemplate setLeadingNavigationBarButtons:leadingNavigationBarButtons];
        [gridTemplate setTrailingNavigationBarButtons:trailingNavigationBarButtons];
        template = gridTemplate;
    }
    else if ([type isEqualToString:@"list"]) {
        NSArray *sections = [self parseSections:[RCTConvert NSArray:config[@"sections"]]];
        CPListTemplate *listTemplate = [[CPListTemplate alloc] initWithTitle:title sections:sections];
        [listTemplate setLeadingNavigationBarButtons:leadingNavigationBarButtons];
        [listTemplate setTrailingNavigationBarButtons:trailingNavigationBarButtons];
        listTemplate.delegate = self;
        template = listTemplate;
    }
    else if ([type isEqualToString:@"map"]) {
        CPMapTemplate *mapTemplate = [[CPMapTemplate alloc] init];

        [self applyConfigForMapTemplate:mapTemplate templateId:templateId config:config];
        [mapTemplate setLeadingNavigationBarButtons:leadingNavigationBarButtons];
        [mapTemplate setTrailingNavigationBarButtons:trailingNavigationBarButtons];
        [mapTemplate setUserInfo:@{ @"templateId": templateId }];
        mapTemplate.mapDelegate = self;

        template = mapTemplate;
    } else if ([type isEqualToString:@"voicecontrol"]) {
        CPVoiceControlTemplate *voiceTemplate = [[CPVoiceControlTemplate alloc] initWithVoiceControlStates: [self parseVoiceControlStates:config[@"voiceControlStates"]]];
        template = voiceTemplate;
    } else if ([type isEqualToString:@"nowplaying"]) {
        if (@available(iOS 14.0, *)) {
            CPNowPlayingTemplate *nowPlayingTemplate = [CPNowPlayingTemplate sharedTemplate];
            [nowPlayingTemplate setAlbumArtistButtonEnabled:[RCTConvert BOOL:config[@"albumArtistButton"]]];
            [nowPlayingTemplate setUpNextTitle:[RCTConvert NSString:config[@"upNextTitle"]]];
            [nowPlayingTemplate setUpNextButtonEnabled:[RCTConvert BOOL:config[@"upNextButton"]]];
            template = nowPlayingTemplate;
        }
    } else if ([type isEqualToString:@"tabbar"]) {
        if (@available(iOS 14.0, *)) {
            CPTabBarTemplate *tabBarTemplate = [[CPTabBarTemplate alloc] initWithTemplates:[self parseTemplatesFrom:config]];
            tabBarTemplate.delegate = self;
            template = tabBarTemplate;
        }
    } else if ([type isEqualToString:@"contact"]) {
        if (@available(iOS 14.0, *)) {
            CPContact *contact = [[CPContact alloc] init];
            [contact setName:config[@"name"]];
            [contact setSubtitle:config[@"subtitle"]];
            [contact setActions:[self parseButtons:config[@"actions"] templateId:templateId]];
            CPContactTemplate *contactTemplate = [[CPContactTemplate alloc] initWithContact:contact];
            template = contactTemplate;
        }
    } else if ([type isEqualToString:@"actionsheet"]) {
        NSString *title = [RCTConvert NSString:config[@"title"]];
        NSString *message = [RCTConvert NSString:config[@"message"]];
        NSMutableArray<CPAlertAction *> *actions = [NSMutableArray new];
        NSArray<NSDictionary*> *_actions = [RCTConvert NSDictionaryArray:config[@"actions"]];
        for (NSDictionary *_action in _actions) {
            CPAlertAction *action = [[CPAlertAction alloc] initWithTitle:[RCTConvert NSString:_action[@"title"]] style:[RCTConvert CPAlertActionStyle:_action[@"style"]] handler:^(CPAlertAction *a) {
                [self sendEventWithName:@"actionButtonPressed" body:@{@"templateId":templateId, @"id": _action[@"id"] }];
            }];
            [actions addObject:action];
        }
        CPActionSheetTemplate *actionSheetTemplate = [[CPActionSheetTemplate alloc] initWithTitle:title message:message actions:actions];
        template = actionSheetTemplate;
    } else if ([type isEqualToString:@"alert"]) {
        NSMutableArray<CPAlertAction *> *actions = [NSMutableArray new];
        NSArray<NSDictionary*> *_actions = [RCTConvert NSDictionaryArray:config[@"actions"]];
        for (NSDictionary *_action in _actions) {
            CPAlertAction *action = [[CPAlertAction alloc] initWithTitle:[RCTConvert NSString:_action[@"title"]] style:[RCTConvert CPAlertActionStyle:_action[@"style"]] handler:^(CPAlertAction *a) {
                [self sendEventWithName:@"actionButtonPressed" body:@{@"templateId":templateId, @"id": _action[@"id"] }];
            }];
            [actions addObject:action];
        }
        NSArray<NSString*>* titleVariants = [RCTConvert NSArray:config[@"titleVariants"]];
        CPAlertTemplate *alertTemplate = [[CPAlertTemplate alloc] initWithTitleVariants:titleVariants actions:actions];
        template = alertTemplate;
    } else if ([type isEqualToString:@"poi"]) {
        if (@available(iOS 14.0, *)) {
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
            template = poiTemplate;
        }
    } else if ([type isEqualToString:@"information"]) {
        if (@available(iOS 14.0, *)) {
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
                    [self sendEventWithName:@"actionButtonPressed" body:@{@"templateId":templateId, @"id": _action[@"id"] }];
                }];
                [actions addObject:action];
            }

            CPInformationTemplate *informationTemplate = [[CPInformationTemplate alloc] initWithTitle:title layout:layout items:items actions:actions];
            template = informationTemplate;
        }
    }

    [template setUserInfo:@{ @"templateId": templateId }];

    [store setTemplate:templateId template:template];
}

RCT_EXPORT_METHOD(updateTemplates:(NSString*)templateId config:(NSDictionary*)config) {
    if (@available(iOS 14.0, *)) {
        RNCPStore *store = [RNCPStore sharedManager];
        CPTemplate *template = [store findTemplateById:templateId];
        if (template) {
            CPTabBarTemplate *tabBarTemplate = (CPTabBarTemplate*) template;
            [tabBarTemplate updateTemplates:[self parseTemplatesFrom:config]];
        }
    }
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
    NSLog(@">>> Updating travel estimates for %@, %@", templateId, tripId);
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        CPTrip *trip = [[RNCPStore sharedManager] findTripById:tripId];
        if (trip) {
            CPTravelEstimates *estimates = [self parseTravelEstimates:travelEstimates];
            NSLog(@">>> Updating travel estimates with %@ for %@", estimates, trip);
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
        if (@available(iOS 14.0, *)) {
            [store.interfaceController pushTemplate:template animated:animated completion:^(BOOL done, NSError * _Nullable err) {
                NSLog(@"error %@", err);
                // noop
            }];
        } else {
            [store.interfaceController pushTemplate:template animated:animated completion:^(BOOL done, NSError * _Nullable err) {
                NSLog(@"error %@", err);
                // noop
            }];
        }
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

//    NSLog(@">>> Showing trip previews for %@", tripPreviews);
    if (template) {
        CPMapTemplate *mapTemplate = (CPMapTemplate*) template;
        [mapTemplate showTripPreviews:trips textConfiguration:[self parseTripPreviewTextConfiguration:tripConfiguration]];
    }
    NSLog(@">>> Done showing trip previews");
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

# pragma parsers

- (void) applyConfigForMapTemplate:(CPMapTemplate*)mapTemplate templateId:(NSString*)templateId config:(NSDictionary*)config {
    RNCPStore *store = [RNCPStore sharedManager];

    if ([config objectForKey:@"guidanceBackgroundColor"]) {
        [mapTemplate setGuidanceBackgroundColor:[RCTConvert UIColor:config[@"guidanceBackgroundColor"]]];
    }

    if ([config objectForKey:@"tripEstimateStyle"]) {
        [mapTemplate setTripEstimateStyle:[RCTConvert CPTripEstimateStyle:config[@"tripEstimateStyle"]]];
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

- (NSArray<CPButton*>*) parseButtons:(NSArray*)buttons templateId:(NSString *)templateId  API_AVAILABLE(ios(14.0)){
    NSMutableArray *result = [NSMutableArray array];
    for (NSDictionary *button in buttons) {
        CPButton *_button;
        NSString *_id = [button objectForKey:@"id"];
        NSString *type = [button objectForKey:@"type"];
        if ([type isEqualToString:@"call"]) {
            _button = [[CPContactCallButton alloc] initWithHandler:^(__kindof CPButton * _Nonnull contactButton) {
                [self sendEventWithName:@"buttonPressed" body:@{@"id": _id, @"templateId":templateId}];
            }];
        } else if ([type isEqualToString:@"message"]) {
            _button = [[CPContactMessageButton alloc] initWithPhoneOrEmail:[button objectForKey:@"phoneOrEmail"]];
        } else if ([type isEqualToString:@"directions"]) {
            _button = [[CPContactDirectionsButton alloc] initWithHandler:^(__kindof CPButton * _Nonnull contactButton) {
                [self sendEventWithName:@"buttonPressed" body:@{@"id": _id, @"templateId":templateId}];
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
            [self sendEventWithName:@"barButtonPressed" body:@{@"id": _id, @"templateId":templateId}];
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
        BOOL _showsDisclosureIndicator = [item objectForKey:@"showsDisclosureIndicator"];
        NSString *_detailText = [item objectForKey:@"detailText"];
        NSString *_text = [item objectForKey:@"text"];
        UIImage *_image = [RCTConvert UIImage:[item objectForKey:@"image"]];
        CPListItem *_item = [[CPListItem alloc] initWithText:_text detailText:_detailText image:_image showsDisclosureIndicator:_showsDisclosureIndicator];
        [_item setUserInfo:@{ @"index": @(index) }];
        [_items addObject:_item];
        index = index + 1;
    }
    return _items;
}

- (NSArray<CPGridButton*>*)parseGridButtons:(NSArray*)buttons templateId:(NSString*)templateId {
    NSMutableArray *result = [NSMutableArray array];
    int index = 0;
    for (NSDictionary *button in buttons) {
        NSString *_id = [button objectForKey:@"id"];
        NSArray<NSString*> *_titleVariants = [button objectForKey:@"titleVariants"];
        UIImage *_image = [RCTConvert UIImage:[button objectForKey:@"image"]];
        CPGridButton *_button = [[CPGridButton alloc] initWithTitleVariants:_titleVariants image:_image handler:^(CPGridButton * _Nonnull barButton) {
            [self sendEventWithName:@"gridButtonPressed" body:@{@"id": _id, @"templateId":templateId, @"index": @(index) }];
        }];
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
        [maneuver setJunctionImage:[RCTConvert UIImage:json[@"junctionImage"]]];
    }

    if ([json objectForKey:@"initialTravelEstimates"]) {
        CPTravelEstimates* travelEstimates = [self parseTravelEstimates:json[@"initialTravelEstimates"]];
        [maneuver setInitialTravelEstimates:travelEstimates];
    }

    if ([json objectForKey:@"symbolLight"] && [json objectForKey:@"symbolDark"]) {
        CPImageSet *symbolSet = [[CPImageSet alloc] initWithLightContentImage:[RCTConvert UIImage:json[@"symbolLight"]] darkContentImage:[RCTConvert UIImage:json[@"symbolDark"]]];
        [maneuver setSymbolSet:symbolSet];
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
    NSLog(@">>> Parsing trip: %@", config);
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
    return [[CPNavigationAlert alloc] initWithTitleVariants:[RCTConvert NSStringArray:json[@"titleVariants"]] subtitleVariants:[RCTConvert NSStringArray:json[@"subtitleVariants"]] imageSet:imageSet primaryAction:[self parseAlertAction:json[@"primaryAction"] body:@{ @"templateId": templateId, @"primary": @(YES) }] secondaryAction:[self parseAlertAction:json[@"secondaryAction"] body:@{ @"templateId": templateId, @"secondary": @(YES) }] duration:[RCTConvert double:json[@"duration"]]];
}

- (CPAlertAction*)parseAlertAction:(NSDictionary*)json body:(NSDictionary*)body {
    return [[CPAlertAction alloc] initWithTitle:[RCTConvert NSString:json[@"title"]] style:(CPAlertActionStyle) [RCTConvert NSUInteger:json[@"style"]] handler:^(CPAlertAction * _Nonnull action) {
        [self sendEventWithName:@"alertActionPressed" body:body];
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
    [self sendEventWithName:name body:body];
}


# pragma MapTemplate

- (void)mapTemplate:(CPMapTemplate *)mapTemplate selectedPreviewForTrip:(CPTrip *)trip usingRouteChoice:(CPRouteChoice *)routeChoice {
//    NSLog(@">>> Selected trip %@, route %@", trip.userInfo.id, routeChoice);
    NSDictionary *userInfo = trip.userInfo;
    NSString *tripId = [userInfo valueForKey:@"id"];

    NSDictionary *routeUserInfo = routeChoice.userInfo;
    NSString *routeIndex = [routeUserInfo valueForKey:@"index"];
        NSLog(@">>>> Selected trip %@, route %@", trip, routeIndex);
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
- (void)tabBarTemplate:(CPTabBarTemplate *)tabBarTemplate didSelectTemplate:(__kindof CPTemplate *)selectedTemplate  API_AVAILABLE(ios(14.0)){
    NSString* selectedTemplateId = [[selectedTemplate userInfo] objectForKey:@"templateId"];
    [self sendTemplateEventWithName:tabBarTemplate name:@"didSelectTemplate" json:@{@"selectedTemplateId":selectedTemplateId}];
}

# pragma PointOfInterest
-(void)pointOfInterestTemplate:(CPPointOfInterestTemplate *)pointOfInterestTemplate didChangeMapRegion:(MKCoordinateRegion)region  API_AVAILABLE(ios(14.0)){
    // noop
}

-(void)pointOfInterestTemplate:(CPPointOfInterestTemplate *)pointOfInterestTemplate didSelectPointOfInterest:(CPPointOfInterest *)pointOfInterest  API_AVAILABLE(ios(14.0)){
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


@end
