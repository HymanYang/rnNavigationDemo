/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import WelcomePage from './navigation/WelcomePage';
import StackNavigation from './navigation/StackNavigation';
// import MaterialTopTabNavigator from "./navigation/MaterialTopTabNavigator";
// import SwitchFbDemo from "./navigation/SwitchFbDemo";

import AnimatedDemo from './navigation/AnimatedDemo3';
import AsyncStorage from './navigation/AsyncStorage';
import IndexR from './redux/index-r';


AppRegistry.registerComponent(appName, () => IndexR);
