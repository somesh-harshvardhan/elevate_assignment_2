import React from 'react'
import CategoryContext from './CategoriesContext'
import ProductsContext from './ProductsContext'


const ContextParent= ({children } : {children : any}) => {
  return (
    <ProductsContext>
    <CategoryContext>
    {children}
    </CategoryContext>
   </ProductsContext>
  )
}

export default ContextParent