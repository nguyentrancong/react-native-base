// import {View, Text, Image, SafeAreaView} from 'react-native';
// import React from 'react';
// import MainNavigation from './navigation/MainNavigation';

// const App = () => {
//   return (
//     <SafeAreaView>
//       <Text>App</Text>
//       <Image source={require('@assets/icon/ic_home_black1x.png')} />
//       <MainNavigation />
//     </SafeAreaView>
//   );
// };

// export default App;
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
