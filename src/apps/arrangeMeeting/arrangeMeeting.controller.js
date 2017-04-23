App.controller('ArrangeMeetingController', function ($scope, $http, $cache, $routeParams) {
    
  var _msgId = $routeParams.idMensagem;

  console.log(_msgId);


  $scope.place = null;
  
  $scope.selectOperation = {
    listOfClients:[
      {_id:0, name:"Cliente a" },
      {_id:1, name:"Cliente b" },
      {_id:2, name:"Cliente c" },
      {_id:3, name:"Cliente d" },
    ],
    listOfCitys:[
      {_id:0, name:"Cidade a" },
      {_id:1, name:"Cidade b" },
      {_id:2, name:"Cidade c" },
      {_id:3, name:"Cidade d" },
    ],
    listOfGroups:[
      {_id:0, name:"TODOS", icon:"" },
      {_id:1, name:"Estrelas", icon:"cloud_gray" },
      {_id:2, name:"Nuvens", icon:"eagle_gray" },
      {_id:3, name:"Águias", icon:"montain_gray" },
      {_id:3, name:"Montanha", icon:"three-stars_gray" },
    ],
    titlesSelectOperation: [
      "Operações/Segmentos",
      "Selecionados"
    ],
    listOfOperations: [
      {_id:0, name:"Operacao 0" },
      {_id:1, name:"Operacao 1" },
      {_id:2, name:"Operacao 2" },
      {_id:3, name:"Operacao 3" },
      {_id:4, name:"Operacao 4" },
      {_id:5, name:"Operacao 5" },
      {_id:6, name:"Operacao 6" },
      {_id:7, name:"Operacao 7" },
      {_id:8, name:"Operacao 8" },
      {_id:9, name:"Operacao 9" },
      {_id:10, name:"Operacao 10" },
      {_id:11, name:"Operacao 11" },
      {_id:12, name:"Operacao 12" },
      {_id:13, name:"Operacao 13" },
      {_id:14, name:"Operacao 14" },
      {_id:15, name:"Operacao 15" },
      {_id:16, name:"Operacao 16" },
      {_id:17, name:"Operacao 17" },
      {_id:18, name:"Operacao 18" },
      {_id:19, name:"Operacao 19" },
      {_id:20, name:"Operacao 20" },
      {_id:21, name:"Operacao 21" },
      {_id:22, name:"Operacao 22" },
      {_id:23, name:"Operacao 23" },
      {_id:24, name:"Operacao 24" },
      {_id:25, name:"Operacao 25" },
      {_id:26, name:"Operacao 26" },
      {_id:27, name:"Operacao 27" },
      {_id:28, name:"Operacao 28" },
      {_id:29, name:"Operacao 29" },
      {_id:30, name:"Operacao 30" },
      {_id:31, name:"Operacao 31" },
      {_id:32, name:"Operacao 32" },
      {_id:33, name:"Operacao 33" },
      {_id:34, name:"Operacao 34" },
      {_id:35, name:"Operacao 35" },
      {_id:36, name:"Operacao 36" },
      {_id:37, name:"Operacao 37" },
      {_id:38, name:"Operacao 38" },
      {_id:39, name:"Operacao 39" },
    ]
  }


  

  $scope.openDataPublicacao = function() {
    $scope.dataPublicacao.opened = true;
  };

  $scope.openDataExpiracao = function() {
    $scope.dataExpiracao.opened = true;
  };

    
  $scope.format = 'dd/MM/yyyy'
  

  $scope.dataPublicacao = {
    opened: false
  };

  $scope.dataExpiracao = {
    opened: false
  };



  $scope.dateOptions = {
    formatYear: 'yyyy',
    minDate: new Date(),
    startingDay: 1,
    language: 'pt-BR',
    dateDisabled: function (data) {
          var date = data.date,
          mode = data.mode;
          return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }
  };

  $scope.disabled = function (date, mode) {
    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
  };

  !function init(){


	}();
	
});

