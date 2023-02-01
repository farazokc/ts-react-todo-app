import './App.css';
import { useEffect, useState } from 'react';
import AuthContext from './contexts/AuthContext';
import AuthHandler from './component/authHandler/authHandler';

function App() {
  useEffect(() => {
    console.log("USE EFFECT CALLED");
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "1";
    setIsAuth(isLoggedIn);
  }, []);

  const [items, setItems] = useState<string[]>(["Hello", "Welcome", "Goodbye"])
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const addItemHandler = (itemText: string) => {
    setItems([...items, itemText]);
    console.log(itemText);
  }
  const setLoginHandler = (val: boolean) => {
    setIsAuth(val);
  }

  const ctxValue = {
    isLoggedIn: isAuth,
    setAuthentication: (val: boolean) => {
      localStorage.setItem("isLoggedIn", val ? "1" : "0");
      setIsAuth(val);
    }}
  return (
    <div>
      <AuthContext.Provider value={ctxValue}>
        <AuthHandler />
      </AuthContext.Provider>
    </div>
    
  );
}

export default App;
