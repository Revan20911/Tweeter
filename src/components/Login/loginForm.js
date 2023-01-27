import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import "../styles/Login/loginForm.scss";


const LoginForm = ({user, setUser}) =>{

    const navigate = useNavigate();
    

    function onChange(value){
        return setUser((prev) =>{
            return {...prev, ...value}
        })
    }

    const login = async (e) => {

        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({...user}),
        })

        if(!response.ok){

            console.log('Invalid Username or Password');

        }else{
            setUser({...user});
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/home");
            
        }

    }

    async function register (e){

        e.preventDefault();

        const newUser = {...user}

        console.log(user);

        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(newUser),
        })

        if(!response.ok){
            console.log(response);
            console.log('A user with that Email already exists');

        }

    }
 
    return (
    <div>
        <h1>Sign in</h1>
        <form className='login-form'>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder='Email' type='text' value={user.email}
            onChange={(e) => onChange({email: e.target.value})}/>
            <label htmlFor="password">Password</label>
            <input name='password' placeholder='Password' type="text" value={user.password}
            onChange={(e) => onChange({password: e.target.value})}/>
        </form>
        <div className='row'>
        <button onClick={(e) => login(e)}>Log in</button>
        <button onClick={(e) => register(e)}>Register</button>
        </div>
    </div>
    )

}


export default LoginForm;