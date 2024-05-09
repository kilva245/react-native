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
  FontAwesome5
} from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import Backups from "./screens/Backups";
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import RateApp from "./screens/RateApp";
import Contact from "./screens/Contact";
import Settings from "./screens/Settings";
import Timer from "./screens/Timer";
import GetPremium from "./screens/GetPremium";
import Customize from "./screens/Customize";


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
              <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingTop: 20, padding: 17, backgroundColor: '#40679E' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                        <SimpleLineIcons name="home" size={20} color="#fff" />
                        <Text style={{ fontSize: 14, marginTop: 3, marginLeft: 30, color: 'white' }}>Anasayfa</Text>
                      </View>
                      <AntDesign name="right" size={20} color="#fff" fontWeight="bold" />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 17, backgroundColor: '#40679E' }}>
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
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerActiveTintColor: "blue",
          drawerItemStyle:{
            marginBottom: 5,
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
            drawerLabel: "Emlak",
            title: "sahibinden.com",
            drawerIcon: () => (
              <FontAwesome5 name="home" size={20} color="#808080"  />
            ),
            description: "Buy and sell properties with ease",

          }}
          component={Home}
        />
        <Drawer.Screen
          name="timer"
          options={{
            drawerLabel: "Timer",
            title: "Timer",
            
            drawerIcon: () => (
              <MaterialIcons name="timer" size={20} color="#808080" />
            ),
          }}
          component={Timer}
        />

        <Drawer.Screen
          name="Categories"
          options={{
            drawerLabel: "Categories",
            title: "Categories",
            drawerIcon: () => (
              <MaterialIcons name="category" size={20} color="#808080" />
            ),
          }}
          component={Categories}
        />

        <Drawer.Screen
          name="customize"
          options={{
            drawerLabel: "customize",
            title: "customize",
            drawerIcon: () => (
              <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
            ),
          }}
          component={Customize}
        />

        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: "settings",
            title: "settings",
            drawerIcon: () => (
              <MaterialIcons name="settings" size={20} color="#808080" />
            ),
          }}
          component={Settings}
        />
        <Drawer.Screen
          name="backups"
          options={{
            drawerLabel: "backups",
            title: "backups",
            drawerIcon: () => (
              <MaterialIcons name="backup" size={20} color="#808080" />
            ),
          }}
          component={Backups}
        />
        <Drawer.Screen
          name="GetPremium"
          options={{
            drawerLabel: "Get Premium",
            title: "Get Premium",
            drawerIcon: () => (
              <MaterialCommunityIcons name="certificate" size={20} color="#808080" />
            ),
          }}
          component={GetPremium}
        />

        <Drawer.Screen
          name="Rate this App"
          options={{
            drawerLabel: "Rate this App",
            title: "Rate this App",
            drawerIcon: () => (
              <FontAwesome name="star" size={20} color="#808080" />
            ),
          }}
          component={RateApp}
        />
        <Drawer.Screen
          name="contact"
          options={{
            drawerLabel: "contact",
            title: "contact",
            drawerIcon: () => (
              <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080" />
            ),
          }}
          component={Contact}
        />






      </Drawer.Navigator>
    </NavigationContainer>
  );
}