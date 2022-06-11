import React, {useState} from "react";
import './login.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";



const Login = () => {
    
    const[user, setUser] = useState('');
    const[password, setPassword] = useState('');
    const[passwordError, setPasswordError] = useState(false);
    const[ isLogin, setIsLogin ] = useState(false);

        function handleChange (name,value,)
        {
            if (name==='usuario'){
                setUser(value)
            }else{
                if (value.lenght < 6){
                    setPasswordError(true);
                }else{
                    setPasswordError(false);
                    setPassword(value);
                }
                
            }
        };
        console.log('usuario: ', user)
        console.log('contraseña: ', password)

        function ifMatch(param){
            if(param.user > 0 && param.password > 0 ){
                if(param.user === 'Carolina' && param.password === '123456'){
                    let ac ={user, password};
                    let account = JSON.stringify(ac);
                    localStorage.setItem('account',account);
                    setIsLogin(true);
                }else{
                    setIsLogin(false);
                }
            }else{
                setIsLogin(false);
            }
        }







        function handleSubmit(){
            let account = {user, password}
            if(account){
                ifMatch(account);
            }
        };



    return(
        <div className='login-container'>
            <div className='login-content'>
            <Title text = '¡Bienvenido!'/>
            <Label text = 'Usuario'/>
            <Input
            attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'Ingrese su usuario'

            }}  
            handleChange={handleChange}
            />
            <Label text = 'Contraseña'/>
            <Input
            attribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'Ingrese su contraseña'
            }}  
            handleChange={handleChange}
            param = {passwordError}
            />

            {passwordError &&  
            <label className= 'label-error'>
                Contraseña inválida o incompleta
            </label>
            }
            <div className='submit-button-container'>
                <button onClick={handleSubmit} className='submit-button-container'>
                    Ingresar
                </button>

            </div>
        </div>   
    </div>
    ) 
};

export default Login;
