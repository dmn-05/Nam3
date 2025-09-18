import { useProducts, useProductsDispatch } from "../context/ProductsContext";

export default function ProductsList() {
  const data = useProducts();
  const dispatch = useProductsDispatch();

  function onEdit(product) {
    dispatch({ type: "edit", id: product.id });
  }

  function onDelete(product) {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
      dispatch({ type: "destroy", id: product.id });
    }
  }

  function onCreate(product) {
    dispatch({ type: "create" });
  }

  return (
    <>
     

      {data.products.length === 0 ? (
        <p>Không có sản phẩm</p>
      ) : (
        <table border="1" className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Mô tả</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.desc}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => onEdit(product)}
                  >
                    Sửa
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDelete(product)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      )}

      <button onClick={onCreate} className="btn btn-primary mb-2">
        + Thêm sản phẩm
      </button>
    </>
  );
}
