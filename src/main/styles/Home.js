import glamorous from 'glamorous'
import variables from 'commons/styles/styleVariables'

export const Home = glamorous.div(
  {
    height: `calc(100% - ${variables.headerHeight} - 10px)`,
    marginTop: '10px',
    '& .profile': {
      height: '200px',
      width: '200px',
      border: '3px solid ' + variables.borderBaseColor,
      borderRadius: '50%'
    },
    '& .profile-wrapper': {
      background: variables.baseHeaderColor,
      paddingTop: '80px',
      height: `calc((100% - ${variables.headerHeight}) / 2)`,
      '& .container': {
        height: `calc((100% - ${variables.headerHeight}) / 2)`,
        '& h2': {
          color: variables.baseFontHeaderColor,
          textAlign: 'center'
        }
      }
    }
  },
  ({backgroundColor, color}) => ({
    '& .profile-wrapper': {
      backgroundColor,
      '& .container': {
        '& h2': {
          color
        }
      }
    }
  })
)
