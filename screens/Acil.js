import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


export default function Acil() {
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#1679AB' }}>Tum "Acil Acil" Ilanlari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#1679AB' }}>(967.147)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#1679AB" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Emlak</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(534)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Arazi, SUV & Panelvan</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(99.069)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Motosiklet</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(140.149)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Minivan & Panelvan</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(97,752)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Ticari Araclar</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(60.540)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Elektrik Araclar</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(10.149)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Kiralik Araclari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(10.043)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Deniz Araclari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(10.529)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Hasarli Araclar</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(5.668)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Karavan</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(6.169)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Klasik Araclari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(2.529)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Hava Araclari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(20)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>ATV</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(3.344)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>UTV</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(495)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Engelli Plakali Araclar</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(305)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 24, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 10, backgroundColor: '#eee' }}>
                    <View>
                        <Text style={{ fontSize: 12, color: '#888' }}>ILGILI KATEGORILER</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <View style={{ flexDirection: 'row',padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
              <View>
                <Text style={{ fontSize: 16, color: '#000' }}>Oto Ekspertiz</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <View style={{ flexDirection: 'row',padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
              <View>
                <Text style={{ fontSize: 16, color: '#000' }}>Oto Tamir & Servis</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <View style={{ flexDirection: 'row',padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
              <View>
                <Text style={{ fontSize: 16, color: '#000' }}>Oto Kaporta & Boya</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <View style={{ flexDirection: 'row',padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
              <View>
                <Text style={{ fontSize: 16, color: '#000' }}>Oto Temizlik</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <View style={{ flexDirection: 'row',padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
              <View>
                <Text style={{ fontSize: 16, color: '#000' }}>Oto Lastik ve JAnt Tamiri</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Jant & Lastik</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(235.988)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Yedek Parca</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(1.815.198)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Kask, Kiyafet & Ekipman</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(24.254)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Yelken Donanimi</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(516)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Katamaran</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(196)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Traktor</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(31,688)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Navigasyon Cihazi</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(346)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}



