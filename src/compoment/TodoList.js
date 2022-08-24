import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
export default function () {
    var todo = [
        {
            id: 1,
            name: 'a',
            isDone: false
        },
        {
            id: 2,
            name: 'b',
            isDone: false
        },
        {
            id: 3,
            name: 'c',
            isDone: false
        },
        {
            id: 4,
            name: 'd',
            isDone: false
        },
        {
            id: 5,
            name: 'e',
            isDone: false
        }
    ]
    const [todoItem, setTodoItem] = useState(todo)
    function handleAddItem(){
        setTodoItem((todoItem) => {
            var valueInputElement = document.querySelector('.input-add');
            var len = todoItem.length;
            const itemAdder = {id:len+1,name:valueInputElement.value,isDone:false};
            todoItem.push(itemAdder);
            var a =[...todoItem]
            valueInputElement.value = '';
            return a;
        })
    }
    console.log('a');
    return (
        <div>
            <TodoItem todoItem={todoItem} setTodoItem={setTodoItem} />
            <div>
                <input className="input-add" type="text" placeholder="Enter name item"></input>
                <button className="btn-add" onClick={handleAddItem}>Add</button>
            </div>
        </div>
    )
}