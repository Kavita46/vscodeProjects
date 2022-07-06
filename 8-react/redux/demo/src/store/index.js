import counterReducer from "./reducers/counterReducer";
import {createStore} from 'redux'
import { addAction, reduceAction } from './actions/counter'
const store = createStore(counterReducer);
export default store