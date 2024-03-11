import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const primaryButton = ({ children,onPress }) => {
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
                android_ripple={{ color: '#710D32' }}
            >
                <Text
                    style={styles.buttonTextColor}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

export default primaryButton

const styles = StyleSheet.create({
    buttonouterComponent: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerComponent: {
        backgroundColor: '#9A1445',
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