import React from 'react'
import PropTypes from 'prop-types'
import {Dash, Dotted, Solid} from 'commons/styles'

export const Divider = ({type}) => {
  switch (type) {
    case 'dash':
      return (<Dash />)
    case 'dotted':
      return (<Dotted />)
    default:
      return (<Solid />)
  }
}
Divider.propTypes = {
  type: PropTypes.string
}
