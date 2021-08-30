import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export const ErrorView = props => {
    return (
        <Text style = {styles.mainView}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#F72616',
        fontSize: 14,
        textAlign: 'center',
    },
})