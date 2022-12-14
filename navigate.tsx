import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from "./components/Main/Main";
import { Contacts } from "./components/Contacts/Contacts";
import { FullInfo } from "./components/FullInfo/FullInfo";

export type NavigationDataType = "Home" | "Contacts" | "FullInfo";

const Stack = createStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            title: "Hello",
            headerStyle: st.home,
            headerTitleStyle: st.header,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Contacts" component={Contacts}
         options={{
          title: "Contacts",
          headerStyle: st.home,
          headerTitleStyle: st.header,
          headerTitleAlign: 'center',

        }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            title: "Article",
            headerStyle: st.home,
            headerTitleStyle: st.header,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const st = StyleSheet.create({
  home: {
    backgroundColor: "#454545",
    height: 100,
   
  },
  header: { fontFamily: "Montserrat-Bold", color: "white" },
});
export default Navigate;
