import React from "react";
import { ProductsProvider } from "./context/ProductsContext";
import {ProductsManagement} from "./page/ProductsManagement";

function App() {
  return (
    <ProductsProvider>
      <div className="container">
        <ProductsManagement />
      </div>
    </ProductsProvider>
  );
}

export default App;
