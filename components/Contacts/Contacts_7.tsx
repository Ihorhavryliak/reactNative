import React from 'react'
import { Button, Text, View } from 'react-native'
import { gStyle } from '../../styles/style'
import { NavigationType } from '../Main/Main';





export const Contacts = (props: NavigationType) => {
  const {navigation} = props;
  const loadScene = () => {
    navigation.goBack();
  }
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Contacts</Text>
      <Button title='Open page' onPress={loadScene} />
    </View>
  )
}
