import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import moment from "moment";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const PostCard = ({ posts, myPostScreen }) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  //handle delete prompt
  const handleDeletePrompt = (id) => {
    Alert.alert("Attention!", "Sure delete post?", [
      {
        text: "Cancel",
        onPress: () => {
          console.log("cancel press");
        },
      },
      {
        text: "Delete",
        onPress: () => handleDeletePost(id),
      },
    ]);
  };

  //delete post data
  const handleDeletePost = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.delete(`/post/delete-post/${id}`);
      setLoading(false);
      alert(data?.message);
      navigation.navigate("Home");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Total Posts: {posts?.length}</Text>
      {posts.map((post, index) => (
        <View style={styles.card} key={index}>
          {myPostScreen && (
            <View style={{ textAlign: "right" }}>
              <Text style={{ textAlign: "right" }}>
                <FontAwesome5
                  name="trash"
                  size={14}
                  color={"red"}
                  onPress={() => handleDeletePrompt(post?._id)}
                />
              </Text>
            </View>
          )}
          <Text style={styles.title}>Title : {post?.title}</Text>
          <Text style={styles.desc}>{post?.description}</Text>
          <View style={styles.footer}>
            <Text>
              <FontAwesome5 name="user" color={"orange"} />
              {post?.postedBy?.name}
            </Text>
            <Text>
              <FontAwesome5 name="clock" color={"orange"} />
              {moment(post?.createdAt).format("DD:MM:YYYY")}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "green",
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 0.25,
    borderColor: "gray",
    padding: 20,
    borderRadius: 25,
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 5,
    borderBottomWidth: 0.3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  desc: { marginTop: 10 },
});
export default PostCard;
