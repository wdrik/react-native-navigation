import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Teste({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>

      <TouchableOpacity
        style={styles.productButton}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.productButtonText}>Voltar / Home</Text>
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

export default Teste;
