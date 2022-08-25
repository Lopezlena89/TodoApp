
export const ListRode = ({newList, oncheck}) => {
  
    
  
    return (
     <> 
      <form >
                {newList.name}
                <input type="checkbox" 
                checked={newList.done}
                onChange={()=>{oncheck(newList)}}
                />
               
               
        </form>
       
    
    </>    
  )
}
