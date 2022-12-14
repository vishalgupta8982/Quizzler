import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Title from "../component/Title";
import Home from "./Home";
const Result = ({navigation,route}) => {
  const {score}=route.params
  
  return (
     <View style={styles.container}>
      <Title  titleText= 'Result'/>
      <Text style={styles.scoreValue} >Score:{score}/20</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={require("./win.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
         onPress={() => {
        navigation.navigate("Home");
        }}
        style={styles.button}
      >
        <Text style={styles.buttontext}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
  
};
export default Result;
const styles = StyleSheet.create({
   banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 2,
    paddingHorizontal: 20,
    height: "100%",
   alignItems:'center',
    textAlign:'center',
  },
  button: {
    width: "100%",
    backgroundColor: "#15F385",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttontext: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  scoreValue:{
    fontSize:44,
    fontWeight:'800',
    alignItems:'center',
    textAlign:'center',
    marginTop:30,
    color:'green',
  }
});
