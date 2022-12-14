import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {

    if(Platform.OS === "android") {
      return (
      <SafeAreaView style={styles.container}>
      
      <View style={styles.box}>
      <Text style={[simpleStyle]}>Hi s!!!</Text>
      
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
      );
    }


}

const simpleStyle = {
 /*  backgroundColor: "blue",
  color: "#fff",
  padding: 50,
  margin: 50, */
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  box: {
    backgroundColor: '#eee',
    width: '100%',
    height: 50,
    opacity: 0.5,
    color: '#fff',
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: "solid",
    position: "absolute",
    top: Platform.OS === "android" ? 150 : 30,
    left: -29,



  }
});
