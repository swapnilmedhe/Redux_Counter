
import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {
    //console.log('inside Counter functions '+ JSON.stringify(props));
    
    return (
        <div>
            <h3>Counter Application !!</h3>
             
            <p strong  style={{color: "red" ,fontSize:"40px"}} >Count:   {props.count}</p> 
            <button style={{blockSize:'35px'}} onClick={props.onIncrement}> Increment </button> <t></t>
            <button style={{blockSize:'35px'}}  onClick={props.onDecrement}> Decrement </button> <t></t>
            <button style={{blockSize:'35px'}}   onClick={props.setZero}> Reset  </button> <hr></hr>
        </div>
    )
}



function mapStateToProps(state)
{
    console.log(state.count);

   return {
       count :state.count
   }
}


function mapDispachToprops(dispach){
  return {
    onIncrement : () =>{
        console.log("Incremnet button click");
        const action={
            type:"INCREMENT"
        }

        dispach(action);
    },
    onDecrement : () =>{
        console.log("decrement button click");
        const action={
            type:"DECREMENT"
        }

        dispach(action);
    },
    setZero :() =>{
        const action={
            type:"SETZERO"
        }
        dispach(action)
    }
    

  }
}



export default connect(mapStateToProps,mapDispachToprops)(Counter)
