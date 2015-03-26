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

    $scope.items = [
        {
            name: "Anne Klein Perfect Medium Tote Handbag",
            imgUrl: "http://ecx.images-amazon.com/images/I/91Ghr18vgsL._UY500_.jpg",
            price: "47.16"
        },
        {
            name: "Anne Klein Perfect Medium Tote Handbag",
            imgUrl: "http://ecx.images-amazon.com/images/I/91Ghr18vgsL._UY500_.jpg",
            price: "47.16"
        },
        {
            name: "Anne Klein Perfect Medium Tote Handbag",
            imgUrl: "http://ecx.images-amazon.com/images/I/91Ghr18vgsL._UY500_.jpg",
            price: "47.16"
        },
        {
            name: "Anne Klein Perfect Medium Tote Handbag",
            imgUrl: "http://ecx.images-amazon.com/images/I/91Ghr18vgsL._UY500_.jpg",
            price: "47.16"
        }
    ];
});