import React, { useContext, useState } from 'react'
import { ProductDataContext } from '../Context/context'
import Product from '../Product'
import Summery from '../Summery/Summery'
import SendProductInfo from '../Upload/SendProductInfo'

export default function ProductTabs() {
    const { setReload } = useContext(ProductDataContext)
    const [tabToggler, setTabToggler] = useState(1)

    return (
        <>
            <div className="container mx-auto px-4 sm:px-8 max-w-screen">
                <div className="py-9">
                    <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
                        <h2 className="text-2xl leading-tight">Products</h2>

                        <SendProductInfo dataReload={setReload} submitTitle="Add Product" />
                    </div>
                    <div className="tabs">
                        <div className="tabs-header px-4">

                            <button className={tabToggler === 1 ? 'tabs-header-btn active' : 'tabs-header-btn'} value="details" onMouseEnter={() => setTabToggler(1)}>

                                Product Details
                            </button>
                            <button className={tabToggler === 2 ? 'tabs-header-btn active' : 'tabs-header-btn'} value="summery" onMouseEnter={() => setTabToggler(2)}>
                                Product Summery
                            </button>
                        </div>

                    </div>
                    <div className="tabs-body">
                        <div className={tabToggler === 1 ? 'tabs-body-item active' : 'tabs-body-item'}>
                            <Product />
                        </div>
                        <div className={tabToggler === 2 ? 'tabs-body-item active' : 'tabs-body-item'}>
                            <Summery />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
