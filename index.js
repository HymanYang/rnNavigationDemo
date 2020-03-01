/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import HomePage from './navigation/HomePage';
import StackNavigation from './navigation/StackNavigation';
// import MaterialTopTabNavigator from "./navigation/MaterialTopTabNavigator";
// import SwitchFbDemo from "./navigation/SwitchFbDemo";


AppRegistry.registerComponent(appName, () => StackNavigation);
