import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


export default function Emlak() {
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#1679AB' }}>Tum "Emlak" Ilanlari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#1679AB' }}>(1.168.279)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#1679AB" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Kunut</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(733.149)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Is Yeri</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(253.149)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Arsa</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(33.149)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Konut Projeleri</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(149)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Bina</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(3.149)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Devre Mulk</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(783.149)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Turistik Tesis</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(1.737)</Text>
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
                <Text style={{ fontSize: 16, color: '#000' }}>Boya & Badana</Text>
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
                <Text style={{ fontSize: 16, color: '#000' }}>Evden Eve Nakliyat</Text>
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
                <Text style={{ fontSize: 16, color: '#000' }}>Islak Zemin & Fayans</Text>
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
                <Text style={{ fontSize: 16, color: '#000' }}>Mutfak, Banyo Yenileme</Text>
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
                <Text style={{ fontSize: 16, color: '#000' }}>Alci & Kartonpier</Text>
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
                        <Text style={{ fontSize: 16, color: '#000' }}>Beyaz Esya</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(77.737)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Yapi Malzemeleri</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(99.894)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Kucuk Ev Aletleri</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(61.760)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Mobilya</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(266.895)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Guvenlik Sistemleri</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(12.265)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}
