import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function Login({props,onClick}) {
    return (
        <>
            <h2>{props}</h2>
            <button onClick={onClick}>Login</button>
        </>
    )
}
function Logout({props,onClick}) {
    return (
        <>
            <h2>{props}</h2>
            <button onClick={onClick}>Login</button>
        </>
    )

}



function App() {

    const [isLogin, setIsLogin] = useState(false);

    const handleLogin = () => {
        setIsLogin(true);
    }
    const handleLogout = () => {
        setIsLogin(false);
    }

  return (
      <div>
          { (!isLogin) ?
              <Login
                  props= 'Please Login'
              onClick={handleLogin}
              />
              :
              <Logout
                  props= 'Welcome'
              onClick={handleLogout}/>
          }
      </div>
  );
}


export default App;
