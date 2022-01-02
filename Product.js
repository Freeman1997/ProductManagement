import moment from 'moment'
import React, { useContext, useState } from 'react'
import { ProductDataContext } from './Context/context'
import StoreUnitHandler from './CustomFunction/StoreUnitHandler'
import UnitName from './CustomFunction/UnitName'
import AppUrl from './ProductRestApi/AppUrl'
import RestCLient from './ProductRestApi/RestCLient'
import UpdateModal from './Update/UpdateModal'
import SendProductInfo from './Upload/SendProductInfo'


export default function Product() {
  const {data,setReload}=useContext(ProductDataContext) 
  let deleteHandler = (id) => {
    console.log(id)
    RestCLient.deleteData(AppUrl.ProductDeleteData + id)
      .then(() => setReload((prevState) => !prevState))
      .catch(() => {})
  }

  const [showModal, setShowModal] = useState(false)
  const [Up, setUp] = useState(0)
  const onUpdateHandler = (id) => {
    setShowModal(true)
    setUp(id)
  }

  return (
    <>
      <div className="">
      <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th scope="col" className="table_head">
                      Date of Purchase
                    </th>
                    <th scope="col" className="table_head">
                      Product
                    </th>
                    <th scope="col" className="table_head">
                      Unit of Purchase
                    </th>
                    <th scope="col" className="table_head">
                      Unit Price
                    </th>
                    <th scope="col" className="table_head">
                      Total Cost
                    </th>
                    <th scope="col" className="table_head">
                      Store Unit
                    </th>
                    <th scope="col" className="table_head">
                      {}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data
                    ?.slice(0)
                    .reverse()
                    .map((item, index) => {
                      const {
                        id,
                        created_at,
                        product_name,
                        input_unit,
                        input_unit_value,
                        input_unit_price,
                        output_unit,
                      } = item

                      return (
                        <tr key={index}>
                          <td className="px-5  border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <p>{moment(created_at).format('DD/MM/YYYY')}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {product_name}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {input_unit_value.toLocaleString()}{' '}
                              {UnitName(input_unit)}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">
                                {input_unit_price.toLocaleString()}
                              </span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              ${' '}
                              {(
                                input_unit_value * input_unit_price
                              ).toLocaleString()}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <StoreUnitHandler
                              quantity={input_unit_value}
                              inputUnit={input_unit}
                              outputUnit={output_unit}
                              givenUnit={UnitName}
                            />
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-indigo-600 hover:text-indigo-900">
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200  opacity-50 rounded-sm"
                                ></span>
                                <span
                                  className="relative cursor-pointer"
                                  onClick={() => onUpdateHandler(id)}
                                >
                                  Edit
                                </span>
                              </span>
                              {" "}
                              <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-0 bg-green-200   opacity-50 rounded-sm"
                                ></span>
                                <span
                                  className="relative cursor-pointer "
                                  onClick={() => deleteHandler(id)}
                                >
                                  Delete
                                </span>
                              </span>
                            </p>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
        
      </div>
      {showModal ? (
        <UpdateModal
          showModal={showModal}
          setShowModal={setShowModal}
          setReload={setReload}
          updateId={Up}
          data={data}
        />
      ) : (
        ''
      )}
    </>
  )
}
