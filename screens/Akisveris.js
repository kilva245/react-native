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




type SearchBarComponentProps = {};

const Alisverish: React.FunctionComponent<SearchBarComponentProps> = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showFab, setShowFab] = useState(true);

    const handleScroll = useCallback((event) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const isAtEnd = contentOffset.y + layoutMeasurement.height >= contentSize.height;
        setShowFab(!isAtEnd);
    }, []);

    const handleFabPress = () => {
        navigation.navigate('Home');
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

    const [scrolled, setScrolled] = useState(false);

    return (
        <View style={{ height: '100%' }}>

            <ScrollView onScroll={({ nativeEvent }) => {
                if (nativeEvent.contentOffset.y > 100) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            }}
                style={styles.container}>

                <View style={{ backgroundColor: '#fff' }}>
                    <View style={{ margin: 20 }}>
                        <SearchBar
                            placeholder="Alişveriş ilanlarinda ara"
                            onChangeText={handleSearchChange}
                            value={searchQuery}
                            placeholderTextColor='#bbb'
                            inputStyle={{ backgroundColor: '#FFFFFF' }}
                            containerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#eee', borderBottomRightRadius: 30, borderBottomLeftRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
                            inputContainerStyle={{ backgroundColor: '#FFFFFF', height: 35 }}
                            searchIcon={{ size: 27, color: '#999' }}
                            rightIconContainerStyle={{ paddingRight: 70 }}
                        />
                    </View>
                    <View>
                        <View style={{ position: 'absolute', right: 20, top: -55 }}>
                            <TouchableOpacity onPress={handlePressMicrophone} style={{ marginRight: 20 }}>
                                <FontAwesome name="microphone" size={20} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Tum')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 17, backgroundColor: '#864AF910' }}>
                        <AntDesign name="appstore1" size={35} color="#864AF9" />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 16 }}>Tüm alişveriş kategorileri</Text>
                            <Text style={{ fontSize: 12, color: '#999' }}>Tüm ikinci el ve sifir ürünler </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                        </View>
                    </View>
                </TouchableOpacity>

                
                <View style={{ height: 220, padding: 20 }}>
                    <Image source={require("../icons/home1.jpg")}
                        style={{
                            borderBottomLeftRadius: 10,
                            borderTopLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderTopRightRadius: 10,
                            objectFit: 'cover',
                            height: '100%',
                            width: '100%'
                        }}

                    />
                </View>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 10, width: '100%' }}>
                        <Text>ilgilenebileceginiz ilanlar</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Tum')}>
                            <View>
                                <Text style={{ color: '#007bff' }}>Tümü</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{padding: 10}}
                    >
                        <View style={{
                            backgroundColor: 'white', width: 190, padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 2,
                                height: 4,
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            elevation: 4,
                            marginRight: 7

                        }}>
                            <Image source={require("../icons/home1.jpg")}
                                style={{
                                    borderBottomLeftRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopRightRadius: 10,
                                    objectFit: 'cover',
                                    height: 170,
                                    width: '100%'
                                }}

                            />
                            <Text style={{ marginTop: 5, fontWeight: '300', fontSize: 13 }}>ÇOK ÇOK TEMIZ ÇEKY...</Text>
                            <Text style={{ marginTop: 5, fontWeight: '400', fontSize: 11, color: '#007bff' }}>12.000 TL</Text>
                        </View>
                        <View style={{
                            backgroundColor: 'white', width: 190, padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 2,
                                height: 4,
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            elevation: 4,
                            marginRight: 7

                        }}>
                            <Image source={require("../icons/home1.jpg")}
                                style={{
                                    borderBottomLeftRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopRightRadius: 10,
                                    objectFit: 'cover',
                                    height: 170,
                                    width: '100%'
                                }}

                            />
                            <Text style={{ marginTop: 5, fontWeight: '300', fontSize: 13 }}>ÇOK ÇOK TEMIZ ÇEKY...</Text>
                            <Text style={{ marginTop: 5, fontWeight: '400', fontSize: 11, color: '#007bff' }}>12.000 TL</Text>
                        </View>
                        <View style={{
                            backgroundColor: 'white', width: 190, padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 2,
                                height: 4,
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            elevation: 4,
                            marginRight: 7

                        }}>
                            <Image source={require("../icons/home1.jpg")}
                                style={{
                                    borderBottomLeftRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopRightRadius: 10,
                                    objectFit: 'cover',
                                    height: 170,
                                    width: '100%'
                                }}

                            />
                            <Text style={{ marginTop: 5, fontWeight: '300', fontSize: 13 }}>ÇOK ÇOK TEMIZ ÇEKY...</Text>
                            <Text style={{ marginTop: 5, fontWeight: '400', fontSize: 11, color: '#007bff' }}>12.000 TL</Text>
                        </View>
                        <View style={{
                            backgroundColor: 'white', width: 190, padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 2,
                                height: 4,
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                            elevation: 4,
                            marginRight: 7

                        }}>
                            <Image source={require("../icons/home1.jpg")}
                                style={{
                                    borderBottomLeftRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopRightRadius: 10,
                                    objectFit: 'cover',
                                    height: 170,
                                    width: '100%'
                                }}

                            />
                            <Text style={{ marginTop: 5, fontWeight: '300', fontSize: 13 }}>ÇOK ÇOK TEMIZ ÇEKY...</Text>
                            <Text style={{ marginTop: 5, fontWeight: '400', fontSize: 11, color: '#007bff' }}>12.000 TL</Text>
                        </View>

                    </ScrollView>
                </View>
                <View style={{padding: 10}}>
                    <Text>ilginizi Çekebilexek Markalar</Text>
                    <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{padding: 10}}
                    >
                        <View style={{backgroundColor: '#ccc', width: 100, height:80, padding: 15, borderRadius: 15, marginRight: 15}}>
                        <Image source={require("../icons/apple.png")}
                                style={{
                                    objectFit: 'contain',
                                    height: "100%",
                                    width: '100%',
                                }}

                            />
                        </View>

                        <View style={{backgroundColor: '#ccc', width: 100, height:80, padding: 15, borderRadius: 15, marginRight: 15}}>
                        <Image source={require("../icons/samsung.png")}
                                style={{
                                    objectFit: 'contain',
                                    height: "100%",
                                    width: '100%',
                                }}

                            />
                        </View>

                        <View style={{backgroundColor: '#ccc', width: 100, height:80, padding: 15, borderRadius: 15, marginRight: 15}}>
                        <Image source={require("../icons/MI.png")}
                                style={{
                                    objectFit: 'contain',
                                    height: "100%",
                                    width: '100%',
                                }}

                            />
                        </View>

                        <View style={{backgroundColor: '#ccc', width: 100, height:80, padding: 15, borderRadius: 15, marginRight: 15}}>
                        <Image source={require("../icons/Arcelik.png")}
                                style={{
                                    objectFit: 'contain',
                                    height: "100%",
                                    width: '100%',
                                }}

                            />
                        </View>

                        <View style={{backgroundColor: '#ccc', width: 100, height:80, padding: 15, borderRadius: 15, marginRight: 15}}>
                        <Image source={require("../icons/asus.png")}
                                style={{
                                    objectFit: 'contain',
                                    height: "100%",
                                    width: '100%',
                                }}

                            />
                        </View>

                    </ScrollView>
                </View>

            </ScrollView>
            {scrolled && (
                    <TouchableOpacity onPress={() => navigation.navigate('Tum')} style={styles.stickyButton}>
                        <View style={styles.buttonContent}>
                            <AntDesign name="appstore1" size={35} color="#864AF9" />
                            <View style={styles.textContainer}>
                                <Text style={styles.buttonText}>Tüm alişveriş kategorileri</Text>
                                <Text style={styles.secondaryText}>Tüm ikinci el ve sifir ürünler </Text>
                            </View>
                            <View style={styles.iconContainer}>
                                <MaterialIcons name="arrow-forward-ios" size={17} color="#888" />
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            {showFab && <FloatingActionButton onPress={handleFabPress} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    stickyButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 4,
        backgroundColor: '#864AF910',
        paddingVertical: 12,
        paddingHorizontal: 17,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
    },
    secondaryText: {
        fontSize: 12,
        color: '#999',
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    iconContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
});

export default Alisverish;

