import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';
import Authentication from "./src/components/Authentication";
import Home from "./src/components/Home";
import Loading from "./src/components/Loading";
import Settings from "./src/components/Settings";
import Item from "./src/components/Item";
import FlashMessage from "react-native-flash-message";
import store from "./src/data/store";

const homeStack = createStackNavigator({
  Home,
  Item
},
{
  headerMode: "none"
});

homeStack.navigationOptions = {
  title: "Accueil",
  tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={32} color={tintColor} />
}

Settings.navigationOptions = {
  title: "Paramètres",
  tabBarIcon: ({ tintColor }) => <Ionicons name="md-settings" size={32} color={tintColor} />
}

const bottomTabNavigator = createBottomTabNavigator({
  homeStack,
  Settings
});

const switchNavigator = createSwitchNavigator({
  Loading,
  Authentication,
  Home: bottomTabNavigator
});

const App = createAppContainer(switchNavigator);

const Root = props => (
  <View style={{flex: 1}}>
    <Provider store={store}>
      <App />
      <FlashMessage position="top" />
    </Provider>
  </View>
);

export default Root;
