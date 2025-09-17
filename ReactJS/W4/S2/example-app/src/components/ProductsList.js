import { useProducts, useProductsDispatch } from "../context/ProductsContext";

export default function ProductsList(){
    const data = useProducts();
    const dispatch = useProductsDispatch();
    function onEdit(product){
        return 0;
    }
    function onDelete(product){
        return 0;
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
                    <th>Tên sản phẩm</th>
                    <th>Giá</th>
                    <th>Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    {data.products.map((p)=>(
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                            <td>{p.desc}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            }
        </>
    )
}