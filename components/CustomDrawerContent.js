import { View, Text } from 'react-native';
import { DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: '#5755FE',
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
          sahibinden.com
        </Text>
      </View>
      <DrawerItemList
        {...props}
        renderItem={({ item, focused }) => (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              paddingVertical: 12,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderBottomWidth: focused ? 2 : 0,
                borderBottomColor: '#5755FE',
              }}
            >
              {item.icon}
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: focused ? '#5755FE' : '#111',
                    fontSize: 16,
                    marginLeft: 16,
                  }}
                >
                  {item.label}
                </Text>
                <Text style={{ color: '#808080', fontSize: 14 }}>
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CustomDrawerContent;