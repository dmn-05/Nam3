import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect( () =>{
    const fetchData = async ()=>{ 
      try{
        let res = await fetch('https://dummyjson.com/products')
        if(!res.ok){
          throw new Error("Khong ket noi duoc toi server!")
        }
        let data = await res.json();
        setProducts(data.products);
      }
      catch(err){
        console.error("Error:", err);
      }
      finally{
        setLoading(false);
      }
    }
    fetchData();
    
  },[]);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <>
              {products.map((pro, index) => (
                <p key={index}>{JSON.stringify(pro)}</p>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
