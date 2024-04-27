import { View, Text } from 'react-native'


export default function Customize() {
    return (
      <View style={styles.container}>
        <Text>Customize</Text>
        <StatusBar style="auto" />
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
  