import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const HomeScreen: React.FC<Props> = props => {
  return (
    <View style={styles.contain}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
