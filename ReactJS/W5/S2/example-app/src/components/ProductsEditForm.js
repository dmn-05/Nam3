import { useState, useEffect } from "react";
import { useProducts, useProductsDispatch } from "../context/ProductsContext";

export default function ProductsEditForm(){
    const data = useProducts();
    const dispatch = useProductsDispatch();
    const view = data.view;
    const product = view === 'edit' ? data.products.find(p=>p.id === data.id) : data.newProduct;
    const [current, setCurrent] = useState(product);
    
    useEffect(() => {
      setCurrent(product);
    }, [product]);
    function onSave(e){
        e.preventDefault()
        if(!current.title ||current.title.trim() === ""||!current.price||!current.category ||current.category.trim() === ""){
          alert("Vui long nhap day du thong tin!");
          return
        }
        if(data.products.some(p=>p.title.trim().toLowerCase() === current.title.trim().toLowerCase() 
        && p.id !== Number(current.id))){
          alert("San pham da ton tai!");
          return
        }
        if(Number(current.price) <= 0 ){
          alert("Gia phai lon hon 0")
          return
        }
        if (view === "edit") {
          dispatch({type:"update", product:current });
        } else {
          dispatch({type:"store", product:current });
        }
        dispatch({ type: "index" });
    } 
    function onCancel(){
        dispatch({type: 'index'});
    }
    return (
      <>
      <h2>{view === "edit" ? "Chỉnh sửa sản phẩm" : "Tạo sản phẩm mới"}</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            value={current.title}
            onChange={(e) =>
              setCurrent({ ...current, title: e.target.value })
            }
          />
        </div>
        <br />

        <div>
          <label htmlFor="price">Giá:</label>
          <br />
          <input
            type="number"
            id="price"
            name="price"
            value={current.price}
            onChange={(e) =>
              setCurrent({ ...current, price: Number(e.target.value) })
            }
          />
        </div>
        <br />

        <div>
          <label htmlFor="category">Danh mục:</label>
          <br />
          <input
            type="text"
            id="category"
            name="category"
            value={current.category}
            onChange={(e) =>
              setCurrent({ ...current, category: e.target.value })
            }
          />
        </div>
        <br />

        <div>
          <label htmlFor="description">Mô tả:</label>
          <br />
          <textarea
            id="description"
            name="description"
            rows="3"
            cols="30"
            value={current.description}
            onChange={(e) =>
              setCurrent({ ...current, description: e.target.value })
            }
          />
        </div>
        <br />

        <button type="submit" onClick={onSave}>Lưu</button>
        <button type="button" onClick={onCancel}>
          Hủy
        </button>
      </form>
    </>
    )
}