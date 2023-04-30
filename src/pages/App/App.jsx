import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import ExpenseTracker from '../../ExpenseTracker/ExpenseTracker';

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


// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavBar from '../../components/NavBar/NavBar';
// import LoginForm from '../../components/LoginForm/LoginForm';
// import SignupForm from '../../components/SignupForm/SignupForm';
// import ExpenseTracker from '../../ExpenseTracker/ExpenseTracker';

// function App() {
//   return (
//     <Router>
//       <div>
//         <NavBar />
//         <Switch>
//           <Route path="/login">
//             <LoginForm />
//           </Route>
//           <Route path="/signup">
//             <SignupForm />
//           </Route>
//           <Route path="/">
//             <ExpenseTracker />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;