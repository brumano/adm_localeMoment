App.controller('ArrangeMeetingController',  ['$scope', '$http', 'arrangeMeetingService', function ($scope, $http,  $arrangeMeetingService) {



  
 
  $scope.getATimeZone = new $arrangeMeetingService.getATimeZone();
  $scope.cityhour = null;
  $scope.anotherCityhour = null;

  var cityValueTimeZone;
  var anotherCityValueTimeZone;
  

  $scope.openDateMetting = function() {
    $scope.dataMetting.opened = true;
  };

 
    
  $scope.format = 'dd/MM/yyyy'
  

  $scope.dataMetting = {
    opened: false
  };

  function calculateHourOfMeting() {
      if(!!!cityValueTimeZone || !!!anotherCityValueTimeZone)
        return;

      var targetDate = new Date($scope.dataMettingValue);
      var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60

      var offsetCity = cityValueTimeZone.dstOffset * 1000 + cityValueTimeZone.rawOffset * 1000;
      var offsetAnotherCity = anotherCityValueTimeZone.dstOffset * 1000 + anotherCityValueTimeZone.rawOffset * 1000;

      if(offsetCity>offsetAnotherCity)
      {
        $scope.cityhour = new Date(timestamp * 1000 + offsetCity);
        $scope.anotherCityhour = new Date(timestamp * 1000 + (offsetAnotherCity-offsetCity));
      }
      else{
        $scope.cityhour = new Date(timestamp * 1000 + (offsetAnotherCity-offsetCity));
        $scope.anotherCityhour = new Date(timestamp * 1000 + offsetCity);
      }

  }
  
  $scope.onCityValueChanged = function () {
    if(!!!$scope.city || !!!$scope.city.geometry)
      return;
    
    var params={
      lat: $scope.city.geometry.location.lat(),
      lng: $scope.city.geometry.location.lng(),
      date:  $scope.dataMettingValue.setHours(08)
    }

     $scope.getATimeZone.fill(params).then(function (response) {
          cityValueTimeZone =  response;
          console.log(cityValueTimeZone);
          calculateHourOfMeting();
        }).then(function () {
           
        }).catch(function (error) {
            throw error;
        });

  }
  $scope.onAnotherCityValueChanged = function(){
    if(!!!$scope.anotherCity || !!!$scope.anotherCity.geometry)
      return;

    var params={
      lat: $scope.anotherCity.geometry.location.lat(),
      lng: $scope.anotherCity.geometry.location.lng(),
      date:  $scope.dataMettingValue.setHours(08),
    }


     $scope.getATimeZone.fill(params).then(function (response) {
          anotherCityValueTimeZone =  response;
          console.log(anotherCityValueTimeZone);
          calculateHourOfMeting();

        }).then(function () {
           
        }).catch(function (error) {
            throw error;
        });

  }



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
	
}]);

