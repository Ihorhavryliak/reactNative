import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Form } from "./components_5/Form";
import { Header } from "./components_5/Header";
import { ListItem } from "./components_5/ListItem";
import { gStyle } from "./styles/style";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Main from "./navigate";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={gStyle.main} onLayout={onLayoutRootView}>
      <Main />
    </View>
  );
}
