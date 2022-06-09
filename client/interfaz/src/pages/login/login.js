import React from "react";
import './login.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Login = () => {

        function handleChange (name,value,)
        {
            if (name==='usuario'){
                //variable para almacenar
            }
        }


    return(
        <div className='login-container'>
            <Title text = 'Título'/>
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
            {/* <Input/> */}
        </div>
    ) 
};

export default Login;
