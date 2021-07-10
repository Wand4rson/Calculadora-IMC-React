import React, {useState} from 'react';
import './calcular.css';

function Calcular(){

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [mensagem, setMensagem] = useState('');


    function setCampoPeso(event)
    {
        setPeso(event.target.value);
    }

    function setCampoAltura(event)
    {
        setAltura(event.target.value);
    }

    function Calcular()
    {    
        setImc(0);
        setMensagem('');

        let imcCalculado = (peso / (altura*altura));
        setImc(parseFloat(imcCalculado).toFixed(2));


        imcCalculado = parseFloat(imcCalculado).toFixed(2);      
        if(imcCalculado <=18.5)
        {           
            setMensagem('Seu IMC é : '+ imcCalculado + ' Você está Muito abaixo do Peso [Magreza]');
        } 
        else if(imcCalculado > 18.5 && imcCalculado <= 24.9)
        {            
            setMensagem('Seu IMC é : '+ imcCalculado + ' Você está com o Peso Ideal [Normal]');
        }
        else if(imcCalculado >=25 && imcCalculado <= 29.9)
        {
            setMensagem('Seu IMC é : '+ imcCalculado + ' Você está com Sobrepeso I');
        }
        else if(imcCalculado >=30 && imcCalculado <= 39.9)
        {
            setMensagem('Seu IMC é : '+ imcCalculado + ' Você está com Obesidade II');
        }
        else if(imcCalculado >=40)
        {
            setMensagem('Seu IMC é : '+ imcCalculado + ' Você está com Obesidade Grave III');
        }
       
    }

    return(        
        <div className="container">

            <form>
                <div className="form-group">
                    <label for="peso">Informe seu Peso</label>                
                    <input type="number" onChange={setCampoPeso} className="form-control" placeholder="Peso" aria-label="Peso" min="1" id="peso" />                       
                </div>

                <div className="form-group">
                    <label for="altura">Informe sua Altura</label>
                    <input type="number" onChange={setCampoAltura} className="form-control" placeholder="Altura" aria-label="Altura" min="1" id="altura" />                    
                </div>


                <button onClick={Calcular} type="button" className="btn btn-outline-primary mt-3">Calcular</button>
            </form>

            {mensagem.length > 0 ? 
                <div className="col mt-3">
                    <div class="alert alert-primary" role="alert">
                        {mensagem}
                    </div>
                </div>
             : 
             null}

            <hr/>   
            <div className="alert alert-dark text-center" role="alert">
                LEGENDA
            </div>

            <table className="table table-hover table-sm table-bordered">
                <thead>
                    <tr>                    
                    <th scope="col">IMC</th>
                    <th scope="col">Classificação</th>
                    <th scope="col">Obesidade [Grau]</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                        
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                        <td>0</td>
                    </tr>
                    <tr>                        
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                        <td>0</td>
                    </tr>     
                    <tr>                        
                        <td>Entre 25,0 e 29,9</td>
                        <td>Sobrepeso</td>
                        <td>I</td>
                    </tr>   
                    <tr>                        
                        <td>Entre 30,0 e 39,9</td>
                        <td>Obesidade</td>
                        <td>II</td>
                    </tr>                    
                    <tr>                        
                        <td>Maior que 40,0</td>
                        <td>Obesidade Grave</td>
                        <td>III</td>
                    </tr>  
                </tbody>
            </table>

        </div>
    );
}

export default Calcular;