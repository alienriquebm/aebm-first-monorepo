const breakpoints = {
  tablet: '992px',
};

const theme = {
  colors: {
    darkBlue: '#002033',
    grayBlue: '#33617D',
    darkGray: '#667985',
    gray4: '#B6C9D4',
    gray3: '#CCD9E0',
    gray2: '#DEE4E8',
    gray1: '#F2F6F8',
    darkGraygray1: '#F2F6F8',
    white: '#FFFFFF',
    blue: '#0078D2',
    softBlue: '#48A9F5',
    green: '#24C38E',
    orange: '#F59B68',
    lightOrange: '#f59b6826',
    red: '#F85E5D',
    yellow: '#F2C94C',
    disabled: '#D3E0E8',
  },
  colorsFilter: {
    blue: 'invert(30%) sepia(74%) saturate(1606%) hue-rotate(184deg) brightness(101%) contrast(103%)',
    red: 'invert(59%) sepia(43%) saturate(3669%) hue-rotate(323deg) brightness(100%) contrast(95%)',
    softBlue: 'invert(52%) sepia(99%) saturate(466%) hue-rotate(177deg) brightness(99%) contrast(95%)',
    white: 'invert(100%) sepia(3%) saturate(0%) hue-rotate(194deg) brightness(104%) contrast(104%)',
    gray2: 'invert(90%) sepia(11%) saturate(103%) hue-rotate(161deg) brightness(104%) contrast(86%)',
    gray4: 'invert(91%) sepia(10%) saturate(448%) hue-rotate(166deg) brightness(86%) contrast(93%)',
    grayBlue: 'invert(33%) sepia(9%) saturate(3039%) hue-rotate(159deg) brightness(93%) contrast(81%)',
    darkGray: 'invert(50%) sepia(15%) saturate(478%) hue-rotate(160deg) brightness(89%) contrast(88%);',
  },
  fontSize: {
    size10: '10px',
    size12: '12px',
    size14: '14px',
    size16: '16px',
    size18: '18px',
    size20: '20px',
    size22: '22px',
    size24: '24px',
    size28: '28px',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  lineHeights: ['16px'],
  breakpoints,
  device: {
    tablet: `(min-width: ${breakpoints.tablet})`,
  },
  transition: {
    default: 'all ease 0.2s',
  },
  shadows: {
    default: '2px 4px 30px rgba(0, 0, 0, 0.06)',
  },
};

export default theme;
