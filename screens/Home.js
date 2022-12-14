import React from "react";
import {
  Image,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Title from "../component/Title";

const Home = (navigation) => {
  return (
    <View style={styles.container}>
      <Title titleText='Quizzler' />
      <View style={styles.bannerContainer}>
        <Image
          source={require("./quiz.png")}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate("Quiz");
        }}
        style={styles.button}
      >
        <Text style={styles.buttontext}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
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
    marginTop:20,
  },
  button: {
    width: "100%",
    backgroundColor: "#15F385",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 50,
  },
  buttontext: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
