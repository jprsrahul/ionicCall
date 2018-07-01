var app=angular.module("call1",["ionic"]);
app.controller("myc", ["$scope", "$log", appctrl]);
function appctrl($scope, $log){
$scope.fresh = function(){
    alert("suceesfully");
}
}

function appctrl($scope){
    employees =[
        {
       name : 'rahul',
       gender : 'Male',
       email : 'r@gmail.com',
       phonenumber : '4444444',
       photoPath : 'img/ben.png'
     },
     {
       name : 'slok',
       gender : 'Male',
       email : 'sl@gmail.com',
       phonenumber : '88888888',
       photoPath : 'img/max.png'
     },
     {
       name : 'reena',
       gender : 'feMale',
       email : 're@gmail.com',
       phonenumber : '4487888',
       photoPath : 'img/perry.png'
     },
     {
       name : 'rahulss',
       gender : 'Male',
       email : 'rs@gmail.com',
       phonenumber : '4444444',
       photoPath : 'img/mike.png'
     }
    ]
    $scope.emp = employees;
}