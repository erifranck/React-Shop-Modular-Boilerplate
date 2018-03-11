import {ProductList, Form} from 'products/components'
import productActions from 'products/reducers'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => ({
  products: state.product.data
})

const mapDispathToProps = (dispatch) => ({
  getProducts: bindActionCreators(productActions.fetchProduct, dispatch)
})

export const FormPage = Form
export const ProductListPage = connect(mapStateToProps, mapDispathToProps)(ProductList)
