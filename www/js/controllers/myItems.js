'use strict';
app

.controller('MyItemsCtrl', function(
    $scope,
    $state,
    $timeout,
    $ionicSideMenuDelegate,
    $ionicHistory,
    localStorageService) {

    $scope.$on('$ionicView.beforeEnter', function() {
        // Clear history since this might have been a forced redirect
        $ionicHistory.clearHistory();
    });

    $scope.currItems = [
        {
            name: "Anne Klein Perfect Medium Tote Handbag",
            imgUrl: "http://ecx.images-amazon.com/images/I/91Ghr18vgsL._UY500_.jpg",
            price: "47.16",
            icon: "ion-music-note"
        },
        {
            name: "Anne Klein Perfect Medium Tote Handbag",
            imgUrl: "http://ecx.images-amazon.com/images/I/917za%2BjRIRL._UY500_.jpg",
            price: "47.16",
            icon: "ion-music-note"
        },
        {
            name: "Nine West Hex 9 It Girl Small Shopper",
            imgUrl: "http://ecx.images-amazon.com/images/I/61SgPYGKboL._UX385_.jpg",
            price: "$29.00",
            icon: "ion-music-note"
        },
        {
            name: "Kenneth Cole Reaction KN1563 Large Shopper Multiplier Stripes",
            imgUrl: "http://ecx.images-amazon.com/images/I/61kCtCQGecL._UY395_.jpg",
            price: "21.po"
        }
    ];
});