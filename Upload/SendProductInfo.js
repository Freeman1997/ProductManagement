import React, { useState } from 'react'
import AppUrl from '../../../RestApi/AppUrl'
import RestCLient from '../../../RestApi/RestCLient'
import UnitValue from '../CustomFunction/UnitValue'

const initialState = {
  productName: '',
  productQuantity: 0,
  productInputUnit: '',
  productInputUnitPrice: 0,
  productOutPutUnit: '',
}

export default function SendProductInfo({
  dataReload,
  submitTitle,
  setShowModal,
}) {
  
  const [difKey, setDifKey] = useState(0)

  const [productData, setProductData] = useState(initialState)
  let {
    productName,
    productQuantity,
    productInputUnit,
    productInputUnitPrice,
    productOutPutUnit,
  } = productData
  const createProduct = () => {
    if (
      !productName ||
      !productQuantity ||
      productQuantity < 0 ||
      !productInputUnit ||
      !productInputUnitPrice ||
      !productOutPutUnit
    )
      return
      RestCLient.postData(AppUrl.ProductPostData, JSON.stringify(productData))
      .then((res) => {
        dataReload((res) => !res)
        setDifKey(Math.random())
        setShowModal((prevState)=>!prevState)
        return res.message
      })
      .catch((error) => console.log(error))

      setProductData(initialState);

  }

  
  return (
    <div key={difKey}>
      <div className="flex flex-col mb-5">
        <form className="w-full">
          <div className=" flex flex-wrap space-x-2">
            <fieldset className="input_secondary">
              <legend>Select Product:</legend>
              <select
                id='"form-subscribe-Filter'
                className="input_primary"
                placeholder="name"
                defaultValue={'DEFAULT'}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    productName: e.target.value,
                  })
                }
              >
                <option value="DEFAULT" disabled hidden>
                  Product
                </option>
                <option value="Rice">Rice</option>
                <option value="Sugar">Sugar</option>
                <option value="Salt">Salt</option>
                <option value="Onion">Onion</option>
              </select>
            </fieldset>
            <fieldset className="input_secondary">
              <legend>Enter Quantity:</legend>
              <input
                type="number"
                id='"form-subscribe-Filter'
                className="input_primary"
                placeholder="Quantity"
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    productQuantity: e.target.value,
                  })
                }
              />
            </fieldset>
            <fieldset className="input_secondary">
              <legend>Enter Unit Price:</legend>
              <input
                type="number"
                id='"form-subscribe-Filter'
                className="input_primary"
                placeholder="Unit Price"
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    productInputUnitPrice: e.target.value,
                  })
                }
              />
            </fieldset>
            <fieldset className="input_secondary">
              <legend>Enter Buying Unit:</legend>
              <select
                id='"form-subscribe-Filter'
                className="input_primary"
                placeholder="name"
                defaultValue={'DEFAULT'}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    productInputUnit: UnitValue(e),
                  })
                }
              >
                <option value="DEFAULT" disabled hidden>
                  Unit
                </option>
                <option value="gram">Gram</option>
                <option value="kg">Kg</option>
                <option value="packet">Packet(5kg)</option>
                <option value="bag">Bag(25kg)</option>
                <option value="sack">Sack(40kg)</option>
                <option value="ton">Ton(100kg)</option>
              </select>
            </fieldset>
            <fieldset className="input_secondary">
              <legend>Enter Store Unit:</legend>
              <select
                id='"form-subscribe-Filter'
                className="input_primary"
                placeholder="name"
                defaultValue={'DEFAULT'}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    productOutPutUnit: UnitValue(e),
                  })
                }
              >
                <option value="DEFAULT" disabled hidden>
                  Unit
                </option>
                <option value="gram">Gram</option>
                <option value="kg">Kg</option>
                <option value="packet">Packet(5kg)</option>
                <option value="bag">Bag(25kg)</option>
                <option value="sack">Sack(40kg)</option>
                <option value="ton">Ton(100kg)</option>
              </select>
            </fieldset>
          </div>
        </form>
        <div className="flex gap-4">
          <button
            className="button_primary"
            type="submit"
            onClick={createProduct}
          >
            {submitTitle}
          </button>
        </div>
      </div>
    </div>
  )
}
