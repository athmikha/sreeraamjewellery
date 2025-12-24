// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
import SubCategoryPage from "./components/SubCategoryPage";
import ProductPage from "./components/ProductPage";
import "./App.css";

export default function App() {
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/category/:category/:sub" element={<SubCategoryPage />} />
      <Route path="/category/:category/:sub/:productId" element={<ProductPage />} />
    </Routes>
  );
}
