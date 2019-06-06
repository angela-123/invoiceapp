var angela = angular.module("app",[]);
          angela.controller("AppController", function($scope,$http){

              $scope.customers = [];
              $scope.customer = {
                  name:'',
                  address:'',
                  phone:'',
                  email:'',
                  image:''

              };

              $scope.addData = function(){

                  var fx = {

                      name:$scope.customer.name,
                      address:$scope.customer.address,
                      phone:$scope.customer.phone,
                      email:$scope.customer.email,
                      

                  };
                  $scope.postdata(name,address,phone,email);
                  $scope.customers.push(fx);


              }

              $scope.postdata = function(name,address,phone,email){

var data = {
    name:$scope.customer.name,
    pname:$scope.customer.address,
    phone:$scope.customer.phone,
    email:$scope.customer.email
    

};

$http.post('products.php', JSON.stringify(data)).then(function(response){
    var px = response.data;
    console.log(px);
    }
    
)

}; 
$scope.BindSelectedData = function (emp) {
    $scope.customer.name = emp.name;
    $scope.customer.address = emp.address;
    $scope.customer.phone = emp.phone;
    $scope.customer.email = emp.email;
};


$scope.UpdateData = function () {

    //$scope.BindSelectedData(e);

    $.grep($scope.customers, function (emp) {
        if (emp.name == $scope.customer.name) {
            //$scope.customer.name = emp.name;
     emp.address = $scope.customer.address;
     emp.phone = $scope.customer.phone;
    emp.email  = $scope.customer.email;
    
            //$scope.EmpModel.name = e.name;
             //$scope.EmpModel.Salary = e.Salary;
            
        }
    });
    //ClearModel();
}

          })
          