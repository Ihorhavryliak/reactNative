import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Button, Image, Text, View, StyleSheet } from "react-native";
import { gStyle } from "../../styles/style";
import { NavigationType, NewsType } from "../Main/Main";
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";

type FullInfoType = {
  addArticle: (article: NewsType) => void
};
export const Forms = (props: FullInfoType) => {
const {addArticle} = props;

  return (
    <View style={gStyle.main}>
      <Formik
        initialValues={{
          name: "",
          anons: "",
          full: '',
          img: "",
        }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
          {(props)=>(
            <View>
              <TextInput style={styles.input} value={props.values.name} 
              placeholder='Enter name'
              onChangeText={props.handleChange('name')}
              />
               <TextInput style={styles.input} value={props.values.anons} 
               multiline
              placeholder='Enter anons'
              onChangeText={props.handleChange('anons')}
              />
               <TextInput style={styles.input} value={props.values.full} 
                   multiline
              placeholder='Enter article'
              onChangeText={props.handleChange('full')}
              />
                <TextInput value={props.values.img} 
              placeholder='Name img'
              onChangeText={props.handleChange('img')}
              style={styles.input}
              />
              <Button title="Add" onPress={props.handleSubmit} />
            </View>
          )}

      </Formik>
    </View>
  );
};

const styles = StyleSheet.create( {
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff'
  }
})