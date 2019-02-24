
import {createStore} from 'redux';

const Reducer = function(state,action){
if(action.type==='INC')
return state+action.payload
return state;
}

const store = createStore(Reducer,0);

store.subscribe(()=>{
console.log('store changed',store.getState())
});

store.dispatch({type:'INC',payload:1})
store.dispatch({type:'INC',payload:5})
store.dispatch({type:'INC',payload:10})
store.dispatch({type:'INC',payload:-39})

export default store;