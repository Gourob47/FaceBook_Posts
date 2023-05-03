import { combineReducers, configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/posts/PostSlice";
import TestSlice from "../features/posts/TestSlice";

const reducer= combineReducers({
    test:TestSlice
})

const store = configureStore({
    reducer
})
export default store