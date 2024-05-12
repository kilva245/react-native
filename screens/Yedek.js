import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


export default function Yedek() {
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#1679AB' }}>Tum "Yedek Parca, Aksesuar, Donanim...</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#1679AB' }}>(2.418.016)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#1679AB" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Ottomotiv Ekipmanlari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(2.300.772)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Motosiklet Ekipmanlari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(100.318)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Deniz Araci Ekipmanlari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(16.926)</Text>
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
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Filtre</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(11.041)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Egzoz</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(8.167)</Text>
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
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(2.238)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Go kart</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(88)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Subwoofer</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(2.480)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>ic Aksesuar</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(367)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Dis aksesuar</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(1.146)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Arac Ici Kamera</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(778)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Bakim & Onarim Urunleri</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(1.950)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Navigasion Cihazi</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(346)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', paddingTop: 17, borderBottomWidth: 1, borderColor: '#ccc', paddingBottom: 17 }}>
                    <View>
                        <Text style={{ fontSize: 16, color: '#000' }}>Jant & Lastik Takimlari</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 13, position: 'relative', right: 10, color: '#888' }}>(26.911)</Text>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
}
