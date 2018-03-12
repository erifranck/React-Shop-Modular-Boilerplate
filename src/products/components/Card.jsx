import React, {Component} from 'react'
import {Paper} from 'commons/components'
import {Card as CardStyles} from 'products/styles'
import PropTypes from 'prop-types'

export class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editImage: false,
      editName: false,
      editDescription: false,
      editPrice: false,
      values: props
    }
    this.toggle = this.toggle.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  toggle (input, value) {
    this.setState({
      [`edit${input}`]: value
    })
  }

  onChange (input, event) {
    this.setState({
      values: {
        ...this.state.values,
        [input]: event.target.value
      }
    })
  }

  handleChange () {

  }

  render () {
    return (
      <Paper width='250px' leven={1} className='card-wrapper' >
        <CardStyles>
          <div className='card-header'>
            <img src={this.props.url} />
          </div>
          <div className='card-body'>
            {
              !this.state.editName ?
                <h3 onClick={() => this.toggle('Name', true)} >
                  {this.props.name}
                </h3>
                : <input
                  autoFocus
                  onBlur={() => this.toggle('Name', false)}
                  value={this.state.values.name}
                  onChange={(event) => this.onChange('name', event)} />
            }
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
