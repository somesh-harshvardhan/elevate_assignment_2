import { string } from 'prop-types';
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { getAllCategoriesApi } from '../api';
import { capitalizeFirstLetter } from '../utils';
const CategoryContextObj = createContext<any>({
    categories : [] as CategoriesType,
    options : [] as {label : string,value : string}[],
    selected : {} as {label : string,value : string}, 
    setSelectedOption : ()=>{}
})
const CategoryContext = ({children} : {children : any}) => {
    const [categories,setCategories] = useState<CategoriesType>([]);
    const [options,setOptions] = useState<{label : string,value : string}[]>([{label : 'All categories',value : 'all categories'}]);
    const [selected,setSelectedOption] = useState(options[0]);
    useEffect(()=>{
    getAllCategoriesApi().then(res=>res.data).then(data=>{
        setCategories(data);
        setOptions([...options,...data.map((item : string)=>({label : capitalizeFirstLetter(item),value : item}))])
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <CategoryContextObj.Provider value={{categories,options,selected,setSelectedOption}}>
        {children}
    </CategoryContextObj.Provider>
  )
}

export default CategoryContext;

export const  useCategory = ()=>useContext(CategoryContextObj)