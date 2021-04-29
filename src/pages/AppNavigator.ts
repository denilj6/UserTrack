
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoadingPage from './LoadingPage';
import PermissionPage from './PermissionPage'
import HomePage from './HomePage'


export const navigator = {
    LoadingPage: {
      screen: LoadingPage,
      navigationOptions: {
        headerShown: false
      }
    },
    PermissionPage: {
      screen: PermissionPage,
      navigationOptions: {
        headerShown: false
      }
    },
    HomePage:{screen: HomePage,
      navigationOptions: {
        headerShown: false
      }
    },
  };
  
  const AppNavigator = createStackNavigator(
    navigator, {
    initialRouteName: 'LoadingPage',
    gesturesEnabled: false,  
  }
  );
  
  
  export default createAppContainer(AppNavigator);