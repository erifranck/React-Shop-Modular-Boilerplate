import glamorous from 'glamorous'

export const ProductList = glamorous.div(() => ({
  height: '300px',
  width: '80%',
  '& .card-wrapper': {
    display: 'inline-block',
    marginLeft: '20px'
  }
}))
