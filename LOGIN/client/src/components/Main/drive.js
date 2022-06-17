import React, {useState} from "react";
import './drive.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import Upload from "./components/Upload";
const Drive = () => {
    
    const[user, setUser] = useState('');
    const[password, setPassword] = useState('');
    const[passwordError, setPasswordError] = useState(false);
    const[ isLogin, setIsLogin ] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [busqueda, setBusqueda]= useState("");
    

        function handleChange (name,value)
        {
            if (name==='usuario'){
                setUser(value);
                setHasError(false);
            }else{
                if (value.lenght < 6){
                    setPasswordError(true);
                    setHasError(false);
                }else{
                    setPasswordError(false);
                    setPassword(value);
                    setHasError(false);
                }
                
            }
        };
        function ifMatch(param){
            if(param.user > 0 && param.password.lenght > 0 ){
                if(param.user === 'Mimi' && param.password === '0987654'){
                    const {user, password} = param;
                    let ac ={user, password};
                    let account = JSON.stringify(ac);
                    localStorage.setItem('account',account); //guarda la info en localStorage
                    setIsLogin(true);
                    
                }else{
                    setIsLogin(false);
                    setHasError(true);
                }
            }else{
                setIsLogin(false);
                setHasError(true);
            }
        };
        console.log('usuario: ', user);
        console.log('contraseña: ', password);
        
        function handleSubmit(){
            let account = {user, password}
            if(account){
                console.log('account: ', account);
                
            }
        };
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