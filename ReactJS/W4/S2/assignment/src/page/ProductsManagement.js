import { useProducts } from "../context/ProductsContext";
import ProductsList from "../components/ProductsList";
import ProductsEditForm from "../components/ProductsEditForm";

export function ProductsManagement(){
    const data =useProducts();
    return(
        <>
            <h1>Quản lý sản phẩm</h1>
            {
                (()=>{
                    switch(data.view){
                        case 'index':
                            return <ProductsList/>;
                        case 'edit':
                            return <ProductsEditForm/>;
                        case 'create':
                            return <ProductsEditForm/>;
                        default:
                            return <h2>Error: Unknown view</h2>;
                    }
                })()
            }
        </>
    );
}