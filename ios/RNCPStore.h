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
- (NSString*) setTemplate:(NSString*)templateId template:(CPTemplate*)carPlayTemplate;
- (CPTrip*) findTripById: (NSString*)tripId;
- (NSString*) setTrip:(NSString*)tripId trip:(CPTrip*)trip;
- (CPNavigationSession*) findNavigationSessionById:(NSString*)navigationSessionId;
- (NSString*) setNavigationSession:(NSString*)navigationSessionId navigationSession:(CPNavigationSession*)navigationSession;
- (Boolean) isConnected;
- (void) setConnected:(Boolean) isConnected;

@end
