import {ADD_TODO, DELETE_TODO, COMPLETE_TASK,EDIT_TASK} from  './actionType'

export const addToList = (item)=>( 
    {type: ADD_TODO, payload:{todo:item, isComplete:false,} })


export const deleteFromList = (n) => (
    {type: DELETE_TODO, payload:n}
)

export const completeTask = (n) => (
    {type: COMPLETE_TASK, payload:n}
)

export const editTodo = (index, todo ) => (
    {type:EDIT_TASK, payload:{index,todo}}
)