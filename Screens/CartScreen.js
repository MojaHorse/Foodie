import React, { useContext } from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { CartContext } from '../Components/CartContext';

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, updateQuantity, totalCost } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity - 1)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/Pictures/FoodieLogo.png')} style={styles.logo} />

      <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.personBtn}>
        <Image source={require('../assets/Icons/user.png')} style={styles.personIcon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Image source={require('../assets/Icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.itemsContainer}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: {`R${totalCost}`}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: '40%',
    height: '6%',
  },
  personBtn: {
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
  personIcon: {
    width: '60%',
    height: '60%',
  },
  backBtn: {
    width: 38,
    height: 38,
    position: 'absolute',
    top: '8%',
    left: '3%',
    backgroundColor: '#00bf00',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: '50%',
    height: '50%',
  },
  itemsContainer: {
    padding: 16,
    paddingBottom: 70,
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    marginVertical: 8,
    padding: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    marginTop: 5,
  },
  removeButtonText: {
    color: '#ff0000',
    fontWeight: 'bold',
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#00bf00',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
