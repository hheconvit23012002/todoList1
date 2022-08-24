import React, { useEffect } from "react";

export default function TodoItem(props) {
    const {todoItem,setTodoItem} = props;
    // hỏi anh tại sao console.log('a') lai ko ra lan dau o day
    // tai sao an 2 lan nut check thi no ko thay doi luc ko xem con lai thi ok
    console.log(todoItem);
    function handleClick(id){
        setTodoItem(items => 
            items.map((value) => {
                if(id===value.id){
                    value.isDone = !value.isDone;
                }
                return value;
            })
        )
    }
    function handleDelete(id){
        setTodoItem((items)=>{
            return items.filter(function(value){
                return value.id !== id;
            })
        })
    }
    return (
        <div>
            {
                todoItem.map(function (value) {
                    return (
                    <div key={value.id} className="item">
                        <div className="header-item">
                            <input type="checkbox" className="input-item"  onChange={()=>handleClick(value.id)}></input>
                            <div className="name-item" style={{ textDecoration: value.isDone ? "line-through" : null }}>{value.name}</div>
                        </div>
                        <button className="bin" onClick={()=>handleDelete(value.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </button>
                    </div>
                    )
                })
            }
        </div>
    )
}