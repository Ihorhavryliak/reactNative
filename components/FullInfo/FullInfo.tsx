import { RouteProp } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Text, View,  StyleSheet } from 'react-native'
import { gStyle } from '../../styles/style'
import { NavigationType, NewsType } from '../Main/Main';



export type RouteType = {
  route: { params: NewsType }
}
type FullInfoType = {
  route: any
}
export const FullInfo = (props: FullInfoType) => {

const {route}: RouteType = props
  return (
    <View style={gStyle.main}>
       <Image style={style.img} source={{uri: route.params.img}} />
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={gStyle.title}>{route.params.full}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  img: {
    width: '100%',
    height: 100
  },
})
