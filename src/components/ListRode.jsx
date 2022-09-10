import { useEffect } from "react";
import { useState } from "react"

export const ListRode = ({newList, oncheck,eliminar,editarTexto, index}) => {
  const [modoEdit, setModoEdit] = useState(false)
  const [editText,setEditText] = useState("");

  useEffect(()=> {
    setEditText(newList.name)
  }, [])

  const editar = ()=>{
    setModoEdit(true);
  }

  const manejarEdit = ({target})=>{
    setEditText(target.value);
  }
  
  const submitEdit = (index, event)=>{
    event.preventDefault();
    console.log({index, editText})
    editarTexto(index,editText);
    setModoEdit(false)
  }
  const cancelar = ()=>{
    setEditText(newList.name)
    setModoEdit(false)
  }
  
    return (
     <> 
      
          <div className="container-input">
            {
              !modoEdit ? 
              <div className="container-texto">
                <input className="checkbox" 
                type="checkbox" 
                checked={newList.done}
                onChange={()=>{oncheck(index)}}
                />
                <div className="elemento">
                  {newList.name}
                </div>
              </div>
              :
              <form className="formEdit" onSubmit={(e)=>submitEdit(index, e)}>
                <input className="formEdit-input" type="text" value={editText} onChange={manejarEdit} />
                <button className="first-button">Guardar</button>
                <button onClick={cancelar} className="second-button">Cancelar</button>
              </form>
              
            }

            
            <div className="container-cambios">
                <button onClick={editar} className="icon-edit">
                </button>
                <button onClick={()=>eliminar(index)} >
                  <span className="icon-trash-2"></span>
                </button>
            </div>

            
            
          </div>     
    
    </>    
  )
}
