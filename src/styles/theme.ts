import { Theme } from 'theme-ui';

const fontStack =
  'var(--np-font), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif';

export const theme: Theme = {
  colors: {
    black: '#171717',
    text: 'black',
    white: '#ffffff',
    red: '#ae4335',
    darkGray: '#343232',
    lightGray: '#f4f4f4'
  },
  fonts: {
    body: fontStack,
    heading: fontStack
  },
  text: {
    paragraph: {
      fontSize: 16,
      fontWeight: 'body'
    },
    nav: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'inherit'
    },
    bold: {
      fontWeight: 'bold'
    },
    normal: {
      fontSize: 16
    },
    medium: {
      fontSize: 20
    },
    large: {
      fontSize: 32
    },
    xlarge: {
      fontSize: [38, 38, 38, 64]
    }
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
    bolder: 800
  },
  lineHeights: {
    body: 1.6,
    heading: 1.125
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em'
  },
  radii: {
    full: '9999px'
  },
  badges: {
    error: {
      color: 'white',
      bg: 'red',
      fontWeight: 'normal'
    }
  },
  links: {
    text: {
      color: 'text',
      '&:visited': {
        color: 'inherit'
      }
    },
    button: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'text',
      borderRadius: 'full',
      color: 'text',
      px: 4,
      py: 3,
      width: 'fit-content',
      textDecoration: 'none',
      outline: 'none',
      '&:visited': {
        color: 'inherit'
      }
    },
    buttonInverted: {
      bg: 'white',
      borderRadius: 'full',
      color: 'text',
      px: 4,
      py: 3,
      width: 'fit-content',
      textDecoration: 'none',
      outline: 'none',
      '&:visited': {
        color: 'inherit'
      }
    }
  },
  buttons: {
    primary: {
      color: 'white',
      px: 4,
      py: 3,
      width: ['100%', 'fit-content'],
      bg: 'text',
      cursor: 'pointer',
      borderRadius: 'full',
      '&:hover': {
        bg: 'darkGray'
      }
    },
    inverted: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'white',
      borderRadius: 'full',
      color: 'white',
      px: 4,
      py: 3,
      width: 'fit-content',
      cursor: 'pointer'
    }
  },
  forms: {
    input: {
      border: 'none',
      padding: '1rem',
      bg: 'white',
      outline: 'none',
      font: 'inherit',
      '&:focus': {
        outline: '2px solid #171717'
      }
    },
    textarea: {
      border: 'none',
      padding: '1rem',
      resize: 'vertical',
      minHeight: '15rem',
      bg: 'white',
      outline: 'none',
      font: 'inherit',
      '&:focus': {
        outline: '2px solid #171717'
      }
    },
    label: {
      fontWeight: 'bold'
    }
  },
  styles: {
    root: {
      margin: 0,
      padding: 0,
      bg: 'white'
    },
    a: {
      color: 'text',
      '&:visited': {
        color: 'inherit'
      }
    }
  }
};
