/*
 * dinamic classNames generator
*/

export default function ClassNames (object) {
  const keysArray = Object.keys(object)
  return keysArray.filter(item => object[item]).join(' ')
}
