import React from 'react'
import { useRef } from 'react';
import {AiFillEdit} from 'react-icons/ai'
import {IoCheckmarkDoneSharp,IoClose} from 'react-icons/io5'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
const TodoItem = (props) => {
    const {item,updateTodo,removeTodo,completeTodo}=props;
    const inputRef=useRef(true)
    const changeFocus = ()=>{
        inputRef.current.disabled=false;
        inputRef.current.focus()
    }
    const update=(id,value,e)=>{
        if(e.which===13){
            props.updateTodo({id,item:value})
            inputRef.current.disabled=true
        }

    }
    const deleteHandler = (id) => {
        confirmAlert({
          title: 'Confirm to Delete',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => props.removeTodo(id)
            },
            {
              label: 'No',
              
            }
          ]
        });
      };
  return (
    <li key={item.id} className="card"><div style={{padding:"15px 0px 0px 0px"}}></div> 
    <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item} onKeyPress={(e)=>update(item.id,inputRef.current.value,e)}/>
    <div className='btns'>
        {item.completed===false && <button  onClick={()=>changeFocus()}><AiFillEdit/></button>}
       {item.completed===false && <button style={{color:"green"}} onClick={()=>props.completeTodo(item.id)}><IoCheckmarkDoneSharp/></button>
        }
        <button style={{color:"red"}} onClick={()=>deleteHandler(item.id)}><IoClose/></button>
    </div>
    {item.completed &&<span className='completed'> Completed</span>}
 </li>
  )
}

export default TodoItem
