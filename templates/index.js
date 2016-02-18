require('./{{name}}.scss');

import {{name | camelCaseSnake}}Controller from './{{name}}.controller.js';
import {{name | camelCaseSnake}} from './{{name}}.component.js';

export default (app) => {
  app.controller('{{name | camelCaseSnake}}Controller', {{name | camelCaseSnake}}Controller);
  app.component('{{name | snakeToCamelCase}}', {{name | snakeToCamelCase}});
}
