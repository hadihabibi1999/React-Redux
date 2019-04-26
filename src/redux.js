
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
    increase: reduce1,
    decrease: reduce2
})
const store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));

store.dispatch({type:"DEC",valu:7});
store.dispatch({type:"INC",valu:7});
store.dispatch({type:"INC",valu:3});
store.dispatch({type:"DEC",valu:3});

export default store;