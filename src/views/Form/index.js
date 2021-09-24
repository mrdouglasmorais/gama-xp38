import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom'
import api from '../../service/api';

function Form(){
  const [ data, setData ] = useState();
  const history = useHistory();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    api.post('persons', data).then((response) => {
      if(response.status === 201){
        history.push('/listagem')
      }
    })
  }, [data, history]);
  
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
    </div>
  )
}

export default Form;