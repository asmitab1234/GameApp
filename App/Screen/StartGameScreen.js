import { StyleSheet,  TextInput, View } from 'react-native'
import React from 'react'
import PrimaryButton from '../Component/primaryButton'

const StartGameScreen = () => {
    return (
        <View
        style={styles.container}>
            <TextInput/>
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
    container:{
        // flex:1,
        marginHorizontal:24,
        padding:16,
        marginTop:100,
        backgroundColor:'#7C0631',
        borderRadius:10
    }
})