import glamorous from 'glamorous'
import variables from 'commons/styles/styleVariables'

export const Layout = glamorous.div(
  {
    backgroundColor: variables.bgcolor,
    height: variables.layoutBaseHeight,
    position: 'relative',
    '& p, & a': {
      fontSize: variables.baseFontSize
    },
  }
)
