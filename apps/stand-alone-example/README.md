# Using A Vehicle-App Stand-Alone with React Native

This example focuses on launching a vehicle app in stand-alone mode, i.e.
directly on the CarPlay- or AndroidAuto-client without having the React
Native app running on the phone.

For setup, follow the steps outlined in the regular example app (which syncs
the CarPlay-screens with the phone app screens), then pay attention to the
changes required for the stand-alone setup outlined in this app.

## iOS / CarPlay

Independently of whether the app was started on the phone (PhoneScene) or on
the CarPlay-client (CarScene), the first code to run natively will always be
the AppDelegates `application:didFinishLaunchingWithOptions:` method.
A React Native app usually calls the super-method in its AppDelegate, which is
implemented in React Native's own `RCTAppDelegate`. The problem with this is
that `RCTAppDelegate` assumes a phone usage and creates a
`rootViewController` along with a window for the app to be displayed in.
This leads to problems when launching the app on the CarPlay-client first,
since CarPlay does not require a rootViewController or a window to display
its views.

The key to solving this problem is to split the app initialization logic
into PhoneScene and CarScene (which are both subclasses of `UIResponder`)
and only run the code required to set up the React Native bridge in the
AppDelegate. We can achieve this by not calling the super-method in
`application:didFinishLaunchingWithOptions:` but instead create and call a
custom init method. Here's how:

### 1. Add RCTAppSetupUtils to your BridgingHeader

To be able to call app setup utilities provided by React Native in your
AppDelegate-implementation, you need to add an import for `RCTAppSetupUtils`
in your `BridgingHeader.h`:

```objc
#import <React/RCTAppSetupUtils.h>
```

### 2. Adjust your AppDelegate

In `AppDelegate.swift`, delete your calls to
`super.application(application, didFinishLaunchingWithOptions: launchOptions)`
and `createRootView` and instead create a new method`initAppFromScene`.
This method will be called from your scenes for app initialization.
In it, replicate the `application:didFinishLaunchingWithOptions:` method
from `RCTAppDelegate`except for the `rootViewController` and window creation.

Here is an example implementation based on the `RCTAppDelegate`
implementation in React Native version 0.71.13:

```swift
// ios/AppDelegate.swift

@main
class AppDelegate: RCTAppDelegate {

  var rootView: UIView?;
  var concurrentRootEnabled = true;

  static var shared: AppDelegate { return UIApplication.shared.delegate as! AppDelegate }

  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    moduleName = "YourModuleName"
    return true
  }

  func initAppFromScene(connectionOptions: UIScene.ConnectionOptions?) {
    // If bridge has already been initiated by another scene, there's nothing to do here
    if (self.bridge != nil) {
      return;
    }

    let enableTM = false;
#if RCT_NEW_ARCH_ENABLED
    enableTM = self.turboModuleEnabled;
#endif

    let application = UIApplication.shared;
    RCTAppSetupPrepareApp(application, enableTM);

    if (self.bridge == nil) {
      self.bridge = super.createBridge(
        with: self,
        launchOptions: self.connectionOptionsToLaunchOptions(connectionOptions: connectionOptions)
      )
    }

#if RCT_NEW_ARCH_ENABLED
    _contextContainer = UnsafeMutablePointer<ContextContainer>.allocate(capacity: 1)
    _contextContainer?.initialize(to: ContextContainer())
    _reactNativeConfig = UnsafeMutablePointer<EmptyReactNativeConfig>.allocate(capacity: 1)
    _reactNativeConfig?.initialize(to: EmptyReactNativeConfig())
    _contextContainer?.pointee.insert("ReactNativeConfig", _reactNativeConfig)
    self.bridgeAdapter = RCTSurfacePresenterBridgeAdapter(bridge: self.bridge, contextContainer: _contextContainer)
    self.bridge?.surfacePresenter = self.bridgeAdapter?.surfacePresenter
#endif

    let initProps = self.prepareInitialProps();
    self.rootView = self.createRootView(with: self.bridge, moduleName: self.moduleName, initProps: initProps)

    if #available(iOS 13.0, *) {
      self.rootView!.backgroundColor = UIColor.systemBackground
    } else {
      self.rootView!.backgroundColor = UIColor.white
    }
  }

  /**
   Convert ConnectionOptions to LaunchOptions
   When Scenes are used, the launchOptions param in "didFinishLaunchingWithOptions" is always null, and the expected data is provided through SceneDelegate's ConnectionOptions instead but in a different format
   */
  func connectionOptionsToLaunchOptions(connectionOptions: UIScene.ConnectionOptions?) -> [UIApplication.LaunchOptionsKey: Any] {
    var launchOptions: [UIApplication.LaunchOptionsKey: Any] = [:];

    if let options = connectionOptions {
      if options.notificationResponse != nil {
        launchOptions[UIApplication.LaunchOptionsKey.remoteNotification] = options.notificationResponse?.notification.request.content.userInfo;
      }

      if !options.userActivities.isEmpty {
        let userActivity = options.userActivities.first;
        let userActivityDictionary = [
          "UIApplicationLaunchOptionsUserActivityTypeKey": userActivity?.activityType as Any,
          "UIApplicationLaunchOptionsUserActivityKey": userActivity!
        ] as [String : Any];
        launchOptions[UIApplication.LaunchOptionsKey.userActivityDictionary] = userActivityDictionary;
      }
    }

    return launchOptions;
  }
```

### 2. Adjust the Phone Scene

In `PhoneScene.swift`, initialize the app for running on the phone.
This of course needs to work like before, since adding
CarPlay should not affect your regular app in any way.

Here, after calling the new `initAppFromScene`-method with the
connectionOptions provided to the scene, add the rest of the phone-app
initialization logic from `RCTAppDelegate`:
Create a new `rootViewController` for the AppDelegate's `rootView`, create a
window with the `windowScene` and set the `rootViewController` as the
windows `rootViewController`.
Finally, make the window key and visible:

```swift
// ios/PhoneScene.swift
import Foundation
import UIKit
import SwiftUI

class PhoneSceneDelegate: UIResponder, UIWindowSceneDelegate {
  var window: UIWindow?
  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    guard let appDelegate = (UIApplication.shared.delegate as? AppDelegate) else { return }
    guard let windowScene = (scene as? UIWindowScene) else { return }

    appDelegate.initAppFromScene(connectionOptions: connectionOptions)

    let rootViewController = UIViewController()
    rootViewController.view = appDelegate.rootView;

    let window = UIWindow(windowScene: windowScene)
    window.rootViewController = rootViewController
    self.window = window
    window.makeKeyAndVisible()
  }
}
```

### 3. Adjust the Car Scene

In `CarScene.swift`, make sure to also call the new
`initAppFromScene`-method (this time without connectionOptions) in
order to initialize the React Native setup, bridge and `rootView` creation.
This will launch your app as a headless React Native application in the
background, which will initialize your react-native-carplay-code.

```swift
// ios/CarScene.swift

import Foundation
import CarPlay

class CarSceneDelegate: UIResponder, CPTemplateApplicationSceneDelegate {
  func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene,
                                  didConnect interfaceController: CPInterfaceController) {
    guard let appDelegate = (UIApplication.shared.delegate as? AppDelegate) else { return }

    appDelegate.initAppFromScene(connectionOptions: nil)

    RNCarPlay.connect(with: interfaceController, window: templateApplicationScene.carWindow);
  }

  func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didDisconnectInterfaceController interfaceController: CPInterfaceController) {
    RNCarPlay.disconnect()
  }
}
```

## Android / AndroidAuto

### TODO: Add AndroidAuto Stand-Alone Example with documentation
