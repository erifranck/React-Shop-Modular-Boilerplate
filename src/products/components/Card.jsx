import React, {Component} from 'react'
import {Paper} from 'commons/components'
import {Card as CardStyles} from 'products/styles'
import PropTypes from 'prop-types'

export class Card extends Component {
  constructor () {
    super()
    this.state = {
      editImage: false,
      editName: false,
      editDescription: false,
      editPrice: false
    }
  }
  render () {
    return (
      <Paper width='250px' leven={1} className='card-wrapper' >
        <CardStyles>
          <div className='card-header'>
            <img src={this.props.url} />
          </div>
          <div className='card-body'>
            <h3>
              {this.props.name}
            </h3>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='card-footer'>
            <span>{this.props.price}</span>
          </div>
        </CardStyles>
      </Paper>
)
  }
}

Card.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string
}
