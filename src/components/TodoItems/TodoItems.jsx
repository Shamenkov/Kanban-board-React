import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";


function TodoItems ({itemList, customClass, selectClick}) {
    if(itemList.length !== 0){
        return(
            <ul className={customClass ? `${customClass}` : "TodoList"} >
                {itemList.map(item => <div id={item.id} className={`todoItem ${item.itemState}`} onClick={selectClick} key={item.id}><Link to={`/link/${item.id}`}>{item.title}</Link></div>)}
            </ul> 
        )
         
    }
} 

export default TodoItems;