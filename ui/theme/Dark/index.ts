const pallette = {
  'gray-blue': '#8492A6',
  'royal-blue': '#624DE3',
  'yankees-blue': '#1F2D3D',
  charcoal: '#3C4858',
  clouds: '#ecf0f1',
  gunmetal: '#273444',
  zircon: '#F9FAFF',
};

const colors = {
  secondary: pallette['gray-blue'],
  primary: pallette.charcoal,
  default: pallette.gunmetal,
  background: pallette['yankees-blue'],
  textColor: pallette.clouds,
  buttonBgColor: pallette['royal-blue'],
  buttonTextColor: pallette.zircon,
  highlight: pallette['royal-blue'],
  ...pallette,
};

export default colors;
