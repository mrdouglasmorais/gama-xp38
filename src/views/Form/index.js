import { useState } from 'react'
import api from '../../service/api'

function Form(){
  const [ data, setData ] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('persons', data).then((response) => {
      if(response.status === 201){
        alert('Tudo okay')
      }
    })
  }
  
  return(
    <div>
      <h1>Formulário</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="name"
          onChange={ e => setData({ ...data, name: e.target.value})}
        />
        <input 
          type="text" 
          placeholder="email"
          onChange={ e => setData({ ...data, email: e.target.value})}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <hr />
    </div>
  )
}

export default Form;