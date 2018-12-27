import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from './signin/signin';
import HomeScreen from './home/home';
import AuthLoadingScreen from './authLoading';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

