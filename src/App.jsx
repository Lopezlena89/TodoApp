import React, { useState,useEffect } from 'react'
import { Input } from './components/Input';

export const App = () => {

    const [items, setItems] = useState([])

    const onInput = (taskName)=>{
      if(!items.find((event)=>event.name===taskName)){
        setItems([...items,{name:taskName,done:false}]);
      }
      
    }

    useEffect(() => {
      let data = localStorage.getItem('tasks')
      if(data){
        setItems(JSON.parse(data));
      }
    }, [])
    

    useEffect(() => {
      localStorage.setItem('tasks',JSON.stringify(items))
    }, [items])
    
    const clear = ()=>{
      localStorage.clear();
    }
  
  return (
    <>
      <Input newInput={onInput}/>

      {
        items.map((list)=>(
          <div key={list.name}>
            {list.name}
          </div>
        ))
      }

      

    </>
  )
}
