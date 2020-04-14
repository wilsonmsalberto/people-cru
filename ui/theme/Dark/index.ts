const pallette = {
  'gray-blue': '#8492A6',
  'royal-blue': '#624DE3',
  'yankees-blue': '#1F2D3D',
  charcoal: '#3C4858',
  clouds: '#ecf0f1',
  gunmetal: '#273444',
  zircon: '#F9FAFF',
  white: '#FFFFFF',
};

const colors = {
  secondary: pallette.clouds,
  primary: pallette.charcoal,
  default: pallette.gunmetal,
  background: pallette['yankees-blue'],
  textColor: pallette.clouds,
  buttonBgColor: pallette['royal-blue'],
  buttonTextColor: pallette.zircon,
  highlight: pallette['royal-blue'],
  tableRow: pallette['gray-blue'],
  header: pallette.charcoal,
  ...pallette,
};

export default colors;
