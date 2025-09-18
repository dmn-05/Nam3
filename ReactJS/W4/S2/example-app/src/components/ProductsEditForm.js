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
        if(!current.name ||current.name.trim() === ""||!current.price){
          alert("Vui long nhap day du thong tin!");
          return
        }
        if(data.products.some(p=>p.name.trim().toLowerCase() === current.name.trim().toLowerCase() 
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
          <label htmlFor="name">Tên sản phẩm:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={current.name}
            onChange={(e) =>
              setCurrent({ ...current, name: e.target.value })
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
          <label htmlFor="desc">Mô tả:</label>
          <br />
          <textarea
            id="desc"
            name="desc"
            rows="3"
            cols="30"
            value={current.desc}
            onChange={(e) =>
              setCurrent({ ...current, desc: e.target.value })
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