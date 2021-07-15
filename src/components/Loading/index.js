import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color="teal" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
