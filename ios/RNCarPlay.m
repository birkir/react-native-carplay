//
//  RNCarPlay.m
//  RNCarPlay
//
//  Created by Birkir Gudjonsson on 3/25/19.
//  Copyright © 2019 SOLID Mobile. All rights reserved.
//

#import "RNCarPlay.h"
#import <React/RCTConvert.h>

@implementation RNCarPlay

@synthesize interfaceController;
@synthesize window;
@synthesize searchResultBlock;
@synthesize selectedResultBlock;


+ (void) registerWithInterfaceController:(CPInterfaceController*)interfaceController window:(CPWindow*)window {
    RNCPStore * store = [RNCPStore sharedManager];
    store.interfaceController = interfaceController;
    store.window = window;
}

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
    return @[
             // window
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
             // list
             @"didSelectListItem",
             // search
             @"updatedSearchText",
             @"searchButtonPressed",
             @"selectedResult"
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
    
    [template setUserInfo:@{ @"templateId": templateId }];
    
    [store setTemplate:templateId template:template];
}

RCT_EXPORT_METHOD(setRootTemplate:(NSString *)templateId animated:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    
    store.interfaceController.delegate = self;
    
    if (template) {
        [store.interfaceController setRootTemplate:template animated:animated];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(pushTemplate:(NSString *)templateId animated:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        [store.interfaceController pushTemplate:template animated:animated];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(popToTemplate:(NSString *)templateId animated:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    CPTemplate *template = [store findTemplateById:templateId];
    if (template) {
        [store.interfaceController popToTemplate:template animated:animated];
    } else {
        NSLog(@"Failed to find template %@", template);
    }
}

RCT_EXPORT_METHOD(popToRootTemplate:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    [store.interfaceController popToRootTemplateAnimated:animated];
}

RCT_EXPORT_METHOD(popTemplate:(BOOL)animated) {
    RNCPStore *store = [RNCPStore sharedManager];
    [store.interfaceController popTemplateAnimated:animated];
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

- (NSArray<CPListSection*>*) parseSections:(NSArray*)sections {
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

- (NSArray<CPListItem*>*) parseListItems:(NSArray*)items startIndex:(int)startIndex {
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

- (NSArray<CPGridButton*>*) parseGridButtons:(NSArray*)buttons templateId:(NSString*)templateId {
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

- (void)searchTemplate:(CPSearchTemplate *)searchTemplate selectedResult:(CPListItem *)item completionHandler:(void (^)(void))completionHandler {
    NSDictionary *userInfo = [searchTemplate userInfo];
    NSString* templateId = [userInfo objectForKey:@"templateId"];
    NSNumber* index = [item.userInfo objectForKey:@"index"];
    [self sendEventWithName:@"selectedResult" body:@{ @"templateId": templateId, @"index": index }];
    self.selectedResultBlock = completionHandler;
}

- (void)searchTemplateSearchButtonPressed:(CPSearchTemplate *)searchTemplate {
    NSDictionary *userInfo = [searchTemplate userInfo];
    NSString* templateId = [userInfo objectForKey:@"templateId"];
    [self sendEventWithName:@"searchButtonPressed" body:@{ @"templateId": templateId }];
}

- (void)searchTemplate:(CPSearchTemplate *)searchTemplate updatedSearchText:(NSString *)searchText completionHandler:(void (^)(NSArray<CPListItem *> * _Nonnull))completionHandler {
    NSDictionary *userInfo = [searchTemplate userInfo];
    NSString* templateId = [userInfo objectForKey:@"templateId"];
    [self sendEventWithName:@"updatedSearchText" body:@{ @"templateId": templateId, @"searchText": searchText }];
    self.searchResultBlock = completionHandler;
}

- (void)listTemplate:(CPListTemplate *)listTemplate didSelectListItem:(CPListItem *)item completionHandler:(void (^)(void))completionHandler {
    NSDictionary *userInfo = [listTemplate userInfo];
    NSString *templateId = [userInfo objectForKey:@"templateId"];
    NSNumber* index = [item.userInfo objectForKey:@"index"];
    [self sendEventWithName:@"didSelectListItem" body:@{ @"templateId": templateId, @"index": index }];
    self.selectedResultBlock = completionHandler;
}

- (void)templateDidAppear:(CPTemplate *)aTemplate animated:(BOOL)animated {
    NSDictionary *userInfo = [aTemplate userInfo];
    NSString *templateId = [userInfo objectForKey:@"templateId"];
    [self sendEventWithName:@"didAppear" body:@{ @"templateId": templateId }];
}

- (void)templateDidDisappear:(CPTemplate *)aTemplate animated:(BOOL)animated {
    NSDictionary *userInfo = [aTemplate userInfo];
    NSString *templateId = [userInfo objectForKey:@"templateId"];
    [self sendEventWithName:@"didDisappear" body:@{ @"templateId": templateId }];
}

- (void)templateWillAppear:(CPTemplate *)aTemplate animated:(BOOL)animated {
    NSDictionary *userInfo = [aTemplate userInfo];
    NSString *templateId = [userInfo objectForKey:@"templateId"];
    [self sendEventWithName:@"willAppear" body:@{ @"templateId": templateId }];
}

- (void)templateWillDisappear:(CPTemplate *)aTemplate animated:(BOOL)animated {
    NSDictionary *userInfo = [aTemplate userInfo];
    NSString *templateId = [userInfo objectForKey:@"templateId"];
    [self sendEventWithName:@"willDisappear" body:@{ @"templateId": templateId }];
}

@end
