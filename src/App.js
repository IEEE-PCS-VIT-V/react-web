import Exboard from './components/ex-board/ex-board.jsx';

import {HashRouter, Routes,Route } from 'react-router-dom'
import Main from './components/Main.jsx';

function App() {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path='#/react-web' element={<Main/>}/>
      <Route path='#/exboard' element={<Exboard/>}/>
    </Routes>
    </HashRouter>
    </>
      
  );
}

export default App;
