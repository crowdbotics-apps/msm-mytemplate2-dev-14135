import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen013338Navigator from '../features/BlankScreen013338/navigator';
import BlankScreen413333Navigator from '../features/BlankScreen413333/navigator';
import BlankScreen513332Navigator from '../features/BlankScreen513332/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen013338: { screen: BlankScreen013338Navigator },
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
