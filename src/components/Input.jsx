import { useState } from "react";


export const Input = ({newInput}) => {
    const [input, setInput] = useState('')

  const submit = (e)=>{
    e.preventDefault();
    newInput(input)
    setInput('');
  }

  
    return (
      <>   

          <form className="formulario" onSubmit={submit}>
            <input className="input" type="text" placeholder="Enter todo here" value={input} onChange={({target})=>setInput(target.value)}/>
            <button  value='Enviar'>Submit</button>
          </form>
         
      </>

  )
}
