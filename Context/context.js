import React, { createContext, useEffect, useState } from 'react'
import AppUrl from '../ProductRestApi/AppUrl'
import RestCLient from '../ProductRestApi/RestCLient'

const initialState = []
export const ProductDataContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [data, setData] = useState([])
  const [reload, setReload] = useState(false)
  useEffect(() => {
    RestCLient.getData(AppUrl.ProductGetData)
      .then((res) => setData(res))
      .catch(() => {})
  }, [reload])
  return (
    <ProductDataContext.Provider
      value={{
        data,
        setReload,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  )
}
