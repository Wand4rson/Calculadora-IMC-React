import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './Home/Home';
import Sobre from './Sobre/Sobre';

function App() {
  return (<BrowserRouter>                              
          <Route path="/" exact="/" component={Home} />
          <Route path="/sobre" exact="/sobre" component={Sobre} />
        </BrowserRouter>
  );
}

export default App;
