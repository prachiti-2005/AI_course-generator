import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

// button file to add buttons to any pages
const Button = ({text,onPress,type='primary',loading=false}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={{
        backgroundColor: type=='primary'?Colors.PRIMARY:Colors.WHITE,
        padding : 16,
        borderRadius : 10,
        borderWidth : type=='primary'?0:1,
        marginTop : 15
    }}>
        {loading? <ActivityIndicator /> :
        <Text style={{
            color : type=='primary'?Colors.WHITE:Colors.PRIMARY,
            textAlign : 'center',
            fontSize : 16,
            fontFamily : 'outfit-medium'
        }}>{text}</Text>}
    </TouchableOpacity>
  )
}

export default Button