export default function UnitValue(unitName) {
  switch (unitName.target.value) {
    case 'gram':
      return 0.001
    case 'kg':
      return 1
    case 'packet':
      return 5
    case 'bag':
      return 25
    case 'sack':
      return 40
    case 'ton':
      return 100
    default:
      return unitName.target.value
  }
}
