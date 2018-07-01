var app=angular.module("call",["ionic"]);
app.controller('callCtrl', function ($scope,$timeout) {
    var thisScope = $scope;
    $scope.lastnumber='';
    thisScope.mobileNumbers = [];
   

   
    $scope.message = function () {
      console.log("Exec message");
      var d = new Date();
      d.setHours(d.getHours() - 12);
      var filtersToday = [{
        "name": "date",
        "value": d.getTime(),
        "operator": ">=",
      }];
      console.log("here is filter2day", filtersToday);
      if(window && window.plugins && window.plugins.callLog){
      window.plugins.callLog.requestReadPermission();
      return new Promise( function(resolve, reject) {
      window.plugins.callLog.getCallLog(filtersToday, function (data) {
        console.log("here is last 12 hours callLog", data);
        console.log("here is array 1 number", data[0].number);
        thisScope.mobileNumbers = data;
        $scope.lastnumber = data[0].number;
        console.log("scope mobile", thisScope.mobileNumbers);
        resolve(thisScope.lastnumber);
      }, function (data) {
        console.log("error 1", data);
        reject(data)
      });
      })

      }else{
        return null;
      }
      
    }
    
    thisScope.activate = function() {
      thisScope.message();    
      $timeout(function(){
        thisScope.activate() 
      }, 2000);
    }

    thisScope.activate();
    
    $scope.$watch(function(){
      return thisScope.lastnumber}, function(newVal, oldVal){
      if(newVal != oldVal ){
          alert(newVal);
      }
  });
    $scope.rowlimit = 3;
  });