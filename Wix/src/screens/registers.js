import {Navigation} from 'react-native-navigation';

import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import Push from './types/Push';
//import Welcome from './Welcome';
//import app from '../app';
//import TabScreen from './TabScreen';

export default function registerScreensTabs() {
  Navigation.registerComponent('ScreenOne', () => ScreenOne);
  Navigation.registerComponent('ScreenTwo', () => ScreenTwo);
  Navigation.registerComponent('Push', () => Push);
  //Navigation.registerComponent('Welcome', () => Welcome);
  //Navigation.registerComponent('app', () => app);
  //Navigation.registerComponent('TabScreen', () => TabScreen);
}
