# React Native CarPlay and Android Auto

Extend your React Native applications to car infotainment systems with `react-native-carplay`. Now supporting both Apple CarPlay and Android Auto.

### CarPlay

![CarPlay Demo](https://media.giphy.com/media/Ffa4hukA3YMLh6U8fl/giphy.gif)

### Android Auto

![Android Auto Demo](https://media.giphy.com/media/jAml2yehNwQ1mjFnxK/giphy.gif)

## Discord Channel

Come join us on our discord channel: https://discord.gg/b235pv6QHM

## Minimum version target requirements

- Minimum iOS target is 14
- Minimum Android target is 30
- _No Expo support due to Scenes_

## Installing

Add `react-native-carplay` to your project:

```bash
# via yarn
yarn add react-native-carplay --save

# or via npm
npm install react-native-carplay --save
```

### CarPlay Specific Setup (iOS)

Refer to the [CarPlay Documentation](/CarPlay.md#installing) for detailed setup instructions for iOS.

### Android Auto Specific Setup

Refer to the [Android Auto Documentation](/AndroidAuto.md#installing) for detailed setup instructions for Android.

## Basic Usage

This is the most basic example of how to use this library. Create templates and then push/pop them to the navigation stack natively.

```jsx
import { CarPlay, GridTemplate } from 'react-native-carplay';

// Creates your template in the car app on the fly.
const template = new GridTemplate({
  title: 'Hello, World',
});

// Sets the root template for your car app.
CarPlay.setRootTemplate(template);
```

For more examples and detailed API usage, refer to [CarPlay Usage](/CarPlay.md#usage) and [Android Auto Usage](/AndroidAuto.md#usage).

## CarPlay API

For more details on the CarPlay API, refer to the CarPlay API Docs.

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

### CarPlay.presentTemplate

Present a template modally (Alerts and ActionSheets)

```tsx
CarPlay.presentTemplate(template, /* animated */ true);
```

### CarPlay.dismissTemplate

Dismisses the current presented template

```tsx
CarPlay.dismissTemplate(/* animated */ true);
```

### CarPlay.registerOnConnect

Register event listener for when CarPlay connects.

```tsx
CarPlay.registerOnConnect(() => {
  console.log('CarPlay connected');
  CarPlay.setRootTemplate(/* template */);
});
```

## Example App

Browse the example app source code [here](/apps/example/).

To run the example app:

```bash
# Clone the repository
git clone https://github.com/birkir/react-native-carplay.git

# Navigate to the example directory
cd react-native-carplay/apps/example

# Install dependencies
yarn install

# Install Cocoapods
npx pod-install

# Run the iOS or Android app
yarn run ios|android
```

## Declarative vs. Imperative

This library is a wrapper around the template-based native CarPlay and Android Auto SDKs.

We provide imperative APIs, as native templates are not designed for continuous updates, which would conflict with car display regulations. We expose limited template update capabilities [as allowed](https://developer.android.com/static/training/cars/Android%20for%20Cars%20App%20Library%20design%20guidelines.pdf#page=11&zoom=100,0,0) by each platform.

Declarative React is available for map screens where UI freshness is unrestricted.

We are open to expanding our declarative APIs in response to community feedback and where it aligns with platform constraints.

## Contributing

Contributions are welcome! Please read our contributing guidelines and code of conduct.

A big thank you to all our contributors!

![List of contributors](https://contrib.rocks/image?repo=birkir/react-native-carplay)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
