import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {

    if (action.type === 'changeCount') {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'toggle') {
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
};

const store = createStore(counterReducer);


// import {createSlice, configureStore} from '@reduxjs/toolkit';

// const initialState = { counter: 0, showCounter: true };

// const counterSlice=createSlice({
//     name: 'counter',
//     initialState,
//     reducers:{
//         changeCount(state, action) {
//             state.counter=state.counter + action.amount;
//         },
//         toggle(state) {
//             state.showCounter = !state.showCounter;
//         }
//     }
// });

// const store = configureStore({
//     counter:counterSlice.reducer
// });

// export const counterActions=counterSlice.actions;

// export default store;