//this is used to parse the profile
function url_base64_decode(str) {
  var output = str.replace('-', '+').replace('_', '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw 'Illegal base64url string!';
  }
  return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
}

angular.module('starter.controllers', [])

.controller('LoginCtrl',function($scope, $state, $http, $window){
    $scope.user = {username: 'john.doe', password: 'foo[author]bar[/author]'};
    $scope.message = '';
    $scope.submit = function () {

    var promise = $http({

        url:'http://localhost:8080/authenticate',
        method:"POST",
        data: {
          'username': $scope.user.username,'password': $scope.user.password
        }

      });

      promise.success(function (data, status, headers, config) {
        $window.sessionStorage.token = data.token;
        $scope.isAuthenticated = true;
        var encodedProfile = data.token.split('.')[1];
        var profile = JSON.parse(url_base64_decode(encodedProfile));

        $state.go('tab.chats');
      });

      promise.error(function (data, status, headers, config) {
        // Erase the token if the user fails to log in
        delete $window.sessionStorage.token;
        $scope.isAuthenticated = false;

        // Handle login errors here

        $scope.message = 'Error: Invalid user or password';
        $state.go('tab.chats');
      });

      //$http
      //  .post('http://localhost:8080/authenticate', $scope.user, {'Content-Type':'application/x-www-form-urlencoded'})
      //  .success(function (data, status, headers, config) {
      //    $window.sessionStorage.token = data.token;
      //    $scope.message = 'Welcome';
      //    $state.go('/tab/chats');
      //  })
      //  .error(function (data, status, headers, config) {
      //    // Erase the token if the user fails to log in
      //    delete $window.sessionStorage.token;

      //    // Handle login errors here
      //    $scope.message = 'Error: Invalid user or password';
       // });
    };



  })

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Messages, $timeout) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

    $scope.doRefresh = function() {

      console.log('Refreshing!');
      $timeout( function() {
        //simulate async response

        $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');

      }, 1000);

    };

  $scope.Messages = Messages.all();


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Messages) {
  $scope.message = Messages.get($stateParams.mId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
