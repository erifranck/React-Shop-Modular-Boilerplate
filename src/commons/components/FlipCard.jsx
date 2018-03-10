import React, {Component} from 'react'
import {FlipCard as FlipCardStyles} from 'commons/styles'

export class FlipCard extends Component {
  constructor() {
    super()
    this.state = {
      isFlip: false
    }
  }
  flip(value) {
    this.props.flipCallback && this.props.flipCallback(value)
    this.setState({isFlip: value})
  }
  render() {
    const {FrontBody, BackBody, bgColorBack} = this.props
    return (
      <FlipCardStyles
        onMouseOver={this.flip.bind(this, true)}
        onMouseLeave={this.flip.bind(this, false)}
        flip={this.state.isFlip}
        height={this.props.height}
        radius={this.props.radius}
        bgColorBack={bgColorBack}
        width={this.props.width}>
        <div className='front-wrapper'>
          <div className='header'>
          </div>
          <div className='body'>
            {FrontBody}
          </div>
          <div className="footer">
          </div>
        </div>
        <div className='back-wrapper' >
          <div className='header'>
          </div>
          <div className='body'>
            {BackBody}
          </div>
          <div className='footer'>
          </div>
        </div>
      </FlipCardStyles>
    )
  }
}
