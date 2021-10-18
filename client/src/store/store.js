import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReduser = combineReducers({
    
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))