import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Avatar from '../components/Header/Avatar';

const Stack = createStackNavigator();

function MainStack({user}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: false,
          headerTitle: null,
          headerLeft: () => <Avatar image={user.photo} />,
          headerStyle: {
            height: 60,
            backgroundColor: 'transparent',
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
