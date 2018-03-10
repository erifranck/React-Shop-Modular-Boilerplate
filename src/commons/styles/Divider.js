import glamorous from 'glamorous'

const standardStyles = {
  width: '100%',
  borderWidth: '1px'
}

export const Dash = glamorous.hr(({theme}) => ({
  ...standardStyles,
  borderColor: theme.colors.neutral,
  borderStyle: 'dashed'
}))

export const Dotted = glamorous.hr(({theme}) => ({
  ...standardStyles,
  borderColor: theme.colors.neutral,
  borderStyle: 'dotted'
}))

export const Solid = glamorous.hr(({theme}) => ({
  ...standardStyles,
  borderColor: theme.colors.neutral,
  borderStyle: 'Solid'
}))
