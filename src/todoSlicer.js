import { createSlice } from "@reduxjs/toolkit";

const todoSlice =createSlice({
    name:"todo",
    initialState:[
        // {
        //     id:1,
        //     text :"Bulding Todo",
        //     isComplited:false,
        // },
        // {
        //     id:2,
        //     text :"Buy a new project",
        //     isComplited:true,
        // },
    ],
    reducers :{
        addTodo:(state, action)=>{
          return [...state,action.payload]
        },
        deleteTodo:(state,action)=>{
          return  state.filter((item)=>item.id !==action.payload)
        }
    }
})



export const { addTodo , deleteTodo}  = todoSlice.actions
export default todoSlice.reducer