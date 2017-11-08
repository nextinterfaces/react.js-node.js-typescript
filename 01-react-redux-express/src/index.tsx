import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store/create";
import { EntryLayout } from "./components/EntryLayout";

console.log('Starting React ... ');

const reduxDebugger = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

ReactDOM.render(
    <Provider store={createStore(reduxDebugger)}>
        <EntryLayout/>
    </Provider>,
    document.getElementById('next-app-root')
);