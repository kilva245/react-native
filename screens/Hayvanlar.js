import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


export default function Hayvanlar() {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <View style={{ flexDirection: 'row',padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 10 }}>
              <View>
                <Text style={{ fontSize: 14, color: '#1679AB' }}>Tumunu Goster</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <MaterialIcons name="arrow-forward-ios" size={17} color="#1679AB" />
              </View>
            </View>
          </TouchableOpacity>
      </View>
    );
  }
  