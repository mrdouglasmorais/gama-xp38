import { Link } from 'react-router-dom'

function Header(){
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contagem">Contagem</Link>
      <Link to="/listagem">Listagem</Link>
    </nav>
  )
}

export default Header;