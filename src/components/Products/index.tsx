import React, { useEffect, useState } from 'react'
import { getAllProducts, getProductsByCategories } from '@/src/api';
import { useCategory } from '@/src/context/CategoriesContext';
import { useProducts } from '@/src/context/ProductsContext';
import styled from 'styled-components';

const Container = styled.div`
  margin  : auto;
`
const ProductCategory = styled.h3`
text-align: center;
margin: 1.7rem auto;
width: 80vw;
font-weight: 700;
font-size: 2rem;
`
const ProductListing = styled.div`
width: 80vw;
margin: auto;
display: grid;
grid-gap: 20px;
grid-template-columns: repeat(3,1fr);

@media screen and (max-width : 768px) {
   grid-template-columns: auto;
}
`
const ProductCard = styled.div`
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    padding: 20px;
    >*{
        margin: 1rem auto;
        text-align: center;
    }
`

const Products = () => {
    const {products,searchResults,setProducts} = useProducts();
    const {selected} = useCategory();
    const [loading,setLoading] = useState(false);
    const showWhat = searchResults.length > 0 ? searchResults : products;
    useEffect(()=>{
      if(selected.value !== "all categories"){
        setLoading(true);
        getProductsByCategories(selected.value).then(res=>res.data).then(data=>{setProducts(data); setLoading(false)})
      }else{
        setLoading(true);
        getAllProducts().then(res=>res.data).then(data=>{setProducts(data); setLoading(false)})
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selected])
  return (
   <Container>
    <ProductCategory>
        {selected.label}
    </ProductCategory>
    <ProductListing>
        {
           !loading ?  showWhat.map((item : ProductType)=><ProductCard key={item.id}>
             <h3>{item.title}</h3>
             <p className="price">price : ${item.price}</p>
             <img src={item.image} alt="" height={300} width="100%"/>
            </ProductCard> ) : <h1>Loading...</h1>
        }
    </ProductListing>
   </Container>
  )
}

export default Products