import { useMutation, gql } from "@apollo/client";
import React from "react";
import { Text, View, TextInput, Button } from "react-native";

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
    <View>
      <TextInput placeholder="username" />
      <TextInput placeholder="price" />
      <TextInput placeholder="description" />
      {/* <TextInput placeholder="username" /> */}

      <Button onPress={() => onPress()} title="Submit">
        submit{" "}
      </Button>
    </View>
  );
}

export default AddRecipe;
