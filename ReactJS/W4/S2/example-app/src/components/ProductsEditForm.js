import { useState } from "react";
import { useProducts, useProductsDispatch } from "../context/ProductsContext";

export default function ProductsEditForm(){
    const data = useProducts();
    const dispatch = useProductsDispatch();
    const view = data.view;
    const product = view === 'edit' ? data.products.find(p=>p.id === data.id) : data.newProduct;
    const [current, setCurrent] = useState(product);
    function onSave(){
        return 0;
    } 
    function onCancel(){
        dispatch({type: 'index'});
    }
    return (
        <>
            
        </>
    )
}