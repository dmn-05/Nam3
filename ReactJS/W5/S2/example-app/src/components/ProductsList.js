import { useProducts, useProductsDispatch } from "../context/ProductsContext";

export default function ProductsList(){
    const data = useProducts();
    const dispatch = useProductsDispatch();
    function onEdit(product){
        dispatch({type: "edit", id: product.id})
    }
    function onDelete(product){
        dispatch({type: "destroy", id: product.id})
    }   
    function onCreate(product){
        dispatch({type: 'create'});
    }
    return (
        <>
            <h2>Danh sách sản phẩm</h2>
            {
                data.products.length === 0 ? <p>Không có sản phẩm</p> : 
                <table 
                    border="1" 
                    className="table" 
                    style={{ borderCollapse: "collapse", padding: "8px" }}
                >
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Hành vi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.products.map((p)=>(
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                        <td>{p.price}</td>
                        <td>{p.category}</td>
                        <td>{p.description}</td>
                        <td>
                            <button onClick={() => onEdit(p)}>Sửa</button>
                            <button onClick={() => onDelete(p)}>Xóa</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            }
            <button onClick={onCreate}>Thêm sản phẩm</button>
        </>
    )
}