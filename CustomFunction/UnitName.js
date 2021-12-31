export default function UnitName(unitValue) {
  switch (unitValue) {
    case '0.001':
      return 'gram'
    case '1':
      return 'kg'
    case '5':
      return 'packet'
    case '25':
      return 'bag'
    case '40':
      return 'sack'
    case '100':
      return 'ton'
    default:
      return unitValue
  }
}
