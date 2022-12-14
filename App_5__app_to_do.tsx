import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Form } from "./components_5/Form";
import { Header } from "./components_5/Header";
import { ListItem } from "./components_5/ListItem";


export default function App() {
  
  const [listOfItems, setListOfItems] = useState([
    { text: "Buy milk", id: '1' },
    { text: "Learn ", id:' 2' },
    { text: "Buy flat room", id: '3' },
    { text: "Buy water", id: '4' },
  ]);

  const addHandler = (text: string) => {
    setListOfItems((list) => {
      return [
        {
          text: text,
          id: Math.random().toString(36).substring(7),
        },
        ...list,
      ]
    })
  }

const deleteItem = (id: string) => {
  setListOfItems((items)=>{
    return items.filter(listOfItems => listOfItems.id !== id)
  })
}

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item } ) => {
            return <ListItem deleteItem={deleteItem} item={item} />;
          }}
        />
      </View>
    </View>
  );
}

const st = StyleSheet.create({});
