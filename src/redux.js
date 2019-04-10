import {createStore} from "redux";

const reduce = function(state,action){
 if (action.type==='dec')
 return state+3;
 return state;
}

const store = createStore(reduce,2);

store.subscribe(() => console.log(store.getState()));

store.dispatch({type:'dec'});

export default store;