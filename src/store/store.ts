import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import { testReducer } from "../features/test.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AuthReducer } from "../features/auth.slice";
const persisConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  testReducer,
  AuthReducer,
});

const persistedReducer = persistReducer(persisConfig, reducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  }, // Remove the extra 'reducer' field
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
