import { useState } from "react";
import { useProducts, useProductsDispatch } from "../context/ProductsContext";

export default function ProductsEditForm() {
  const data = useProducts();
  const dispatch = useProductsDispatch();

  const view = data.view;
  const product =
    view === "edit"
      ? data.products.find((p) => p.id === data.id)
      : data.newProduct;

  const [currentProduct, setCurrent] = useState({ ...product });

  function handleChange(e) {
    const { name, value } = e.target;
    setCurrent({ ...currentProduct, [name]: value });
  }

  

  function onSave() {
    if (!currentProduct.name || currentProduct.name.trim() === "") {
      alert("Tên sản phẩm không được để trống!");
      return;
    }
    if (data.products.some(
          p => p.name === currentProduct.name && p.id !== currentProduct.id
        )) {
      alert("Tên sản phẩm đã tồn tại!");
      return;
    }
    if (!currentProduct.price || Number(currentProduct.price) <= 0) {
      alert("Giá sản phẩm phải lớn hơn 0!");
      return;
    }

      if (view === "edit") {
        dispatch({ type: "update", product: currentProduct });
      } else {
        dispatch({ type: "store", product: currentProduct });
      }
      dispatch({ type: "index" });
  }

  function onCancel() {
    if (window.confirm("Bạn có chắc chắn muốn hủy?")) {
      dispatch({ type: "index" });
    }
  }

  return (
    <>
      <h2>
        {view === "edit"
          ? `Cập nhật: ${product.name}`
          : "Thêm sản phẩm mới"}
      </h2>

      <div className="editForm">
        <div>
          <label htmlFor="name">Tên sản phẩm:</label>
          <input
            id="name"
            name="name"
            value={currentProduct.name || ""}
            onChange={handleChange}
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="price">Giá:</label>
          <input
            id="price"
            name="price"
            type="number"
            value={currentProduct.price || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="desc">Mô tả:</label>
          <textarea
            id="desc"
            name="desc"
            value={currentProduct.desc || ""}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <button className="btn btn-success me-2" onClick={onSave}>
            Lưu
          </button>
          <button className="btn btn-secondary" onClick={onCancel}>
            Hủy
          </button>
        </div>
      </div>
    </>
  );
}
