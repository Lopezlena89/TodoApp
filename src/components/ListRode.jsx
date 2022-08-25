
export const ListRode = ({newList, oncheck,eliminar}) => {
  
    
  
    return (
     <> 
      <div >
                {newList.name}
                <input type="checkbox" 
                checked={newList.done}
                onChange={()=>{oncheck(newList)}}
                />
               <button onClick={()=>eliminar(newList.id)}>Eliminar</button>
               
        </div>
       
    
    </>    
  )
}
