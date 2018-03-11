import React from 'react'
import PropTypes from 'prop-types'
import {Paper as PaperStyles} from 'commons/styles'

export const Paper = (props) => {
  return (
    <PaperStyles width={props.width} level={props.level} >
      { props.children }
    </PaperStyles>
  )
}

Paper.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  level: PropTypes.number
}
