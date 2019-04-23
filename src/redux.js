

import {combineReducers,createStore} from "redux";

const reduce1 = function(state={},action){
    if (action.type==="INC")
    return {...state,number:action.valu+3};
    return state;
}
const reduce2 = function(state={},action){
    if (action.type==="DEC")
    return {...state,number:action.valu-3};
    return state;
}
const reducers = combineReducers({
    decrease:reduce1,
    increase:reduce2
})
const store = createStore(reducers);


store.subscribe(() => console.log(store.getState()));

store.dispatch({type:"DEC",valu:4});
store.dispatch({type:"INC",valu:4});


export default store;