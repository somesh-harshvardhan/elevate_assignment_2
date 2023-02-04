import React from 'react'
import CaraouselContext from './CaraouselContext'
import CategoryContext from './CategoriesContext'
import ProductsContext from './ProductsContext'


const ContextParent= ({children } : {children : any}) => {
  return (
    <ProductsContext>
   <CaraouselContext>
    <CategoryContext>
    {children}
    </CategoryContext>
   </CaraouselContext>
   </ProductsContext>
  )
}

export default ContextParent