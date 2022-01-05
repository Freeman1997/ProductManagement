

export default function useTotalProducts(data) {
    let nameOfProducts = []
    data.map((item) => nameOfProducts.push(item.product_name))
    nameOfProducts = [...new Set(nameOfProducts)]
    const productSummery = nameOfProducts.map((item) => {
        const selectedProduct = data.filter((p) => p.product_name === item)
        const totalStoreProduct = selectedProduct.reduce((accumulator, currentValue) => (accumulator += currentValue.input_unit_value * parseFloat(currentValue.input_unit)), 0)
        const totalProductCost = selectedProduct.reduce((accumulator, currentValue) => (accumulator += currentValue.input_unit_value * currentValue.input_unit_price), 0)
        return {
            itemName: item,
            totalValue: totalStoreProduct,
            totalCost: totalProductCost
        }
    })
  
    
    return {productSummery}
}
