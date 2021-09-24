import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../service/api';

function Listings(){
  const [ data, setData ] = useState([]);
  const [ tester, setTester ] = useState('');

  useEffect(() => {
    api.get('persons').then(
      res => {
        setData(res.data)
      }
    )
  }, [])

  useEffect(() => {
    toast.success('Alterou!!!')
  }, [tester])

  return( 
    <div>
      <h1>Listagem</h1>
      { data.map( item => (
        <div key={ item.id }>
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
      )) }
      {tester}
      <button onClick={ () => setTester(data[1].name)}> Mudar estado</button>
    </div>
  )
}
export default Listings