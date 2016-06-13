let toRGB = function(hex, opacity = 1) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
  });

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ?
         `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}, ${opacity})`
         : null
}

let styles = {
  grey: {
    dark: '#222',
    light: '#ccc'
  },
  orange: {
    light: '#eb9f4a',
    primary: '#e89333',
    dark: '#d07a18',
  },
  red: {
    light: '#cb4747',
    primary: '#c13737',
    dark: '#992c2c',
  },
  blue: {
    primary: '#476079',
    lighter: '#94A2B0',
    light:   '#687D91',
    dark:    '#304A64',
    darker:  '#1C3751',
  },
  purple: {
    primary: '#535082',
    lighter: '#A19FBB',
    light:   '#75729C',
    dark:    '#3B386B',
    darker:  '#252257',
  },
  green: {
    primary: '#457D69',
    lighter: '#95B5AA',
    light:   '#689685',
    dark:    '#2E6753',
    darker:  '#18543F',
  },
  white: 'white',
  toRGB: toRGB,
}

export default styles
