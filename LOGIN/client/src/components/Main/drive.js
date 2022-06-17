import React, {useState} from "react";
import './drive.css';

const Drive = () => {
    const [busqueda, setBusqueda]= useState("");

        function comprimirArchivo(){
            //lo que haga
        };
        function descargarArchivo(){
            //lo que haga 
        };
        function BuscarArchivo(){
          

        };
    return(
        <div>
            <div className="containerInput">
                <input
                className="form-control inputBuscar"
                value={busqueda}
                placeholder="Búsqueda por Nombre o Empresa"></input>


                <button onClick={BuscarArchivo} className='btn-success'>
                        Buscar
                        </button>
            </div>

            <input type="file" className= "input"/>


            <div className='compress-button-container'>
                <button onClick={comprimirArchivo} className='compress-button'>
                    Comprimir archivo
                </button>
            </div>
            <div className='download-button-container'>
                <button onClick={descargarArchivo}className='download-button'>
                    Descargar archivo
                </button>
            </div>
        </div>
    )
};
export default Drive;