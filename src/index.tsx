import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProductComponent from "./Product/ProductComponent";
import ProductGrid from "./Product/ProductGrid";
import productData from "./data/productData";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ProductComponent name="2GB Monthly" description="Validity 6 Months* - Pay 3 months and get 3 months free" id="sim1"/>
      <ProductGrid products={productData} />
  </React.StrictMode>
);
