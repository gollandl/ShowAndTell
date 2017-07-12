import {Navigation} from 'react-native-navigation';

import WixScreen from './WixScreen';
import rnnScreen from './rnnScreen';
import rnnLink from './rnnLink';
import sideMenu from './sideMenu';

export default function registerScreens() {
  Navigation.registerComponent('WixScreen', () => WixScreen);
  Navigation.registerComponent('rnnScreen', () => rnnScreen);
  Navigation.registerComponent('rnnLink', () => rnnLink);
  Navigation.registerComponent('sideMenu', () => sideMenu);
}
