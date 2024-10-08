import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:80,
        width:'100%',
        backgroundColor:'#000',
        alignItems:'center',
        justifyContent:'center',
    },title:{
        fontSize:40,
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold'
    }
})