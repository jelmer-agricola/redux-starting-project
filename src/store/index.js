import { createStore } from 'redux';


const counterReducer = (currentState = { counter: 0}, action) => {
    if(action.type === 'increment'){

        return {
            counter: currentState.counter + 1
        }
    }
    if(action.type === 'decrement'){

        return {
            counter: currentState.counter -1
        }
    }


    return currentState;

};

// store needs to know who the reducer function is 
const store = createStore(counterReducer);

export default store;

// '
// console.log(store.getState)

// // subscription
// const counterSubscriber =()=> {
//     // gives state snapshot after state changes 
//   const latestState = store.getState();
//   console.log (latestState);
// };

// // we don't execute it but just point at it instead of (counterSubsrcriber())
// store.subscribe(counterSubscriber);

// store.dispatch({type: 'increment'});
// store.dispatch({type: 'decrement'});
