describe('component: main-nav', function () {
  var component, $componentController, $q;

  beforeEach(module('modulename'));

  beforeEach(inject($injector => {
    $q = $injector.get('$q');
    $componentController = $injector.get('$componentController');
  }));

  it('should be defined', function () {
    component = $componentController('main-nav');
    expect(component).toBeDefined;
  });

});
