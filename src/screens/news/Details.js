import {
  View,
  Text,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState, memo } from "react";
import { useRoute } from "@react-navigation/native";

const Details = () => {
  const { data } = useRoute().params;
  const { height } = useWindowDimensions();

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#000229",
        flex: 1,
        paddingHorizontal: 15,
        height,
      }}
    >
      <Image
        style={{
          width: "100%",
          aspectRatio: 1,
          marginTop: 10,
          borderRadius: 8,
        }}
        source={{
          uri:
            data.urlToImage === null
              ? "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : data.urlToImage,
        }}
      />
      <View>
        <Text style={{color:"#fafafa"}}> {data.author} </Text>
        <Text style={{color:"#fafafa"}}> {data.publishedAt} </Text>
      </View>
      <Text style={{ color: "#ff6666", fontSize: 18, marginVertical: 10 }}>
        {" "}
        {data.title}{" "}
      </Text>
      <Text style={{ color: "#fafafa", fontSize: 14 }}>
        {" "}
        {data.description}{" "}
      </Text>
      <Text style={{ color: "#fafafa", fontSize: 14, marginTop: 10 }}>
        {" "}
        {data.content}{" "}
      </Text>
    </ScrollView>
  );
};

export default Details;
