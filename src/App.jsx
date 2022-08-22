import React, { useState,useEffect } from 'react'
import { Input } from './components/Input';

export const App = () => {

    const [items, setItems] = useState([])

    const onInput = (event)=>{
      if(!items.find((event)=>event.name===event)){
        setItems([...items,{name:event,done:false}]);
      }
      
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
