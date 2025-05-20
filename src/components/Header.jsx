import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'


const Header = ({title}) => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 18,
    },
    text:{
        color: colors.text,
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 40, 
    }
})