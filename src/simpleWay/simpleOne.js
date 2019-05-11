const { createStore } = require('redux');

// create initial state
// const initialState = 10;
const initialState = {
  number: 10
}

// create reducer
const myReducer = (state = initialState, action) => {
  const newState = {...state};
  console.log("= ", newState);
  if (action.type === "ADD")
    newState.number = newState.number + 1;
  if (action.type === "SUB")
    newState.number = newState.number - 1;

  return newState;
}

// create store
console.log("create store");
const store = createStore(myReducer);

// subscribe is gonna be executed every time a change happens
store.subscribe(() => {
  console.log("state changed: ", store.getState());
})


// // dispatching ADD
store.dispatch({type: "ADD"});

// dispatching ADD
store.dispatch({type: "ADD"});

// dispatching SUB
store.dispatch({type: "SUB"});

// dispatching ADD
store.dispatch({type: "ADD"});

// dispatching SUB
store.dispatch({type: "SUB"});
