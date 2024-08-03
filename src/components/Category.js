import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SelectAllCategories } from "../redux/slices/categorySlice";
import { MaterialIcons } from "@expo/vector-icons";
import NewsList from "../screens/news/NewsList";

const renderItem = (item, index, activeCategory, setActiveCategory) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <TouchableOpacity
        onPress={() => {
          setActiveCategory(index);
        }}
        style={{
          backgroundColor: activeCategory === index ? "#800e14" : "#000435",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fafafa" }}> {item.name} </Text>
      </TouchableOpacity>
    </View>
  );
};

const Category = ({ data }) => {
  const categories = useSelector(SelectAllCategories);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    // console.log(data);
  }, []);

  return (
    <View style={{ margin: 15, gap: 20,}}>
      <Text style={{ color: "#fafafa", fontSize: 20, fontWeight: "700" }}>
        Category
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({ item, index }) =>
          renderItem(item, index, activeCategory, setActiveCategory)
        }
      />


    </View>
  );
};

export default Category;
