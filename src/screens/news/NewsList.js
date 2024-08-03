import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NewsCart } from "../../components/RenderList";

const NewsList = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: 20, gap: 20 }}>
      <Text style={{ color: "#fafafa", fontSize: 20, fontWeight: "800" }}>
        NewsList
      </Text>

      <FlatList
        data={data}
        renderItem={({ item }) => NewsCart(item, navigation)}
        ListFooterComponent={() => {
          return <View style={{ height: 100 }}></View>;
        }}
      />
    </View>
  );
};

export default NewsList;
