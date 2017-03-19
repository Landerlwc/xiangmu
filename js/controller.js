angular.module('myApp')

	//home页面
	.controller('HomeCtrl',['$css','HomeService',function($css,HomeService){
		$css.add('./css/home.css');
		var self = this;
		self.getSwiperImg = HomeService.getSwiperImg();
		self.menuLi = HomeService.getMenuLi();
		
		//轮播图
		var mySwiper1 = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    autoplay: 1500,
		    speed: 1000,
		    //使用angular时添加这两项属性
		    // observer: true,
		    // observeParents: true,
		    //分页器
		    pagination: '.swiper-pagination'
		});

		var mySwiper2 = new Swiper ('.letters .swiper-container', {
		    direction: 'vertical',
		    loop: true,
		    autoplay: 1500,
		    speed: 1000
		});

		// specialTopic部分数据获取
		self.mustBuy = HomeService.getSpecialTopic().mustBuy();
		self.valentineDay = HomeService.getSpecialTopic().valentineDay();
		self.orangeItems = HomeService.getSpecialTopic().orangeItems();
		self.meatSteak = HomeService.getSpecialTopic().meatSteak();
		self.breakFast = HomeService.getSpecialTopic().breakFast();
		self.newGoods = HomeService.getNewGoods();
		self.goodsList = HomeService.getGoodsList();
		
		//页面滚动事件
		window.onscroll = function(){
			var scrollT = document.body.scrollTop;
			$('#home .home-top').css('backgroundColor','rgba(86, 176, 10,' + scrollT/800 + ')') ;
		};
	}])

	//search页面
	.controller('SearchCtrl',['$css','searchService',function($css,searchService){
		$css.add('./css/search.css');
		var self = this;
		self.hotTitle = searchService.getHotTitle();
	}])

	//cart页面
	.controller('CartCtrl',['$css','detailService',function($css,detailService){
		$css.add('./css/cart.css');
		var self = this;
		self.productList = detailService.getProductList;
		self.productNum = detailService.productNum;
		self.cartFlag = detailService.cartFlag;
		self.sum = function(){
			var sum = 0;
			for(var every of self.productList){
				sum += Number(every.price) * Number(every.buyNum)
			}
			return sum;
		};
		self.cheap = function(){
			var cheap = 0;
			for(var every of self.productList){
				cheap += Number(every.cheap);
			}
			return cheap;
		}

		self.mul = function(productId){
			for(var items of self.productList){
				if (items.productId == productId) {
					if (items.buyNum > 1) {
						items.buyNum -= 1;
						detailService.getProductList = self.productList;
						break;
						if (detailService.getProductList.length == 0) {
							$('#cart .empty').show();
							self.cartFlag = true;
						};
					}
				};
			}
		};
		self.add = function(productId){
			for(var items of self.productList){
				if (items.productId == productId) {
					items.buyNum += 1;
					detailService.getProductList = self.productList;
					break;
				};
			}
		};
		self.delFlag  = false;
		self.alert = function(){
			alert('确定购买？')
		};
		self.delProduct = function(id){
			for(var item in detailService.getProductList){
				if (detailService.getProductList[item].productId == id) {
					self.delFlag = true;
					self.delConfirm = function(){
						detailService.getProductList.splice(item,1);
						self.delFlag = false;
						console.log(detailService.getProductList.length)
						if(detailService.getProductList.length == 0){
							self.cartFlag = true;
						}
					};
					break;
				};
			}
		}
	}])
	
	//class页面
	.controller('ClassCtrl',['$css','$http',function($css,$http){
		$css.add('./css/class.css');
		var self = this;
		$http.get('http://localhost:3000/js/classData.json')
			.success(function (data) {
				self.productData = data.product;
				self.productDetail = data.product[0].content;
				self.changeData = function(title){
					for(var item of self.productData){
						if (item.title == title) {
							self.productDetail = item.content;
							break;
						};
					}
				}
			})
			.error(function (errorStr) {
				console.log('error');
			})
	}])

	//详情页面
	.controller('DetailCtrl',['$css','$http','$routeParams','$timeout','detailService',function($css,$http,$routeParams,$timeout,detailService){
		$css.add('./css/detail.css');
		var self = this;
		self.liFlag = true;
		self.cartFlag = detailService.cartFlag;
		self.changeModule = function(){
			self.liFlag = !self.liFlag;
		};

		//定义up-top事件
		self.clickUp = function(){
			document.body.scrollTop = 0;
		}

		//页面滚动事件
		window.onscroll = function(){
			if (document.body.scrollTop >= 200) {
				$('#detail .up').fadeIn(200);
			} else {
				$('#detail .up').fadeOut(200);
			}
		};

		//轮播图
		var mySwiper = new Swiper ('.swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    speed: 1000,
		    //使用angular时添加这两项属性
		    // observer: true,
		    // observeParents: true,
		    //分页器
		    pagination: '.swiper-pagination'
		});

		//http请求
		$http.get('http://localhost:3000/js/classData.json')
			.success(function (data) {
				var arr = [];
				for(var item in data.product){
					for(var cont of data.product[item].content){
						var imgSrc = cont.imgSrc;
						arr.push(imgSrc);
					}
				};

				self.imgSrc = arr;

				//$routeParams.productId 链接传递的参数 获取每个元素的ID标识
				self.getProductId = function(productId){
					for(var item in data.product){
						for(var cont of data.product[item].content){
							if (cont.productId == productId) {
								detailService.productNum = 1;
								return cont
							};
						}
					};
				}
				self.getProduct = self.getProductId($routeParams.productId);
				$('#detail .firstImg').attr('src',self.getProduct.imgSrc);

				self.noRepeat = function(productId){
					detailService.getProductList.push(self.getProduct);
					for (var item of detailService.getProductList) {
						if(item.productId == productId){
							return item['buyNum']
						}
					}
				}
				self.productNum = detailService.productNum;
				//添加购物车
				self.addCart = function(){
					$('#detail .add-cart').animate({opacity : '1',top : '6.25rem'},600,function(){
						$timeout(function(){
							$('#detail .add-cart').animate({opacity : '0',top : '14rem'},600,function(){
								$('#detail .add-cart').css('top','-3.75rem');
							})
						},1000);
					});
					self.cartFlag = false;
					detailService.cartFlag = self.cartFlag;
					detailService.getProductList.push(self.getProduct);
					self.getProduct.buyNum = detailService.productNum;
					console.log(self.getProduct.buyNum)
				};

				self.mul = function(){
					if (self.productNum > 1) {
						self.productNum = self.productNum - 1;
						detailService.productNum = self.productNum;
					};
				};
				self.add = function(){
					self.productNum = self.productNum + 1;
					detailService.productNum = self.productNum;
				};
			})
			.error(function (errorStr) {
				console.log('error');
			});
	}])

	//mine页面
	.controller('MineCtrl',['$css',function($css){
		$css.add('./css/mine.css');
		var self = this;
		self.confirm = function(){

		};
		self.cancel = function(){
			$('#mine .alert').fadeOut(300);
		}
	}])

	//搜索结果页面
	.controller('SearchDCtrl',['$css','$http','$routeParams',function($css,$http,$routeParams){
		$css.add('./css/searchDetail.css');
		var self = this;
		console.log($routeParams.hot);
		self.title = $routeParams.hot;
		$http.get('http://localhost:3000/js/classData.json')
			.success(function (data) {
				self.getHotDetail = data.product[0].content;
			})
			.error(function (errorStr) {
				console.log('error');
			})
	}])

	//login页面
	.controller('LoginCtrl',['$css',function($css){
		$css.add('./css/login.css');
		var self = this;
		self.changeColor = function(){
			var r, g, b;
			r = parseInt(Math.random()*255 + 1);
			g = parseInt(Math.random()*255 + 1);
			b = parseInt(Math.random()*255 + 1);
			var color = 'rgb(' + r + ',' + g + ',' + b + ')';
			return color;
		}
		for (var i = 0; i < 4; i++) {
			var span = $('<span></span>'),
				num = parseInt(Math.random()*9 + 1),
				size = parseInt(Math.random()*24 + 17) + 'px';
			span.html(num).appendTo($('#login .yanzheng'));
			span.css({'fontSize' : size,'color' : self.changeColor()})
		};

		self.phone = self.phoneNum; 
		
	}])
	//提交订单页面
	.controller('SubmitCtrl',['$css','detailService',function($css,detailService){
		$css.add('./css/submit.css');
		var self = this;
		self.alertFlag = false;
		self.sum = 0;
		self.submitProduct = detailService.getProductList;
		console.log(self.submitProduct)

	}])

