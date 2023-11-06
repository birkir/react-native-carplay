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

### CarPlay specific setup (iOS)

Refer to the [Apple CarPlay](/CarPlay.md#installing) documentation to complete the iOS setup.

### Android Auto specific setup

Refer to the [Android Auto](/AndroidAuto.md#installing) documentation to complete the Android setup.

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

Refer to [CarPlay Usage](/CarPlay.md#usage) or [Android Auto Usage](/AndroidAuto.md#usage) for examples and API details.

## Example App

Browse the example app source code [here](/apps/example/).

To run the example app you must first install dependencies and cocoapods.

```bash
# 1. Clone the repository
git clone https://github.com/birkir/react-native-carplay.git

cd react-native-carplay/apps/example

# 2. Install dependencies
yarn install

# 3. Install cocoapods
npx pod-install

# 4. Run the ios or android app
yarn run ios|android
```

## Declerative vs Imperative

This library is a wrapper around the template based native CarPlay and Android Auto SDKs.

We offer imperative APIs as these templates are not meant to be continuously updated, as that would go against the laws of car displays. Each platform offers APIs to update limited parts of the templates for [limited number of times](https://developer.android.com/static/training/cars/Android%20for%20Cars%20App%20Library%20design%20guidelines.pdf#page=11&zoom=100,0,0), which we expose as well.

As such, we only offer imperative APIs, but we do offer a declarative React for the map screens, where there are no restrictions on UI refreshness.

We are open to adding more declarative APIs as we see fit and as the community requests where it makes sense.

## Contributing

Contributions are welcome! Please read our contributing guidelines and code of conduct.

![List of contributors](https://contrib.rocks/image?repo=birkir/react-native-carplay)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
