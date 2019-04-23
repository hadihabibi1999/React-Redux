

import {combineReducers,createStore} from "redux";

const reduce1 = function(state={},action){
    if (action.type==="INC")
    return {...state,number:action.some+3};
    return state;
}
const reduce2 = function(state={},action){
    if (action.type==="DEC")
    return {...state,number:action.some-3};
    return state;
}
const reducers = combineReducers({
    decrease:reduce1,
    increase:reduce2
})
const store = createStore(reducers);

 function action (some) {
     return{
    type:"DEC",
    some
     }
 }

store.subscribe(() => console.log(store.getState()));

store.dispatch(action(4));
store.dispatch(action(5));


export default store;