var app= angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http, $sce, $timeout){
    $http.get("./uploadedFiles.php").success(function(response){
        $scope.names=response.records;
        
        
        $scope.initialCond = function() {
        
            $scope.rejectionContent=$sce.trustAsHtml("Confirm Rejection");
            
            $scope.sendCorrection=$sce.trustAsHtml("Claim Corrections");
        }
        
        $scope.rejectionWriter = function( writer) {

            
            
            
            $scope.rejectionContent=$sce.trustAsHtml('<span id="loading" class="glyphicon glyphicon-refresh"></span>&nbsp;Rejecting Writer');
            
            
            $http({
    method: 'POST',
    url: 'rejectWriter.php',
    data: "writerEmail=" + writer,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});
            
            /*$http.post('rejectWriter.php', {writerEmail: 'writer'}).
success(function(data, status, headers, config) {
  // this callback will be called asynchronously
  // when the response is available
}).
error(function(data, status, headers, config) {
  // called asynchronously if an error occurs
  // or server returns response with an error status.
});*/
            
            $scope.finished=function()
            {
                $scope.rejectionContent=$sce.trustAsHtml('<span  class="glyphicon glyphicon-ok"></span>&nbsp;Writer Rejected');
            }
            $timeout( function(){ $scope.finished(); }, 2500);
            
            //$scope.rejectionContent='<span id="loading" class="glyphicon glyphicon-refresh"></span>&nbsp; Rejecting Writer';  

	           
	    };
        
        
	    $scope.correction = function(writer, points) {
	         $scope.sendCorrection=$sce.trustAsHtml('<span id="loading" class="glyphicon glyphicon-refresh"></span>&nbsp;Sending');  
            
            $http({
    method: 'POST',
    url: 'comment.php',
    data: "writerEmail=" + writer+"&comments="+points,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});
            
            
            $scope.finished=function()
            {
                $scope.sendCorrection=$sce.trustAsHtml('<span  class="glyphicon glyphicon-ok"></span>&nbsp;Sent');
            }
            $timeout( function(){ $scope.finished(); }, 2500);
            
            
            
	    };
        
        
     

        
        
    
    });
                                                       
});



	    
	





