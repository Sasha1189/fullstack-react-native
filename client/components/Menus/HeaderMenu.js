import { View, TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const HeaderMenu = () => {
  const [state, setState] = useContext(AuthContext);
  const navigation = useNavigation();
  // logout
  const handleLogout = async () => {
    console.log("Logout started");
    setState({ token: "", user: null });
    await AsyncStorage.removeItem("@auth");
    alert("logout successfully");
  };

  // const handleLogout = async () => {
  //   try {
  //     console.log("Logout started");

  //     // Clear AsyncStorage
  //     await AsyncStorage.removeItem("@auth");
  //     console.log("AsyncStorage cleared");

  //     // Reset global state
  //     setState(null);
  //     console.log("Auth state cleared");

  //     // Alert user
  //     Alert.alert("Success", "You have been logged out successfully!");

  //     // Navigate to login screen and reset navigation stack
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: "Login" }],
  //     });
  //   } catch (error) {
  //     console.error("Logout error:", error);
  //     Alert.alert(
  //       "Error",
  //       "An error occurred during logout. Please try again."
  //     );
  //   }
  // };
  return (
    <View>
      <TouchableOpacity style={{ padding: 10 }} onPress={handleLogout}>
        <FontAwesome5
          name="sign-out-alt"
          color={"red"}
          style={styles.iconStyle}
        />
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 25,
    marginBottom: 3,
    alignSelf: "center",
  },
});
export default HeaderMenu;
