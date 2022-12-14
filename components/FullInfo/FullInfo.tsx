import { RouteProp } from '@react-navigation/native';
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
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
       <Image source={route.params.img} />
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={gStyle.title}>{route.params.full}</Text>
    </View>
  )
}
