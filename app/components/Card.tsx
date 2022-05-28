import React from 'react'
import { Text, View } from './Themed'
import { Platform, StyleSheet } from 'react-native';
import {CardProps} from '../interfaces'

export default function Card({ transactions, when }:CardProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Transactions</Text>
        <Text style={styles.transactions}>{transactions}</Text>
        <Text style={styles.date}>{when}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 140,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 15,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontFamily: Platform.select({ios: 'montserrat-bold', android: 'montserrat-bold'}),
    },
    transactions: {
        fontSize: 35,
        color: 'rgba(105, 121, 248, 1)',
        fontFamily: Platform.select({ios: 'montserrat-semi', android: 'montserrat-semi'}),
    },
    date: {
        fontSize: 12,
        color: '#999999',
        fontFamily: Platform.select({ios: 'montserrat', android: 'montserrat'}),
    }
});
  