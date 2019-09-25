import { MARK_FAVORITE, UNMARK_FAVORITE } from "../Constants";
export const markFavorite = data => dispatch => {
  console.log("Action : ", data);
  dispatch({ type: MARK_FAVORITE, payload: data });
};
export const unmarkFavorite = (data, dispatch) => {
  dispatch({ type: UNMARK_FAVORITE, payload: data });
};
