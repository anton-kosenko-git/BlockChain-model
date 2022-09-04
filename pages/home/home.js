angular
  .module('app')
  .component('homePage', {
    templateUrl: 'pages/home/home.html',
    controller: IntroPageController,
    controllerAs: 'vm',
    bindings: {}
  });

function IntroPageController() {
  var vm = this;

}