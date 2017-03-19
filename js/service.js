//service（服务）
angular.module('myApp')
	.factory('HomeService',[function(){
		return {
			getSwiperImg : function(){
				return [
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-03/a1c1abf57dd6588d48183acb51b0b9c5.jpg'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-01-19/7069beb4c038af7b7abbc7bdceea8e18.jpg'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-08/845b99dc5fe1bfbe0f1d8d10df05f845.jpg'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-09/e083940b365d929945bbe4d8c6971cc6.jpg'}
				]
			},
			getMenuLi : function(){
				return [
					{ imgSrc : 'https://imgws1.fruitday.com/images/2017-02-07/205fee9341946c9805ae998ce6ba3561.png', imgIfo : '天天有礼'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-07/269940f36bb2863fb27f26e93c79c7c2.png', imgIfo : '摇一摇'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-07/a39bcf960e92b049edfbacbb7f52a4b7.png', imgIfo : '企业福利'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-07/4bc546a20b69467a0079aa41a5538d5e.png', imgIfo : '充值有礼'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-07/1b7d40d0157ea3a37bc9c36e6a82f2fc.png', imgIfo : '海鲜肉食'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-08/4d7364907f2f18976a79e1349101cb92.png', imgIfo : '鲜肉鲜疏'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-07/5a58450b004c2c49885a6e712287571c.png', imgIfo : '乳品速食'},
					{ imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-07/840789b421e2bafa88b3897cdd3ebec5.png', imgIfo : '订菜订奶'}
				]
			},
			getNewGoods : function(productId){
				return[
					{productId : '1000', imgSrc : 'https://imgjd3.fruitday.com/images/product_pic/16873/1/1-370x370-16873-7DPU8C5B.jpg',goodsName : '台湾青枣',introduce: '“咔吃“脆甜 无渣清香',price: '￥78/2斤'},
					{productId : '1001', imgSrc : 'https://imgjd3.fruitday.com/images/product_pic/16875/1/1-370x370-16875-4A16P7XY.jpg',goodsName : '比利时啤梨',introduce: '吃软不吃硬',price: '￥29/4个'},
					{productId : '1002', imgSrc : 'https://imgjd3.fruitday.com/images/product_pic/16879/1/1-370x370-16879-3D12YS56.jpg',goodsName : '绣球红毛丹',introduce: '如玉厚肉多汁的甜润',price: '￥39/2斤'},
					{productId : '1003', imgSrc : 'https://imgjd3.fruitday.com/images/product_pic/15556/1/1-370x370-15556-K34CAXT2.jpg',goodsName : '秘鲁太阳芒',introduce: '彩虹色幻化甜',price: '￥69/1个'},
					{productId : '1004', imgSrc : 'https://imgjd3.fruitday.com/images/product_pic/16672/1/1-370x370-16672-R4AYY7CK.jpg',goodsName : '美国偶像苹果',introduce: '疯狂喜爱苹果奖',price: '￥68/6个'},
					{productId : '1005', imgSrc : 'https://imgjd3.fruitday.com/images/product_pic/12208/1/1-370x370-12208-UCDU4S28.jpg',goodsName : '思念全素春卷',introduce: '外脆里嫩酥香可口',price: '￥19/240g*2'}

				]
			},
			getSpecialTopic : function(productId){
				return {
					mustBuy : function(productId){
						return {
							imgSrc : 'https://imgqn9.fruitday.com/images/2017-02-09/7c5aeaae10a4f5d6814e504603eb8391.jpg',
							topicList : [
								{productId : '1006' ,imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/13878/1/1-370x370-13878-83TFBC8H.jpg',cheap: '包邮半价',introduce: '优选新疆库尔勒香梨',price: '￥49/5+1斤'},
								{productId : '1007' ,imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/16729/1/1-370x370-16729-1PAHHYKA.jpg',cheap: '包邮半价',introduce: '优选意大利',price: '￥59/6个'},
								{productId : '1008' ,imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/13316/1/1-370x370-13316-52AA44CC.jpg',cheap: '包邮半价',introduce: '佳沛新西兰',price: '￥49.9/12个'},
								{productId : '1009' ,imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/14843/1/1-370x370-14843-K63XACC4.jpg',cheap: '包邮半价',introduce: '墨西哥牛油果',price: '￥39/6个'},
								{productId : '1010' ,imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/15787/1/1-370x370-15787-PX8WBWD9.jpg',cheap: '包邮半价',introduce: '美国新奇士',price: '￥49/6个'},
								{productId : '1011' ,imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/3903/1/1-370x370-3903-BR35HWB9.jpg',cheap: '包邮半价',introduce: '台湾金钻树',price: '￥49/1个'},
								{productId : '1012' ,imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/14534/1/1-370x370-14534-35WD91KS.jpg',cheap: '包邮半价',introduce: '鲜曝大黄鱼',price: '￥49/270g'},
								{productId : '1013' ,imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/16380/1/1-370x370-16380-P557DB6P.jpg',cheap: '包邮半价',introduce: '元其家庭早餐套餐',price: '￥99/1份'}	
							]
						}
					},
					valentineDay : function(productId){
						return {
							imgSrc : 'https://imgjd3.fruitday.com/images/2017-02-08/1ab35092b51c3f315319a502767a3428.jpg',
							topicList : [
								{productId : '1014',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/16893/1/1-370x370-16893-P9C1AKKW.jpg',cheap: '第二件半价',introduce: '白草莓礼盒',price: '￥168/1盒'},
								{productId : '1015',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/16864/1/1-370x370-16864-5CC617F7.jpg',cheap: '第二件半价',introduce: '费列罗臻品糖果盒',price: '￥148/24粒'},
								{productId : '1016',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/8257/1/1-370x370-8257-B2SDYFRW.jpg',cheap: '第二件半价',introduce: '长柄玫瑰草莓',price: '￥39/1盒'},
								{productId : '1017',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/8260/1/1-370x370-8260-8SUF7U55.jpg',cheap: '第二件半价',introduce: '红颜草莓',price: '￥69.9/1盒'},
								{productId : '1018',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/9060/1/1-370x370-9060-YXDBS1W9.jpg',cheap: '第二件半价',introduce: '美国皇家吉娜苹果',price: '￥39/6个'},
								{productId : '1019',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/4635/1/1-370x370-4635-W264RH2R.jpg',cheap: '第二件半价',introduce: '新西兰银鳕鱼',price: '￥218/400g'},
								{productId : '1020',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/12064/1/1-370x370-12064-97WRYAAT.jpg',cheap: '第二件半价',introduce: '越南红心火龙果',price: '￥38/2斤'}
								
							]

						}
					},
					orangeItems : function(productId){
						return {
							imgSrc : 'https://imgqn9.fruitday.com/images/2017-02-08/28d9274b438398c1cf87e6cb5a3406ce.jpg',
							topicList : [
								{productId : '1021',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/15787/1/1-370x370-15787-PX8WBWD9.jpg',cheap: '包邮半价',introduce: '美国新奇士',price: '￥49/6个'}
							]

						}
					},
					meatSteak : function(productId){
						return {
							imgSrc : 'https://imgqn9.fruitday.com/images/2017-02-08/0db4b573f4c41094283e60aaea5f106f.jpg',
							topicList : [
								{productId : '1021',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/16188/1/1-370x370-16188-PC3UHY9U.jpg',cheap: '特级',introduce: '加拿大特级肉',price: '￥49/200g'},
								{productId : '1022',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/16187/1/1-370x370-16187-BU5CAHAT.jpg',cheap: '特级',introduce: '加拿大特技',price: '￥89/200g'},
								{productId : '1023',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/13905/1/1-370x370-13905-DU66XAS8.jpg',cheap: '特级',introduce: '草原和牛',price: '￥188/200g'},
								{productId : '1024',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/15797/1/1-370x370-15797-YFTASRTB.jpg',cheap: '特级',introduce: '澳洲和牛眼肉',price: '￥318/200g'},
								{productId : '1025',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/12816/1/1-370x370-12816-KHAS6WDU.jpg',cheap: '特级',introduce: '总统牌淡味黄油块',price: '￥29/200g'},
								{productId : '1026',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/12572/1/1-370x370-12572-CTAR97F6.jpg',cheap: '特级',introduce: '安卡拉蔬菜',price: '￥9.9/200g'}
							]

						}
					},
					breakFast : function(productId){
						return {
							imgSrc : 'https://imgqn9.fruitday.com/images/2017-01-16/841f15b8f1c0f4221c3f052b1d607dcd.jpg',
							topicList : [
								{productId : '1027',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/12909/1/1-370x370-12909-56TRCPFX.jpg',cheap: '立省15元',introduce: '元其家庭早餐套餐',price: '￥99/组合1份'},
								{productId : '1028',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/15843/1/1-370x370-15843-7Y9HU55R.jpg',cheap: '立省15元',introduce: '元其家庭早餐套餐',price: '￥32/500g'},
								{productId : '1029',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/14480/1/1-370x370-14480-S4C5B1WT.jpg',cheap: '立省15元',introduce: '元其家庭早餐套餐',price: '￥99/2L'},
								{productId : '1030',imgSrc: 'https://imgjd3.fruitday.com/images/product_pic/15852/1/1-370x370-15852-YCFUKP98.jpg',cheap: '立省15元',introduce: '元其家庭早餐套餐',price: '￥19.9/500g'}
							]

						}
					}
				}

			},
			getGoodsList : function(productId){
				return[
					{productId : '1031',imgSrc : 'https://imgqn6.fruitday.com/images/2016-12-12/9ef2b2f0525a6c2bc6175bd1cf195c5c.png',goodsName : '丝般柔滑能量果',introduce: '墨西哥牛油果',price: '￥39.9/6个'},
					{productId : '1032',imgSrc : 'https://imgqn6.fruitday.com/images/2017-01-24/5d2b76b9743079a1f2bc8181e7533988.png',goodsName : '产地直达 香甜酥脆',introduce: '优选新疆库尔勒香梨',price: '￥49/5+1斤'},
					{productId : '1033',imgSrc : 'https://imgqn8.fruitday.com/images/2017-01-10/66fefbeaa81eb7f48d358ad675e10bcf.png',goodsName : '果肉红润',introduce: '美国新奇士',price: '￥79/12个'},
					{productId : '1034',imgSrc : 'https://imgqn6.fruitday.com/images/2016-12-12/89ad26c3599f1eb20cca7a94d7fe5fda.png',goodsName : '新鲜当季 秘鲁红提',introduce: '彩虹色幻化甜',price: '￥39/2斤'},
					{productId : '1035',imgSrc : 'https://imgqn6.fruitday.com/images/2017-02-06/421ae12a61d2a5a21b7b699803467838.png',goodsName : '蓬软多汁 天然补水',introduce: '疯狂喜爱苹果奖',price: '￥38/1斤'},
					{productId : '1036',imgSrc : 'https://imgqn8.fruitday.com/images/2016-12-13/92a29fb42f9b6d48f43f322c0340a82d.png',goodsName : '足有两斤的香甜多汁',introduce: '红颊草莓',price: '￥69.9/4盒'},
					{productId : '1131',imgSrc : 'https://imgqn6.fruitday.com/images/2016-12-12/9ef2b2f0525a6c2bc6175bd1cf195c5c.png',goodsName : '丝般柔滑能量果',introduce: '墨西哥牛油果',price: '￥39.9/6个'},
					{productId : '1232',imgSrc : 'https://imgqn8.fruitday.com/images/2017-02-08/9a6fd11a22ed70fc021776ecb89e6a39.png',goodsName : '产地直达 香甜酥脆',introduce: '优选新疆库尔勒香梨',price: '￥49/5+1斤'},
					{productId : '1333',imgSrc : 'https://imgqn6.fruitday.com/images/2017-01-18/37fc9af568fcc070b5357cb0f3a724be.png',goodsName : '果肉红润',introduce: '美国新奇士',price: '￥79/12个'},
					{productId : '1434',imgSrc : 'https://imgqn8.fruitday.com/images/2017-02-04/7f5e344d12be729e9b82ec93ac0efb59.png',goodsName : '新鲜当季 秘鲁红提',introduce: '彩虹色幻化甜',price: '￥39/2斤'},
					{productId : '1535',imgSrc : 'https://imgqn6.fruitday.com/images/2017-02-06/421ae12a61d2a5a21b7b699803467838.png',goodsName : '蓬软多汁 天然补水',introduce: '疯狂喜爱苹果奖',price: '￥38/1斤'},
					{productId : '1636',imgSrc : 'https://imgqn8.fruitday.com/images/2017-02-06/e22a9579c5c1ce14e5612289a6052a5a.png',goodsName : '足有两斤的香甜多汁',introduce: '红颊草莓',price: '￥69.9/4盒'},
					{productId : '1114',imgSrc : 'https://imgqn6.fruitday.com/images/2016-12-12/89ad26c3599f1eb20cca7a94d7fe5fda.png',goodsName : '新鲜当季 秘鲁红提',introduce: '彩虹色幻化甜',price: '￥39/2斤'},
					{productId : '1125',imgSrc : 'https://imgqn8.fruitday.com/images/2017-02-08/755435324d3333e50c3df61faf3108d9.png',goodsName : '蓬软多汁 天然补水',introduce: '疯狂喜爱苹果奖',price: '￥38/1斤'},
					{productId : '1136',imgSrc : 'https://imgqn6.fruitday.com/images/2016-12-09/25ebc2f7a9758c99de7a1b8c0f99e873.png',goodsName : '足有两斤的香甜多汁',introduce: '红颊草莓',price: '￥69.9/4盒'},
					{productId : '1141',imgSrc : 'https://imgqn8.fruitday.com/images/2017-01-11/5621d0bda9ceb17208d95225b9dc619d.png',goodsName : '丝般柔滑能量果',introduce: '墨西哥牛油果',price: '￥39.9/6个'},
					{productId : '1152',imgSrc : 'https://imgqn6.fruitday.com/images/2017-01-24/5d2b76b9743079a1f2bc8181e7533988.png',goodsName : '产地直达 香甜酥脆',introduce: '优选新疆库尔勒香梨',price: '￥49/5+1斤'},
					{productId : '1163',imgSrc : 'https://imgqn8.fruitday.com/images/2017-01-10/681e3ea0e7c2f559b5f091e9789da173.png',goodsName : '果肉红润',introduce: '美国新奇士',price: '￥79/12个'},
					{productId : '1174',imgSrc : 'https://imgqn6.fruitday.com/images/2016-12-12/89ad26c3599f1eb20cca7a94d7fe5fda.png',goodsName : '新鲜当季 秘鲁红提',introduce: '彩虹色幻化甜',price: '￥39/2斤'},
					{productId : '1185',imgSrc : 'https://imgqn8.fruitday.com/images/2016-11-16/73dbbfdd9aaa516500e788ab636f32e2.png',goodsName : '蓬软多汁 天然补水',introduce: '疯狂喜爱苹果奖',price: '￥38/1斤'},
					{productId : '1206',imgSrc : 'https://imgqn6.fruitday.com/images/2016-12-09/25ebc2f7a9758c99de7a1b8c0f99e873.png',goodsName : '足有两斤的香甜多汁',introduce: '红颊草莓',price: '￥69.9/4盒'}
				]
			}

		}
	}])
	.factory('searchService',[function(){
		return {
			getHotTitle : function(){
				return ['珍奇异果','脐橙','柚子','苹果','牛油果','火龙果','羊蝎子','雪花鲳','樱桃','雪梨','荔枝']
			}
		}
	}])
	.factory('detailService',[function(){
		return {
			productNum : 1,
			getProductList : [],
			cartFlag : true
		}
	}])



