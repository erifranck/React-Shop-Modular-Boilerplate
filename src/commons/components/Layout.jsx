import React from 'react'
import PropTypes from 'prop-types'
import {SideBar} from 'commons/components'
import {Layout as LayoutStyle} from 'commons/styles'
import avatar from 'commons/images/avatar.svg'

export const Layout = (props) => {
  return (
    <LayoutStyle >
      <SideBar
        avatarTitle='Erifranck Frontend Developer'
        imageUrl={avatar}
        links={[
          {
            name: 'Products',
            url: '/products'
          },
          {
            name: 'About Components',
            url: '/components'
          },
          {
            name: 'Documentation',
            url: '/documentation'
          },
          {
            name: 'Add Product',
            url: '/products/add'
          }
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
