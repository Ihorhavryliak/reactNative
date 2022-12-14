import { NavigationProp, ParamListBase } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationDataType } from '../../navigate'
import { gStyle } from '../../styles/style'
import { Ionicons } from '@expo/vector-icons';

export type NavigationType = {
  navigation: NavigationProp<ParamListBase, NavigationDataType>  
  
}
export type NewsType = {
  name: string,
  anons: string
  full: string
  img: any
}

export const  Main = (props: NavigationType) => {
const {navigation} = props;
  const [news, setNews] = useState([
    {name: 'Google', anons:'Google', 
    full: 'Google is cool.' , id: '1', img: 'https://static.wikia.nocookie.net/project-engage/images/5/51/Img_game.jpg/revision/latest?cb=20220612083201'},
   {name: 'Apple', anons:'Apple', 
    full: 'Apple is cool.', id: '2', img: 'https://static.wikia.nocookie.net/project-engage/images/5/51/Img_game.jpg/revision/latest?cb=20220612083201'},
    {name: 'Facebook', anons:'Facebook', 
    full: 'Facebook is cool.', id: '3', img: 'https://static.wikia.nocookie.net/project-engage/images/5/51/Img_game.jpg/revision/latest?cb=20220612083201'}, 
  ])
  const [modalWindow, setModalWindow] = useState(false)
  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
      <View style={gStyle.main}>
      <Ionicons name="close-circle-outline" onPress={()=> setModalWindow(false)} size={24} color="red" style={style.iconClose} />
        <Text style={style.name}>Form add articles </Text>
      </View>

      </Modal>
      <Ionicons  name="add-circle-sharp" size={24} color="green" style={style.iconAdd}
      onPress={()=> setModalWindow(true)}
      />
      <Text style={[gStyle.title, style.header]}>Main</Text>
      <FlatList data={news} renderItem={({item}) =>(
        <TouchableOpacity style={style.item}
        onPress={()=>navigation.navigate<NavigationDataType>('FullInfo', item)}>
          <View style={style.viewBox}>
          <Image style={style.img} source={{uri: item.img}} />
          </View>
          
          <Text style={style.name}>{item.name}</Text>
          <Text style={style.anons}>{item.anons}</Text>
        </TouchableOpacity>
      )} />
    </View>
  )
}

const style = StyleSheet.create({
  img: {
    width: '100%',
    height: 100
  },
  iconClose:{
    textAlign: 'center'
  },
  header: {
    marginBottom: 30,
  },
  viewBox:{
    flex: 1,
    alignItems: 'center'
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'Montserrat-Light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 25
  }
})
