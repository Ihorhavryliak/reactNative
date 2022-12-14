import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

export type ListItemType = { 
 item: {
  text: string;
  id: string
}
deleteItem: (str: string) => void
}


export const ListItem = (props: ListItemType) => {
  const {item} = props;
  const {deleteItem} = props;
  return (
   <TouchableOpacity onPress={()=> deleteItem(item.id)}>
    <Text style={st.text}>{item.text}</Text>
   </TouchableOpacity>
  )
}



const st = StyleSheet.create({
  text:{
    padding: 20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginTop: 20,
    width: '60%',
    marginLeft: '20%',
  }
});
