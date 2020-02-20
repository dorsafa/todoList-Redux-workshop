import {createStore} from 'redux';
import todoListReducer from '../reducer/todoListReducer'



const store=createStore(todoListReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )
export default store;


