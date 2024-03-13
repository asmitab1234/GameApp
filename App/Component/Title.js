import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({ children }) => {
    return (
        <View>
            <Text
                style={styles.title}>
                Opponent's Guess
            </Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        padding: 12,
        color: '#CBA409',
        borderColor: '#CBA409',
        borderWidth: 2,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})