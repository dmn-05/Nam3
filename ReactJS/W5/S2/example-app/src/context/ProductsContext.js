import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

// Tạo 2 Context: 
// 1. ProductsContext để chia sẻ dữ liệu (state).
// 2. ProductsDispatchContext để chia sẻ hàm dispatch (thay đổi state).
const ProductsContext = createContext(null);
const ProductsDispatchContext = createContext(null);

// State ban đầu của ứng dụng
const initial = {
	newProduct: {id: 0, title: '', category: '', price: 0, description: ''}, // sản phẩm trống
	products: [],   // danh sách sản phẩm
	view: 'index',  // màn hình hiện tại ('index', 'show', 'create', 'edit')
	id: null,       // id sản phẩm đang xem/sửa (nếu có)
};

// Hàm reducer quản lý các thay đổi state dựa theo action gửi vào
function productsReducer(data, { type, id = null, product = null, products = [] }) {
  switch (type) {
    case "index": { // về trang danh sách
      return {
        ...data,
        view: "index",
        id: null,
      };
    }
    case "setProducts": { // nạp dữ liệu sản phẩm từ API
      return {
        ...data,
        products: products,
      };
    }
    case "show": { // hiển thị chi tiết sản phẩm
      return {
        ...data,
        view: "show",
        id: null,
      };
    }
    case "create": { // chuyển sang form tạo mới
      return {
        ...data,
        view: "create",
        id: null,
      };
    }
    case "store": { // lưu sản phẩm mới
      const maxId = Math.max(0, ...data.products.map(p=>p.id)); // tìm id lớn nhất
      product.id = maxId + 1; // tạo id mới
      return{
        ...data,
        products: [...data.products, product], // thêm vào danh sách
        view: 'index', // quay lại danh sách
        id: null
      }
    }
    case 'edit':{ // chuyển sang form chỉnh sửa
      return {
        ...data,
        view: 'edit',
        id: id
      }
    }
    case 'update':{ // cập nhật sản phẩm
      return {
        ...data,
        products: data.products.map(p=>p.id===product.id?product:p), // thay thế sản phẩm theo id
        view: 'index',
        id: null
      }
    }
    case 'destroy':{ // xóa sản phẩm
      return {
        ...data,
        products: data.products.filter(p=>p.id!==id), // lọc bỏ sản phẩm có id trùng
        view: 'index',
        id: null
      }
    }
    default: {
      throw Error('Unknown action: '+ type); // báo lỗi nếu action không hợp lệ
    }
  }
}

// Provider bọc toàn bộ ứng dụng
export function ProductsProvider({ children }) {
  const [data, dispatch] = useReducer(productsReducer, initial);

  // useEffect chạy 1 lần khi component mount
  // => fetch dữ liệu sản phẩm từ API dummyjson
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Khong ket noi duoc toi server!");
        }
        let data = await res.json();
        // chỉ lấy các trường cần thiết
        const products = data.products.map((p)=>({
          id: p.id,
          title: p.title,
          category: p.category,
          price: p.price,
          description: p.description
        }))
        // gửi action để set dữ liệu vào state
        dispatch({type: 'setProducts', products});
      } catch (err) {
        console.error("Error:", err);
      }
    };
    fetchData();
  }, []);

  // Cung cấp state và dispatch cho toàn bộ cây component
  return (
    <ProductsContext.Provider value={data}>
      <ProductsDispatchContext.Provider value={dispatch}>
        {children}
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}

// Hook để lấy dữ liệu state sản phẩm
export function useProducts(){
    return useContext(ProductsContext);
}

// Hook để lấy dispatch (dùng để thay đổi state)
export function useProductsDispatch(){
    return useContext(ProductsDispatchContext);
}
