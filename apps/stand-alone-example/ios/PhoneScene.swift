import Foundation
import UIKit
import SwiftUI

class PhoneSceneDelegate: UIResponder, UIWindowSceneDelegate {
  var window: UIWindow?
  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    guard let appDelegate = (UIApplication.shared.delegate as? AppDelegate) else { return }
    guard let windowScene = (scene as? UIWindowScene) else { return }

    if appDelegate.bridge == nil {
      appDelegate.bridge = RCTBridge(delegate: appDelegate, launchOptions: [:])
      appDelegate.rootView = RCTAppSetupDefaultRootView(appDelegate.bridge, "RNCarPlayStandAlone", appDelegate.prepareInitialProps(), false)
    }
    
    let rootViewController = UIViewController()
    rootViewController.view = appDelegate.rootView;
    
    appDelegate.window = UIWindow(windowScene: windowScene)
    appDelegate.window.rootViewController = rootViewController
    appDelegate.window.makeKeyAndVisible()
  }
}
