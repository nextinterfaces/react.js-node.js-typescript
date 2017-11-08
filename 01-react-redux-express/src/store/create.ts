import { applyMiddleware, createStore as reduxStore } from "redux";
import reducers from "./reducers";
import ReduxPromise = require('redux-promise');

const applyMiddlewareFunc = applyMiddleware(ReduxPromise)(reduxStore);

const createStore = (args) => {
    return applyMiddlewareFunc(reducers, args);
}

export default createStore;
