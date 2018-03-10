import React from 'react'
import PropTypes from 'prop-types'
import {SideBar} from 'commons/components'
import {Layout as LayoutStyle} from 'commons/styles'

export const Layout = (props) => {
  return (
    <LayoutStyle >
      <SideBar
        avatarTitle='Erifranck Frontend Developer'
        links={[
          {
            name: 'Shop',
            url: '/shop'
          },
          {
            name: 'About Components',
            url: '/components'
          },
          {
            name: 'Documentation',
            url: '/documentation'
          },
        ]}
      />
      <div className='route-container'>
        {props.children}
      </div>
    </LayoutStyle>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
