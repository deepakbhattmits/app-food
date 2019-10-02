import { foodConstants } from "../Constants";
export const markFavorite = data => dispatch => {
  console.log("Action : ", data);
  dispatch({ type: foodConstants.MARK_FAVORITE, payload: data });
};
export const unmarkFavorite = (data, dispatch) => {
  dispatch({ type: foodConstants.UNMARK_FAVORITE, payload: data });
};
export const saveFormData = data => dispatch => {
  dispatch({ type: foodConstants.SAVE_FORM, payload: data });
};
export const saveFormData1 = data => dispatch => {
  dispatch({ type: foodConstants.SAVE_FORM1, payload: data });
};

