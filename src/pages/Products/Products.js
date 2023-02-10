import { View, Text } from "react-native";
import React from "react";
import Config from "react-native-config"

export default function Products() {
  return (
    <View>
      <Text>s</Text>
      <Text>Products:{Config.API_URL}</Text>
    </View>
  );
}
