import React from 'react';
import {View, SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

export default function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={styles.Container}>
        <Image source={require('../assets/Pictures/FoodieLogo.png')} style={styles.Logo}/>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Personbtn}>
        <Image source={require('../assets/Icons/close.png')} style={styles.PersonIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.Cartbtn}>
        <Image source={require('../assets/Icons/shopping-bag.png')} style={styles.CartIcon} />
        </TouchableOpacity>

        <View style={styles.ItemsContainer}>
            <View style={styles.ItemBox} ><Text>P</Text></View>
        </View>
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },

    Logo: {
        width: '40%',
        height: '6%',
    },

    Personbtn: {
        width: 35,
        height: 35,
        position: 'absolute',
        top: '8.2%',
        left: '87%',
        backgroundColor: '#00bf00',
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    PersonIcon: {
        width: '60%',
        height: '60%',
    },

    Cartbtn: {
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: '6%',
        left: '80%',
        backgroundColor: '#00bf00',
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    CartIcon: {
        width: '50%',
        height: '50%',
    },
})