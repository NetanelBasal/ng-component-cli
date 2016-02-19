// @ngInject
export default {
    controller: '{{name | camelCaseSnake}}Controller',
    bindings: {
      name: '='
    },
    template: require('./{{name}}.html')
}
