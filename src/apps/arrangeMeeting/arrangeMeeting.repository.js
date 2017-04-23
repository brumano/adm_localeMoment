App.service('arrangeMeetingRepository', ['customPromise', '$http','$routesService' , function ($promise, $http, $routesService ) {

    var urlTimeZone =  "https://maps.googleapis.com/maps/api/timezone/json";
    var apiKey = "AIzaSyBdKcOOJljK0GCbqaM5EzsSkJorY7ZLsFo"

    this.getTimeZone = function(appliedFilter) {
        
            return $http({
                url: urlTimeZone,
                method: 'GET',
                params: { 
                    location : appliedFilter.lat+ "," + appliedFilter.long,
                    timestamp: (Math.round((new Date(appliedFilter.date).getTime())/1000)).toString(),
                    sensor: false,
                    key: apiKey
                }
            });
    };

    

}]);