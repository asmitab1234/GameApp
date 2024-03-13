import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../Component/Title'

const GameScreen = () => {
    return (
        <View
            style={styles.screen}>
            <Title>
                Opponent's Guess
            </Title>

            {/* GUESS */}

            <View>
                <Text>
                    Higher or Lower
                </Text>

            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

})