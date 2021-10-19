import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {postsReduser} from "./redusers/postsReduser";

const rootReduser = combineReducers({
    postsReduser
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))