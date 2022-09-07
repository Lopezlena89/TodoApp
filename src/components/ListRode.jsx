import { useState } from "react"

export const ListRode = ({newList, oncheck,eliminar,editarTexto}) => {
  const [modoEdit, setModoEdit] = useState(false)
  const [editText,setEditText] = useState("");

  const editar = ()=>{
    setModoEdit(true);
  }

  const manejarEdit = ({target})=>{
    setEditText(target.value);
  }
  
  const submitEdit = (event)=>{
    event.preventDefault();
    editarTexto(newList.id,editText);
    setEditText("");
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
                onChange={()=>{oncheck(newList)}}
                />
                <div className="elemento">
                  {newList.name}
                </div>
              </div>
              :
              <form className="formEdit" onSubmit={submitEdit}>
                <input type="text" value={editText} onChange={manejarEdit} />
                 <button>Guardar</button>
              </form>
              
            }

            
            <div className="container-cambios">
                <button onClick={editar}>
                  Editar
                </button>
                <button onClick={()=>eliminar(newList.id)} >
                  <span className="icon-trash-2"></span>
                </button>
            </div>

            
            
          </div>     
    
    </>    
  )
}
