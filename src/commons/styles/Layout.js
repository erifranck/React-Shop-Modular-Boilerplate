import glamorous from 'glamorous'

export const Layout = glamorous.div(({theme}) => ({
  height: '100%',
  backgroundColor: theme.main.bgColor,
  '& .route-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))
