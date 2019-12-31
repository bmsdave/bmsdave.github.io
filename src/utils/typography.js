import Typography from 'typography'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'
import monokaiColors from '../../monokaiColors'

const typography = new Typography({
  baseFontSize: '12px',
  baseLineHeight: 1.5,
  scaleRatio: 5 / 2,
  googleFonts: [],
  headerFontFamily: [
    'Fira Sans',
    'HelveticaNeue-Light',
    'Helvetica Neue Light',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'Lucida Grande',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Fira Sans',
    'Open Sans',
    '-apple-system',
    'BlinkMacSystemFont',
    'Arial',
    'sans-serif',
  ],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: 0 /*rhythm(13 / 16), */,
      marginLeft: 0 /*rhythm(-1), */,
      borderLeft: 0 /*`${rhythm(3 / 16)} solid ${gray(10)}`, */,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol,li': {
      marginLeft: 0,
      marginBottom: 0,
    },
    p: {
      margin: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        margin: 0,
        // marginLeft: 0,
        // marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        // marginLeft: rhythm(-3 / 4),
        // marginRight: 0,
        // paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      margin: 0,
      // marginTop: rhythm(2),
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase',
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      borderBottom: '1px solid currentColor',
      color: monokaiColors.colors['list.highlightForeground'],
      textDecoration: 'none',
      position: 'relative',
      transition: 'color 0.2s ease-out',
    },
    'a:hover, a:active': {
      borderBottom: '1px solid transparent',
    },
    'a.anchor': {
      borderBottom: '1px solid transparent',
    },
    'mark,ins': {
      background: monokaiColors.colors['list.highlightForeground'],
      color: 'white',
      padding: 0,
      // padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
  }),
})

export default typography
