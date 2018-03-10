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
      '&:before': {
        content: '" "',
        display: 'block',
        margin: 'auto',
        background: theme.colors.primary,
        height: '150px',
        width: '150px',
        borderRadius: '50%'
      }
    },
    '& .avatar-title': {
      textAlign: 'center'
    }
  },
  '& .sidebar-link-wrapper': {
    height: 'calc(100% - 300px)',
    width: '100%',

    '& ul': {
      'list-style-type': 'none',
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
