import { View, Text, StyleSheet } from 'react-native'


export default function Customize() {
    return (
      <View style={styles.container}>
        <Text>Customize</Text>
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
  