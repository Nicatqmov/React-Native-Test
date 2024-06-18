import React from "react";

import {
    View,
    Text,
    Button,
    StyleSheet,

} from 'react-native'

function AppPro(){
    return(
        <View style = {styles.container}> 
            <Text style = {styles.title}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      },
})

export default AppPro;