import React, { useState,useEffect } from 'react'
import { Input } from './components/Input';
import { ListRode } from './components/ListRode';

export const App = () => {

    const [items, setItems] = useState([])
    const [counter, setCounter] = useState(0)
    
    //posible solucion
    let contador = 0;
    localStorage.setItem('contador',JSON.stringify(contador));
    
    
    const onInput = (event)=>{
      
      
      if(!items.find((ll)=>ll.name == event)){
        if( event.trim().length > 1 ){

          setCounter(counter+1)
          if(!items.find((event)=>event.name===event)){
          setItems([...items,{name:event,done:false,id:counter}]);
          
          }
        }else{
          alert('Debes de agregar mas de una letra')
        }
      }
      //pruebas
     if( JSON.parse(localStorage.getItem('value'))[contador] == undefined ){
      localStorage.setItem('contador',JSON.stringify(++contador));
      console.log(contador);
      
     }else{
       const local = JSON.parse(localStorage.getItem('value'))[contador];
       console.log(local)

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

    const actualizarTarea = (id,event)=>{
      
      if(event.trim().length >1){
        setItems(
          items.map(lista=>(lista.id == id)?{...lista, name:event,done:false,id:id}:lista )
       )
      }else{
       return
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
          items.map((list)=>(
            <ListRode key={list.name} newList={list} oncheck={tarea} eliminar={delate} editarTexto={actualizarTarea}/>
        
          ))
          
        }
        </div>

      

     
      
      

    </>
  )
}
