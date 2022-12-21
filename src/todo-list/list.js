import React from "react";

const TodoBaby = (props)=>{
    return (
        <>
        
        <li >{props.things}</li>
       
        <button onClick={()=>{
            props.removeList(props.things)
        }}>
            
            delete</button>
        <button onClick={()=>{
            props
        }}>

        </button>
        </>
    )
}


export default TodoBaby