/** @format */

import { foodConstants } from '../Constants';
import { MEALS } from '../data/dummy-data';

const initialState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favorite: [],
	formData: [],
	formData1: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case foodConstants.MARK_FAVORITE:
			console.log('Reducer : ', action.payload, state);
			const fav = state.meals.filter(el => el.id === action.payload);
			return Object.assign({}, state, {
				favorite: [...state.favorite, fav]
			});
		case foodConstants.UNMARK_FAVORITE:
			console.log(
				'REDUCER UN FAV',
				state.favourite.filter(el => {
					return el.id !== action.payload;
				})
			);
			return Object.assign({}, state, {
				favourite: state.favourite.filter(el => {
					return el.id !== action.payload;
				})
			});
		case foodConstants.SAVE_FORM:
			console.log('form 0: ', action.payload);
			return Object.assign({}, state, {
				formData: [...state.formData, action.payload]
			});
		case foodConstants.SAVE_FORM1:
			console.log('form 1 : ', action.payload);
			return Object.assign({}, state, {
				formData1: [...state.formData1, action.payload]
			});
		default:
			return state;
	}
};
