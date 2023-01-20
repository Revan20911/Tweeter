import logo from './logo.svg';
import {RouterProvider, Route, useHistory, Routes} from 'react-router-dom';
import { useState } from 'react';
import './index.scss';

import Navbar from './components/NavBar/navbar';
import Login from './components/Login/login';
import Dashboard from './components/Dashboard/dashboard';

const App = () => {

  const [user, setUser] = useState();

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
     <Routes>
        <Route path='/login' element={<Login user={user} setUser={setUser}/>} />
        <Route path='/home'/>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
