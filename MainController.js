app.controller('MainController', ['$scope', function($scope) {

  $scope.title = 'Furniture Catalogue';
  $scope.promo = 'Most Popular Items';
  $scope.products = [{
      name: 'Couch',
      price: 300,
      available_stock: 120,
      total_stock: 300,
      
      purchase_rate: function(){
        return Math.ceil((($scope.products[0].total_stock - $scope.products[0].available_stock)/$scope.products[0].total_stock) *100);
      },
      buy:0,
      cover: 'https://a248.e.akamai.net/f/248/9086/10h/origin-d5.scene7.com/is/image/RaymourandFlanigan/ProductGridV5?$ProductSRC=FSFN_200326204_3000&wid=580&op_sharpen=1&$RISize=32'
    },

    {
      name: 'Chair',
      price: 75,
      available_stock: 90,
      total_stock: 200,
      purchase_rate: function(){
        return Math.ceil((($scope.products[1].total_stock - $scope.products[1].available_stock)/$scope.products[1].total_stock) *100);
      },
      buy:0,
      cover: 'https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/29365_XXX_v1.tif&wid=650&cvt=jpeg'
    },

    {
      name: 'Table',
      price: 250,
      available_stock: 60,
      total_stock: 250,
      purchase_rate: function(){
        return Math.ceil((($scope.products[2].total_stock - $scope.products[2].available_stock)/$scope.products[2].total_stock) *100);
      },
      buy:0,
      cover : 'https://st.hzcdn.com/simgs/a9c1018604eb8bfb_4-4146/home-design.jpg'
    },

    {
      name: 'Bed',
      price: 300,
      available_stock: 75,
      total_stock: 350,
      purchase_rate: function(){
        return Math.ceil((($scope.products[3].total_stock - $scope.products[3].available_stock)/$scope.products[3].total_stock) *100);
      },
      buy:0,
      cover : 'https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/B130-581-10x8-CROP?$AFHS-Grid-1X$'
    }
  ];
  
  $scope.plusOne = function(index) { 
  	$scope.products[index].buy += 1; 
  	$scope.products[index].available_stock -= 1; 
	};
  
}]);




