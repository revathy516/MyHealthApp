import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import HealthConcernsScreen from './src/screens/HealthConcernsScreen';
import DietScreen from './src/screens/DietScreen';
import AllergiesScreen from './src/screens/AllergiesScreen';
import LifestyleScreen from './src/screens/LifestyleScreen';
import SummaryScreen from './src/screens/SummaryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="HealthConcerns" component={HealthConcernsScreen} />
        <Stack.Screen name="Diet" component={DietScreen} />
        <Stack.Screen name="Allergies" component={AllergiesScreen} />
        <Stack.Screen name="Lifestyle" component={LifestyleScreen} />
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
