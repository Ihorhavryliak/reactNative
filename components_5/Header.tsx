import React from 'react'
import { StyleSheet, Text, View } from 'react-native'



export const Header = () => {
  return (
    <View style={st.header}>
      <Text style={st.text}>List</Text>
    </View>
  )
}



const st = StyleSheet.create({
  header:{
    paddingTop: 40,
    height: 100,
    backgroundColor: 'silver'
  },
  text:{
    fontSize: 28,
    color: 'red',
    fontStyle: 'italic',
    textAlign: 'center',
  }
});
