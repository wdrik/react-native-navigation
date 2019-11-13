import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <TouchableOpacity
        style={styles.productButton}
        onPress={() => {
          navigation.navigate("Teste");
        }}
      >
        <Text style={styles.productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCC",
    padding: 20
  },

  productButton: {
    height: 42,
    width: "100%",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#Da552f",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  productButtonText: {
    fontSize: 16,
    color: "#Da552f",
    fontWeight: "bold"
  }
});

export default Home;
