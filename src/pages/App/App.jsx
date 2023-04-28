import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import SignUpForm from '../../components/SignUpForm/SignUpForm';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <h1>App</h1>
      { user ? (
          <>
            <NavBar user={user} setUser={ setUser} />
            <Routes>
              
            </Routes>
          </>
          ): (
          <AuthPage setUser={ setUser} />
          
      )}
    </main>
  );
}
