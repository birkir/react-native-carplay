# Using SceneDelegate with React Native

We will be swapping out the ObjC AppDelegate code with an Swift variant for SceneDelegate.

The Project name in this example is `Example`, which you should replace with your own project name.

### 1. Remove previous ObjC files

- Delete `main.m`
- Delete `AppDelegate.h` and `AppDelegate.mm`

### 2. Create the new Swift AppDelegate

Create a new `AppDelegate.swift` file, once prompted, click *Create bridging headers for Swift*.

Paste the following code to the `AppDelegate.swift`, it includes Flipper code.

```swift
// ios/AppDelegate.swift
import UIKit
import CarPlay
import React
#if DEBUG
#if FB_SONARKIT_ENABLED
import FlipperKit
#endif
#endif

@main
class AppDelegate: UIResponder, UIApplicationDelegate, RCTBridgeDelegate {

  var window: UIWindow?
  var bridge: RCTBridge?;
  var rootView: RCTRootView?;

  static var shared: AppDelegate { return UIApplication.shared.delegate as! AppDelegate }

  func sourceURL(for bridge: RCTBridge!) -> URL! {
    #if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index");
    #else
    return Bundle.main.url(forResource:"main", withExtension:"jsbundle")
    #endif
  }

  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    initializeFlipper(with: application)
    self.bridge = RCTBridge.init(delegate: self, launchOptions: launchOptions)
    self.rootView = RCTRootView.init(bridge: self.bridge!, moduleName: "Example", initialProperties: nil)
    return true
  }

  func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
    if (connectingSceneSession.role == UISceneSession.Role.carTemplateApplication) {
      let scene =  UISceneConfiguration(name: "CarPlay", sessionRole: connectingSceneSession.role)
      scene.delegateClass = CarSceneDelegate.self
      return scene
    } else {
      let scene =  UISceneConfiguration(name: "Phone", sessionRole: connectingSceneSession.role)
      scene.delegateClass = PhoneSceneDelegate.self
      return scene
    }
  }

  func application(_ application: UIApplication, didDiscardSceneSessions sceneSessions: Set<UISceneSession>) {
  }

  private func initializeFlipper(with application: UIApplication) {
    #if DEBUG
    #if FB_SONARKIT_ENABLED
    let client = FlipperClient.shared()
    let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())
    client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))
    client?.add(FKUserDefaultsPlugin(suiteName: nil))
    client?.add(FlipperKitReactPlugin())
    client?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))
    client?.start()
    #endif
    #endif
  }
}
```

Paste the following to your bridging header file `Example-Bridging-Header.h`:

```objc
// ios/Example-Bridging-Header.h
#import "RNCarPlay.h"

#ifdef DEBUG
#ifdef FB_SONARKIT_ENABLED
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>
#endif
#endif
```

### 3. Add flags for Swift compiler in debug mode

Go to XCode project, hit `Build Settings`, search for `Swift Compiler - Custom Flags` and then under `Active Compilation Conditions`, add the following flags to `Debug` only:

  - DEBUG
  - FB_SONARKIT_ENABLED

### 4. Create Phone Scene

Add a new Swift file called `PhoneScene.swift`:

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

    let rootViewController = UIViewController()
    rootViewController.view = appDelegate.rootView;

    let window = UIWindow(windowScene: windowScene)
    window.rootViewController = rootViewController
    self.window = window
    window.makeKeyAndVisible()
  }
}

```

### 5. Create Car Scene

Add a new Swift file called `CarScene.swift`

```swift
// ios/CarScene.swift
import Foundation
import CarPlay

class CarSceneDelegate: UIResponder, CPTemplateApplicationSceneDelegate {
  func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene,
                                  didConnect interfaceController: CPInterfaceController) {
    RNCarPlay.connect(with: interfaceController, window: templateApplicationScene.carWindow);
  }

  func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didDisconnectInterfaceController interfaceController: CPInterfaceController) {
    RNCarPlay.disconnect()
  }
}

```

### 6. Update the manifest in Info.plist

Add the following ApplicationScene manifest to your `Info.plist` file.

```xml
	<key>UIApplicationSceneManifest</key>
	<dict>
		<key>UIApplicationSupportsMultipleScenes</key>
		<true/>
		<key>UISceneConfigurations</key>
		<dict>
			<key>CPTemplateApplicationSceneSessionRoleApplication</key>
			<array>
				<dict>
					<key>UISceneClassName</key>
					<string>CPTemplateApplicationScene</string>
					<key>UISceneConfigurationName</key>
					<string>CarPlay</string>
					<key>UISceneDelegateClassName</key>
					<string>$(PRODUCT_MODULE_NAME).CarSceneDelegate</string>
				</dict>
			</array>
			<key>UIWindowSceneSessionRoleApplication</key>
			<array>
				<dict>
					<key>UISceneClassName</key>
					<string>UIWindowScene</string>
					<key>UISceneConfigurationName</key>
					<string>Phone</string>
					<key>UISceneDelegateClassName</key>
					<string>$(PRODUCT_MODULE_NAME).PhoneSceneDelegate</string>
				</dict>
			</array>
		</dict>
	</dict>
```

