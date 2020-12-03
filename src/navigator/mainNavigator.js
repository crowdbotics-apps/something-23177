import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth36181860Navigator from '../features/EmailAuth36181860/navigator';
import EmailAuth37181859Navigator from '../features/EmailAuth37181859/navigator';
import EmailAuth38181858Navigator from '../features/EmailAuth38181858/navigator';
import Messaging18181857Navigator from '../features/Messaging18181857/navigator';
import Messaging19181856Navigator from '../features/Messaging19181856/navigator';
import Messaging20181855Navigator from '../features/Messaging20181855/navigator';
import Messaging21181854Navigator from '../features/Messaging21181854/navigator';
import Messaging22181853Navigator from '../features/Messaging22181853/navigator';
import Messaging23181852Navigator from '../features/Messaging23181852/navigator';
import Messaging24181851Navigator from '../features/Messaging24181851/navigator';
import Messaging25181850Navigator from '../features/Messaging25181850/navigator';
import Messaging26181849Navigator from '../features/Messaging26181849/navigator';
import Messaging27181848Navigator from '../features/Messaging27181848/navigator';
import Messaging28181847Navigator from '../features/Messaging28181847/navigator';
import Messaging29181846Navigator from '../features/Messaging29181846/navigator';
import Maps31181845Navigator from '../features/Maps31181845/navigator';
import BlankScreen17181844Navigator from '../features/BlankScreen17181844/navigator';
import Settings181829Navigator from '../features/Settings181829/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth36181860: { screen: EmailAuth36181860Navigator },
EmailAuth37181859: { screen: EmailAuth37181859Navigator },
EmailAuth38181858: { screen: EmailAuth38181858Navigator },
Messaging18181857: { screen: Messaging18181857Navigator },
Messaging19181856: { screen: Messaging19181856Navigator },
Messaging20181855: { screen: Messaging20181855Navigator },
Messaging21181854: { screen: Messaging21181854Navigator },
Messaging22181853: { screen: Messaging22181853Navigator },
Messaging23181852: { screen: Messaging23181852Navigator },
Messaging24181851: { screen: Messaging24181851Navigator },
Messaging25181850: { screen: Messaging25181850Navigator },
Messaging26181849: { screen: Messaging26181849Navigator },
Messaging27181848: { screen: Messaging27181848Navigator },
Messaging28181847: { screen: Messaging28181847Navigator },
Messaging29181846: { screen: Messaging29181846Navigator },
Maps31181845: { screen: Maps31181845Navigator },
BlankScreen17181844: { screen: BlankScreen17181844Navigator },
Settings181829: { screen: Settings181829Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
