import glamorous from 'glamorous'

export const FlipCard = glamorous.div(
  {
    height: '200px',
    width: '200px',
    position: 'relative',
    perspective: '1200px',
    zIndex: 100,
    '& .front-wrapper, & .back-wrapper': {
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d',
      transition: 'transform .5s ease, visibility .5s ease',
      top: 0,
      left: 0,
      maxWidth: '100%',
    }
  },
  ({height, bgcolor, position, radius, flip, bgColorBack}) => ({
    height,
    backgroundColor: bgcolor,
    position,
    borderRadius: radius,
    '& .front-wrapper': !flip ? {
      transform: 'rotateY(0deg)'
    } : {
      visibility: 'hidden',
      position: 'absolute',
      transform: 'rotateY(-180deg)'
    },
    '& .back-wrapper': !flip ?
    {
      visibility: 'hidden',
      position: 'absolute',
      backgroundColor: bgColorBack,
      borderRadius: radius,
      height,
      transform: 'rotateY(180deg)'
    } :
    {
      visibility: 'visible',
      position: 'static',
      transform: 'rotateY(0)',
      backgroundColor: bgColorBack,
      height,
      borderRadius: radius,
    }
  })
)
