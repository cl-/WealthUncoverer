'use strict';
app

.controller('ItemDetailsCtrl', function(
    $scope,
    $state,
    $timeout,
    $ionicPopup,
    $ionicSideMenuDelegate,
    $ionicHistory,
    localStorageService) {

    $scope.$on('$ionicView.beforeEnter', function() {
        // Clear history since this might have been a forced redirect
        $ionicHistory.clearHistory();
    });


        $scope.currentItems = [
            {
                id: 0,
                name: "Anne Klein Perfect Medium Tote Handbag",
                imgUrl: "http://ecx.images-amazon.com/images/I/91Ghr18vgsL._UY500_.jpg",
                price: "$47.16",
                icon: "ion-music-note",
                description: "A tried-and-true tote dials up the cool quotient with this classic carryall offered in an array of colors and finishes from mod metallic to matte black. Spacious, pocket-lined and crafted from soft faux leather, slender straps and custom hardware offer an elegant finish. From Anne Klein."
            },
            {
                id: 1,
                name: "Marc Fisher Day by Day Horizontal Tote",
                imgUrl: "http://slimages.macys.com/is/image/MCY/products/9/optimized/1940059_fpx.tif",
                price: "$47.16",
                icon: "ion-music-note",
                description: "Sleek and styled for your daily endeavors, this classic carryall from Marc Fisher is the perfect choice. Rendered in smooth faux leather with polished hardware, the generous interior stashes all your here-to-there essentials."
            },
            {
                name: "Nine West Hex 9 It Girl Small Shopper",
                imgUrl: "http://ecx.images-amazon.com/images/I/61SgPYGKboL._UX385_.jpg",
                price: "$29.00",
                icon: "ion-music-note",
                description: "The Nine West Hex 9 It Girl Small Shopper is a smaller version of the classic tote bag, with a twist. New, hexagon-inspired designs cover the exterior of this discount Nine West tote. This tote bag measures 12 W x 10 H x 3 1/4 D inches. A top zip closure opens to show the main compartment which is divided into two by a zippered section. Two slip pockets and a zip pocket sit on the back walls of this tote bag and provide extra organization. Carry by the shoulder straps with an 8 inch drop. Faux-buckles, silver-tone feet and the classic Nine West nameplate decorate this discount Nine West tote bag and add to its classic features. Purchase your Nine West Hex 9 It Girl Small Shopper today while supplies last!"
            },
            {
                id: 2,
                name: "Kenneth Cole Reaction KN1563 Large Shopper Multiplier Stripes",
                imgUrl: "http://ecx.images-amazon.com/images/I/61kCtCQGecL._UY395_.jpg",
                price: "$21.00",
                icon: "ion-music-note",
                description: "New Kenneth Cole Reaction Logo , Gold Color Hardware. Very Spacious , Good for Any Occasions. Snap Clip closure. Metal Bars Design. interior zipper pocket & 2 open pockets for extra storage"
            }
        ];

    var itemDetailId = localStorageService.get('itemDetails');
    $scope.item = $scope.currentItems[itemDetailId];

    // Triggered on a button click, or some other target
    $scope.onSell = function() {
        $state.go("app.itemSold");
    };

    $scope.myGoBack = function() {
        $state.go("app.myItems");
    };
});