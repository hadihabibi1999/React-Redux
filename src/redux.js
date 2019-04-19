

import {createStore} from "redux";

const reduce = function(state=7,action){
    if (action.type==="dec")
    return state+3;
    return state;
}

const store = createStore(reduce);

 function action (some) {
     return {
type:"dec",
some
     }
 }

store.subscribe(() => console.log(store.getState()));

store.dispatch(action(4));


export default store;