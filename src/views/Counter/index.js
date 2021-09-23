import { useState } from 'react'; 

function Counter() {
  const [contador, setContador] = useState(0);  
  
  function handlePlus() {
    if(contador < 10) setContador((contador) => contador += 1);
  }
  
  function handleMinus() {
    if (contador > 0 ) setContador((contador) => contador -=1);
  } 
  
  return (
    <div>
      <h1>Contador</h1>
      <div>{contador}</div>
      <button onClick={handleMinus}>Diminuir</button>
      <button onClick={handlePlus}>Aumentar</button>
    </div> 
  )
}
export default Counter;