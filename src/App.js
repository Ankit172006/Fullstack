
import Component from './Component';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './Add';
import './App.css';

function App() {
  return (
    
    <div>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Component/>}/>
    <Route path='/add' element={<Add/>}/>
    </Routes>   
   </BrowserRouter>
   </div>
  );
}

export default App;
