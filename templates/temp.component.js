// @ngInject
export default {
    controller: '{{name | camelCaseSnake}}Controller',
    bindings: {},
    template: require('./{{name}}.component.html')
}
