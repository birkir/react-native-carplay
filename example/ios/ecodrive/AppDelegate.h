#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <CarPlay/CarPlay.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, CPTemplateApplicationSceneDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
