import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../Component/primaryButton'

const StartGameScreen = () => {
    return (
        <View
            style={styles.container}>
            <TextInput
                style={styles.numberInput}
                maxLength={2} />
            <PrimaryButton>
                Reset
            </PrimaryButton>
            <PrimaryButton>
                Confirm
            </PrimaryButton>

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
        backgroundColor: '#810B36',
        borderRadius: 10,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
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
    }
})