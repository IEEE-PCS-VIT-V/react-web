// import './App.css';
import Exboard from './components/ex-board/ex-board.jsx';

import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Main from './components/Main.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='https://ieee-pcs-vit-v.github.io/web/' element={<Main/>}/>
      <Route path='https://ieee-pcs-vit-v.github.io/web/exboard' element={<Exboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
