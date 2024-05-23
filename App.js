import "react-native-gesture-handler";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, Text, I18nManager, StatusBar, TouchableOpacity,ImageBackground,ScrollView  } from 'react-native'
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
import { createStackNavigator } from '@react-navigation/stack';
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
import Acil from "./screens/Acil";
import User from "./screens/User";
import Ilan from "./screens/Ilan";
import Servislar from "./screens/Servislar";
import Alisverish from "./screens/Akisveris";
import Tum from "./screens/Alisveris/Tum";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Acil" component={Acil} options={{ headerShown: false }} />
    </Stack.Navigator>
    
    </>
  );
};

const AkisverisStack = () => {
  return (
  <Stack.Navigator initialRouteName="Alisverish">
    <Stack.Screen name="Alisverish" component={Alisverish} options={{ headerShown: false }} />
    <Stack.Screen name="Tum" component={Tum} options={{ headerShown: false }} />
  </Stack.Navigator>
  );
}

const DrawerNavigator = () => {
  const navigation = useNavigation();

  return (
    
      
    <Drawer.Navigator
      drawerContent={
        (props) => {
          const navigation = useNavigation();
          return (
            <SafeAreaView style={{ backgroundColor: '#40679E', height: '29%', }} >
               <ImageBackground  style={{ flex: 1, resizeMode: 'cover' }}>
              <DrawerItemList {...props} />

              <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" style={{ position: 'absolute', top: 18, right: 20 }} />
              <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" style={{ position: 'absolute', top: 76, right: 20 }} />
              <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" style={{ position: 'absolute', top: 134, right: 20 }} />
              <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" style={{ position: 'absolute', top: 193, right: 20 }} />
              </ImageBackground>
            </SafeAreaView>
          );
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
        headerTitleStyle: {
          fontWeight: '100'
        },
        headerTintColor: '#fff',
        drawerActiveTintColor: "black",
        drawerItemStyle: {
          marginBottom: -12,
          marginLeft: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc'
        },
        drawerLabelStyle: {
          color: "#111",
        }
      }}>

      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerLabel: "Anasayfa",
          drawerLabelStyle: { position: 'relative', left: -20, color: '#fff' },
          title: "sahibindan.com",
          drawerBackgroundColor: '#00bfff',
          drawerIcon: () => (
            <MaterialCommunityIcons name="home" size={24} color={'#fff'} style={{
              padding: 4,
            }} />
          ),
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          drawerContent: ({ navigation }) => {
            const insets = useSafeAreaInsets();

            return (
              <View style={{ flex: 1, backgroundColor: '#00bfff', padding: 20, paddingTop: insets.top }}>
                <Image
                  source={require('./icons/home1.jpg')}

                />
                <DrawerItems {...props} />
              </View>
            );
          },
          drawerItemStyle: {
            borderBottomWidth: 0,
          },
        }}
      />
      <Drawer.Screen
        name="Bana"
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16, color: '#fff' }}>Bana Ozel</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
          title: "Kategori seçimi",
          drawerIcon: () => (
            <FontAwesome name="user" size={24} color="#fff"
              style={{
                padding: 4
              }} />
          ),
          drawerItemStyle: {
            borderBottomWidth: 0,
          },

        }}

        component={User}
      />
      <Drawer.Screen
        name="Ilan"
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16, color: "#fff" }}>Ilan var</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
          title: "Kategori seçimi",
          drawerIcon: () => (
            <FontAwesome name="home" size={24} color="#fff"
              style={{
                padding: 4
              }} />
          ),
          drawerItemStyle: {
            borderBottomWidth: 0,
          },
        }}
        component={Ilan}
      />
      <Drawer.Screen
        name="Servislar"
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16, color: "#fff" }}>Servislar</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
          title: "Kategori seçimi",
          drawerIcon: () => (
            <FontAwesome name="home" size={24} color="#fff"
              style={{
                padding: 4
              }} />

          ),

          drawerItemStyle: {
            borderBottomWidth: 0,
          },
        }}
        component={Servislar}
      />
      <Drawer.Screen
        name="Emlak"
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>Emlak</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>konut, is, yeri, Arsa, Konut Projeleri, Bina, Devre Mu...</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
          title: "Kategori seçimi",
          drawerIcon: () => (
            <FontAwesome name="home" size={24} color="#fff" backgroundColor='#DD761C'
              style={{
                padding: 4,
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
        component={Vasita}
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>Vasita</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>Otomobil, Arazi, SUV & Pickup, Motosiklet, MIniva...</Text>
            </View>
          ),
          title: "Kategori seçimi",
          drawerIcon: () => (
            <MaterialCommunityIcons name="steering" size={24} color="#fff" backgroundColor="red"
              style={{
                padding: 6,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20
              }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Yedek"
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>Yedek</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>Otomotiv Ekipmanlari, Motosiklet Ekipmanlari, De...</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
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
        name="Alisverish"
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>ikinci El ve Sifir Alisveris</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>Bilgisayar, Cep Telefonu, Fotograf & kamera, Ev De...</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
          title: "ikinci El ve Sifir Alisveris",
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
        component={AkisverisStack}
      />
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>is Makineleri & Sanayi</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>is makineleri,Tarim Makineleri, Sanayi, Elektrik & E...</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
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
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>Ustalar ve Hizmetler</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>Ev Tadilat & Dekorasyon, Nakiliye, Arac Servis & B...</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
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
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>Ozel Ders Verenler</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>Lise & Universite, ilkokul & Ortaokul, Yabanci Dil, B...</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
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
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>is ilanlari</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>Avukatlik & Hukuki Danismanlik, Egitim, Eglence & ...</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
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
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>Yardimci Arayanlar</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>ebek & cucuk Bakicisi, Yasli & Hasta Bakicisi, Temi...</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
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
          drawerLabel: () => (
            <View style={{ flexDirection: 'column', position: 'relative', left: -20 }}>
              <Text style={{ fontSize: 16 }}>Hayvanlar Alemi</Text>
              <Text style={{ fontSize: 12, color: '#bbb', width: 500 }}>Evci Hayvanlar, Akvaryum Baliklari, Aksesuarlar, Ba ...</Text>
            </View>
          ),
          drawerLabelStyle: { position: 'relative', left: -20 },
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
    
  );
};

if (I18nManager.isRTL) {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);
  Updates.reloadAsync().then();
}

export default function App() {
  return (
    <NavigationContainer>

      <StatusBar barStyle="light-content" backgroundColor="#40679E" />
      <DrawerNavigator />
    </NavigationContainer>
  );
}