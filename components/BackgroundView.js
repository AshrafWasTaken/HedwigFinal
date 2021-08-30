import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BackgroundView = props => {
    return (
        <View style = {styles.container}>
            <View style = {styles.credit}>
                <Text style = {styles.creditText}>Developed by Nabih Amer & Ashraf Kherbawy.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#373546',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    credit: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    creditText: {
      fontSize: 10,
      color: '#9f99b6',
      paddingBottom: 4,
    },
  });

