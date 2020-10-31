import { combineReducers } from "redux";

import user from "./user/userReducer";
import shop from "./shop/shopReducer";

const rootReducer = combineReducers({
  user,
  shop,
});

export default rootReducer;
