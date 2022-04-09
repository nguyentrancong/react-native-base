import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <Image source={require('@assets/icon/ic_home_black1x.png')} />
    </SafeAreaView>
  );
};

export default App;
