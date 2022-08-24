import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
export default function(){
    var todo = [
        {
            id:1,
            name:'a',
            isDone:false
        },
        {
            id:2,
            name:'b',
            isDone:false
        },
        {
            id:3,
            name:'c',
            isDone:false
        },
        {
            id:4,
            name:'d',
            isDone:false
        },
        {
            id:5,
            name:'e',
            isDone:false
        }
    ]
    const [todoItem,setTodoItem] = useState(todo)
    return (
        <TodoItem todoItem={todoItem} setTodoItem={setTodoItem}/>
    )
}