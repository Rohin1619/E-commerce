import cartReducer from "./cartReducer";
import changeTheNumber from "./upDown";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber:changeTheNumber,
    cart: cartReducer,
});

export default rootReducer;