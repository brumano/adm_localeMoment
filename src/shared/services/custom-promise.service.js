App.service('customPromise', function () {

    function promiseFunc ($param) {
        var param = $param;
        this.then = function(func) {
            var promise = func(param);

            if(promise instanceof promiseFunc) { 
                return promise; 
            }
            else if(promise) { 
                return new promiseFunc(promise); 
            }
            else { 
                return new promiseFunc(); 
            }
        };
        this.catch = function(func) {
            return new promiseFunc(param);
        }
    }

    this.CreatePromise = function($param) {
        return new promiseFunc($param);
    }

});