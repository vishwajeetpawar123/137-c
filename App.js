import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Homescreen from './screen/home';
import Detailscreen from './screen/details';

export default function App() {
  return <AppContainer/>


}

const appstacknavigator=createStackNavigator(
  {
    Home:{screen:Homescreen,
    navigationOptions:{headerShown:false}},
    Detail:{screen:Detailscreen,}
  },
  {initialRouteName:"home"}
)

const AppContainer=createAppContainer(appstacknavigator)