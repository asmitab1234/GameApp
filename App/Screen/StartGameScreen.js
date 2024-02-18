import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../Component/primaryButton'

const StartGameScreen = () => {
    return (
        <View
            style={styles.container}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
            />
            <View
                style={styles.buttonsContainer}>
                <View
                    style={styles.buttonContainer}>
                    <PrimaryButton>
                        Reset
                    </PrimaryButton>
                </View>
                <View
                    style={styles.buttonContainer}>
                    <PrimaryButton>
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
        backgroundColor: '#5F0325',
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
        borderColor: '#CBA409',
        fontSize: 24,
        color: '#CBA409',
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