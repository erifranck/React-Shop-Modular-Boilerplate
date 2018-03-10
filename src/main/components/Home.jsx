import React, {Component} from 'react'
import {Layout, FlipCard, Card} from 'commons/components'
import {Home as HomeStyles} from 'main/styles'
import {Grid, Row, Col} from 'react-flexbox-grid'
import profile from 'commons/images/perfil.jpg'

export class Home extends Component {
  constructor() {
    super()
    this.onFlip = this.onFlip.bind(this)
  }
  onFlip(value) {
    const {onHover, onBlur, ishover} = this.props
    if(!ishover && value) {
      onHover()
    }
    else if(!value) {
      onBlur()
    }
  }
  render() {
    const { selected } = this.props
    return(
      <Layout>
        <HomeStyles >
          <div className='profile-wrapper'>
            <Grid>
              <Row>
                <Col md={8}>
                  <h2>
                    Frontend Developer / Ilustrator / Entrepreneur
                  </h2>
                </Col>
                <Col md={4}>
                  <Row end='xs'>
                    <FlipCard />
                  </Row>
                </Col>
              </Row>
            </Grid>
          </div>
        </HomeStyles>
        <Card
          position='absolute'
          width='50%'
          top='30%'
          left='15%'
        />
      </Layout>
    )
  }

}
