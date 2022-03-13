import { StyleSheet, Text, Image, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Detail = ({ route, navigation }) => {

    const { item } = route.params
    console.log(item)

    const renderIngredientsItem = ({ item }) => {
        return (
            <View style={[styles.ingredientsItemWrapper, {
                marginLeft: item.id === '1' ? 20 : 0
            }]}>
                <Image
                    source={item.image}
                    style={styles.ingredientsImage}
                />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {/* header */}
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={styles.headerLeft}>
                            <Feather name="chevron-left" size={12} color={colors.textDark} />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.headerRight}>
                        <MaterialCommunityIcons name="star" size={12} color={colors.white} />
                    </View>
                </View>
            </SafeAreaView>

            {/* titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.titleWrapper}>
                    {item.title}
                </Text>
            </View>


            {/* Price */}
            <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>${item.price}</Text>
            </View>

            {/* pizza info */}
            <View style={styles.infoWrapper}>
                <View style={styles.infoLeftWrapper}>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Size</Text>
                        <Text style={styles.infoItemText}>{item.sizeName} {item.sizeNumber}</Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Crust</Text>
                        <Text style={styles.infoItemText}>{item.crust} </Text>
                    </View>
                    <View style={styles.infoItemWrapper}>
                        <Text style={styles.infoItemTitle}>Delivery</Text>
                        <Text style={styles.infoItemText}>{item.deliveryTime} </Text>
                    </View>
                </View>
                <View >
                    <Image
                        source={item.image}
                        style={styles.itemImage}
                    />
                </View>
            </View>

            {/* ingredients */}
            <View style={styles.ingredientsWrapper}>
                <Text style={styles.ingredientsTitle}>Ingredients</Text>
                <View style={styles.ingredientsListWrapper}>
                    <FlatList
                        data={item.ingredients}
                        renderItem={renderIngredientsItem}
                        keyExtractor={(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

            {/* button */}
            <TouchableOpacity onPress={() => alert("Your order has been placed")}>
                <View style={styles.orderWrapper}>
                    <Text style={styles.orderText}>Place order</Text>
                    <Feather name="chevron-right" size={18} color={colors.black} />
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        padding: 20
    },
    headerLeft: {
        borderColor: colors.textLight,
        borderWidth: 2,
        padding: 12,
        borderRadius: 10,
    },
    headerRight: {
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: 10,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    titlesWrapper: {
        paddingHorizontal: 20,
        marginTop: 30
    },
    titleWrapper: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 32,
        color: colors.textDark,
        width: '50%'
    },
    priceWrapper: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    priceText: {
        color: colors.price,
        fontFamily: 'Montserrat-Regular',
        fontSize: 32,
    },
    infoWrapper: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoLeftWrapper: {
        paddingLeft: 20,
    },
    infoItemWrapper: {
        marginBottom: 20,

    },
    infoItemTitle: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: colors.textDark,
    },
    infoItemText: {},
    itemImage: {
        resizeMode: 'contain',
        marginLeft: 50,
    },
    ingredientsWrapper: {
        marginTop: 40,
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        color: colors.textDark
    },
    ingredientsListWrapper: {
        paddingVertical: 20
    },
    ingredientsWrapper: {
        marginTop: 40
    },
    ingredientsTitle: {
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: colors.textDark,
    },
    ingredientsListWrapper: {
        paddingVertical: 20
    },
    ingredientsItemWrapper: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    ingredientsImage: {
        resizeMode: 'contain'
    },
    orderWrapper: {
        marginTop: 40,
        marginHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 50,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginRight: 10,
    }
})