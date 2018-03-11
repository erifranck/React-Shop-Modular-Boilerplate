import productMock from 'commons/utils/products_mock'

export const getProducts = () => new Promise((resolve) => {
  setTimeout(() => resolve(productMock), 1000)
})

export const setProduct = (product) => new Promise((resolve) => {
  productMock.push(product)
  setTimeout(() => resolve(productMock), 1000)
})

export const editProduct = (product) => new Promise((resolve) => {
  const newProductArray = productMock.map(item => item.id === product.id ? product : item)
  setTimeout(() => resolve(newProductArray), 1000)
})
