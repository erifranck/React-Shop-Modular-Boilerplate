import glamorous from 'glamorous'

export const Home = glamorous.div(({theme}) => ({
  width: '400px',
  height: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    width: '250px',
    height: '250px'
  }
}))
