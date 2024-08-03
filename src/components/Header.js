import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  Platform,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Header = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View
      style={{
        height: height - 0.9 * height,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "#fafafa",
          alignItems: "center",
          flexDirection: "row",
          padding: Platform.OS === "ios" ? 12 : 5,
          paddingLeft: 10,
          borderRadius: 8,
          width: "60%",
          paddingLeft: 10,
          gap: 10,
        }}
      >
        <TouchableOpacity>
          <Feather name="search" size={16} color="#fafafa" />
        </TouchableOpacity>
        <TextInput
          style={{ color: "#fafafa", overflow: "scroll", width: "100%" }}
          placeholderTextColor="#fafafa"
          placeholder="Que voulez-vous savoir ..."
        />
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#800e14", padding: 14, borderRadius: 6 }}
      >
        <Text style={{ color: "#fafafa" }}>Recherche 😇</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
