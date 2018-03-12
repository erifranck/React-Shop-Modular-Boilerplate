import React, {Component} from 'react'
import {Layout, Paper} from 'commons/components'
import {Form as FormStyles} from 'products/styles'
import { Field, reduxForm } from 'redux-form'  // ES6
import {required} from 'commons/utils/fieldLevelValidationForm'
import {RenderSimpleField} from 'commons/components/Fields'
import {Row, Col} from 'glamorous-grid'

class FormComponent extends Component {
  constructor () {
    super()
    this.sendForm = this.sendForm.bind(this)
  }

  sendForm () {

  }

  render () {
    return (
      <Layout>
        <FormStyles>
          <h2>
            Guardar Nuevo Producto
          </h2>
          <Paper className='form-box'>
            <form action='' >
              <Row>
                <Col>
                  <Field
                    name='name'
                    type='text'
                    validate={[required]}
                    required
                    component={RenderSimpleField}
                    label='NAME'
                />
                </Col>
                <Col>
                  <Field
                    name='description'
                    type='text'
                    validate={[required]}
                    required
                    component={RenderSimpleField}
                    label='DESCRIPTION'
                  />
                </Col>
                <Col>
                  <Field
                    name='price'
                    type='text'
                    validate={[required]}
                    required
                    component={RenderSimpleField}
                    label='PRICE'
                  />
                </Col>
                <Col>
                  <Field
                    name='image'
                    type='file'
                    validate={[required]}
                    required
                    component={RenderSimpleField}
                    label='PHOTO'
                  />
                </Col>
              </Row>
            </form>
          </Paper>
        </FormStyles>
      </Layout>
    )
  }
}
export const Form = reduxForm({
  form: 'addproduct'
})(FormComponent)
