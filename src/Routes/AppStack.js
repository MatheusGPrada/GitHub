import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home/Home';
import RepositoriesList from '../Pages/RepositoriesList/RepositoriesList';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="RepositoriesList" component={RepositoriesList} />
      </Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
