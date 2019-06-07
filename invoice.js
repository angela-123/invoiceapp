var app = angular.module("invoice",[]);

app.controller("InvoiceController", function($scope,$http){

    $scope.invoices = [];
    $scope.invoice = {
           
        date:'',
        invoiceno:'',
        cname:'',
        pname:'',
        qty:'',
        rate:''
    };

    $scope.addSales = function(){
     $scope.sum = 0.0;
     var kx = {

        cname:$scope.invoice.cname,
        pname:$scope.invoice.pname,
        qty:$scope.invoice.qty,
        rate:$scope.invoice.rate,
        date:$scope.invoice.date
     };
     sum =+ qty * rate;
     $scope.gotoApi();
     $scope.invoices.push(kx);
     


    },

    $scope.DeleteData = function (emp) {
        var _index = $scope.invoices.indexOf(emp);
        $scope.invoices.splice(_index, 1);
    },

    $scope.gotoApi = function(){
         
        var mookie = {
            cname:$scope.invoice.cname,
            pname:$scope.invoice.pname,
            qty:$scope.invoice.qty,
            rate:$scope.invoice.rate,
            date:$scope.invoice.date,
            invoice:$scope.invoice.invoiceno
            


        };

        $http.post('invoice.php', JSON.stringify(mookie)).then(function(response){
            var rx = response.rata;
             console.log(rx);
             }
             
         ) 

    }





})