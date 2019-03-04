import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers/index";
import callApi from "./middlewares/callApi";


const store = createStore(reducers, {}, applyMiddleware(thunk, callApi));

window.store = store
export default store;