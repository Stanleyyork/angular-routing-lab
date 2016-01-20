var app = angular.module('libraryApp', ['ngRoute']);

////////////
// ROUTES //
////////////

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/books/index.html',
      controller: 'BooksIndexCtrl'
    })
    .when('/books/:id', {
      templateUrl: 'templates/books/show.html',
      controller: 'BooksShowCtrl'
    });
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}]);

/////////////////
// CONTROLLERS //
/////////////////

app.controller('BooksIndexCtrl', ['$scope', function ($scope) {
  $scope.booksIndexTest = 'Connected to BooksIndexCtrl';
  $scope.allBooks = allBooks;
}]);

app.controller('BooksShowCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.booksShowTest = 'Connected to BooksShowCtrl';
  var bookId = $routeParams.id;
  $scope.book = allBooks.filter(function( book ) {
	  return book._id == bookId;
	});
}]);