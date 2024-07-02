import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddProduct from "./components/AddProduct";
import Inventory from "./components/Inventory";
import Payment from "./components/Payment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    
      <Route path="addproduct" element={<AddProduct />} />
      <Route path="inventory" element={<Inventory />} />
      <Route path="payment" element={<Payment />} />
      {/* use "/*" for error page */}
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
