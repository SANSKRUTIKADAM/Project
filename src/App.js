import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar/>}/>
          <Route path='/Navbar' element={<Navbar/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Blog' element={<Blog/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
