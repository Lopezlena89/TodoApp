import React, { useState,useEffect } from 'react'
import { Input } from './components/Input';
import { ListRode } from './components/ListRode';





export const App = () => {

    const [items, setItems] = useState([])
    const [counter, setCounter] = useState(0)

    const onInput = (event)=>{
      setCounter(counter+1)
      if(!items.find((event)=>event.name===event)){
        setItems([...items,{name:event,done:false,id:counter}]);
      }
    }

    const delate = (id)=>{
     setItems([...items].filter(todo =>todo.id !== id))
      
    }
   
    const tarea = (event)=>{
      
      setItems(
        items.map(lista=>(lista.name == event.name )?{...lista, done: !lista.done}:lista )
      )
    }

    useEffect(() => {
      let data = localStorage.getItem('value')
      if(data){
        setItems(JSON.parse(data));
      }
    }, [])
    

    useEffect(() => {
      localStorage.setItem('value',JSON.stringify(items))
      
    }, [items])
    
    
  
  return (
    <>
     
        <div className='container'>
        <Input newInput={onInput}/>

        {
          items.map((list)=>(
            <ListRode key={list.name} newList={list} oncheck={tarea} eliminar={delate}/>
        
          ))
          
        }
        </div>

      

     
      
      

    </>
  )
}
