import React from 'react'
import PropTypes from 'prop-types'
import { SideBar as SideBarStyles } from 'commons/styles'
import {Divider} from 'commons/components'
import {Link} from 'react-router-dom'

export const SideBar = ({links = [], imageUrl, avatarTitle}) => (
  <SideBarStyles>
    <div className='sidebar-box' >
      <div className='avatar-container'>
        <img src={imageUrl} className='avatar' />
        <div className='avatar-title' >
          {avatarTitle}
        </div>
      </div>
    </div>
    <Divider type='dotted' />
    <div className='sidebar-link-wrapper'>
      <ul>
        {links.map((item, key) => (
          <li className='sidebar-button'>
            <Link key={key} class='sidebar-link-item' to={item.url} >
              { item.name }
            </Link>
          </li>
      ))}
      </ul>
    </div>
  </SideBarStyles>
)

SideBar.propTypes = {
  links: PropTypes.array,
  imageUrl: PropTypes.string,
  avatarTitle: PropTypes.string
}
