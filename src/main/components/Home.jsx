import React, {Component} from 'react'
import {Layout} from 'commons/components'
import {Home as HomeStyles} from 'main/styles'
import shopCar from 'commons/images/car.png'

export class Home extends Component {
  render () {
    return (
      <Layout>
        <HomeStyles>
          <img src={shopCar} alt="shopCar" />
        </HomeStyles>
      </Layout>
    )
  }

}
