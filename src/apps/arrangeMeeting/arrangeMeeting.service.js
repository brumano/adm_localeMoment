App.service('arrangeMeetingService', ['arrangeMeetingRepository', function ($repository ) {

    var scope = this;

    this.getATimeZone = function($scope){
        var self = this;

        self.form = {};

        self.validate = function(params){

            var returnValue = false;
            return returnValue;

        }

        self.fill = function (params) {

            self.form = {};

            var promisse = $repository.getTimeZone(params).then(function (response) {
                resposta = response.data;
            }).catch(function (error) {
                return error;
            })

            return promisse;
        }

    }

    
 

   

}]);