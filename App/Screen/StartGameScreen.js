import { Alert, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../Component/Ui/PrimaryButton'
import Colors from '../../Constants/Colors'

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredText, setEnteredText] = useState('')
    function inputHandeler() {
        setEnteredText(enteredText)
    }
    function resetInputHandeler() {
        setEnteredText('')
    }

    function confirmHandeler() {
        const chooseNumber = parseInt(enteredText);
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'Number has to be between 1 to 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandeler }]
            );
        } else {
            console.log('validEnter');
        }
        onPickNumber(chooseNumber)
    }
    // console.log('alert...',)
    return (
        <View
            style={styles.container}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(val) => setEnteredText(val)}
                value={enteredText}

            />
            <View
                style={styles.buttonsContainer}>
                <View
                    style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={resetInputHandeler}>
                        Reset
                    </PrimaryButton>
                </View>
                <View
                    style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={confirmHandeler}>
                        Confirm
                    </PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        // flex:1,
        marginHorizontal: 24,
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        borderBottomWidth: 2,
        borderColor: Colors.acent500,
        fontSize: 24,
        color: Colors.acent500,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
    },
    buttonContainer: {
        flex: 1
    }
})