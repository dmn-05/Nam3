import {createContext, useContext, useReducer} from 'react';

const ProductsContext = createContext(null);
const ProductsDispatchContext = createContext(null);

//1. Trang thai ban dau
const initial = {
	newProduct: {id: 0, name: '', price: 0, desc: ''},
	products:[
		{id: 1, name: 'San pham 1', price: 1000, desc: 'Mo ta san pham 1'},
		{id: 2, name: 'San Pham 2', price: 2000, desc: 'Mo ta san pham 2'},
		{id: 3, name: 'San Pham 3', price: 3000, desc: 'Mo ta san pham 3'},
		{id: 4, name: 'San Pham 4', price: 4000, desc: 'Mo ta san pham 4'},
		{id: 5, name: 'San Pham 5', price: 5000, desc: 'Mo ta san pham 5'},
	],
	view: 'index',
	id: null,
	
};
//2. Reducer (Cac ham thay doi trang thai)
function productsReducer(data, {type, id = null, product = null}){
    console.log('Reducer', type, id, product);
    switch(type){
        case 'index': {
            return {
                ...data,
                view: 'index',
                id: null
            }
        }
        case 'show': {
            return {
                ...data,
                view: 'show',
                id: null
            }
        }
        case 'create': {
            return {
                ...data,
                view: 'create',
                id: null 
            }
        }
        case 'store':{
            const maxId = Math.max(0, ...data.products.map(p=>p.id));
            product.id = maxId + 1;
            return {
                ...data,
                products: [...data.products, product],
                view: 'index',
                id: null
            }
        }
        case 'edit': {
            return {
                ...data,
                view: 'edit',
                id: id
            }
        }
        case 'update': {
            return {
                ...data,
                products: data.products.map(p=>p.id===product.id ? product : p),
                view: 'index',
                id: null
            }
        }
        case 'destroy': {
            return {
                ...data,
                products: data.products.filter(p=>p.id!==id),
                view: 'index',
                id: null
            }
        }
        default: {
            throw Error('Unknown action: ' + type);
        }
    }
}
//3. Provider (tao cac context provider de chia se trang thai)
// va cac ham dispatch cho cac component con)
export function ProductsProvider({children}){
    const [data, dispatch] = useReducer(
        productsReducer,
        initial
    );
    return (
        <ProductsContext.Provider value={data}>
            <ProductsDispatchContext.Provider value={dispatch}>
                {children}
            </ProductsDispatchContext.Provider>
        </ProductsContext.Provider>
    );
}

// Custom hooks de su dung cac context
// component nao can su dung trang thai thi goi useProducts
export function useProducts(){
    return useContext(ProductsContext);
}
// component nao can goi cac ham thay doi trang thai thi goi useProductsDispatch
export function useProductsDispatch(){
    return useContext(ProductsDispatchContext);
}