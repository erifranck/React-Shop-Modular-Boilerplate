import React, {Component} from 'react'
import {Layout} from 'commons/components'
import {Home as HomeStyles} from 'main/styles'
import profile from 'commons/images/perfil.jpg'

export class Home extends Component {
  constructor() {
    super()
    this.onFlip = this.onFlip.bind(this)
  }
  onFlip(value) {
    const {onHover, onBlur, ishover} = this.props
    if(!ishover && value) {
      onHover()
    }
    else if(!value) {
      onBlur()
    }
  }
  render() {
    const { selected } = this.props
    return(
      <Layout>
        <HomeStyles >
        </HomeStyles>
      </Layout>
    )
  }

}
