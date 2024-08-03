import { View, Text, ScrollView, useWindowDimensions } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllNews,
  selectAllNews,
  SelectNewsStatus,
} from "../../redux/slices/newsSlice";
import Header from "../../components/Header";
import Category from "../../components/Category";
import NewsList from "../news/NewsList";
import Loader from "../../components/Loader";

const Home = () => {
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(SelectNewsStatus);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (newsStatus === "idle") {
      dispatch(fetchAllNews());
    }
  }, [newsStatus, dispatch]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000229",
      }}
    >
      <Header />

      <Category data={news} />

      <ScrollView
        horizontal
        contentContainerStyle={{
          width,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {newsStatus === "loading" ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              backgroundColor: "#000229",
            }}
          >
            <Loader />
          </View>
        ) : (
          <View>
            <NewsList data={news} />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
