import {ADD_TODO, DELETE_TODO,COMPLETE_TASK,EDIT_TASK}  from "../action/actionType.js";



const todoList= []

const todoListReducer = (state=todoList ,action) => {
    switch(action.type){
        case ADD_TODO:
            return (state.concat(action.payload));

        case DELETE_TODO:
            return (state.filter((el, index) => (index !== action.payload)))

        case COMPLETE_TASK:
            return state.map((el,i)=> i===action.payload?{ ...el,isComplete:!el.isComplete}:el); 

        case EDIT_TASK:
            return state.map((el,i)=> i===action.payload.index? {...el,todo:action.payload.todo}:el)

        default:return state
    }
}



export default todoListReducer;