import { useState } from "react"

export const ListRode = ({newList, oncheck,eliminar}) => {
 
   
 
  
    return (
     <> 
      
          <div className="container-input">
            <div className="container-texto">
                <input type="checkbox" 
                checked={newList.done}
                onChange={()=>{oncheck(newList)}}
                />
                <div className="elemento">
                  {newList.name}
                </div>
            </div>
            <div className="container-cambios">
               <button onClick={()=>eliminar(newList.id)} >
                  <span className="icon-trash-2"></span>
                </button>
            </div>
            
          </div>     
      
       
    
    </>    
  )
}
