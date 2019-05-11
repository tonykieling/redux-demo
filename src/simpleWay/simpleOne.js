const { createStore } = require('redux');

// create initial state
const initialState = {
  number: 10
}

// create reducer
myReducer = (state = initialState, action) => {
  const newState = {...state};
  console.log("newState: ", newState);
  switch (action.type) {
    case "ADD":
      console.log("ADD action");
      return newState.number = newState.number + 1;
    case "SUB":
      console.log("SUB action");
      return newState.number = newState.number - 1;
    default:
      console.log("NO action selected");
      return newState;
  }
}

// create store
console.log("create store");
const store = createStore(myReducer);

// dispatching ADD
store.dispatch({type: "ADD"});

// checking state
console.log("Store is = " + store.getState());
