import glamorous from 'glamorous'

export const SideBar = glamorous.div(({ theme }) => ({
  background: theme.main.bgColor,
  height: '100%',
  width: '300px',
  borderRight: `2px dotted ${theme.colors.neutral}`,
  transition: '2s',
  '& .sidebar-box': {
    background: theme.colors.inverse,
    color: theme.colors.primary,
    height: '300px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .avatar-container': {
      height: '200px',
      width: '200px',
      position: 'relative',
      '&:before': {
        content: '" "',
        background: theme.colors.inverse,
        border: `1px solid ${theme.colors.primary}`,
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        position: 'absolute',
        top: '0px',
        left: '25px'
      },
      '& img': {
        position: 'absolute',
        top: '15px',
        left: '40px',
        height: '130px',
        width: '130px'
      }
    },
    '& .avatar-title': {
      textAlign: 'center',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%'
    }
  },
  '& .sidebar-link-wrapper': {
    height: 'calc(100% - 324px)',
    width: '100%',

    '& ul': {
      listStyleType: 'none',
      '& li.sidebar-button': {
        height: theme.main.buttons.height,
        '& a': {
          textDecoration: 'none',
          color: theme.colors.primary,
          fontSize: theme.fonts.linkSize
        }
      }
    }

  }
}))
