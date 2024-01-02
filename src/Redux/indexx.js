// index.js
const { createStore } = require('redux');
const counterReducer = require('./reducers');
const increment = require('./actions')
const decrement = require('./actions')

// Create Redux store
const store = createStore(counterReducer);

// Subscribe to store changes
store.subscribe(() => {
    console.log('Current State:', store.getState());
});

// Dispatch actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
