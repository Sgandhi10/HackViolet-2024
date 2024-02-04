//Imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Components 
import MainPage from './MainPage.js'
import LogIn from './LogIn.js';


function App() {

   
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn/>} />
          <Route path="/loginPass" element={<MainPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
