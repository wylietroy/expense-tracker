import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../pages/AuthPage/AuthPage';
import NavBar from '../components/NavBar/NavBar';
import { getUser } from '../utilities/users-service';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import ExpenseTracker from '../ExpenseTracker/ExpenseTracker';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <h1>App</h1>
      { user ? (
          <>
            <NavBar user={user} setUser={ setUser} />
            <Routes>
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/" element={<ExpenseTracker />} />
            </Routes>
          </>
          ): (
          <AuthPage setUser={ setUser} />
          
      )}
    </main>
  );
}

