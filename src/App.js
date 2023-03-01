
import './App.css';
import Home from'./components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes  } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Preparatory from './components/mra7l/Preparatory';
import Primary from './components/mra7l/Primary';
import Secondary from './components/mra7l/Secondary';
import University from './components/mra7l/University';
import Word from './components/wordandplay/Word';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/"  element={<Home />}/> 
    <Route path="Preparatory"  element={<Preparatory />}/> 
    <Route path="Primary"  element={<Primary />}/> 
    <Route path="Secondary"  element={<Secondary />}/> 
    <Route path="University"  element={<University />}/> 
    <Route path="/word"  element={<Word />}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
