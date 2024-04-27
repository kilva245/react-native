import { View, Text, StyleSheet } from 'react-native'


export default function Timer() {
    return (
      <View style={styles.container}>
        <Text>Timer</Text>
      </View>
    );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  