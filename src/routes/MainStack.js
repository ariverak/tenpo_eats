import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

function MainStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'silver', //Set Header color
            height: 60,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
