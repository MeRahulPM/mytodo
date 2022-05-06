import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useRef } from 'react'
import {GoPlus} from 'react-icons/go'
import { addTodos,completeTodos,removeTodos, updateTodos  } from '../redux/Reducer'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
const mapStateToProps=(state)=>{
    return{todos:state}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addTodo:(obj)=>dispatch(addTodos(obj)),
        removeTodo:(id)=>dispatch(removeTodos(id)),
        updateTodo:(obj)=>dispatch(updateTodos(obj)),
        completeTodo:(id)=>dispatch(completeTodos(id))
    }
}
const Todos = (props) => {
    const[todo,setTodo]=useState("")

    const handleChange = (e)=>{
        setTodo(e.target.value)
        
    }
    
    const add=()=>{
        if(todo.trim("").length>0){
         
            props.addTodo({
                id:Math.floor(Math.random()*1000),
                item:todo,
                completed:false
            })
            setTodo("")
            
        }
        else{
            confirmAlert({
                title: 'Input should not be empty',
                message: 'Please enter something',
                buttons: [
                  {
                    label: 'Ok',
                   
                  }
                ]
              });
        }
        
    }
  return (
    <div className='AddTodos'>
        <input type="text" className="inputTodo" onChange={(e)=>handleChange(e )} placeholder="Enter todo details" value={todo} />
        <button className='add-btn' onClick={()=>add()
        }>+</button>
        
     
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos)

