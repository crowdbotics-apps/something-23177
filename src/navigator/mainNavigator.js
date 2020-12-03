import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps31181845Navigator from '../features/Maps31181845/navigator';
import BlankScreen17181844Navigator from '../features/BlankScreen17181844/navigator';
import Settings181829Navigator from '../features/Settings181829/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
