const { createStore } = require('redux');

// create initial state
const initialState = {
  number: 10
}

// create reducer
const myReducer = (state = initialState, action) => {
  const newState = {...state};
  console.log("newState: ", newState, " action: ", action);
  switch (action.type) {
    case "ADD":
      return newState.number = newState.number + 1;
      // console.log("ADD action");
    case "SUB":
      return newState.number = newState.number - 1;
      // console.log("SUB action");
    default:
      return newState;
      // console.log("NO action selected");
  }
}

// create store
console.log("create store");
const store = createStore(myReducer);

// // dispatching ADD
// store.dispatch({type: "SUB"});
// // checking state
// console.log("Store is now = " + store.getState());

// dispatching ADD
store.dispatch({type: "SUB"});
// checking state
console.log("Store is now = " + JSON.stringify(store.getState()));

// dispatching ADD
store.dispatch({type: "ADD"});
// checking state
console.log("Store is now = ", JSON.stringify(store.getState()));

// // dispatching ADD
// store.dispatch({type: "SUB"});
// // checking state
// console.log("Store is now = " + store.getState());

// // dispatching ADD
// store.dispatch({type: "ADD"});
// // checking state
// console.log("Store is now = " + store.getState());
