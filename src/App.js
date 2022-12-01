import { BrowserRouter, Routes, Route } from 'react-dom'
import  Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
