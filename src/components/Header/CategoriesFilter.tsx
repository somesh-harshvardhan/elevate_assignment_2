import AsyncSelect from "react-select/async";
import { StylesConfig } from "react-select";
import { useCategory } from "@/src/context/CategoriesContext";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import { useProducts } from "@/src/context/ProductsContext";
const CategoriesFilter = () => {
    const {setSearch} = useProducts();
    const {  options,selected,setSelectedOption } = useCategory();
    const colorStyles: StylesConfig = {
      control: (styles) => ({
        ...styles,
        background: "var(--matte-primary)",
        padding: "2px 16px",
        border: "0 ",
        boxShadow: "0",
        "&:hover": {
          border: "0",
        },
      }),
      container: (styles) => ({ ...styles, border: "none", flex : '1' }),
      singleValue: (styles) => ({ ...styles, color: "white" }),
      menu: (styles) => ({ ...styles, background: "var(--matte-primary)" }),
      option: (styles, props) => {
        const { isSelected, isFocused } = props;
        return {
          ...styles,
          color: isFocused ? "var(--matte-primary)" : "white",
          background: isFocused ? "white" : "var(--matte-primary)",
          cursor: "pointer",
        };
      },
      placeholder : (styles)=>({...styles,color : "white"})
    };
    const handleChange = (value : any)=>{
        setSelectedOption(value);
        setSearch("")
    }
    return (
      <AsyncSelect
       value={selected}
        defaultOptions={options}
        onChange={handleChange}
        cacheOptions
        className="filter-select"
        styles={colorStyles}
         placeholder={options.length > 0 ? "Select category"  : "Loading options..."}
        components={{
          IndicatorSeparator: null,
          IndicatorsContainer: () => <AiFillCaretDown color="white" />,
        }}
      />
    );
  };

  export default CategoriesFilter