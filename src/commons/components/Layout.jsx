import React from 'react'
import {Header} from 'commons/components'
import {Layout as LayoutStyle} from 'commons/styles'

export const Layout = (props) => {
  return (
    <LayoutStyle >
      <Header color={props.color} backgroundColor={props.backgroundColor}/>
      {props.children}
    </LayoutStyle>
  )
}
