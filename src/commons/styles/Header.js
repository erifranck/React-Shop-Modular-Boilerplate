import glamorous from 'glamorous'
import variables from 'commons/styles/styleVariables'

export const Header = glamorous.div(
  {
    height: variables.headerHeight,
    backgroundColor: variables.baseHeaderColor,
    '& .logo': {
      lineHeight: '1.5',
      fontSize: '4.2em',
      color: variables.baseFontHeaderColor
    },
    '& nav': {
      float: 'right',
      '& .nav-container': {
        float: 'right',
        marginTop: '30px',
        listStyle: 'none',
        '& li': {
          display: 'inline-block',
          marginLeft: '20px',
          '& a': {
            color: 'white',
            textDecoration: 'none'
          }
        }
      }
    }
  },
  ({backgroundColor, color}) => ({
    backgroundColor,
    '& .logo': {
      color
    },
    '& nav': {
      '& .nav-container': {
        '& li': {
          '& a': {
            color
          }
        }
      }
    }
  })

)
