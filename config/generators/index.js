const fs = require('fs');
const componentGenerator = require('./component/index.js');
// const pagesGenerator = require('./page/index.js');
const containerGenerator = require('./container/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  //plop.setGenerator('page', pagesGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.addHelper('uppercase', (text) => {
    return text.toUpperCase();
  });
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(`app/containers/${comp}`, fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
