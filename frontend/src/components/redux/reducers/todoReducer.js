import * as actionTypes from "../actions/type";

export const todoReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];

    case actionTypes.GET_TODOS:
      return action.payload; //pehle jaisa nhi because we dont need to send the previous state

    default:
      return state;
  }
};
