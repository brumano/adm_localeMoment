App.controller('ArrangeMeetingController', function ($scope, $http, $cache, $routeParams) {



  
 

  

  $scope.openDataPublicacao = function() {
    $scope.dataPublicacao.opened = true;
  };

  $scope.openDataExpiracao = function() {
    $scope.dataExpiracao.opened = true;
  };

    
  $scope.format = 'dd/MM/yyyy'
  

  $scope.dataPublicacao = {
    opened: false
  };

  $scope.dataExpiracao = {
    opened: false
  };



  $scope.dateOptions = {
    formatYear: 'yyyy',
    minDate: new Date(),
    startingDay: 1,
    language: 'pt-BR',
    dateDisabled: function (data) {
          var date = data.date,
          mode = data.mode;
          return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }
  };


  !function init(){


	}();
	
});

