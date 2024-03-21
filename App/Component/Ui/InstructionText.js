import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../Constants/Colors'

const InstructionText = ({ children }) => {
    return (
        <Text
            style={styles.instructionText}>
            {children}
        </Text>
    )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.acent500,
        fontSize: 20
    }
})