import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
import { useProducts } from '@/src/context/ProductsContext'
import { getAllProducts } from '@/src/api'
const Container = styled.div` 
flex: 4;
display: flex;
align-items: center;

input{
    width: 100%;
    padding: 12px 10px;
    color: var(--matte-primary);
    border: none;
    outline: none;
    box-shadow: 0 0 3px rgba(0,0,0,.4);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    ::placeholder{
        color: var(--matte-primary);
        opacity: .6;
    }
}
button{
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: #FF8B13;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 0 3px rgba(0,0,0,.4);
    cursor: pointer;
}
`
const Search = () => {
  const {products,search,setSearch,setSearchResults} = useProducts();
  const handleChange =()=>{
    if(products.length > 0 && search !== ""){
       const filterSearch = products.filter((product : ProductType)=>product.title.toLowerCase().includes(search.toLowerCase()));
       setSearchResults(filterSearch)
    }else{
        setSearchResults([])
    }
  }
  return (
   <Container>
    <input type="text" placeholder='Search this blog' value={search} onChange={e=>setSearch(e.target.value)} />
    <button onClick={handleChange}>
    <AiOutlineSearch color='white' size={20}/>
    </button>
   
   </Container>
  )
}

export default Search