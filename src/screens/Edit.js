import { useMutation, gql } from "@apollo/client";
import React from "react";
import { Text, View, TextInput, Button } from "react-native";

const EDIT_RECIPE = gql`
  mutation MyMutation($input: UpdateRecipeInput!) {
    updateRecipe(input: $input) {
      authorId
      description
      id
      price
      title
    }
  }
`;

function Edit() {
  const [addRecipe, { data }] = useMutation(EDIT_RECIPE);

  function onPress() {
    addRecipe({
      variables: {
        input: {
          id: "8ca5cc09-3dfb-49c6-9f8a-a41b9a6cf597",
          title: "test",
          price: 27,
          description: "test!",
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

export default Edit;
