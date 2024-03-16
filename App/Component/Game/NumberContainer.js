import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../Constants/Colors'

const NumberContainer = ({ children }) => {
    return (
        <View
            style={styles.container}>
            <Text
                style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: Colors.acent500,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 24
    },
    numberText: {
        color: Colors.acent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})