import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Category, Cart } from './pages'
import { Navbar, Footer } from './components'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category/:id' element={<Category />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
