import { createStore } from "redux";
import ShoppingReducer from "./Reducer";

const ShoppingStore=createStore(ShoppingReducer)

export default ShoppingStore