const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./features/icecream/iceCreamSlice").iceCreamActions;

const countActions = require("./features/counter/countSlice").countActions;
const fetchUser = require("./features/user/userSlice").fetchUser;

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.restocked(10));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());

// store.dispatch(iceCreamActions.restocked(10));

// unsubscribe();

store.dispatch(fetchUser());
