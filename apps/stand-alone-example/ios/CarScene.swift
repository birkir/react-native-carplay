import Foundation
import CarPlay

class CarSceneDelegate: UIResponder, CPTemplateApplicationSceneDelegate {
  func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene,
                                  didConnect interfaceController: CPInterfaceController) {
    guard let appDelegate = (UIApplication.shared.delegate as? AppDelegate) else { return }
    
    if appDelegate.bridge == nil {
      appDelegate.bridge = RCTBridge(delegate: appDelegate, launchOptions: [:])
      appDelegate.rootView = RCTAppSetupDefaultRootView(appDelegate.bridge, "RNCarPlayStandAlone", appDelegate.prepareInitialProps(), false)
    }
    
    RNCarPlay.connect(with: interfaceController, window: templateApplicationScene.carWindow);
  }

  func templateApplicationScene(_ templateApplicationScene: CPTemplateApplicationScene, didDisconnectInterfaceController interfaceController: CPInterfaceController) {
    RNCarPlay.disconnect()
  }
}
