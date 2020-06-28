import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function ({classes, text}: { classes?: string, text?: string }) {
  return (
    <AnchorLink className={classes || ''} offset="120" href="#contact">
      {text || 'Contact'}
    </AnchorLink>
  )
}
