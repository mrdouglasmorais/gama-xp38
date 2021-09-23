import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Form from './views/Form';
import Listings from './views/Listings';
import Counter from './views/Counter';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Form}/>
        <Route path="/listagem" component={Listings}/>
        <Route path="/contagem" component={Counter}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
