import React, { useState,useEffect } from 'react'
import { Input } from './components/Input';
import { ListRode } from './components/ListRode';

export const App = () => {

    const [items, setItems] = useState([])
    const [counter, setCounter] = useState(0)
    const [edit, setEdit] = useState('');
    
    //posible solucion
    let contador = 0;
    localStorage.setItem('contador',JSON.stringify(contador));
    
    
    const onInput = (event)=>{
      if(event.length > 1){
        const tmpItems = [...items];
        setCounter(counter+1)
  
        tmpItems.push({
          name:event,
          done:false,
          id:counter
        })
        setItems(tmpItems)
      } else{
        alert('debes ingresar la descripción')
      }
      
    }

    const delate = (index)=>{
      const tmpItems = [...items];
      tmpItems.splice(index, 1)
      setItems(tmpItems)
    }
   
    const tarea = (index)=>{
      const tmpItems = [...items];
      tmpItems[index].done = !tmpItems[index].done;
      setItems(tmpItems);
    }

    const actualizarTarea = (index,event)=>{
      if(event.length > 1) {
        const tmpItems = [...items];
        tmpItems[index].name = event;
        console.log(tmpItems)
        setItems(tmpItems);
      } else{
        alert('debes ingresar la descripción')
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
    
    
  
  return (
    <>
     
        <div className='container'>
        <Input newInput={onInput}/>

        {
          items.map((list, index)=>(
            <ListRode index={index} key={list.name} newList={list} oncheck={tarea} eliminar={delate} editarTexto={actualizarTarea}/>
        
          ))
          
        }
        </div>

      

     
      
      

    </>
  )
}
