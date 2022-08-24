
export const ListRode = ({newList, oncheck}) => {
  return (
    <div >
            {newList.name}
            <input type="checkbox" 
              checked={newList.done}
              onChange={()=>{oncheck(newList)}}
            />
    </div>
  )
}
