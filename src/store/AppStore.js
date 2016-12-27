/**
 * Created by CAOBIN on 2016/12/27.
 */
import {applyMiddleware,createStore,compose } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import {createEpicMiddleware} from "redux-observable";
import {pingEpic} from "../action/AppAction"
import {pingReducer} from "../reducer/AppReducer"
var logger=createLogger();
const epicMiddleware = createEpicMiddleware(pingEpic);

export default function configureStore() {
    const store=createStore(pingReducer, applyMiddleware(epicMiddleware));
    return store;
}