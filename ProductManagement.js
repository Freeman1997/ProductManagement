import React from 'react'
import { Provider } from './Context/context'
import ProductTabs from './ProductTabs/ProductTabs'
import './Styles/Product.scss'

export default function ProductManagement() {
  return (
    <>
      <Provider>        
        <ProductTabs/>
      </Provider>
    </>
  )
}
