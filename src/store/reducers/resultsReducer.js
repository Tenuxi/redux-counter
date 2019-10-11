/* eslint-disable default-case */
import * as actionTypes from '../../actions';

const initialState = {
	results: []
}

const resultsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return { ...state, results: state.results.concat({ id: new Date().getTime(), value: action.result }) };
		case actionTypes.DELETE_RESULT:
			return { ...state, results: state.results.filter(result => result.id !== action.resultElementId) };
	}

	return state;
}

export default resultsReducer;