import {Route, Routes} from 'react-router-dom';
import { useState, useEffect} from 'react';
import './index.scss';

import Navbar from './components/NavBar/navbar';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard';
import Profile from './components/Account/profile';
import axios from 'axios';
import Sidebar from './components/NavBar/sidebar';

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));


  useEffect(() => {


    async function getUserData(){

      const userData = new FormData()

      userData.append('email', 'test');

//       const response = await axios.get(`http://localhost:5000/api/users/${user.email}`)

//       const userInfo = await response.data;

      localStorage.setItem('user', JSON.stringify(userData));

    }

    getUserData()

    setUser(JSON.parse(localStorage.getItem('user')))
    
  }, [])

  

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
     <Routes>
        <Route path='/login' element={<Login user={user} setUser={setUser}/>} />
        <Route path='/home' element={<Dashboard user={user} setUser={setUser}/>}/>
        <Route path='/' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Sidebar/>
    </div>
  );
}

export default App;
