import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

registerScreens();

      Navigation.startTabBasedApp({
        tabs: [
          {
            label: 'Home',
            screen: 'WixScreen',
            title: 'Wix Navigation Library',
            icon: require('../images/homeicon.png'),
            navigatorButtons: {
              leftButtons: [
                {
                  icon: require('../images/iosmenu.png'),
                }
              ]
            }
          },
          {
            label: 'GitHub',
            screen: 'rnnLink',
            title: 'GitHub Repo',
            icon: require('../images/githubicon.png')
          }
        ],
        drawer: {
          left: {
            screen: 'sideMenu'
          },
          disableOpenGesture: true
        }
      });
