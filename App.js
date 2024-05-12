import "react-native-gesture-handler";
import { View, Text, I18nManager, StatusBar, TouchableOpacity } from 'react-native'
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  FontAwesome6,
  Entypo,
  FontAwesome5,
  Ionicons
} from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import Backups from "./screens/Backups";
import Home from "./screens/Home";
import Yedek from "./screens/Yedek";
import RateApp from "./screens/RateApp";
import Contact from "./screens/Contact";
import Settings from "./screens/Settings";
import Vasita from "./screens/Vasita";
import GetPremium from "./screens/GetPremium";
import Customize from "./screens/Customize";
import Emlak from "./screens/inner/Emlak";
import Hayvanlar from "./screens/Hayvanlar";


const Drawer = createDrawerNavigator()


if (I18nManager.isRTL) {

  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);
  Updates.reloadAsync().then();
}


export default function App() {
  return (
    <NavigationContainer >
      <StatusBar barStyle="light-content" backgroundColor="#40679E" />
      <Drawer.Navigator
        drawerContent={
          (props) => {
            const navigation = useNavigation();
            return (
              <SafeAreaView style={{backgroundColor: '#40679E', height: '20%'}}>
               

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 17,  }}>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                        <FontAwesome6 name="person" size={30} color="#fff" />
                        <Text style={{ fontSize: 14, marginTop: 3, marginLeft: 30, color: 'white' }}>Bana Ozel</Text>
                      </View>
                      <AntDesign name="right" size={20} color="#fff" fontWeight="bold" />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 7, paddingRight: 20, backgroundColor: '#40679E' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                        <Entypo name="plus" size={40} color="#fff" />
                        <Text style={{ fontSize: 14, marginTop: 3, marginLeft: 20, color: 'white' }}>ilan var</Text>
                      </View>
                      <AntDesign name="right" size={20} color="#fff" fontWeight="bold" />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 17, backgroundColor: '#40679E' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                        <FontAwesome6 name="rotate" size={24} color="#fff" />
                        <Text style={{ fontSize: 14, marginTop: 3, marginLeft: 25, color: 'white' }}>Servisler</Text>
                      </View>
                      <AntDesign name="right" size={20} color="#fff" fontWeight="bold" />
                    </View>
                  </TouchableOpacity>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }


        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 350,
            
          },
          headerStyle: {
            backgroundColor: '#40679E',
          },
          headerTitleStyle:{
            fontWeight: '100'
          },
          headerTintColor: '#fff',
          drawerActiveTintColor: "black",
          drawerItemStyle:{
            marginBottom: -5,
            marginLeft: 0,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc'
          },
          drawerLabelStyle: {
            color: "#111",
          }
        }}
      >
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "anasayfa",
            title: "sahibinden.com",
            drawerIcon: () => (
              <FontAwesome5 name="home" size={20} color="#808080"  />
            ),
            description: "Buy and sell properties with ease",

          }}
          component={Home}
        />
        <Drawer.Screen
          name="Emlak"
          options={{
            drawerLabel: "Emlak",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "Kategori seçimi",
            drawerIcon: () => (
              <FontAwesome name="home" size={24} color="#fff" backgroundColor='#DD761C'
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
            ),
            description: "Buy and sell properties with ease",

          }}
          component={Emlak}
        />
        <Drawer.Screen
          name="Vasita"
          options={{
            drawerLabel: "Vasita",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "Kategori seçimi",
            
            drawerIcon: () => (
              <MaterialCommunityIcons name="steering" size={24} color="#fff" backgroundColor="red"
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
            ),
          }}
          component={Vasita}
        />

        <Drawer.Screen
          name="Yedek"
          options={{
            drawerLabel: "Yedek Parca, Aksesuar, Donanim & Tuning",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "Kategori seçimi",
            drawerIcon: () => (
              <MaterialCommunityIcons name="tools" size={24} color="#fff" backgroundColor="#5DEBD7"
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
            ),
          }}
          component={Yedek}
        />

        <Drawer.Screen
          name="customize"
          options={{
            drawerLabel: "customize",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "customize",
            drawerIcon: () => (
              <FontAwesome name="shopping-cart" size={24} color="#fff" backgroundColor="#576CBC"
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
            ),
          }}
          component={Customize}
        />

        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "settings",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "settings",
            drawerIcon: () => (
              <MaterialCommunityIcons name="tractor" size={24} color="#fff" backgroundColor="#B931FC"
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
            ),
          }}
          component={Settings}
        />
        <Drawer.Screen
          name="backups"
          options={{
            drawerLabel: "backups",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "backups",
            drawerIcon: () => (
              <MaterialCommunityIcons name="brush-variant" size={24} color="#fff" backgroundColor="#03AED2"
              style={{
                padding: 6,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20
              }} />
            ),
          }}
          component={Backups}
        />
        <Drawer.Screen
          name="GetPremium"
          options={{
            drawerLabel: "Get Premium",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "Get Premium",
            drawerIcon: () => (
              <MaterialCommunityIcons name="book-open-variant" size={24} color="#fff" backgroundColor="#41B06E"
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
            ),
          }}
          component={GetPremium}
        />

        <Drawer.Screen
          name="Rate this App"
          options={{
            drawerLabel: "Rate this App",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "Rate this App",
            drawerIcon: () => (
              <Ionicons name="person" size={24} color="#fff" backgroundColor="#41B06E"
              style={{
                padding: 6,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20
              }} />
            ),
          }}
          component={RateApp}
        />
        <Drawer.Screen
          name="contact"
          options={{
            drawerLabel: "contact",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "contact",
            drawerIcon: () => (
              <MaterialCommunityIcons name="baby-carriage" size={24} color="#fff" backgroundColor="#FFAF61"
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
            ),
          }}
          component={Contact}
        />
        <Drawer.Screen
          name="hayvalar"
          options={{
            drawerLabel: "Hayvanlar Alemi",
            drawerLabelStyle:{position: 'relative', left: -20},
            title: "contact",
            drawerIcon: () => (
              <FontAwesome name="paw" size={24} color="#fff" backgroundColor="#03AED2"
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
            ),
          }}
          component={Hayvanlar}
        />






      </Drawer.Navigator>
    </NavigationContainer>
  );
}