import glamorous from 'glamorous'

export const Layout = glamorous.div(({theme}) => ({
  height: '100%',
  backgroundColor: theme.main.bgColor,
  display: 'flex',
  '& .route-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}))
