// @ngInject
export default {
  return {
    controller: '{{name | camelCaseSnake}}Controller',
    bindings: {
      name: '='
    },
    template: require('./{{name}}.html')
  }
}
