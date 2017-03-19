//主入口文件
angular.module('myApp',['ngRoute','angularCSS'])
	.run(['$window','$rootScope',function($window,$rootScope){
		$rootScope.$on('$locationChangeSuccess',function(){
			if( $window.location.href.indexOf('home') < 1){
				$rootScope.rootIsFooterShow = false;
			} else {
				$rootScope.rootIsFooterShow = true;
			}
		})
		
	}])
	//配置路由
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/home',{
			templateUrl : './view/home.html',
			controller : 'HomeCtrl as homeCtrl'
		})
		.when('/class',{
			templateUrl : './view/class.html',
			controller : 'ClassCtrl as classCtrl'
		})
		.when('/cart',{
			templateUrl : './view/cart.html',
			controller : 'CartCtrl as cartCtrl'
		})
		.when('/mine',{
			templateUrl : './view/mine.html',
			controller : 'MineCtrl as mineCtrl'
		})
		.when('/detail/:productId',{
			templateUrl : './view/detail.html',
			controller : 'DetailCtrl as detailCtrl'
		})
		.when('/search',{
			templateUrl : './view/search.html',
			controller : 'SearchCtrl as searchCtrl'
		})
		.when('/searchDetail/:hot',{
			templateUrl : './view/searchDetail.html',
			controller : 'SearchDCtrl as searchDCtrl'
		})
		.when('/submit',{
			templateUrl : './view/submit.html',
			controller : 'SubmitCtrl as submitCtrl'
		})
		.when('/login',{
			templateUrl : './view/login.html',
			controller : 'LoginCtrl as loginCtrl'
		})
		.otherwise({
			redirectTo : '/home'
		})
	}])
