var app = angular.module('app', ['ngRoute']);


app.config(function ($routeProvider) {
  $routeProvider

  // route for home page
  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'mainController'
  })

  // route about page

  .when('/about', {
    templateUrl: 'pages/about.html',
    controller: 'aboutController'
  })

  // route for contact page

  .when('/contact', {
    templateUrl: 'pages/contact.html',
    controller: 'contactController'
  });

});

// create controller and inject angular's $scope

app.controller('mainController', function ($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good i Look'
});

app.controller('aboutController', function ($scope) {
  $scope.message = 'Look! I am an about page.';
})

app.controller('contactController', function ($scope) {
  $scope.message = 'Contact us! Jk, This is a demo'
});
