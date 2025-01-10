import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import moment from "moment";

const PostCard = ({ posts }) => {
  //use moment library for time date showing
  return (
    <View>
      <Text style={styles.heading}>Total Posts: {posts?.length}</Text>
      {posts.map((post, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.title}>Title : {post?.title}</Text>
          <Text style={styles.desc}>{post?.description}</Text>
          <View style={styles.footer}>
            <Text>
              <FontAwesome5 name="user" color={"orange"} />
              {post?.createdBy?.name}
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
