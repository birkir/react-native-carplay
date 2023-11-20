import Foundation
import UIKit
import SwiftUI

class PhoneSceneDelegate: UIResponder, UIWindowSceneDelegate {
  var window: UIWindow?
  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    guard let appDelegate = (UIApplication.shared.delegate as? AppDelegate) else { return }
    guard let windowScene = (scene as? UIWindowScene) else { return }

    /**
     Approach 1:
     Let RCTAppDelegate's application:didFinishLaunchingWithOptions handle app initialization.
     Problem: The rootViewController gets created twice: once in RCTAppDelegate's application:didFinishLaunchingWithOptions
     (via AppDelegate's application:didFinishLaunchingWithOptions calling it's super method) and once again here.
     */
    //let rootViewController = UIViewController()
    //rootViewController.view = appDelegate.rootView;
    //
    //appDelegate.window = UIWindow(windowScene: windowScene)
    //appDelegate.window.rootViewController = rootViewController
    //appDelegate.window.makeKeyAndVisible()
    
    /**
     Approach 2:
     Use custom initAppFromScene() and create window and rootViewController here
     */
    appDelegate.initAppFromScene(connectionOptions: connectionOptions)
    
    let rootViewController = UIViewController()
    rootViewController.view = appDelegate.rootView;
    
    let window = UIWindow(windowScene: windowScene)
    window.rootViewController = rootViewController
    self.window = window
    window.makeKeyAndVisible()
  }
}
