import {
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={st.mainBlock}>
      <View style={[st.box, {backgroundColor: 'green'}]}></View>
      <View style={[st.box, 
        {backgroundColor: 'red'
        , height: 200,
        alignSelf: "flex-end"
      }
        ]}></View>
      <View style={[st.box, {backgroundColor: 'blue'}]}></View> 
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  mainBlock: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0

  },
  box: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
});
