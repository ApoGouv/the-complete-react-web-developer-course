import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ## Action Creators OR Action Generators ##

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0 } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            /**
             * The concat() method is used to merge two or more arrays.
             * This method does not change the existing arrays, but instead returns a new array.
             * //return state.concat(action.expense);
             */
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        // (... = Obj spread operator)
                        ...expense, // Get the original Obj
                        ...action.updates // Override only the properties that we pass to the editExpense
                    };
                } else {
                    return expense;
                };
            });
        default:
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

// timestamps are positive or negative integer numbers and
// represent the millisecond difference from
// Unix Epoch: January 1rst 1970
// e.g: 33400, 40, -203
// --> 33400 is equivalent to: 01/01/1970 @ 9:16am (UTC)
// --> 40 is equivalent to: 01/01/1970 @ 12:00am (UTC)
// --> -203 is equivalent to: Wednesday, December 31, 1969 11:56:37 PM

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

        // Figure out if expenses.description has the "text" variable string inside of it
        // with .includes() and .toLowerCase() to make case-insensitive search
        const textMatch = expense.description.toLowerCase().includes( text.toLowerCase() );

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        if (sortBy == 'date') {
            // compare the createdAt properties of each expense and return first the most recent
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy == 'amount') {
            // compare the amount of each expense and the return the greater amount first
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch( removeExpense({ id: expenseOne.expense.id }) );
// store.dispatch( editExpense(expenseTwo.expense.id, { amount: 500 }) );

// store.dispatch( setTextFilter('rent') );
// store.dispatch( setTextFilter() );

store.dispatch( sortByAmount() );
// store.dispatch( sortByDate() );

// store.dispatch( setStartDate(0) );
// store.dispatch( setStartDate() );
// store.dispatch( setEndDate(999) );


const demoState = {
    expenses: [{
        id: 'dfgvrnioevpkgp',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined,
    }
};

