App.factory('$cache', function () {
    var cacheStorageControl = {
        SetObject : function(key,nonSerializedObject){
            var serializedObject = JSON.stringify(nonSerializedObject);
                sessionStorage.setItem(key,serializedObject);
        },
        GetObject : function(key) {
            var deserializedObject = JSON.parse(window.sessionStorage.getItem(key));
            return deserializedObject;
        },
        RemoveObject : function(key) {
            window.sessionStorage.removeItem(key);
        },
        IsPresent : function (key) {
            if(window.sessionStorage.getItem(key) != null)
                return true;
            else
                return false;
        },
        ClearAll : function () {
            window.sessionStorage.clear();
        },
        ClearObject : function (key) {
            window.sessionStorage.removeItem(key);
        }
    };

    return cacheStorageControl;
});