import { createContext, useContext, useReducer } from "react";

 const ProductsContext = createContext(null);
 const ProductsDispatchContext = createContext(null);

 //1. Trạng thái ban đầu
 const initial={
    //Khởi tạo mặc định giá trị cho 1 sản phẩm mới
    newProduct: {id:0, name: '',price:0, desc:''},
    //Danh sách sản phẩm
    products: [
        {id:1, name: "Sản phẩm 1", price: 1000, desc:"Mô tả sản phẩm 1"},
        {id:2, name: "Sản phẩm 2", price: 2000, desc:"Mô tả sản phẩm 2"},
        {id:3, name: "Sản phẩm 3", price: 3000, desc:"Mô tả sản phẩm 3"},
        {id:4, name: "Sản phẩm 4", price: 4000, desc:"Mô tả sản phẩm 4"},
        {id:5, name: "Sản phẩm 5", price: 5000, desc:"Mô tả sản phẩm 5"}
    ],
    //Thao tác hiện tại
    view: 'index',
    //Mã sản phẩm hiện tại
    id: null,
 };
 //2. Reducer (các hàm thay đổi trạng thái)
 function productsReducer(data, {type, id=null, product=null}){
    //Test
    console.log('Reducer', type, id, product);
    switch(type){
        case 'index':{
            return {
                ...data,
                view: 'index',
                id:null
            }
        }
        case 'show':{
            return{
                ...data,
                view: 'show',
                id:id
            }
        }
        case 'create':{
            return{
                ...data,
                view: 'create',
                //Khởi tạo giá trị mới
                newProduct: {id:0, name: '',price:0, desc:''},
                
                id:null
            }
        }
        case 'store':{
            //fake code
            const maxId=Math.max(0, ...data.products.map(p=>p.id));
            product.id=maxId+1;
            return{
                ...data,
                products:[...data.products, product],
                view: 'index',
                id:null
            }
        }
        case 'edit':{
            return{
                ...data,
                view:'edit',
                id:id,
                //Lấy thông tin sản phẩm hiện tại
                newProduct: data.products.find(p=>p.id===id)
            }
        }
        case 'update':{
            return{
                ...data,
                products: data.products.map(p=>p.id===id ? product : p),
                view: 'index',
                id:null
            }
        }
        case 'destroy':{
            return{
                ...data,
                products: data.products.filter(p=>p.id!==id),
                view: 'index',
                id:null
            }
        }
        default: {
            throw new Error('Unhandled action type:'+type);
        }
    }
}
//3. Provider(tạo các context provider để chia sẻ trạng thái và hàm thay đổi trạng thái cho các component con )
export function ProductsProvider({children}){
    const [data, dispatc]= useReducer(
        productsReducer,
        initial
    );
    return(
        <ProductsContext.Provider value={data}>
            <ProductsDispatchContext.Provider value={dispatc}>
                {children}
            </ProductsDispatchContext.Provider>
        </ProductsContext.Provider>
    )
}
//4. Custom hooks để sử dụng các context
//Component nào cần sử dụng trạng thái thì gọi useProducts
export function useProducts(){
    return useContext(ProductsContext);
}
//Componet nào cần gọi các hàm dispatch thì gọi useProductsDispatch
export function useProductsDispatch(){
    return useContext(ProductsDispatchContext);
}