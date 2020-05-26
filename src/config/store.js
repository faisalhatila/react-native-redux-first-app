import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import reducers from "../reducers";
// const store = createStore(reducers, {}, applyMiddleware());
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware());
  let persistor = persistStore(store);
  return { store, persistor };
};
