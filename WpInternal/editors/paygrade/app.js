(function() {
  var app = angular.module('gemStore', ['store-directives']);
  
     app.factory("services", ['$http', function($http,$scope) {
  var serviceBase = 'services/'
    var obj = {};
    obj.getwriters = function(){
        console.log("in get writers");
        return $http.get(serviceBase + 'writers');
    }
    
    obj.getwriters_sample = function(){
        console.log("in get writers sample");
        return $http.get(serviceBase + 'writers_sample');
    }
    
    obj.getwriter = function(writerID){
        return $http.get(serviceBase + 'writer?id=' + writerID);
    }

    obj.insertwriter = function (writer) {
    return $http.post(serviceBase + 'insertwriter', writer).then(function (results) {
        return results;
    });
  };

  obj.updatewriter = function (id,writer) {
      console.log("in get app.js updating writer");
      return $http.post(serviceBase + 'updatewriter', {id:id, writer:writer}).then(function (status) {
          var message = '';
          message = String(status.data);
          return status.data;
         
          
      });
  };

  obj.deletewriter = function (id) {
      return $http.delete(serviceBase + '0?id=' + id).then(function (status) {
          return status.data;
          alert("Updated");
      });
  };

    return obj;   
}]);



   

  

  app.controller('StoreController',function($scope, $http, $rootScope, services) {
  


                
 
              
            
  services.getwriters().then(function(data){
        $rootScope.writers = data.data;
    });


    // the code  below will be replaced by services code block


  //  this.writers = gems;
  });



app.controller('MyCtrl', ['$scope', function($scope) {
  $scope.modalShown = false;
  $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
}]);

  
//ALL data to be retrieved from  database
//dummy data used

  var gems = [
    {
      isAssigned: true,
      name: 'Dummywriter1',
      email: "dummy@gmail.com",
      area: "sports",
      pay: 2,
      sample: 'FC Bayern was founded in 1900 by eleven football players led by Franz John. Although Bayern won its first national championship in 1932,[5] the club was not selected for the Bundesliga at its inception in 1963.[6] The club had its period of greatest success in the middle of the 1970s when, under the captaincy of Franz Beckenbauer, it won the European Cup three times in a row (1974–76). Overall, Bayern has reached ten European Cup/UEFA Champions League finals, most recently winning their fifth title in 2013 as part of a continental treble. Bayern has also won one UEFA Cup, one European Cup Winners Cup, one UEFA Super Cup, one FIFA Club World Cup and two Intercontinental Cups, making it one of the most successful European clubs internationally. Since the formation of the Bundesliga, Bayern has been the dominant club in German football with 25 titles and has won 7 of the last 11 titles. They have traditional local rivalries with TSV 1860 München and 1. FC Nürnberg, as well as a contemporary rivalry with Borussia Dortmund.',
      references: [
        "Reference1",
        "Reference2",
        "Reference3"
      ],

      reviews: [{
        levels: "Journey_man",
        body: "I love this writer!",
        author: "gen_editor@example.org"
      }, {
        levels: "Novice",
        body: "This writer is bad.",
        author: "maxxeditor@example.org"
      }]
    }, {
      isAssigned: false,
      name: 'Dummywriter2',
      email: "dummy2@gmail.com",
      area: 'cyber_security',
      pay: 45,
      sample: "Computer security, also known as cybersecurity or IT security, is security applied to computing devices such as computers and smartphones, as well as to both private and public computer networks, including the whole Internet. The field includes all the processes and mechanisms by which digital equipment, information and services are protected from unintended or unauthorized access, change or destruction, and is of growing importance due to the increasing reliance of computer systems in most societies.[1] It includes physical security to prevent theft of equipment and information security to protect the data on that equipment. Those terms generally do not refer to physical security, but a common belief among computer security experts is that a physical security breach is one of the worst kinds of security breaches as it generally allows full access to both data and equipment.",
      references: [
        "Reference4",
        "Reference5",
        "Reference6"
      ],
      reviews: [{
        levels: "Veteran",
        body: "I think this writer is good.",
        author: "editor@example.org"
      }, {
        levels: "Novice",
        body: "Simple and ok",
        author: "editor2@example.org"
      }]
      }, {
        isAssigned: false,
        name: 'Dummywriter3',
        email: "dummy3@gmail.com",
        area: 'sports',
        pay: 1000,
        sample: 'FC Bayern was founded in 1900 by eleven football players led by Franz John. Although Bayern won its first national championship in 1932,[5] the club was not selected for the Bundesliga at its inception in 1963.[6] The club had its period of greatest success in the middle of the 1970s when, under the captaincy of Franz Beckenbauer, it won the European Cup three times in a row (1974–76). Overall, Bayern has reached ten European Cup/UEFA Champions League finals, most recently winning their fifth title in 2013 as part of a continental treble. Bayern has also won one UEFA Cup, one European Cup Winners Cup, one UEFA Super Cup, one FIFA Club World Cup and two Intercontinental Cups, making it one of the most successful European clubs internationally. Since the formation of the Bundesliga, Bayern has been the dominant club in German football with 25 titles and has won 7 of the last 11 titles. They have traditional local rivalries with TSV 1860 München and 1. FC Nürnberg, as well as a contemporary rivalry with Borussia Dortmund.',

        references: [
        "Reference7",
        "Reference8",
        "Reference9"
        ],
        reviews: [{
          levels: "Veteran",
          body: "too expensive for its rarity value.",
          author: "editor34@example.org"
        }, {
          levels: "Veteran",
          body: " High Quality.",
          author: "editor35@example.org"
        }, {
          levels: "Novice",
          body: "Don't waste your rubles!",
          author: "editor39@example.org"
        }]
    }, {
        isAssigned: false,
        name: 'Dwriter3',
        email: "du3@gmail.com",
        area: 'sports',
        pay: 8000000,
        sample: 'FC Bayern was founded in 1900 by eleven football players led by Franz John. Although Bayern won its first national championship in 1932,[5] the club was not selected for the Bundesliga at its inception in 1963.[6] The club had its period of greatest success in the middle of the 1970s when, under the captaincy of Franz Beckenbauer, it won the European Cup three times in a row (1974–76). Overall, Bayern has reached ten European Cup/UEFA Champions League finals, most recently winning their fifth title in 2013 as part of a continental treble. Bayern has also won one UEFA Cup, one European Cup Winners Cup, one UEFA Super Cup, one FIFA Club World Cup and two Intercontinental Cups, making it one of the most successful European clubs internationally. Since the formation of the Bundesliga, Bayern has been the dominant club in German football with 25 titles and has won 7 of the last 11 titles. They have traditional local rivalries with TSV 1860 München and 1. FC Nürnberg, as well as a contemporary rivalry with Borussia Dortmund.',

        references: [
        "Reference12",
        "Reference81",
        "Reference91"
        ],
        reviews: [{
          levels: "Veteran",
          body: "too expensive for its rarity value.",
          author: "editor34@example.org"
        }, {
          levels: "Veteran",
          body: " High Quality.",
          author: "editor35@example.org"
        }, {
          levels: "Novice",
          body: "Don't waste your rubles!",
          author: "editor39@example.org"
        }]
    },{
        isAssigned: false,
        name: 'Dummywriter5',
        email: "dummy3@gmail.com",
        area: 'medical',
        pay: 0,
        sample: 'FC Bayern was founded in 1900 by eleven football players led by Franz John. Although Bayern won its first national championship in 1932,[5] the club was not selected for the Bundesliga at its inception in 1963.[6] The club had its period of greatest success in the middle of the 1970s when, under the captaincy of Franz Beckenbauer, it won the European Cup three times in a row (1974–76). Overall, Bayern has reached ten European Cup/UEFA Champions League finals, most recently winning their fifth title in 2013 as part of a continental treble. Bayern has also won one UEFA Cup, one European Cup Winners Cup, one UEFA Super Cup, one FIFA Club World Cup and two Intercontinental Cups, making it one of the most successful European clubs internationally. Since the formation of the Bundesliga, Bayern has been the dominant club in German football with 25 titles and has won 7 of the last 11 titles. They have traditional local rivalries with TSV 1860 München and 1. FC Nürnberg, as well as a contemporary rivalry with Borussia Dortmund.',

        references: [
        "Reference72222",
        "Reference823",
        "Reference923"
        ],
        reviews: [{
          levels: "Veteran",
          body: "too expensive for its rarity value.",
          author: "editor34@example.org"
        }, {
          levels: "Veteran",
          body: " High Quality.",
          author: "editor35@example.org"
        }, {
          levels: "Novice",
          body: "Don't waste your rubles!",
          author: "editor39@example.org"
        }]
    }
  ];

 





})();