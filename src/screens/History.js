import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
// const { width, height: winHeight }= Dimensions.get("window");

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

class MyProfile extends React.Component {
  state = {
    index: 0,
    bluriii: true,
  };

  render() {
    return (
      //   <View>
      //     <View style={{ flexDirection: "row" }}>
      //       <Text>Username </Text>
      //       <Text>CookingCoins: 500 </Text>
      //     </View>

      //     <Text>Transactions History </Text>
      //     <Text>Favorited Recipes </Text>
      //     <Text>Purchased Recipes </Text>
      //     <Text>Posted Recipes</Text>
      //   </View>

      <View style={{ marginTop: 60, flex: 1 }}>
        <View
          style={[
            {
              flexDirection: "row",
              borderBottomWidth: 1,
              borderTopWidth: 1,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              //   styles.buttonTabs,
              //   styles.center,
              {
                alignItems: "center",
                justifyContent: "center",
                width: screenWidth * 0.45,
              },
            ]}
            onPress={() => this.onIndexChange(0)}
            ref={(component) => (this.touchable = component)}
          >
            <Text>Transaction History </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              //   styles.buttonTabs,

              //   styles.center,
              {
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: screenWidth * 0.45,
              },
            ]}
            onPress={() => this.onIndexChange(1)}
          >
            <Text>Purchased</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MyProfile;
