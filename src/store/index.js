import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState ={
    count :0
}

 
const reducers=(state = initialState,action)=>
{
   console.log("reducers is running......");
    switch(action.type)
    {
        case 'INCREMENT':
           return Object.assign({},state,{count :state.count +1})
            default :
            return state; 
            break;

         case 'SETZERO':
         return Object.assign({},state,{count :state.count =0})
         break;

        case 'DECREMENT':
            return Object.assign({},state,{count :state.count -1})
    }
  
}



const store =createStore(reducers,composeWithDevTools())

export default store;
