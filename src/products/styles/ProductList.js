import glamorous from 'glamorous'

export const ProductList = glamorous.div(() => ({
  height: '500px',
  width: '80%',
  '& .card-wrapper': {
    display: 'inline-block',
    marginLeft: '20px'
  }
}))
