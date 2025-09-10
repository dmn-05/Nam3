import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useState } from 'react';
const DataProduct = [
    {id: 1, name: "product1", price: 1000},
    {id: 2, name: "product2", price: 2000},
    {id: 3, name: "product3", price: 3000},
    {id: 4, name: "product4", price: 4000},
    {id: 5, name: "product5", price: 5000},
  ];


function EditForm() {
  const {product, onSave, onCancel}= useContext() 

  return (
    0
  );
}
const EdittingProduct = createContext({product: null});
function App() {
  const [products, setProduct] = useState(DataProduct);
  const [editproduct, setEditProduct] = useState(null);
  const [showallproduct, setShowAllProduct] = useState(false);
  
  const handDelete = (product) => {
    const newProducts = products.filter(p => p.id !== product.id);
    setProduct(newProducts);
  }
  const handleEdit = (product) => {
    setEditProduct(product);
  }
  const handleSave = (product) => {
    const newProducts = products.map(p => p.id === product.id ? product : p);
    setProduct(newProducts);
    setEditProduct(null);
  }
  const handleCancel = () => {
    setEditProduct(null);
  }

  return (
    <EdittingProduct.Provider value={{product: editproduct, onSave: handleSave, onCancel: handleCancel}}>
    <>
      {products.length === 0 ? (
        <h1>No Product</h1>
      ) : (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(products[0]).map((key) => <th key={key}>{key}</th>)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>( 
              <tr key={product.id}>
                {Object.keys(product).map((k) => <td key={k}>{product[k]}</td>)}
                <td>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </>
    </EdittingProduct.Provider>
  );
}

export default App;
