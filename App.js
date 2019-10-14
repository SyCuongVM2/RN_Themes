import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { ThemeContextProvider } from './src/core/themeProvider';
import MainScreen from './src/screens/Main';
import SettingsScreen from './src/screens/Settings';
import TabBar from './src/components/TabBar';

const TabNavigator = createBottomTabNavigator(
  {
    Main: MainScreen,
    Settings: SettingsScreen
  },
  {
    tabBarComponent: props => <TabBar {...props} />
  }
);
const AppContainer = createAppContainer(TabNavigator);

const App = () => {
  return (
    <ThemeContextProvider>
      <AppContainer />
    </ThemeContextProvider>
  )
}

export default App;