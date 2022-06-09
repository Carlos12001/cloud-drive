import React from "react";
import './login.css';
import Title from "./components/Title/Title";
import Label from "./components/Label/Label";
import Input from "./components/Input/Input";

const Login = () => {
    return(
        <div className='login-container'>
            <Title text = 'Título'/>
            <Label text = 'Usuario'/>
            <Input/>
            <Label text = 'Contraseña'/>
            <Input/>
        </div>
    ) 
};

export default Login;
