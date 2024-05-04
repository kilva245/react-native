import "react-native-gesture-handler";
import { View, Text, I18nManager, StatusBar, TouchableOpacity } from 'react-native'
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign
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
      <StatusBar barStyle="light-content" backgroundColor="#5755FE" />
      <Drawer.Navigator
        drawerContent={
          (props) => {
            const navigation = useNavigation();
            return (
              <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#5755FE' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                        <SimpleLineIcons name="home" size={20} color="#fff" />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 3, marginLeft: 20, color: 'white' }}>Home Screen</Text>
                      </View>
                      <AntDesign name="right" size={20} color="#fff" fontWeight="bold" />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#5755FE' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                        <SimpleLineIcons name="home" size={20} color="#fff" />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 3, marginLeft: 20, color: 'white' }}>Home Screen</Text>
                      </View>
                      <AntDesign name="right" size={20} color="#fff" fontWeight="bold" />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#5755FE' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                        <SimpleLineIcons name="home" size={20} color="#fff" />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 3, marginLeft: 20, color: 'white' }}>Home Screen</Text>
                      </View>
                      <AntDesign name="right" size={20} color="#fff" fontWeight="bold" />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, backgroundColor: '#5755FE' }}>
                  <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                        <SimpleLineIcons name="home" size={20} color="#fff" />
                        <Text style={{ fontSize: 12, fontWeight: 'bold', marginTop: 3, marginLeft: 20, color: 'white' }}>Home Screen</Text>
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
            width: 250,
          },
          headerStyle: {
            backgroundColor: '#5755FE',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: "bold"
          },
          drawerActiveTintColor: "blue",
          drawerLabelStyle: {
            color: "#111"
          }
        }}
      >

        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "sahibinden.com",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            ),

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
          name="Get Premium"
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