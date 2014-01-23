(function(){
	'use strict';
	var module = angular.module('mod.controller');

	module.controller('RequeteCtrl',  ['$scope', 'cmWSFacade', 'webStorage', 'BusinessService','$routeParams',
	                                   function($scope, cmWSFacade, webStorage,BusinessService, $routeParams){

		$scope.dataAnnotation = [];

		$scope.gridOptions = {
				data: 'dataAnnotation',
				i18n:'fr',
				rowHeight: 80,
				enableColumnResize:true, 
				enableRowReordering:false, 
				enableSorting:true,
				showColumnMenu:true, 
				showFilter:true,
				showSelectionCheckbox:false, 
				selectWithCheckboxOnly:false,
				//plugins:[new ngGridFlexibleHeightPlugin()],
				columnDefs: [
				             {field:'numAnno', displayName:'Num Anno'}, 
				             {field:'nom', displayName:'Nom User'}, 
				             {field:'mail', displayName:'Mail User'}, 
				             {field:'annotation', displayName:'Annotation'}, 
				             {field:'event', displayName:'Event'}, 
				             {field:'date', displayName:'Date'}, 
				             {field:'lat', displayName:'Latitude'},
				             {field:'lgt', displayName:'Longitude'}
				             ]
		};


		$scope.processRequete = function(){
			console.log($scope.strRequete);
			var content = {
					sparql:$scope.strRequete
			};

			BusinessService.getBusinessByRequest(content).success(function(data, status){
				if(data.result=='fail'){
					alert('La requete ne marche pas!!');
				}else{
					console.log(data);
					$scope.dataAnnotation = data.binding;

					//Filter col names returned
					var objTop = $scope.dataAnnotation[0];
					$scope.colums = [];
					//var key_all = ['numAnno', 'tag', 'annotation', 'event','date', 'lat', 'lgt', 'nom', 'mail'];
					/*_.each(objTop, function(val, key){
						switch(key)
						{
						case 'numAnno':
							if(!_.isNull(val))$scope.colums.push({field:'numAnno', displayName:'Num Anno'});
							break;

						case 'nom':
							if(!_.isNull(val))$scope.colums.push({field:'nom', displayName:'Nom User'});
							break;

						case 'mail':
							if(!_.isNull(val))$scope.colums.push({field:'mail', displayName:'Mail User'});
							break;

						case 'annotation':
							if(!_.isNull(val))$scope.colums.push({field:'annotation', displayName:'Annotation'});
							break;

						case 'event':
							if(!_.isNull(val))$scope.colums.push({field:'event', displayName:'Event'});
							break;

						case 'date':
							if(!_.isNull(val))$scope.colums.push({field:'date', displayName:'Date'});
							break;

						case 'lat':
							if(!_.isNull(val))$scope.colums.push({field:'lat', displayName:'Latitude'});
							break;

						case 'lgt':
							if(!_.isNull(val))$scope.colums.push({field:'lgt', displayName:'Longitude'});
							break;
						}
					});

					console.log($scope.colums, 'Col');
					if($scope.colums.length<7){
						$scope.gridOptions.columnDefs = [];
					}else{
						$scope.gridOptions.columnDefs = $scope.colums;;
					}*/


				}

			}).error(function(data, status){
				alert('Error serveur');
			});
		};


		$scope.init = function(){
			console.log($scope.dataAnnotation.length);
		};

		//Methodes init
		$scope.init();
	}]);

})();