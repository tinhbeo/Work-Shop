import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
