import axios from "axios";
import { ADDNEW_TODO, GET_TODOS } from "./type";

const API_URL = "http://localhost:4000";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = axios.post(`${API_URL}/createTodo/`, data);
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (err) {
    console.log("error while calling add new Todo Api", err.message);
  }
};

export const getTodos = () => async (dispatch) => {
  try {
    const res = axios.get("/getTodos/");
    dispatch({ type: GET_TODOS, payload: res.data });
  } catch (err) {
    console.log("error in get Todos API", err.message);
  }
};
