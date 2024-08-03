import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { MaterialIcons, Fontisto, AntDesign } from "@expo/vector-icons";

export const NewsCart = (item, navigation) => {
  return (
    <View
      style={{
        gap: 10,
        backgroundColor: "#080E4B",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
      }}
    >
      <Image
        style={{ width: "100%", height: 180, borderRadius: 10 }}
        source={{
          uri:
            item.urlToImage === null
              ? "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              : item.urlToImage,
        }}
      />
      <Text style={{ color: "#fafafa" }}>
        {" "}
        {item.title.substring(0, 100)} ...{" "}
      </Text>
      <View>
        <Text style={{ color: "#fafafa" }}>
          {" "}
          {item.publishedAt} by{" "}
          <Text style={{ fontStyle: "italic" }}>{item.author} </Text>{" "}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity>
            <Fontisto name="dislike" size={18} color="#fafafa" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Fontisto name="like" size={18} color="dodgerblue" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="heart" size={20} color="#800e14" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { data: item })}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={{ color: "#fafafa", fontStyle: "italic" }}>
            Read all
          </Text>
          <MaterialIcons
            name="keyboard-double-arrow-right"
            size={20}
            color="#fafafa"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
