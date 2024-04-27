import "react-native-gesture-handler";
import { View, Text } from 'react-native'
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons"
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
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



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          backgroundColor: "#fff",
          width: 250,
        },
        headerStyle:{
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
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
          title:"Home",
          drawerIcon: () => {
            <SimpleLineIcons name="Home" size={20} color="#808080" />
          },
        }}
        component={Home}
        />

      </Drawer.Navigator>
    </NavigationContainer>
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
