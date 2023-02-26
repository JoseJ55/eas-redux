import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state) => {
            state.todo = [...state.todo, { id: state.todo.length + 1, action: "go to store" }];
        },
        removeTodo: (state) => {
            state.todo.pop();
        },
        addCustomTodo: (state, action) => {
            state.todo.push({ id: state.todo.length + 1, action: action.payload });
        }
    }
})

export const { addTodo, removeTodo, addCustomTodo } = todoSlice.actions;

export default todoSlice.reducer;