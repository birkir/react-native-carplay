import UIKit
import CarPlay
import React

#if DEBUG
#if FB_SONARKIT_ENABLED
import FlipperKit
#endif
#endif

@main
class AppDelegate: RCTAppDelegate {

  var rootView: UIView?;
  var concurrentRootEnabled = true;

  static var shared: AppDelegate { return UIApplication.shared.delegate as! AppDelegate }

  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    moduleName = "RNCarPlayStandAlone"
    
    return true
    
    /**
     Approach 1:
     Let RCTAppDelegate's application:didFinishLaunchingWithOptions handle app initialization.
     Problem: It creates a rootViewController, which should only get created when launching the PhoneScene not the CarScene.
     Since we need a rootViewController in the PhoneScene for assigning the shared appDelegate's rootView,
     there are two rootViewControllers being created.
     */
    //let app = super.application(application, didFinishLaunchingWithOptions: launchOptions);
    //self.rootView = self.createRootView(
    //  with: self.bridge,
    //  moduleName: self.moduleName,
    //  initProps: self.prepareInitialProps()
    //);
    //return app;
  }
  
  /**
   Approach 2:
   Do not call RCTAppDelegate's application:didFinishLaunchingWithOptions.
   Instead, cherry-pick the code from RCTAppDelegate's application:didFinishLaunchingWithOptions except for window and rootViewController creation
   and do all app initialization manually in initAppFromScene(), moving the window and rootViewController creation to PhoneScene
   */
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

  override func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration {
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

  override func sourceURL(for bridge: RCTBridge!) -> URL! {
    #if DEBUG
      return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index");
    #else
      return Bundle.main.url(forResource:"main", withExtension:"jsbundle")
    #endif
  }

  // not exposed from RCTAppDelegate, recreating.
  func prepareInitialProps() -> [String: Any] {
    var initProps = self.initialProps as? [String: Any] ?? [String: Any]()
    #if RCT_NEW_ARCH_ENABLED
      initProps["kRNConcurrentRoot"] = concurrentRootEnabled()
    #endif
    return initProps
  }
}
