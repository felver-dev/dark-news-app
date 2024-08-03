import { View, Text, Image, useWindowDimensions } from "react-native";
import React from "react";

const Loader = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ backgroundColor: "#000229" }}>
      <Image source={require("../../assets/loader.gif")} />
    </View>
  );
};

export default Loader;
