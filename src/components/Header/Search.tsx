import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useProducts } from "@/src/context/ProductsContext";
import { getAllProducts, getProductsByCategories } from "@/src/api";
import { useCategory } from "@/src/context/CategoriesContext";
const Container = styled.div`
  flex: 4;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 12px 10px;
    color: var(--matte-primary);
    border: none;
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    ::placeholder {
      color: var(--matte-primary);
      opacity: 0.6;
    }
  }
  button {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background: #ff8b13;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;
const Search = () => {
  const {
    products,
    search,
    setSearch,
    setSearchResults,
    setProducts,
    setLoading,
  } = useProducts();
  const { selected } = useCategory();
  const handleChange = () => {
    if (products.length > 0 && search !== "") {
      const filterSearch = products.filter((product: ProductType) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(
        filterSearch.length > 0 ? filterSearch : "No result Found"
      );
    } else {
      setSearchResults([]);
    }
  };
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
        setSearchResults([]);
        if (selected.value !== "all categories") {
            setLoading(true);
            getProductsByCategories(selected.value)
              .then((res) => res.data)
              .then((data) => {
                setProducts(data);
                setLoading(false);
              });
          } else {
            setLoading(true);
            getAllProducts()
              .then((res) => res.data)
              .then((data) => {
                setProducts(data);
                setLoading(false);
              });
          }
    }
  };
  return (
    <Container>
      <input
        type="text"
        placeholder="Search this blog"
        value={search}
        onChange={handleOnchange}
      />
      <button onClick={handleChange}>
        <AiOutlineSearch color="white" size={20} />
      </button>
    </Container>
  );
};

export default Search;
