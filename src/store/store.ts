import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import reducer from "./reducers";

export type AppState = ReturnType<typeof reducer>;

const store = configureStore({ reducer });
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export { useAppSelector };

export default store;
