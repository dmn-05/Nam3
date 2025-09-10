import './App.css';
import { createContext, useContext, useState } from 'react';
const DataProduct = [
    {id: 1, name: "product1", price: 1000},
    {id: 2, name: "product2", price: 2000},
    {id: 3, name: "product3", price: 3000},
    {id: 4, name: "product4", price: 4000},
    {id: 5, name: "product5", price: 5000},
  ];


const EdittingProduct = createContext({product: null});
function EditForm() {
  const {product, onSave, onCancel}= useContext(EdittingProduct);
  const [current, setCurrent] = useState(product);

  return (
    <>
      <h1>{product.id === 0?"New Product" : "Edit Product"}</h1>
      <div className='editForm'>
        <label>Name
          <input type="text" value={current.name} onChange={e => setCurrent({...current, name: e.target.value})}/>
        </label> <br/>
        <label>Price
          <input type="number" value={current.price} onChange={e => setCurrent({...current, price: e.target.valueAsNumber})}/>
        </label> <br/>
        <button onClick={e=> onSave(current)}>Lưu</button>
        <button onClick={onCancel}>Hủy</button>
      </div>
    
    </>
  );
}
function App() {
  const [products, setProducts] = useState(DataProduct);
  const [editProduct, setEditProducts] = useState(null);
  // const [showallproduct, setShowAllProducts] = useState(false);
  
  const handCreate = ()=>{
    setEditProducts({id: 0, name: "", price: 0});
  }

  const handDelete = (product) => {
    const newProducts = products.filter(p => p.id !== product.id);
    setProducts(newProducts);
  }
  const handleEdit = (product) => {
    setEditProducts(product);
  }
  const handleSave = (product) => {
    if (product.id === 0) {
      // Nếu chưa có sản phẩm nào thì id = 1
      const newId = products.length > 0 
        ? Math.max(...products.map(p => p.id)) + 1 
        : 1;

      product.id = newId;
      setProducts([...products, product]);
    } else {
      // Cập nhật sản phẩm đã có
      const newProducts = products.map(p => 
        p.id === product.id ? product : p
      );
      setProducts(newProducts);
    }

    // Đóng form sau khi lưu
    setEditProducts(null);
  };

  const handleCancel = () => {
    setEditProducts(null);
  }

  return (
    <EdittingProduct.Provider value={{product: editProduct, onSave: handleSave, onCancel: handleCancel}}>
    {editProduct == null?
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
                  <button className="edit" onClick={()=>handleEdit(product)}>Edit</button>
                  <button className="delete" onClick={()=>handDelete(product)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          {products.length > 0 && (
            <tfoot>
              <tr>
                <th colSpan={Object.keys(products[0]).length + 1}>
                  <button onClick={handCreate}>Create</button>
                </th>
              </tr>
            </tfoot>
          )}
        </table>
      )}

    </>:
    <EditForm/>
  }
    </EdittingProduct.Provider>
  );
}

export default App;
