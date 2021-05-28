import { combineReducers } from "redux";
import { stubTrue } from "lodash";
import { isNull } from "lodash";
import { ADD_RECIPE, FETCH_RECIPES } from "./constants";

const initialState = {
  recipes: [],
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, recipes: action.payload };
    case ADD_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    case FAVORITE_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
