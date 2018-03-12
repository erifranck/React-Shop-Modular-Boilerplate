import React, {Component} from 'react'
import {Layout} from 'commons/components'
import {Form as FormStyles} from 'products/styles'
import { Field, reduxForm } from 'redux-form'  // ES6
import {required} from 'commons/utils/fieldLevelValidationForm'
import {RenderSimpleField} from 'commons/components/Fields'

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
          <form action='' >
            <Field
              name='firstname'
              type='text'
              placeholder='Joe'
              validate={[required]}
              required
              component={RenderSimpleField}
              label='FIRST NAME'
        />
            <Field
              name='firstname'
              type='text'
              placeholder='Joe'
              validate={[required]}
              required
              component={RenderSimpleField}
              label='FIRST NAME'
        />
          </form>
        </FormStyles>
      </Layout>
    )
  }
}
export const Form = reduxForm({
  form: 'addproduct'
})(FormComponent)
