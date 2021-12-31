import React from 'react'



export default function StoreUnitHandler({ quantity, inputUnit, outputUnit,givenUnit }) {
  const calQuantity = (((quantity * inputUnit) / outputUnit) * 1000) / 1000
  const decimalPortion = calQuantity % 1
  const decimalValue = parseInt(
    (((decimalPortion * outputUnit) / inputUnit) * 1000) / 1000,
  )
  const printableUnit = parseInt(calQuantity).toLocaleString()
  if (inputUnit < 1 && quantity < 1000) {
    return <p className="text-gray-900 whitespace-no-wrap"> {quantity} gram</p>
  } else if (inputUnit < 1 && quantity > 1000) {
    const miniKgValue = (decimalValue + 1) / 1000
    const miniGramValue = miniKgValue % 1
    return (
      <p className="text-gray-900 whitespace-no-wrap">
        {' '}
        {printableUnit} {givenUnit(outputUnit)}{' '}
        {parseInt(miniKgValue) ? parseInt(miniKgValue) + ' kg ' : ''}{' '}
        {parseInt(miniGramValue * 10)
          ? parseInt(miniGramValue * 1000) + ' gram '
          : ''}{' '}
      </p>
    )
  } else {
    return (
      <p className="text-gray-900 whitespace-no-wrap">
        {printableUnit} {givenUnit(outputUnit)}{' '}
        {decimalValue ? decimalValue + 'kg' : ''}
      </p>
    )
  }
}
