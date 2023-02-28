import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, CategoryPage, Cart, ProductPage } from './pages';
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
          <Route path='/category/:id' element={<CategoryPage />}/>
          <Route path='/product/:id' element={<ProductPage />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
