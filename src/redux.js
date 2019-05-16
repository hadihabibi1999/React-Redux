
import {createStore} from "redux";

const reducer = (state=4 ,action) => {

    switch(action.type) {

        case "INCREMENT":
           return{
                state:state+action.payload
        }
        case "DECREMENT":
            return{
                state:state-action.payload
            }
            default:
                 return state;
    }
}

const store = createStore(reducer,9);

store.subscribe(()=>{
    console.log('store chsnged',store.getState())
})

store.dispatch({type:'INCREMENT',payload:4})


export default store;