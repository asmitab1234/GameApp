import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../Component/Ui/Title'
import NumberContainer from '../Component/Game/NumberContainer'
import PrimaryButton from '../Component/Ui/PrimaryButton'
import Card from '../Component/Ui/Card'
import InstructionText from '../Component/Ui/InstructionText'

function generateRandomBetween(max, min, exclude) {
    const rndom = Math.floor(Math.random() * (max - min)) + min

    if (rndom === exclude) {
        return generateRandomBetween(min, max, exclude)
    }
    else {
        return rndom
    }
}

var minBoundary = 1.
var maxBoundary = 100

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    function nextGuessHandeler(direction) {//direction=>'lower', 'greater'

        if (
            (direction == 'lower' && currentGuess < userNumber) ||
            (direction == 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't Lie!", 'You Know That is Wrong...', [
                { text: 'Sorry!', style: 'cancel' }
            ]

            )
            return
        }


        if (direction === 'lower') {
            maxBoundary == currentGuess
            // const newRndmNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
            // setCurrentGuess(newRndmNumber)
        } else {
            minBoundary == currentGuess + 1
        }
        const newRndmNumber = generateRandomBetween(
            1,
            100,
            currentGuess
        )
        setCurrentGuess(newRndmNumber)
    }

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    return (
        <View
            style={styles.screen}>
            <Title>
                Opponent's Guess
            </Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            {/* GUESS */}

            <Card>
                <InstructionText>
                    Higher or Lower ?
                </InstructionText>
                <View>
                    <PrimaryButton onPress={nextGuessHandeler}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandeler}>-</PrimaryButton>
                </View>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        marginTop: 35
    },

})