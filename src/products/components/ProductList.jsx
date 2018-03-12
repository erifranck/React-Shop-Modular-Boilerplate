import React, {Component} from 'react'
import {Layout} from 'commons/components'
import {Card} from 'products/components'
import PropTypes from 'prop-types'
import {ProductList as ProductListStyles} from 'products/styles'

export class ProductList extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

  render () {
    return (
      <Layout>
        <ProductListStyles>
          {
            this.props.products.map(item => (
              <Card
                url={item.image}
                price={item.price}
                description={item.description}
                name={item.name}
                key={item.id} />
            ))
          }
        </ProductListStyles>
      </Layout>
    )
  }

}

ProductList.propTypes = {
  products: PropTypes.array,
  getProducts: PropTypes.func
}
