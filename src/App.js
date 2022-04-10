import "bootstrap/dist/js/bootstrap.min.js";
import Customer from "components/CustomerLayout";
import AdminLayout from "components/AdminLayout";
import Admin from "pages/Admin";
import Cart from "pages/Cart";
import Category from "pages/Category";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import ProductDetail from "pages/ProductDetail";
import Products from "pages/Products";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Customer />}>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route element={<AdminLayout />}>
                    <Route path="/admin" element={<Admin />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
