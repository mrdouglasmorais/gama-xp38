import { useState, useEffect } from 'react'
import api from '../../service/api';

function Listings(){
  const [ data, setData ] = useState([]);

  useEffect(() => {
    api.get('products').then(
      res => {
        setData(res.data)
      }
    )
  }, [])

  return( 
    <div>
      <h1>Listagem</h1>
      { data.map( item => (
        <div key={ item.id }>
          <p>{item.label}</p>
          <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(item.price)}</p>
        </div>
      )) }
    </div>
  )
}

export default Listings