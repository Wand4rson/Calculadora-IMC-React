import React from 'react';
import Menu from '../Menu/Menu';

function Sobre(){
    return(
    <div>        
        <Menu /> 
        <div className="container">
            <div className="alert alert-light text-center" role="alert">
                <h1>Sobre</h1>
                <p>Calculadora de IMC</p>
                <p>Projeto Desenvolvido em React para estudo da ferramenta</p>
            </div>
        </div>
    </div>
        
    );
}

export default Sobre;