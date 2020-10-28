import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging13336Navigator from '../features/Messaging13336/navigator';
import EmailAuth13335Navigator from '../features/EmailAuth13335/navigator';
import BlankScreen413333Navigator from '../features/BlankScreen413333/navigator';
import BlankScreen513332Navigator from '../features/BlankScreen513332/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging13336: { screen: Messaging13336Navigator },
EmailAuth13335: { screen: EmailAuth13335Navigator },
BlankScreen413333: { screen: BlankScreen413333Navigator },
BlankScreen513332: { screen: BlankScreen513332Navigator },

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
