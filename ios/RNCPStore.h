//
//  RNCPStore.h
//  RNCarPlay
//
//  Created by Birkir Gudjonsson on 3/25/19.
//  Copyright © 2019 SOLID Mobile. All rights reserved.
//


#import <Foundation/Foundation.h>
#import <CarPlay/CarPlay.h>

@interface RNCPStore : NSObject {
    CPInterfaceController *interfaceController;
    CPWindow *window;
}

@property (nonatomic, retain) CPInterfaceController *interfaceController;
@property (nonatomic, retain) CPWindow *window;

+ (id)sharedManager;

- (CPTemplate*) findTemplateById: (NSString*)templateId;
- (NSString*) setTemplate:(NSString*)templateId template:(CPTemplate*)template;

@end
