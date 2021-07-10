import React from 'react';
import Menu from '../Menu/Menu';
import Calcular from '../Calcular/Calcular';

function Home() {
  return (
        <div>        
            <Menu />  
            <div className="container">                
                <Calcular />                
             </div>                     
        </div>
  );
}

export default Home;
