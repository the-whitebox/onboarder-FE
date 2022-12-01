import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
