import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from "./src/components/Home/Home";

const commonNavigationOptions = {
  title: '👑 Young King Dave Sound Board 👑',

  headerTitleStyle: {
    fontStyle: 'oblique',
    color: 'white'
  },

  headerBackground: (
    <LinearGradient 
      colors={[
        '#42275a',
        '#734b6d'
      ]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
    >

    </LinearGradient>
  )
}

const AppStack = createStackNavigator(
  {
    Home: HomeScreen
  },

  {
    defaultNavigationOptions: commonNavigationOptions
  }
)

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack
  },

  {
    initialRouteName: 'App',
  }
));