describe('component: {{name}}', function () {
  var component, $componentController, $q;

  beforeEach(module('modulename'));

  beforeEach(inject($injector => {
    $q = $injector.get('$q');
    $componentController = $injector.get('$componentController');
  }));

  it('should be defined', function () {
    component = $componentController('{{name | onlyCamelCase}}');
    expect(component).toBeDefined;
  });

});
