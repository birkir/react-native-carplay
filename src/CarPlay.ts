import { NativeEventEmitter, NativeModules } from 'react-native';
import { Template } from './templates/Template';

const { RNCarPlay } = NativeModules;

class CarPlayInterface {
  public bridge = RNCarPlay;
  public emitter = new NativeEventEmitter(RNCarPlay);

  public setRootTemplate(template: Template<any>, animated = true) {
    return RNCarPlay.setRootTemplate(template.id, animated);
  }

  public pushTemplate(template: Template<any>, animated = true) {
    return RNCarPlay.pushTemplate(template.id, animated);
  }

  public popToTemplate(template: Template<any>, animated = true) {
    return RNCarPlay.popToTemplate(template.id, animated);
  }

  public popToRootTemplate(animated = true) {
    return RNCarPlay.popToRootTemplate(animated);
  }

  public popTemplate(animated = true) {
    return RNCarPlay.popTemplate(animated);
  }
}

export const CarPlay = new CarPlayInterface();

// export const CarPlay = new CarPlay();

// interface ListItem {
//   text: string;
//   detailText?: string;
//   image?: null;
//   showsDisclosureIndicator?: boolean;
// }

// interface ListSection {
//   header?: string;
//   sectionIndexTitle?: string;
//   items: ListItem[];
// }

// interface GridButton {
//   titleVariants: string[];
//   image?: null;
//   enabled?: boolean;
// }

// interface BarButtonText {
//   type: 'text';
//   title: string;
// }

// interface BarButtonImage {
//   type: 'image';
//   image: null;
// }

// type BarButton = BarButtonText | BarButtonImage & {
//   id: string;
//   enabled?: boolean;
// };

// const sections: ListSection[] = [{
//   items: [{
//     text: 'foo',
//   }, {
//     text: 'bar'
//   }]
// }]

// type TemplateEvent = 'willAppear' | 'willDisappear' | 'didAppear' | 'didDisappear';

// class Template {
//   leadingNavigationBarButtons: BarButton[];
//   trailingNavigationBarButtons: BarButton[];
//   backButton: boolean;
// }

// type ListTemplateEvent = TemplateEvent & 'didSelectListItem';

// class ListTemplate {
//   constructor(public title: string, public sections: ListSection[]) {}
//   addEventListener(name: ListTemplateEvent, callback: Function) {}
// }

// class GridTemplate {
//   constructor(public title: string, public buttons: GridButton[]) {}
// }

// type SearchTemplateEvent = 'updatedSearchText' | 'selectedResult' | 'searchButtonPressed';

// class SearchTemplate {
//   addEventListener(name: SearchTemplateEvent, callback: Function) {}
// }

// type InterfaceControllerEvent = 'didConnectCarInterfaceController' | 'didDisconnectCarInterfaceController' | 'didSelectNavigationAlert' | 'didSelectManeuver';

// class InterfaceController {
//   addEventListener(name: InterfaceControllerEvent, callback: Function) {}
//   setRoot(template: ListTemplate, animated = true) {}
//   push(template: ListTemplate, animated = true) {}
//   pop(animated = true) {}
//   popToRoot(animated = true) {}
//   popToTemplate(template: ListTemplate, animated = true) {}
//   present(template: ListTemplate, animated = true) {}
//   dismiss(animated = true) {}
// }

// const ic = new InterfaceController();

// const template = new ListTemplate('demo', [{
//   header:"Stuff",
//   sectionIndexTitle:"S",
//   items:[{
//     text:"Lipsum",
//     detailText:"Yeb"
//   }]
// }]);

// ic.setRoot(template, true);
