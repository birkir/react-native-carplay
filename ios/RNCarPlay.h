//
//  RNCarPlay.h
//  RNCarPlay
//
//  Created by Birkir Gudjonsson on 3/25/19.
//  Copyright © 2019 SOLID Mobile. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CarPlay/CarPlay.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import "RCTConvert+RNCarPlay.h"
#import "RNCPStore.h"

typedef void(^SearchResultUpdateBlock)(NSArray<CPListItem *> * _Nonnull);
typedef void(^SelectedResultBlock)(void);

@interface RNCarPlay : RCTEventEmitter<RCTBridgeModule, CPInterfaceControllerDelegate, CPSearchTemplateDelegate, CPListTemplateDelegate, CPMapTemplateDelegate,  CPTabBarTemplateDelegate, CPPointOfInterestTemplateDelegate, CPNowPlayingTemplateObserver> {
    CPInterfaceController *interfaceController;
    CPWindow *window;
    SearchResultUpdateBlock searchResultBlock;
    SelectedResultBlock selectedResultBlock;
    BOOL isNowPlayingActive;
}

@property (nonatomic, retain) CPInterfaceController *interfaceController;
@property (nonatomic, retain) CPWindow *window;
@property (nonatomic, retain) CPTemplateApplicationScene* scene;
@property (nonatomic, copy) SearchResultUpdateBlock searchResultBlock;
@property (nonatomic, copy) SelectedResultBlock selectedResultBlock;
@property (nonatomic) BOOL isNowPlayingActive;

+ (void) connectWithInterfaceController:(CPInterfaceController*)interfaceController window:(CPWindow*)window scene:(CPTemplateApplicationScene*) scene;
+ (void) disconnect;
- (NSArray<CPListSection*>*) parseSections:(NSArray*)sections;

@end
