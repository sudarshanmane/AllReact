import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./Reducer/RootReducer";
import { RootSaga } from "./Saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: RootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(RootSaga);
