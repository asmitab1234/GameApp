import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../Constants/Colors'

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
        color: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})