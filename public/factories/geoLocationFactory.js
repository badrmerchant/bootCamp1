/**
 * Created by Badar on 10/29/2014.
 */
bootCamp.factory('geoLocationFactory', function ( $http) {
    var getGeoLocation=function(success,error) {
        return $http.jsonp("http://ip-api.com/json/?callback=JSON_CALLBACK")
            .success(function(s){
                success(s);

            })
            .error(function(err){
                error(err);
            })
    };
    return {
        getGeoLocation:getGeoLocation
    }
});