import glamorous from 'glamorous'

export const Card = glamorous.div(({theme}) => ({
  height: theme.main.card.height,
  width: theme.main.card.width,
  padding: '20px',
  '& .card-header': {
    height: '100px',
    '& img': {
      width: '100px',
      height: '100px',
      display: 'block',
      margin: 'auto'
    }
  }
}))
