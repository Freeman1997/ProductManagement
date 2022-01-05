import React, { useContext, useState } from 'react'
import { ProductDataContext } from '../Context/context'
import Product from '../Product'
import Summery from '../Summery/Summery'
import SendProductInfo from '../Upload/SendProductInfo'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useRandomColors from '../CustomFunction/useRandomColors'
import useTotalProducts from '../CustomFunction/useTotalProducts'

export default function ProductTabs() {
    const { setReload, data } = useContext(ProductDataContext)
    const [tabToggler, setTabToggler] = useState(1)
    ChartJS.register(ArcElement, Tooltip, Legend);
    const {colors} = useRandomColors(data);
    const {productSummery} = useTotalProducts(data)
   
    
    console.log(productSummery)


    const chartData = {
        labels:productSummery.map((c) => c.itemName),
        datasets: [{
           
            data: productSummery.map((c) => c.totalValue),
            backgroundColor: colors

        }],
    }

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
                            <button className={tabToggler === 3 ? 'tabs-header-btn active' : 'tabs-header-btn'} value="summery" onMouseEnter={() => setTabToggler(3)}>
                                Product Report
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
                        <div className={tabToggler === 3 ? 'tabs-body-item active' : 'tabs-body-item'}>
                            <div className='doughnut'>
                                <Doughnut data={chartData} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
