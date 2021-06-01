import { useQuery, gql, useMutation } from "@apollo/client";
import React from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

function FavoriteList() {
  const { loading, error, data } = useQuery(RECIPE_LIST);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;
  return (
    <TouchableOpacity onPress={() => console.log("test")} style={styles.smBtn}>
      <FlatList
        data={data.listFavorite.items}
        onRefresh={() => data.listFavorite.items}
        refreshing={false}
        renderItem={({ item }) => (
          <View
            key={item.title}
            style={{
              width: "95%",
              flexDirection: "row",
              marginHorizontal: "2.5%",
              marginVertical: 5,
              padding: 10,
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 5,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 17 }}>{item.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => console.log("test")}
                style={styles.smBtn}
              >
                <AntDesign name="star" size={24} color="grey" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Remove")}
                style={styles.smBtn}
              >
                <AntDesign name="edit" size={24} color="green" />
              </TouchableOpacity>
              <TouchableOpacity
                // onPress={() => onDelete(item.id)}
                style={styles.smBtn}
              >
                <EvilIcons name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  smBtn: {
    marginLeft: 5,
  },
});
export default FavoriteList;
