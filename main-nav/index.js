require('./_main-nav.scss');

import MainNavController from './main-nav.controller.js';
import mainNav from './main-nav.component.js';

export default (app) => {
  app.controller('MainNavController', MainNavController);
  app.component('mainNav', mainNav);
}
