import logo from './logo.svg';
import './App.css';
import {useState} from "react";




const states =
    {color: 'black'}


function App() {

  const [state, setState] = useState(states)


    setInterval ( () => {
        setState({color: 'pink'})
    },1000)



  return (
      <div>
          <div
              style={{
                  backgroundColor: state.color,
                  paddingTop: 20,
                  width: 400,
                  height: 80,
                  margin: 'auto'
              }}
          />
      </div>
  );
}


export default App;
