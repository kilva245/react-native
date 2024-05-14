import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Text>About Screen</Text>
      <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export { HomeScreen, AboutScreen };