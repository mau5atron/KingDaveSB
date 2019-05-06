import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./src/components/Home/Home";



const AppStack = createStackNavigator(
  {
    Home: HomeScreen
  },
)

export default createAppContainer(createSwitchNavigator(
  {
    App: AppStack
  },
  
  {
    initialRouteName: 'App'
  }
));