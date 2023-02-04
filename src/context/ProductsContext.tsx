import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAllProducts } from '../api';

const ProductsObj = createContext<any>({
    products : [],
    setProducts : ()=>{},
    search : "",
    searchResults : [],
    setSearchResults : ()=>{},
    setSearch : ()=>{}
})

const ProductsContext = ({children} : any) => {
    const [products,setProducts] = useState<any>([]);
    const [search,setSearch] = useState("");
    const [searchResults,setSearchResults] = useState([])
    useEffect(()=>{
     getAllProducts().then(res=>res.data).then(data=>setProducts(data));
    },[])
    const productContex = {
      products,
      setProducts,
      search,
      setSearch,
      searchResults,
      setSearchResults
    }
  return (
    <ProductsObj.Provider value={productContex}>
        {children}
    </ProductsObj.Provider>
  )
}

export default ProductsContext;
export const useProducts = ()=>useContext(ProductsObj)