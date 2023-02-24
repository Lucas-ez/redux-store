import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Category, Cart } from './pages';
import { Navbar, Footer } from './components';

import { Provider } from 'react-redux';
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/category/:id' element={<Category />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
