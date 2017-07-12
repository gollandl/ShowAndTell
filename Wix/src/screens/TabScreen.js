import { Navigation } from 'react-native-navigation';
import registerScreens from '../screens';

registerScreens();

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Tab One',
      screen: 'WixScreen',
    },
    {
      label: 'Tab Two',
      screen: 'rnnScreen',
    }
  ]
});
