// console.log("hello");
// console.log("hello")
const redux = require("redux")
const reduxLogger= require("redux-logger")
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const  logger = reduxLogger.createLogger()
const Buy_Cake = "Buy_Cake"
const Buy_IceCreams= "Buy_IceCreams"

function buyCake() {
    return {
        type: Buy_Cake,
        info: "first redux action"
    }
}
function buyIceCream(){
    return{
        type: Buy_IceCreams
    }
}
//(prevState, action)=> newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }
const initialCakeState = {
    numOfCake: 10
}
const initialIceCreamState = {
    numOfIceCream: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case Buy_Cake:
//             return {
//                 ...state,  //copy the initilaState object
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case Buy_IceCreams:
//             return {
//                 ...state,  //copy the initilaState object
//                 numOfIceCreams: state.numOfIceCreams - 1
//             }

//         default:
//             return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case Buy_Cake:
            return {
                ...state,  //copy the initilaState object
                numOfCake: state.numOfCake - 1
            }
        

        default:
            return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case Buy_IceCreams:
            return {
                ...state,  //copy the initilaState object
                numOfIceCream: state.numOfIceCream - 1
            }
        

        default:
            return state
    }
}
const rootReducer= combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// const store = createStore(reducer)
const store = createStore(rootReducer, applyMiddleware(logger))
console.log("initial state", store.getState());
// const unsubscribe=store.subscribe(() =>  console.log("updated state", store.getState()))
const unsubscribe=store.subscribe(() =>  {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

