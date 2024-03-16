import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../Constants/Colors'

const PrimaryButton = ({ children,onPress }) => {
    // const pressableHandeler = () => {
    //     console.log('pressed')
    // }
    console.log('onPress>>>',onPress)
    return (
        <View
            style={styles.buttonouterComponent}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed ? [styles.buttonInnerComponent, styles.pressed] : styles.buttonInnerComponent}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text
                    style={styles.buttonTextColor}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonouterComponent: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerComponent: {
        backgroundColor: Colors.primary500,
        padding: 10,
        elevation: 2,
        borderRadius: 28,
    },
    buttonTextColor: {
        textAlign: 'center',
        fontSize: 16,
        color: '#E2DBDB'
    },
    pressed: {
        opacity: 0.35,
    }
})