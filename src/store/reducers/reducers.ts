import { combineReducers } from "@reduxjs/toolkit";

import users from "./users/reducer";

const reducers = combineReducers({
  users
});

export default reducers;
