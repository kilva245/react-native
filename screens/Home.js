import React, { useState, useCallback, Component } from 'react';
import Slider from '@react-native-community/slider';
import { SearchBar } from '@rneui/themed';
import { View, Text, TouchableOpacity, navigation, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  Ionicons,
  AntDesign,
  FontAwesome6,
  Feather
} from "@expo/vector-icons"
import RateApp from './RateApp';
import Acil from './Acil';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const FloatingActionButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#007bff',
      borderRadius: 50,
      padding: 10,
      elevation: 3,
    }}>
      <Feather name="plus" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const data = [
  {
    id: 1,
    image: require('../icons/home4.jpg'),
    title: 'ISTANBUL / SILIVRI -850 m2 -ASF...',
  },
  {
    id: 2,
    image: require('../icons/home3.jpg'),
    title: 'ISTANBUL / SILIVRI -220 m2 -ASF...',
  },
  {
    id: 3,
    image: require('../icons/home1.jpg'),
    title: 'ISTANBUL / SILIVRI -120 m2 -ASF...',
  },
  {
    id: 4,
    image: require('../icons/home2.jpeg'),
    title: 'ISTANBUL / SILIVRI -220 m2 -ASF...',
  },
];



type SearchBarComponentProps = {};

const Home: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFab, setShowFab] = useState(true);

  const handleScroll = useCallback((event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isAtEnd = contentOffset.y + layoutMeasurement.height >= contentSize.height;
    setShowFab(!isAtEnd);
  }, []);

  const handleFabPress = () => {
    navigation.navigate('home');
  };


  const navigation = useNavigation();

  const handleSearchChange = (searchQuery) => {
    setSearchQuery(searchQuery);
  };

  const handlePressMicrophone = () => {
    console.log('Microphone pressed');
  };

  const handlePressBarcode = () => {
    console.log('Barcode pressed');
  };

  return (
    <View>
      
      <ScrollView onScroll={handleScroll}>

        <View style={{ backgroundColor: '#fff' }}>
          <View style={{ margin: 20 }}>
            <SearchBar
              placeholder="Kelime veya ilan No. ile ara"
              onChangeText={handleSearchChange}
              value={searchQuery}
              placeholderTextColor='#bbb'
              inputStyle={{ backgroundColor: '#FFFFFF' }}
              containerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#eee', borderBottomRightRadius: 30, borderBottomLeftRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
              inputContainerStyle={{ backgroundColor: '#FFFFFF', height: 40 }}
              searchIcon={{ size: 30, color: '#999' }}
              rightIconContainerStyle={{ paddingRight: 70 }}
            />
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', right: 20, top: -40 }}>
                <TouchableOpacity onPress={handlePressMicrophone} style={{ marginRight: 20 }}>
                  <FontAwesome name="microphone" size={20} color="#999" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressBarcode}>
                  <MaterialCommunityIcons name="barcode-scan" size={20} color="#999" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20, backgroundColor: '#fff' }}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Emlak')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderColor: '#eee' }}>
                <FontAwesome name="home" size={24} color="#fff" backgroundColor='#DD761C'
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />

                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>Emlak</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>konut, is, yeri, Arsa, Konut Projeleri, Bina, Devre Mulk,Turis...</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('timer')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 5, borderBottomWidth: 1, borderColor: '#eee' }}>
                <MaterialCommunityIcons name="steering" size={24} color="#fff" backgroundColor="red"
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>Vasita</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>Otomobil, Arazi, SUV & Pickup, Motosiklet, MInivan & Pan...</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Yedek')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 5, borderBottomWidth: 1, borderColor: '#eee' }}>
                <MaterialCommunityIcons name="tools" size={24} color="#fff" backgroundColor="#5DEBD7"
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>Yedek Parca, Aksesuar, Donanim & Turing</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>Otomotiv Ekipmanlari, Motosiklet Ekipmanlari, Deniz Araci...</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Alisverish')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 5, borderBottomWidth: 1, borderColor: '#eee' }}>
                <FontAwesome name="shopping-cart" size={24} color="#fff" backgroundColor="#576CBC"
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>ikinci El ve Sifir Alisveris</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>Bilgisayar, Cep Telefonu, Fotograf & kamera, Ev De...</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 5, borderBottomWidth: 1, borderColor: '#eee' }}>
                <MaterialCommunityIcons name="tractor" size={24} color="#fff" backgroundColor="#B931FC"
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>is Makineleri & Sanayi</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>is makineleri, Sanayi, Elektrik & Enerji</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 5, borderBottomWidth: 1, borderColor: '#eee' }}>
                <MaterialCommunityIcons name="brush-variant" size={24} color="#fff" backgroundColor="#03AED2"
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>Ustalar ve Hizmetler</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>Ev Tadilat & Dekorasyon, Nakiliye, Arac Servis & Bakim, Ta...</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 5, borderBottomWidth: 1, borderColor: '#eee' }}>
                <MaterialCommunityIcons name="book-open-variant" size={24} color="#fff" backgroundColor="#41B06E"
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>Ozel Ders Verenler</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>Lise & Universite, ilkokul & Ortaokul, Yabanci Dil, Bilgisayar...</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 5, borderBottomWidth: 1, borderColor: '#eee' }}>
                <Ionicons name="person" size={24} color="#fff" backgroundColor="#41B06E"
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>is ilanlari</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>Avukatlik & Hukuki Danismanlik, Egitim, Eglence & Aktivite...</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 5, borderBottomWidth: 1, borderColor: '#eee' }}>
                <MaterialCommunityIcons name="baby-carriage" size={24} color="#fff" backgroundColor="#FFAF61"
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>Yardimci Arayanlar</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>ebek & cucuk Bakicisi, Yasli & Hasta Bakicisi, Temizlikci...</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 5 }}>
                <FontAwesome name="paw" size={24} color="#fff" backgroundColor="#03AED2"
                  style={{
                    padding: 6,
                    borderBottomLeftRadius: 20,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopRightRadius: 20
                  }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 16 }}>Hayvanlar Alemi</Text>
                  <Text style={{ fontSize: 12, color: '#999' }}>Evci Hayvanlar, Akvaryum Baliklari, Aksesuarlar, Bakim Ur...</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </TouchableOpacity>

          </View>
        </View>
        <View style={{ backgroundColor: '#fff', marginTop: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Acil')} >
          
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: 1, borderColor: '#eee' }}>
              <AntDesign name="exclamation" size={24} color="#fff" backgroundColor="#888"
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16 }}>Acil Acil</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 12, }}>
              <FontAwesome6 name="clock" size={24} color="#fff" backgroundColor="#888"
                style={{
                  padding: 6,
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomRightRadius: 20,
                  borderTopRightRadius: 20
                }} />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 16 }}>Son 48 Saat</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: '#888', position: 'relative', left: 20 }}>ANASAYFA VITRIN</Text>
          <View style={{ backgroundColor: '#fff', padding: 10 }}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              style={styles.container}
            >
              {data.map((item) => (
                <View style={{
                  margin: 10
                }}>
                  <View key={item.id} style={styles.slide}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <View key={item.id} style={styles.slide}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 10 }}>
                <View>
                  <Text style={{ fontSize: 14, color: '#1679AB' }}>Tumunu Goster</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#1679AB" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 17, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee' }}>
                <View style={{
                  width: 80,
                  height: 80,
                }}>
                  <Image source={require("../icons/microsoft.png")}
                    style={{
                      padding: 6,
                      borderBottomLeftRadius: 100,
                      borderTopLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopRightRadius: 100,
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}

                  />
                </View>
                <View style={{ marginLeft: 1 }}>
                  <Text style={{ fontSize: 14, color: '#999' }}>ilgilenebileceginiz ilanlar bu alanda goruntulenir.</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 17, backgroundColor: '#fff' }}>
                <View style={{
                  width: 80,
                  height: 80,
                }}>
                  <Image source={require("../icons/google.png")}
                    style={{
                      padding: 6,
                      borderBottomLeftRadius: 100,
                      borderTopLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopRightRadius: 100,
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%'
                    }}

                  />
                </View>
                <View style={{ marginLeft: 1 }}>
                  <Text style={{ fontSize: 14, color: '#999', width: '100%' }}>Yakininizdaki sahibinden alisveris ilanlarini </Text>
                  <Text style={{ fontSize: 14, color: '#999', width: '100%' }}>gorunuleyebilmeniz icin <Text style={{ color: '#1679AB' }}>Ayarlar > Gizlilik > Konum </Text></Text>
                  <Text style={{ fontSize: 14, color: '#999', width: '100%' }}><Text style={{ color: '#1679AB' }}>Servisleri</Text>menusunden konum izni vermeniz</Text>
                  <Text style={{ fontSize: 14, color: '#999', width: '100%' }}>gerekmektedir</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 20, width: '100%' }}>
          <Text style={{ color: '#888', position: 'relative', left: 20, marginBottom: 8 }}>SON ARAMANIZA UYGUN ILANLAR</Text>
          <View style={{ backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10, width: '100%' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 6, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee' }}>
                <View style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  borderLeftWidth: 1,
                  borderColor: '#888',
                }}>
                  <Image source={require("../icons/home1.jpg")}
                    style={{
                      padding: 6,
                      objectFit: 'cover',
                      width: 110,
                      height: 90,
                    }}

                  />
                </View>
                <View style={{ marginLeft: 6, width: '100%' }}>
                  <Text style={{ fontSize: 12, color: '#101010', position: 'relative', top: -10 }}>Daire Fiyatina Bahceli Ev ilce Merkezinde</Text>
                  <View style={{ position: 'relative', top: 18, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <FontAwesome6 name='location-dot' size={15} color='#888' />
                      <Text style={{ marginLeft: 5, color: '#888' }}>Balikesir, Gonen</Text>
                    </View>
                    <Text style={{ color: '#1679AB', fontSize: 16, position: 'absolute', right: 0 }}>2,050,000 TL</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 6, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee' }}>
                <View style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  borderLeftWidth: 1,
                  borderColor: '#888',
                }}>
                  <Image source={require("../icons/home2.jpeg")}
                    style={{
                      padding: 6,
                      objectFit: 'cover',
                      width: 110,
                      height: 90,
                    }}

                  />
                </View>
                <View style={{ marginLeft: 6, width: '100%' }}>
                  <Text style={{ fontSize: 13, color: '#101010', position: 'relative', top: -15 }}>ISTANBUL / SILIVRI - 850 M2 -ASFALT CEPHELI</Text>
                  <Text style={{ fontSize: 13, color: '#101010', position: 'relative', top: -15 }}>-BEKIRLI MAHALLESI</Text>
                  <View style={{ position: 'relative', top: 18, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <FontAwesome6 name='location-dot' size={15} color='#888' />
                      <Text style={{ marginLeft: 5, color: '#888' }}>istanbul, silivri</Text>
                    </View>
                    <Text style={{ color: '#1679AB', fontSize: 16, position: 'absolute', right: 0 }}>3,300,000 TL</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 6, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee' }}>
                <View style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  borderLeftWidth: 1,
                  borderColor: '#888',
                }}>
                  <Image source={require("../icons/home3.jpg")}
                    style={{
                      padding: 6,
                      objectFit: 'cover',
                      width: 110,
                      height: 90,
                    }}

                  />
                </View>
                <View style={{ marginLeft: 6, width: '100%' }}>
                  <Text style={{ fontSize: 13, color: '#101010', position: 'relative', top: -10 }}>Daire Fiyatina Bahceli Ev ilce Merkezinde</Text>
                  <View style={{ position: 'relative', top: 10, width: 100 }}>
                    <Text style={{ backgroundColor: '#eee', position: 'relative', fontSize: 12, color: '#555', paddingLeft: 15 }}>
                      Premium Ofis
                    </Text>
                  </View>
                  <View style={{ position: 'relative', top: 26, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <FontAwesome6 name='location-dot' size={15} color='#888' />
                      <Text style={{ marginLeft: 5, color: '#888' }}>Tekirdag, Saray</Text>
                    </View>
                    <Text style={{ color: '#1679AB', fontSize: 16, position: 'absolute', right: 0 }}>5,750,000 TL</Text>
                  </View>
                </View>

              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 17, paddingBottom: 10 }}>
                <View>
                  <Text style={{ fontSize: 14, color: '#1679AB' }}>Tumunu Goster</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#1679AB" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 20, width: '100%' }}>
          <Text style={{ color: '#888', position: 'relative', left: 20, marginBottom: 8 }}>SON GEZDIGINIZ ILANLAR</Text>
          <View style={{ backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10, width: '100%' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 6, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee' }}>
                <View style={{
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  borderLeftWidth: 1,
                  borderColor: '#888',
                }}>
                  <Image source={require("../icons/car1.webp")}
                    style={{
                      padding: 6,
                      objectFit: 'cover',
                      width: 110,
                      height: 90,
                    }}

                  />
                </View>
                <View style={{ marginLeft: 6, width: '100%' }}>
                  <Text style={{ fontSize: 13, color: '#101010', position: 'relative', top: -10 }}>R&R SPORT 2.0SD4 HSE PLUS BORUSAN</Text>
                  <Text style={{ fontSize: 13, color: '#101010', position: 'relative', top: -10 }}>CIKISLI BORUSAN FUL BAKIMLI</Text>
                  <View style={{ position: 'relative', top: 10, width: 100 }}>
                    <Text style={{ backgroundColor: '#eee', position: 'relative', fontSize: 12, color: '#555', paddingLeft: 15 }}>
                      Premium Ofis
                    </Text>
                  </View>
                  <View style={{ position: 'relative', top: 18, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '70%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <FontAwesome6 name='location-dot' size={15} color='#888' />
                      <Text style={{ marginLeft: 5, color: '#888' }}>Tekirdag, Saray</Text>
                    </View>
                    <Text style={{ color: '#1679AB', fontSize: 16, position: "absolute", right: 0 }}>3,850,000 TL</Text>
                  </View>
                </View>

              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, paddingTop: 17, paddingBottom: 10 }}>
                <View>
                  <Text style={{ fontSize: 14, color: '#1679AB' }}>Tumunu Goster</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <MaterialIcons name="arrow-forward-ios" size={17} color="#1679AB" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {showFab && <FloatingActionButton onPress={handleFabPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: 150,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 100,
  },
  title: {
    fontSize: 11,
    marginTop: 5,
  },
});


export default Home;

