App.service('arrangeMeetingRepository', ['customPromise', '$http', function ($promise, $http ) {

    var urlTimeZone =  "https://maps.googleapis.com/maps/api/timezone/json";
    var apiKey = "AIzaSyBdKcOOJljK0GCbqaM5EzsSkJorY7ZLsFo"

    this.getTimeZone = function(appliedFilter) {
        var targetDate = new Date(appliedFilter.date);
        var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60
            return $http({
                url: urlTimeZone,
                method: 'GET',
                params: { 
                    location : appliedFilter.lat+ "," + appliedFilter.lng,
                    timestamp: timestamp.toString(),
                    sensor: false,
                    key: apiKey
                }
            });
    };

    

}]);