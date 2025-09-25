import "./App.css";
// import { useEffect, useState } from "react";
import { ProductsProvider } from "./context/ProductsContext";
import ProductsManagement from "./page/ProductsManagement";
function App() {
  // const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let res = await fetch("https://dummyjson.com/products");
  //       if (!res.ok) {
  //         throw new Error("Khong ket noi duoc toi server!");
  //       }
  //       let data = await res.json();
  //       setProducts(data.products);
  //     } catch (err) {
  //       console.error("Error:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // function Sua(){}
  // function Xoa(){}
  // return (
  //   <>
  //     {loading ? (
  //       <h1>Loading...</h1>
  //     ) : (
  //       <>
  //         <h2>Danh sách sản phẩm</h2>
  //         <table>
  //           <thead>
  //             <tr>
  //               <th>ID</th>
  //               <th>Title</th>
  //               <th>Description</th>
  //               <th>Category</th>
  //               <th>Price</th>
  //               <th>DiscountPercentage</th>
  //               <th>Rating</th>
  //               <th>Stock</th>
  //               <th>Brand</th>
  //               <th>Sửa</th>
  //               <th>Xóa</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {products.map((p) => (
  //               <tr>
  //                 <td>{p.id}</td>
  //                 <td>{p.title}</td>
  //                 <td>{p.description}</td>
  //                 <td>{p.category}</td>
  //                 <td>{p.price}</td>
  //                 <td>{p.discountPercentage}</td>
  //                 <td>{p.rating}</td>
  //                 <td>{p.stock}</td>
  //                 <td>{p.brand}</td>
  //                 <td>
  //                   <button onclick={() => Sua(p.id)}>Sửa</button>
  //                 </td>
  //                 <td>
  //                   <button onclick={() => Xoa(p.id)}>Xóa</button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //           <tfoot>
  //             <tr>
  //                 <button onclick="them()">Thêm</button>
  //             </tr>
  //           </tfoot>
  //         </table>
  //       </>
  //     )}
  //   </>
  // );

  return (
    <ProductsProvider>
      <div className="container">
        <ProductsManagement />
      </div>
    </ProductsProvider>
  );
}
export default App;
