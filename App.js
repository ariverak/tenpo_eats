import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import 'react-native-gesture-handler';
import useAuth from './src/hooks/useAuth';
import Loading from './src/components/Loading';

const App = () => {
  const {user} = useAuth();
  if (user) {
    return (
      <NavigationContainer>
        <MainStack user={user} />
      </NavigationContainer>
    );
  }
  return <Loading />;
};

export default App;
