import React,{useState} from 'react';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import swal from 'sweetalert';


const Encriptacion = () =>{
  const [mensaje, SetMensaje] = useState([]);
  let [result, SetResult] = useState([]);
  const caracter = ["_","a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","."];

 

 function iniciar() {
   let texto = String(mensaje);
   texto = texto.replace(/\s/gi, "0");
    if (texto.length <= 0) {
      swal({
        title: 'Encriptacion',
        text: 'El proceso de encriptado no fue correcto',
        icon: 'error',
        button: 'ok );'
      });
          
    }else{
        swal('El proceso de encriptación fue correcto').then(()=>{
          swal(`Resultado del mensaje ingresado: ${result}`)
        })
          const result = valores(texto, caracter);
          encriptado(result);
          
        }
}

function valores(texto, caracteres) {
    const mensaje = texto.split("");
    const caracter = caracteres;
    let index;
    const array = new Array();

    for (let a = 0; a < texto.length; a++) {
        index = parseInt(caracter.indexOf(mensaje[a]));
        array.push(index);        
    }
    while (array.length % 3 != 0) {
      array.push(0);
    }
    return array;

  }

  function encriptado(mensajes) {
    const mensaje = mensajes;
    const matriz = [[1,2,1],[0,-1, 3], [2, 1, 0]];
    let entrada = 0;
    
    for (let i=0; i < mensaje.length; i++) {
      for (let j = 0; j < matriz.length; j++) {
        entrada = (matriz[0][j] * mensaje[i]) + (matriz[1][j] * mensaje[i + 1]) + (matriz[2][j] * mensaje[i+2]);
        result = result + entrada + '';
      }
      i+=2;
      
    }
    console.log(result);

  }


  return (

    

    <div className='card mt-5 text-center'>
      <div className='card-header'>
        <h1 className='text-center fs-4 fst-italic'>Digite el mensaje que desea encriptar</h1>
      </div>
        <div className='card-body mb-2'>
            <InputTextarea className='form-control' value={mensaje} onChange={(e)=>SetMensaje(e.target.value)}  placeholder="Ingresar Mensaje"></InputTextarea>
            <Button className='p-button-success p-button-text mt-5' onClick={iniciar}>Encriptar</Button>       
        
        </div>
        <div className='card-footer text-muted fw-lighter'>
            code by Ary
        </div>
      

    </div>
  );
}

export default Encriptacion;