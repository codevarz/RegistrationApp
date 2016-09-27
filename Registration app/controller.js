var myApp = angular.module('myApp',[]);

myApp.factory('Datab', function(){
    return { 
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            email: '',
            password:''
           };
});


myApp.controller('RegisterCtrl',['$scope','$rootScope','Datab',function($scope,$rootScope, Datab){
    console.log("inside controller");
    
    $rootScope.user = "";
    $rootScope.user = Datab;
    $scope.savePersonalDetails = function(){
        
        console.log($rootScope.user);
        $rootScope.user=Datab;
        console.log('Datab is'+ Datab)
        window.location.href = '/logindetails.html';
    }
     
         
//        window.location.href = '/login.html';
        
   
}]);

myApp.controller('RegisterCtrl2',['$scope','$rootScope','$http','Datab',function($scope,$rootScope,$http,Datab){

    $rootScope.user = Datab;
    console.log('inside ctrl2 : '+$rootScope.user);
    $scope.addUser = function(){
        console.log("inside fun2: "+$rootScope.user.firstName);
        $http.post('/users',$rootScope.user).success(function(response){
            console.log(response);
            alert("inserted");
        });
         };
}]);