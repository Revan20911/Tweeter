
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
            localStorage.setItem('user', JSON.stringify(user))
            console.log(localStorage.getItem('user'));
            navigate("/home");
            
        }

    }

    async function register (e){

        e.preventDefault();

        const formData = new FormData();

        formData.append('email', user.email)
        formData.append('password', user.password)
        formData.append('img', user.img );

        
        const response = await axios.post('http://localhost:5000/api/users/register', formData)
            
        if(!response.ok){
            console.log(response);
            console.log('A user with that Email already exists');
        }


        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(user))
       

        navigate('/home');

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
            <label>Profile Picture</label>
            <input type="file" onChange={(e) => onChange({img: e.target.files[0], img_name: e.target.files[0].name})}/>
        </form>
        <div className='row'>
        <button onClick={(e) => login(e)}>Log in</button>
        <button onClick={(e) => register(e)}>Register</button>
        </div>
    </div>
    )

}


export default LoginForm;
