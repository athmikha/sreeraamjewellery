import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";

import "./App.css"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/category/:category" element={<CategoryPage />} />
       
    </Routes>
  );
}
