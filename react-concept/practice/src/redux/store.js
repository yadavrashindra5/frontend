import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./user/userReducer";

export const store = createStore(userReducer, applyMiddleware(thunk));
