import { useMutation, gql } from "@apollo/client";
import React from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ADD_RECIPE = gql`
  mutation createRecipe($createrecipeinput: CreateRecipeInput!) {
    createRecipe(input: $createrecipeinput) {
      id
      title
      price
      description
      authorId
    }
  }
`;

function AddRecipe() {
  const [addRecipe, { data }] = useMutation(ADD_RECIPE);
  const navigation = useNavigation();

  function onPress() {
    addRecipe({
      variables: {
        createrecipeinput: {
          title: "Hello, world!",
          price: 27,
          description: "Hello, world!",
          authorId: "id",
        },
      },
    });
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ color: "red", fontSize: 20 }}>Close</Text>
      </TouchableOpacity>

      <TextInput placeholder="username" />
      <TextInput placeholder="price" />
      <TextInput placeholder="description" />
      {/* <TextInput placeholder="username" /> */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => onPress()}>
          <Text style={{ color: "blue", fontSize: 20 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default AddRecipe;
