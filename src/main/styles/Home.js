import glamorous from 'glamorous'

export const Home = glamorous.div(({theme}) => ({
  width: '400px',
  height: '400px',
  border: `1px solid ${theme.colors.primary}`
}))
