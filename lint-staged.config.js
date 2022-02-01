module.exports = {
  '*.{vue,js,jsx,ts,tsx}': 'cross-env NODE_ENV=production eslint --fix',
  '*.{vue,css,less,scss,sass}': 'cross-env NODE_ENV=production stylelint --fix',
}
