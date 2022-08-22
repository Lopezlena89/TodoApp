import { useState } from "react";


export const Input = ({newInput}) => {
    const [input, setInput] = useState('')

  const submit = (e)=>{
    e.preventDefault();
    newInput(input)
    setInput('');
  }

  
    return (
    <form onSubmit={submit}>
    <input 
      type='text'
      placeholder='Enter'
      value={input}
      onChange={({target})=>setInput(target.value)}
    />
    <button value='Enviar'>Submit</button>
    </form>
  )
}
