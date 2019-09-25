import { MARK_FAVORITE, UNMARK_FAVORITE } from "../Constants";
import { MEALS } from "../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favorite: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case MARK_FAVORITE:
      console.log("Reducer : ", action.payload, state.favorite.length);
      return Object.assign({}, state, {
        favorite: [...state.favorite, action.payload]
      });
    case UNMARK_FAVORITE:
      console.log(
        "REDUCER UN FAV",
        state.favourite.filter(el => {
          return el.id !== action.payload;
        })
      );
      return Object.assign({}, state, {
        favourite: state.favourite.filter(el => {
          return el.id !== action.payload;
        })
      });
    default:
      return state;
  }
};
