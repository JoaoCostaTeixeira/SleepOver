import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import AppNavigator from './AppNavigator';
import LinksScreen from '../screens/LinksScreen';

const LogNavigator = createStackNavigator ({
        Login : {screen: Login},
        Register:{screen: Register},
        AppNavigator: {screen: AppNavigator}
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    });

const LogNav = createAppContainer(LogNavigator);
export default LogNav;