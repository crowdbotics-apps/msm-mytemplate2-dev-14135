import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView13334Navigator from '../features/CalendarView13334/navigator';
import BlankScreen413333Navigator from '../features/BlankScreen413333/navigator';
import BlankScreen513332Navigator from '../features/BlankScreen513332/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView13334: { screen: CalendarView13334Navigator },
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
