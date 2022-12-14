import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

type FormType = {
  addHandler: (text: string) => void;
};

export const Form = (props: FormType) => {
  const { addHandler } = props;
  const [text, setText] = useState("");

  const onChange = (text: string) => {
    setText(text);
  };

  return (
    <View>
      <TextInput style={st.input} onChangeText={onChange} 
      placeholder="Task" />
      <Button
        onPress={() => addHandler(text)}
        title="Add task"
        color={"green"}
      ></Button>
    </View>
  );
};

const st = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
});
