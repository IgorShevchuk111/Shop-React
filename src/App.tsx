import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import BasketPage from './pages/BasketPage';
import ErrorPage from './pages/ErrorPage';
import BasketLayout from './layouts/BasketLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/:category" element={<ProductPage />} />
        </Route>
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
        </Route> 
        <Route path="/basket" element={<BasketLayout />}>
          <Route index element={<BasketPage />} />
        </Route>
          <Route path="/*" element={<ErrorPage />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App