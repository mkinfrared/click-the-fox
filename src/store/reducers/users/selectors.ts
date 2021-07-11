import { createSelector } from "@reduxjs/toolkit";

import { AppState } from "store";

const getUsers = (state: AppState) => state.users;
const selectUsers = createSelector(getUsers, (users) => users);
const selectLastUser = createSelector(selectUsers, (users) => [...users].pop());

export { selectUsers, selectLastUser };
