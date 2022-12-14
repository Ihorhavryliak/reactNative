import { StatusBar } from 'expo-status-bar';
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handleTextExpress = () => {
    console.log('hello')
  }
  const handleButtonPress = () => {
    Alert.alert('No body', 'Message Hello', [
      {text:'yes', onPress: () => {console.log('yes button')}}, 
      
      {text:'no',  onPress: () => {console.log('no button')}}
    ])
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleTextExpress} numberOfLines={1}  style={styles.container}>Hello 
      {'\n'} Hello HelloHelloHelloHelloHello</Text>
      <Text style={styles.text}>Hello</Text>
   
      <Button title='press' color={'red'} onPress={handleButtonPress}  />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  text: {
    color: 'red'
  }
});
