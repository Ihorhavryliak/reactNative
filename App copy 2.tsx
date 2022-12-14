import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Form } from "./components_5/Form";
import { Header } from "./components_5/Header";
import { ListItem } from "./components_5/ListItem";
import { gStyle } from "./styles/style";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from 'expo-font';
import * as Font from "expo-font";
import Main from "./navigate";

export default function App() {
  const [fontsLoaded] = useFonts({
    "mtLight": require("./assets/fonts/Montserrat-Light.ttf"),
    "mtBold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });
  
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return <Main />;
}
