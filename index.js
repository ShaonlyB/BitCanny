// console.log("hello");
console.log("hello")
const redux= require ("redux")
const createStore= redux.createStore
const Buy_Cake="Buy_Cake"

function buyCake(){
    return {
        type: Buy_Cake,
        info: "first redux action"
    }
}

//(prevState, action)=> newState

const initialState={
    numOfCakes: 10
}

const reducer=(state=initialState, action)=>{
    switch (action.type) {
        case Buy_Cake:
            return{
                ...state,  //copy the initilaState object
                numOfCakes: state.numOfCakes-1
            }
    
        default:
           return state
    }
}