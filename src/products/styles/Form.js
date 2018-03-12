import glamorous from 'glamorous'

export const Form = glamorous.div(({theme}) => ({
  height: '500px',
  width: '85%',
  '& .form-box': {
    padding: '30px',
    boxSizing: 'border-box',
    '& input': {
      height: '40px',
      borderRadius: '5px',
      margin: '10px 0px'
    },
    '& .required': {
      color: theme.colors.secondary
    },
    '& .error': {
      color: theme.colors.secondary
    }
  }
}))
