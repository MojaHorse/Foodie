import React, { useContext } from 'react';
import {View, SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, TextInput, FlatList, ScrollView} from 'react-native';
import { CartContext } from '../Components/CartContext';

export default function MenuScreen({navigation}) {

    const { updateCart } = useContext(CartContext);


    const items = [
    { id: 1, title: 'Margherita Pizza', price: 'R85.00', image: require('../assets/Pictures/margherita_pizza.jpg') },
    { id: 2, title: 'Spaghetti Carbonara', price: 'R95.00', image: require('../assets/Pictures/spaghetti_carbonara.jpg') },
    { id: 3, title: 'Chicken Caesar Salad', price: 'R75.00', image: require('../assets/Pictures/chicken_caesar_salad.jpg') },
    { id: 4, title: 'Beef Burger', price: 'R105.00', image: require('../assets/Pictures/beef_burger.jpg') },
    { id: 5, title: 'Grilled Salmon', price: 'R135.00', image: require('../assets/Pictures/grilled_salmon.jpg') },
    { id: 6, title: 'Vegetarian Wrap', price: 'R70.00', image: require('../assets/Pictures/vegetarian_wrap.jpg') },
    { id: 7, title: 'Mushroom Risotto', price: 'R90.00', image: require('../assets/Pictures/mushroom_risotto.jpg') },
    { id: 8, title: 'Tandoori Chicken', price: 'R110.00', image: require('../assets/Pictures/tandoori_chicken.jpg') },
    { id: 9, title: 'Cheese Platter', price: 'R120.00', image: require('../assets/Pictures/cheese_platter.jpg') },
    { id: 10, title: 'Chocolate Lava Cake', price: 'R65.00', image: require('../assets/Pictures/chocolate_lava_cake.webp') }
    ];



    const ItemCard = ({item}) => (
        <View style={styles.itemCard}>
        <Image style={styles.itemImage} source={item.image} />
        <View style={styles.itemDetails}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
        <TouchableOpacity
            style={styles.addButton}
            onPress={() => updateCart(item, 'add')}
        >
            <Image source={require('../assets/Icons/add-to-cart.png')} style={styles.AddIcon} />
        </TouchableOpacity>
        </View>
    )

    return (
        <SafeAreaView style={styles.Container}>
            <Image source={require('../assets/Pictures/FoodieLogo.png')} style={styles.Logo}/>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.Personbtn}>
            <Image source={require('../assets/Icons/user.png')} style={styles.PersonIcon} />
            </TouchableOpacity>

            <View style={styles.SearchArea}> 
            <Image source={require('../assets/Icons/search.png')} style={styles.SearchIcon} />
            <TextInput placeholder='what are you looking for?' style={styles.SearchInput}/>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.Cartbtn}>
            <Image source={require('../assets/Icons/shopping-bag.png')} style={styles.CartIcon} />
            </TouchableOpacity>

            <ScrollView style={styles.ItemsContainer}>
                <FlatList
                data={items}
                renderItem={({ item }) => <ItemCard item={item} />}
                keyExtractor={(item) => item.id.toString()}
                />
            </ScrollView>
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
        marginBottom: '4.5%'
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
        zIndex: 1000
    },
    CartIcon: {
        width: '50%',
        height: '50%',
    },

    SearchArea: {
        width: '85%',
        height: '4%',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        paddingLeft: '2%',
        alignItems: 'center',
        marginBottom: '3%',
    },
    SearchInput: {
        width: '87%'
    },
    SearchIcon: {
        height: '75%',
        width: '6.5%',
        marginRight: '2%'
    },

    ItemsContainer: {
        flex: 1,
        width: '100%',
        padding: 16,
        paddingBottom: '60%s'
      },
      itemCard: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginVertical: 8,
        backgroundColor: 'lightgrey',
        borderRadius: 8,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between'
      },
      itemText: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      itemImage: {
        width: '30%',
        height: '100%'
      },
      addButton: {
        width: '10%',
        height: '60%',
        backgroundColor: '#00bf00',
        borderRadius: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
      },
      AddIcon: {
        width: '70%',
        height: '70%'
      }
})