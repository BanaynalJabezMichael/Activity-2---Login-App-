import { View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";

export default function HomeForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  return (
    <View styles={{ flex: 1 }}>
      <Text variant="displayMedium"
        style={{
          textAlign: "center",
          margin: 10,
          }}>Let's Start!</Text>
      <Text style={{
        textAlign: "center",
        margin: 10,
        }}>Your amazing app starts here. Open your favourite code editor and start editing this project.</Text>
      <Button
        onPress={() => navigation.pop()}
        icon="arrow-left"
        mode="contained"
        style={{ marginTop: 10 }}
      >
        Logout
      </Button>
    </View>
  );
}
