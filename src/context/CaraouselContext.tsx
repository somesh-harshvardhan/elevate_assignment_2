import React, { createContext, useContext, useEffect, useState } from 'react'
import { caraouselProductsApi } from '../api';
const CaraouselContextObj = createContext({
    caraouselsProduct  : [] as ProductType[]
})
const CaraouselContext = ({children} : {children : any}) => {
    const [caraouselsProduct,setCaraouselProduct] = useState<ProductType[]>([]);
    useEffect(()=>{
    caraouselProductsApi().then(res=>res.data).then(data=>setCaraouselProduct(data))
    },[])
  return (
    <CaraouselContextObj.Provider value={{caraouselsProduct}}>
        {children}
    </CaraouselContextObj.Provider>
  )
}

export default CaraouselContext;

export const  useCaraouselsProduct = ()=>useContext(CaraouselContextObj)