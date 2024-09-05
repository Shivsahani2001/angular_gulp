 const myApp = angular.module("myList",[]);


 myApp.controller("myListController",function($scope) {
   $scope.items = ['AngularJS','ReactJS','UnderscoreJS'] ;

   $scope.newItem = "";

   $scope.pushItem = function ()  {
    if($scope.newItem !== ""){
    $scope.items.push($scope.newItem);
    $scope.newItem=""}
   }
   $scope.deleteItems = function(index) {
 $scope.items.splice(index,1);
   }
 });