import React from 'react'
import {Link} from 'react-router-dom'
import {Header as HeaderStyles} from 'commons/styles'
import {Grid, Row, Col} from 'react-flexbox-grid'

export const Header = (props) => (
  <HeaderStyles color={props.color} backgroundColor={props.backgroundColor}>
    <Grid>
      <Row>
        <Col xs={4}>
          <Link to='/'>
            <span className='icon-firma2 logo'/>
          </Link>
        </Col>
        <Col xs={8}>
          <nav>
            <ul className='nav-container'>
              <li>
                <Link to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/galery'>
                  Galery
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Grid>
  </HeaderStyles>
)
