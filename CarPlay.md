# CarPlay with React Native

## Installing

You need to convert your project to using [Scenes](https://developer.apple.com/documentation/uikit/app_and_environment/scenes/), as this is the standard when managing multiple windows in iOS 13+. This is a requirement for CarPlay apps.

### Add your PhoneScene

This is where your app will run on the phone.

`PhoneSceneDelegate.h`

```objc
#import <UIKit/UIKit.h>

@interface PhoneSceneDelegate : UIResponder <UIWindowSceneDelegate>

@property (strong, nonatomic) UIWindow *window;

@end
```

`PhoneSceneDelegate.m`

```objc
#import "PhoneSceneDelegate.h"

@implementation PhoneSceneDelegate
- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session options:(UISceneConnectionOptions *)connectionOptions {
  AppDelegate *appDelegate = (AppDelegate *)UIApplication.sharedApplication.delegate;
  UIWindowScene *windowScene = (UIWindowScene *)scene;
  UIViewController *rootViewController = [[UIViewController alloc] init];
  rootViewController.view = appDelegate.rootView;
  UIWindow *window = [[UIWindow alloc] initWithWindowScene:windowScene];
  window.rootViewController = rootViewController;
  self.window = window;
  [window makeKeyAndVisible];
}

@end
```

### Add your CarScene

This is where your app will run on CarPlay.

`CarSceneDelegate.h`

```objc
#import <Foundation/Foundation.h>
#import <CarPlay/CarPlay.h>

@interface CarSceneDelegate : UIResponder <CPTemplateApplicationSceneDelegate>
@end
```

`CarSceneDelegate.m`

```objc
#import "CarSceneDelegate.h"
#import "CarSceneDelegate.h"
#import "RNCarPlay.h"

@implementation CarSceneDelegate

- (void)templateApplicationScene:(CPTemplateApplicationScene *)templateApplicationScene
      didConnectInterfaceController:(CPInterfaceController *)interfaceController {
    // Dispatch connect to RNCarPlay
    [RNCarPlay connectWithInterfaceController:interfaceController window:templateApplicationScene.carWindow];
}

- (void)templateApplicationScene:(CPTemplateApplicationScene *)templateApplicationScene
      didDisconnectInterfaceController:(CPInterfaceController *)interfaceController {
    // Dispatch disconnect to RNCarPlay
    [RNCarPlay disconnect];
}

@end
```

### Entitlement matrix

<table>
<thead>
<tr>
<th></th>
<th>List</th>
<th>Grid</th>
<th title="TabBar">T B</th>

<th>Alert</th>
<th title="Action Sheet">A S</th>

<th title="Voice Controller">🎤</th>
<th title="Now Playing">▶️</th>

<th>Map</th>
<th title="Search">🔎</th>

<th title="Point of Interest">POI</th>
<th title="Information">Info</th>

<th title="Contact">📇</th>
</tr>
</thead>
<tbody>
<tr>
<td>
com.apple.developer.carplay-audio
</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>

<td>✅</td>
<td>❌</td>

<td>✅</td>
<td>✅</td>

<td>❌</td>
<td>❌</td>

<td>❌</td>
<td>❌</td>

<td>❌</td>
</tr>
<tr>
<td>com.apple.developer.carplay-communication</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>

<td>✅</td>
<td>✅</td>

<td>✅</td>
<td>❌</td>

<td>❌</td>
<td>❌</td>

<td>❌</td>
<td>✅</td>

<td>✅</td>
</tr>
<tr>
<td>com.apple.developer.carplay-charging</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>

<td>✅</td>
<td>✅</td>

<td>❌</td>
<td>❌</td>

<td>❌</td>
<td>❌</td>

<td>✅</td>
<td>✅</td>

<td>✅</td>
</tr>
<tr>
<td>com.apple.developer.carplay-maps</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>

<td>✅</td>
<td>✅</td>

<td>✅</td>
<td>❌</td>

<td>✅</td>
<td>✅</td>

<td>❌</td>
<td>✅</td>

<td>✅</td>
</tr>
<tr>
<td>com.apple.developer.carplay-parking</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>

<td>✅</td>
<td>✅</td>

<td>❌</td>
<td>❌</td>

<td>❌</td>
<td>❌</td>

<td>✅</td>
<td>✅</td>

<td>✅</td>
</tr>
<tr>
<td>com.apple.developer.carplay-quick-ordering</td>
<td>✅</td>
<td>✅</td>
<td>✅</td>

<td>✅</td>
<td>✅</td>

<td>❌</td>
<td>❌</td>

<td>❌</td>
<td>❌</td>

<td>✅</td>
<td>✅</td>

<td>✅</td>
</tr>
</tbody>
</table>

#### Read this section if you are new to CarPlay!

One of the most useful resources for undertanding the requirements, constraints and capabilities of CarPlay apps is the official [App Programming Guidelines](https://developer.apple.com/carplay/documentation/CarPlay-App-Programming-Guide.pdf) from Apple. It's a 50-page document that clearly lays out steps required and you are strongly encouraged to read it if you are new to CarPlay. Further to the above guide, when developing a CarPlay app or if contributing to this package; you'll find the [CarPlay Documentation](https://developer.apple.com/documentation/carplay?language=objc) invaluable.

_You can develop CarPlay capabilities with this project without waiting for Apple to send you back an entitlement, through the simulator._

If you want to build and run your app on an iPhone or share it with others through the App Store Connect or TestFlight, you will need to request a CarPlay entitlement from Apple first. The process will take anywhere from a few days to weeks - your mileage will vary. This depends on the type of Entitlement you are requesting. If you are part of the MFi program, this may help speed things up too. You then need to add the entitlement to your provisioning profile or signing certificate that you use for signing your app in XCode.

You can go to [this Apple CarPlay entitlement request page](https://developer.apple.com/contact/carplay/) to request a CarPlay Entitlement. You need to be logged in with an Apple Developer account.

To start a CarPlay simulator in XCode, within the Simulator window, go to the menu option IO, click on External Displays, then select CarPlay.

#### NB:

Whether you are running through a simulator or building the app for distribution, you need to ensure that the correct entitlement key is added in your `Entitlements.plist` file. If you don't have an Entitlements.plist file, create one in your `iOS/` directory.

## Basic Usage

[See full example](https://github.com/birkir/react-native-carplay/blob/master/apps/example/src/App.tsx)

The exported `CarPlay` class gives you the API needed to add / remove templates from the CarPlay view hierarchy.

```jsx
import { CarPlay, GridTemplate } from 'react-native-carplay';

const template = new GridTemplate({
  title: 'Hello, World',
  buttons: [],
});

CarPlay.setRootTemplate(template);
```

## Connect / Disconnect

When working with CarPlay it is important to detect and respond to the connect / disconnect events. The CarPlay class provides both a `connected` boolean and an on connect / disconnect event you can register a callback to.

When you are creating and displaying a template within your existing app screens you may want to ensure CarPlay is connected before calling any carplay apis. This can be done within a `useEffect`.

```jsx
useEffect(() => {
  function onConnect() {
    // Do things now that carplay is connected
  }

  function onDisconnect() {
    // Do things now that carplay is disconnected
  }

  CarPlay.registerOnConnect(onConnect);
  CarPlay.registerOnDisconnect(onDisconnect);

  return () => {
    CarPlay.unregisterOnConnect(onConnect);
    CarPlay.unregisterOnDisconnect(onDisconnect);
  };
});
```

## CarPlay API

### CarPlay.setRootTemplate

Sets the root template of CarPlay.
This must be called before running any other CarPlay commands. Can be called multiple times.

```tsx
CarPlay.setRootTemplate(template, /* animated */ false);
```

### CarPlay.pushTemplate

Pushes a new template to the navigation stack.
**Note** you cannot push the same template twice.

```tsx
CarPlay.pushTemplate(template, /* animated */ true);
```

### CarPlay.popTemplate

Pop currently presented template from the stack.

```tsx
CarPlay.popTemplate(/* animated */ false);
```

### CarPlay.popToTemplate

Pop currently presented template from the stack to a specific template. The template must be in the stack.

```tsx
CarPlay.popToTemplate(template, /* animated */ false);
```

### CarPlay.popToRoot

Pop the stack to root template.

```tsx
CarPlay.popToRoot(/* animated */ false);
```

## Templates

Templates are used to render contents on the CarPlay screen from your app. Details of the templates supported by apple can be found in the [developer guide](https://developer.apple.com/carplay/documentation/CarPlay-App-Programming-Guide.pdf)

### MapTemplate

![Map Template](/.github/images/mapTemplateRoutes.png)
![Map Template](/.github/images/mapTemplateNavigation.png)

```jsx
import { CarPlay } from 'react-native-carplay';

const mapTemplate = new MapTemplate({
  component: /* react native view */ MapView,
  onAlertActionPressed(e) {
    console.log(e);
  },
  onStartedTrip({ tripId, routeIndex }) {
    // start your navigation code
    onStartNavigation(routeIndex);
  },
});

CarPlay.setRootTemplate(mapTemplate);
```

### ListTemplate

![List Template](/.github/images/listTemplate.png)

```jsx
import { CarPlay } from 'react-native-carplay';

const listTemplate = new ListTemplate({
  sections: [],
  title: 'List Template',
  async onItemSelect({ index }) {
    // use the selected index
    setSelected(index);
  },
});

CarPlay.pushTemplate(listTemplate, true);
```

### InformationTemplate

![Information Template](/.github/images/informationTemplate.png)

```jsx
import { CarPlay } from 'react-native-carplay';

const template = new InformationTemplate({
  title: 'Information',
  items: Array.from({ length: 30 }).fill({ title: 'foo', detail: 'bar' }),
  actions: [
    { id: 'u', title: 'Update List' },
    { id: 'r', title: 'Random #:' },
  ],
  onActionButtonPressed(action) {
    console.log('pressed', action);
    if (action.id == 'u') {
      const numOfItems = Math.floor(Math.random() * 6);
      template.updateInformationTemplateItems(
        Array.from({ length: numOfItems }).fill({ title: 'foo', detail: 'bar' }),
      );
    } else if (action.id == 'r') {
      template.updateInformationTemplateActions([
        { id: 'u', title: 'Update List' },
        { id: 'r', title: 'Random #:' + Math.floor(Math.random() * 100) },
      ]);
    }
  },
});

CarPlay.pushTemplate(informationTemplate);
```

### GridTemplate

![Grid Template](/.github/images/gridTemplate.png)

```jsx
import { CarPlay } from 'react-native-carplay';

const gridTemplate = new GridTemplate({
  trailingNavigationBarButtons: [],
  buttons: [
    {
      id: 'List',
      titleVariants: ['List'],
      image: listImage,
    },
    {
      id: 'Grid',
      titleVariants: ['Grid'],
      image: gridImage,
    },
  ],
  title: 'Grid Template',
  onButtonPressed({ id }) {
    // id of button pressed
    setSelected(id);
  },
  onBarButtonPressed({ id }) {
    // id of bar button pressed
    setSelected(id);
  },
});

CarPlay.pushTemplate(gridTemplate, true);
```

### SearchTemplate

![Search Template](/.github/images/searchTemplate.png)

```jsx
const searchTemplate = new SearchTemplate({
  async onSearch(query) {
    // use the query to search
    // and return item array
    return performSearch(query);
  },
  async onItemSelect({ index }) {
    // index of the selected item
    setSelected(index);
  },
  onSearchButtonPressed() {
    // on search button pressed, should display
    // list template with results
    navigation.navigate('List');
  },
});

CarPlay.pushTemplate(searchTemplate, true);
```

### VoiceTemplate

![Voice Template](/.github/images/voiceTemplate.png)

This template is presented via `CarPlay.presentTemplate`. In order to implement voice recognition, take a look at the [`@react-native-voice/voice`](https://github.com/react-native-voice/voice) package.

```jsx
const voiceControlTemplate = new VoiceControlTemplate({
  // pass the control states
  voiceControlStates: [
    {
      identifier: 'TEST',
      image: require('../images/cat.jpg'),
      repeats: true,
      titleVariants: ['Searching...'],
    },
  ],
});

CarPlay.presentTemplate(voiceControlTemplate, true);
```

### AlertTemplate

![Alert Template](/.github/images/alertTemplate.png)

This template is presented via `CarPlay.presentTemplate`.

```jsx
const alertTemplate = new AlertTemplate({
  titleVariants: ['Hello world'],
  actions: [
    {
      id: 'ok',
      title: 'Ok',
    },
    {
      id: 'remove',
      title: 'Remove',
      style: 'destructive',
    },
  ],
  onActionButtonPressed({ id }) {
    // id of the pressed button
    if (id === 'remove') {
      // presentable templates can be
      // dismissed
      CarPlay.dismissTemplate();
    }
  },
});

CarPlay.presentTemplate(alertTemplate);
```

### ActionSheetTemplate

![ActionSheet Template](/.github/images/actionSheetTemplate.png)

This template is presented via `CarPlay.presentTemplate`.

```jsx
const actionSheetTemplate = new ActionSheetTemplate({
  title: 'Example',
  message: 'This is an message for you',
  actions: [
    {
      id: 'ok',
      title: 'Ok',
    },
    {
      id: 'remove',
      title: 'Remove',
      style: 'destructive',
    },
  ],
  onActionButtonPressed({ id }) {
    // the id of the button pressed
  },
});

CarPlay.presentTemplate(actionSheetTemplate);
```

### TabTemplate

![Tab Template](/.github/images/tabTemplate.png)

This template must be set as the root template and cannot be pushed on top of other templates.

```jsx
const template1 = new ListTemplate({
  sections: [
    {
      header: 'Test 1',
      items: [{ text: 'Hello world 1' }],
    },
  ],
  title: 'AA',
});
const template2 = new ListTemplate({
  sections: [
    {
      header: 'Test 2',
      items: [{ text: 'Hello world 3' }],
    },
  ],
  title: 'BB',
});

const tabBarTemplate = new TabBarTemplate({
  templates: [template1, template2],
  onTemplateSelect(e: any) {
    console.log('selected', e);
  },
});

CarPlay.setRootTemplate(tabBarTemplate);
```

## Troubleshooting

### Image Size and Resolution

Quirks observed where PNG image resolutions should be specfied with scale factor of 3.0 (i.e. append with `@3x`) with ListTemplate image sizing suggested around 80 x 80 px per [Issue #6](https://github.com/birkir/react-native-carplay/issues/6)
