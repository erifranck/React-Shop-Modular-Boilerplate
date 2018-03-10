import glamorous from 'glamorous'
import variables from 'commons/styles/styleVariables'

export const Card = glamorous.div(
  {
    position: 'absolute',
    width: '100%',
    left: '0',
    top: '30%',
    '& .card-wrapper': {
      width: '80%',
      '& .card-container': {
        display: 'block',
        margin: 'auto',
        padding: '20px',
        boxShadow: ' -47px 19px 191px -67px rgba(0,0,0,0.75)',
        backgroundColor: variables.bgcolor,
        width: '100%',
        maxWidth: '500px',
        height: '300px',
      }
    }
  }
)
