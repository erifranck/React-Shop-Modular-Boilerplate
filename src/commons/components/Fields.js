import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

export const RenderSimpleField = ({ input, label, type, meta: { touched, error, warning }, placeholder, required }) => {
  return (
    <div>
      <label>
        {label}
        {required &&
        <span className='required'>
          *
        </span>
        }
      </label>
      <br />
      <input {...input} type={type} placeholder={placeholder} valid={!error && true} />
      {touched &&
        ((error && <div className='error' >{error}</div>) ||
        (warning && <div>{warning}</div>))}
    </div>
  )
}

export const RenderSelectField = ({ input, label, meta: { touched, error, warning }, placeholder, required, options }) => {
  return (
    <div>
      <label>
        {label}
        {required &&
        <span className='required'>
          *
        </span>
        }
      </label>
      <Select
        {...input}
        name='form-field-name'
        placeholder={placeholder}
        options={options}
      />
      {touched &&
        ((error && <div className='error'>{error}</div>) ||
        (warning && <div>{warning}</div>))}
    </div>
  )
}

RenderSimpleField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  required: PropTypes.bool,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

RenderSelectField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  required: PropTypes.bool,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  options: PropTypes.array
}
