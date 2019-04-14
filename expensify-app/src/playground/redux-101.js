import { createStore } from 'redux';

// Action Generators - functions that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions (the output is determined from/only depends from the input)
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

// Watch for redux store changes and do sth
// subscribe() returns a function which we can call to unsubscribe
const unsubscribe = store.subscribe(() => {
    console.log( store.getState() );
});

// Actions - are an object that gets sent to the store

// I'd like to increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

// I'd like to decrement the count
store.dispatch(incrementCount());

// I'd like to reset the count to zero
store.dispatch(resetCount());

// I'd like to decrement the count
store.dispatch(decrementCount({ decrementBy: 10 }));

// I'd like to decrement the count
store.dispatch(decrementCount());

store.dispatch(setCount({ count: 101 }));