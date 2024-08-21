import UIKit
import CarPlay
import React

@main
class AppDelegate: RCTAppDelegate {

  var rootView: UIView?;
  var concurrentRootEnabled = true;

  static var shared: AppDelegate { return UIApplication.shared.delegate as! AppDelegate }

  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    moduleName = "RNCarPlayScene"
    initialProps = [:]
    
    return super.application(application, didFinishLaunchingWithOptions: launchOptions);
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

  override func bundleURL() -> URL? {
    #if DEBUG
      return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index");
    #else
      return Bundle.main.url(forResource:"main", withExtension:"jsbundle")
    #endif
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    return bundleURL()
  }
}
