import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../../Constants/Colors'

const Card = ({children}) => {
  return (
    <View
    style={styles.card}>
    {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
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
})