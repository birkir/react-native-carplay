import Foundation
import CarPlay

class CarSceneDelegate: UIResponder, CPTemplateApplicationSceneDelegate {
  func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene,
                                  didConnect interfaceController: CPInterfaceController) {
    guard let appDelegate = (UIApplication.shared.delegate as? AppDelegate) else { return }
    
    /**
     Approach 1:
     Create a bridge manually if it's not provided by the AppDelegate
     */
    //if appDelegate.bridge == nil {
    //  appDelegate.bridge = RCTBridge(delegate: appDelegate, launchOptions: [:])
    //  appDelegate.rootView = RCTAppSetupDefaultRootView(appDelegate.bridge, "RNCarPlayStandAlone", appDelegate.prepareInitialProps(), false)
    //}
    
    /**
     Approach 2:
     Use custom initAppFromScene() for bridge creation
     */
    appDelegate.initAppFromScene(connectionOptions: nil)
    
    RNCarPlay.connect(with: interfaceController, window: templateApplicationScene.carWindow);
  }

  func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didDisconnectInterfaceController interfaceController: CPInterfaceController) {
    RNCarPlay.disconnect()
  }
}
