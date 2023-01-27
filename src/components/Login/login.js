import LoginForm from "./loginForm";
import '../styles/Login/login.scss';


const Login = ({user, setUser}) => {
    return(

        <div className="login-wrapper">
            <div>

                <LoginForm user={user} setUser={setUser}/>
                
            </div>
        </div>

    )
}

export default Login;