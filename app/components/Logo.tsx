import React from 'react'
import { Text, View } from './Themed'
import { Image, Platform, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/logo.png')} />
        <Text style={styles.logoText}>BANKS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 25
    },
    logoText: {
        fontSize: 30,
        color: 'rgba(74, 53, 197, 1)',
        fontWeight: Platform.select({ios: '700', android: '700'}),
        fontFamily: Platform.select({ios: 'montserrat-bold', android: 'montserrat-extrabold'}),
    }
  });
  