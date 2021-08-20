import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/index.js'

const initialState = {
  dog:"",
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_START):
      return({
        ...state,
        isFetching: true,
        error: ""
      });
    case(FETCH_SUCCESS):
      return({
        ...state,
        dog: action.payload,
        isFetching: false,
      });
    case(FETCH_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false
      })
    default:
      return state;
  }
};