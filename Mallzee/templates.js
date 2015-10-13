angular.module('templates-main', ['views/checkout.html', 'views/forgotten.html', 'views/images.html', 'views/inspiration.html', 'views/login.html', 'views/new-in.html', 'views/register.html', 'views/tabs.html', 'views/welcome.html', 'views/account/account.html', 'views/account/email.html', 'views/account/friends.html', 'views/account/mobile.html', 'views/account/notifications.html', 'views/account/profile.html', 'views/account/settings.html', 'views/brands/brand.html', 'views/brands/brands.html', 'views/brands/modal.html', 'views/products/filters.html', 'views/products/information.html', 'views/products/modal.html', 'views/products/product.html', 'views/products/products-list.html', 'views/products/products-modal.html', 'views/products/products-multi.html', 'views/products/products-swipe.html', 'views/products/products.html', 'views/saved/popover.html', 'views/saved/product.html', 'views/saved/saved.html', 'views/style-feeds/add-brands.html', 'views/style-feeds/add-colours.html', 'views/style-feeds/add-name.html', 'views/style-feeds/add-price.html', 'views/style-feeds/add-style-feed.html', 'views/style-feeds/add-types.html', 'views/style-feeds/style-feeds.html']);

angular.module("views/checkout.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/checkout.html",
    "<ion-pane>\n" +
    "	<iframe id=\"content\" src=\"{{product.buy_url}}\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" width=\"100%\" height=\"100%\" scrolling=\"auto\"></iframe>\n" +
    "</ion-pane>");
}]);

angular.module("views/forgotten.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/forgotten.html",
    "<ion-view class=\"bg padding walkthrough\" hide-nav-bar=\"true\">\n" +
    "\n" +
    "    <h1>Forgotten Password?</h1>\n" +
    "\n" +
    "    <form name=\"forgotten\" class=\"list\">\n" +
    "        <label class=\"item item-input\">\n" +
    "            <input type=\"email\" ng-keypress=\"{'enter':'authenticate()'}\" ng-model=\"user.email\" placeholder=\"Email\" required />\n" +
    "        </label>\n" +
    "    </form>\n" +
    "\n" +
    "    <button class=\"button button-block button-balanced\" ng-click=\"forgottenPassword(user)\" ng-disabled=\"login.$invalid\">Get new password</button>\n" +
    "\n" +
    "    <div class=\"bar bar-footer bar-light\">\n" +
    "        <a class=\"button button-clear white\" ui-sref=\"login\">Remember it now? <b>Tap here to login!</b></a>\n" +
    "    </div>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/images.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/images.html",
    "<div class=\"modal\" ng-controller=\"ImagesCtrl\">\n" +
    "  <ion-view>\n" +
    "    <ion-slide-box delegate-handle=\"images\" class=\"fullscreen\">\n" +
    "      <ion-slide ion-slide ng-repeat=\"image in images\" ng-click=\"ImagesModalService.hide()\">\n" +
    "	    <ion-scroll direction=\"xy\" zooming=\"true\" min-zoom=\"1\" has-bouncing=\"false\" scrollbar-x=\"false\" scrollbar-y=\"false\" style=\"height: 100%\" >\n" +
    "	      <img ng-src=\"{{image}}\" />\n" +
    "	    </ion-scroll>\n" +
    "      </ion-slide>\n" +
    "    </ion-slide-box>\n" +
    "  </ion-view>\n" +
    "</div>");
}]);

angular.module("views/inspiration.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/inspiration.html",
    "<ion-view view-title=\"Mallzee\">\n" +
    "    <ion-content class=\"has-header bg-image mallzee\">\n" +
    "\n" +
    "        <!-- Quick search for products -->\n" +
    "        <mlz-search placeholder=\"What are you shopping for?\" model=\"query.search\" perform=\"searchProducts(query)\"></mlz-search>\n" +
    "\n" +
    "        <div class=\"padding\">\n" +
    "            <!-- New in directive to display a nice button with the latest products -->\n" +
    "            <mlz-new-in products=\"products.records\" columns=\"iPad\" ui-sref=\"tab.products\"></mlz-new-in>\n" +
    "\n" +
    "            <!-- Loaded from Runway S3 account http://runway.mallzee.com/index.html -->\n" +
    "            <ng-include src=\"inspirationIndex\"></ng-include>\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/login.html",
    "<ion-view class=\"bg padding walkthrough\" hide-nav-bar=\"true\">\n" +
    "\n" +
    "    <h1>Welcome back</h1>\n" +
    "\n" +
    "    <form name=\"login\" class=\"list\" ng-enter=\"authenticate(user)\">\n" +
    "        <label class=\"item item-input\">\n" +
    "            <input type=\"email\" ng-keypress=\"{'enter':'authenticate()'}\" ng-model=\"user.email\" placeholder=\"Email\" required />\n" +
    "        </label>\n" +
    "        <label class=\"item item-input\">\n" +
    "            <input type=\"password\" ui-keypress=\"{'enter':'authenticate()'}\" ng-model=\"user.password\" placeholder=\"Password\" required />\n" +
    "        </label>\n" +
    "    </form>\n" +
    "\n" +
    "    <button class=\"button button-block button-balanced\" ng-click=\"authenticate(user)\" ng-disabled=\"login.$invalid\">Log in</button>\n" +
    "\n" +
    "    <a class=\"button button-block button-clear button-balanced text-center\" ui-sref=\"forgotten\">Forgotten your password?</a>\n" +
    "\n" +
    "    <h6 class=\"balanced\"> OR </h6>\n" +
    "\n" +
    "    <facebook-connect user=\"user\" text=\"Connect with Facebook\"></facebook-connect>\n" +
    "\n" +
    "    <div class=\"bar bar-footer bar-light\">\n" +
    "        <a class=\"button button-clear white\" ui-sref=\"register\">Don't have an account yet? <b>Sign up</b></a>\n" +
    "    </div>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/new-in.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/new-in.html",
    "<div class=\"new-in\">\n" +
    "	<div class=\"row padding\">\n" +
    "    	<div class=\"col col-20\" ng-repeat=\"product in products | limitTo:5 track by product._id\"><mlz-img src=\"{{product.images[0]}}\"></mlz-img></div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"!columns\" class=\"row padding\">\n" +
    "    	<div class=\"col title\"><h1>SHOP NOW <span class=\"icon icon-back\"></span></h1></div>\n" +
    "	</div>\n" +
    "	<div ng-if=\"columns\" class=\"row padding\">\n" +
    "    	<div class=\"col col-20\"><mlz-img src=\"{{products[5].images[0]}}\"></mlz-img></div>\n" +
    "    	<div class=\"col col-20\"><mlz-img src=\"{{products[6].images[0]}}\"></mlz-img></div>\n" +
    "    	<div class=\"col col-20\"><mlz-img src=\"{{products[7].images[0]}}\"></mlz-img></div>\n" +
    "    	<div class=\"col col-40 title\"><h1>SHOP NOW <span class=\"icon icon-back\"></span></h1></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("views/register.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/register.html",
    "<ion-view class=\"bg padding walkthrough\" hide-nav-bar=\"true\">\n" +
    "\n" +
    "    <h1>Come join us!</h1>\n" +
    "\n" +
    "    <form name=\"register\" class=\"list\" ng-enter=\"registerUser(user)\">\n" +
    "        <label class=\"item item-input\">\n" +
    "            <input type=\"text\" ng-model=\"user.name.first\" name=\"first_name\" placeholder=\"First Name\" required />\n" +
    "        </label>\n" +
    "        <label class=\"item item-input\">\n" +
    "            <input type=\"text\" ng-model=\"user.name.last\" name=\"last_name\" placeholder=\"Last Name\" required />\n" +
    "        </label>\n" +
    "        <label class=\"item item-input\">\n" +
    "            <input type=\"email\" ng-model=\"user.email\" name=\"email\" placeholder=\"Email\" required />\n" +
    "        </label>\n" +
    "        <label class=\"item item-input\">\n" +
    "            <input type=\"password\" ng-model=\"user.password\" name=\"password\" placeholder=\"Password\" required />\n" +
    "        </label>\n" +
    "        <div class=\"button-bar padding-top padding-bottom\">\n" +
    "          <button class=\"button button-balanced\" ng-class=\"{'button-outline': user.gender !== 'male'}\" ng-click=\"setGender('male')\">Male</button>\n" +
    "          <button class=\"button button-balanced\" ng-class=\"{'button-outline': user.gender !== 'female'}\" ng-click=\"setGender('female')\">Female</button>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "\n" +
    "    <button class=\"button button-block button-balanced\" ng-disabled=\"!user.gender || register.$invalid\" class=\"btn btn-primary\" ng-click=\"registerUser(user)\">Create an account</button>\n" +
    "\n" +
    "    <facebook-connect user=\"user\" text=\"Connect with Facebook\"></facebook-connect>\n" +
    "\n" +
    "    <div class=\"bar bar-footer bar-light\">\n" +
    "        <a class=\"button button-clear white\" ui-sref=\"login\"> Already have an account? <b>Login</b></a>\n" +
    "    </div>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/tabs.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/tabs.html",
    "<ion-tabs class=\"tabs-icon-top\">\n" +
    "\n" +
    "    <!-- Stylefeeds Tab -->\n" +
    "    <ion-tab title=\"Style Feeds\" icon=\"icon icon-style-feeds\" ui-sref=\"tab.stylefeeds\">\n" +
    "        <ion-nav-view name=\"tab-stylefeeds\" class=\"slide-left-right\"></ion-nav-view>\n" +
    "    </ion-tab>\n" +
    "\n" +
    "    <!-- Saved Tab -->\n" +
    "    <ion-tab title=\"Saved\" icon=\"icon icon-thumb-up\" style=\"font-size: 32px\" ui-sref=\"tab.saved\">\n" +
    "        <ion-nav-view name=\"tab-saved\" class=\"slide-left-right\"></ion-nav-view>\n" +
    "    </ion-tab>\n" +
    "\n" +
    "    <!-- Inspiration Tab -->\n" +
    "    <ion-tab class=\"icon-mallzee\" ui-sref=\"tab.inspiration\">\n" +
    "        <ion-nav-view name=\"tab-inspiration\" class=\"slide-left-right\"></ion-nav-view>\n" +
    "    </ion-tab>\n" +
    "\n" +
    "    <!-- Brands Tab -->\n" +
    "    <ion-tab title=\"Brands\" icon=\"icon icon-brands\" ui-sref=\"tab.brands\">\n" +
    "        <ion-nav-view name=\"tab-brands\" class=\"slide-left-right\"></ion-nav-view>\n" +
    "    </ion-tab>\n" +
    "\n" +
    "    <!-- Account Tab -->\n" +
    "    <ion-tab title=\"Settings\" icon=\"icon icon-settings\" ui-sref=\"tab.account\">\n" +
    "        <ion-nav-view name=\"tab-account\" class=\"slide-left-right\"></ion-nav-view>\n" +
    "    </ion-tab>\n" +
    "\n" +
    "</ion-tabs>");
}]);

angular.module("views/welcome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/welcome.html",
    "<ion-view class=\"bg walkthrough welcome\" ng-class=\"{'final-slide': currentSlide === 6}\" hide-nav-bar=\"true\">\n" +
    "\n" +
    "	<ion-slide-box on-slide-changed=\"slideHasChanged($index)\">\n" +
    "		<!-- Welcome slide -->\n" +
    "		<ion-slide ng-class=\"{'final-slide': $index === 0}\">\n" +
    "			<h1 class=\"title padding\" style=\"margin-bottom: 150px\">Welcome to Mallzee</h1>\n" +
    "			<img class=\"logo\" src=\"res/images/logo.png\" />\n" +
    "			<p class=\"title\">Shop. Share. Wear</p>\n" +
    "			<p class=\"swipe\">Swipe left to find out more <i class=\"icon icon-back\"></i></p>\n" +
    "		</ion-slide>\n" +
    "\n" +
    "		<!-- Brands slide -->\n" +
    "		<ion-slide>\n" +
    "			<div class=\"iso-header\"></div>\n" +
    "			<h2>All your favourite brands in one place</h2>\n" +
    "			<img class=\"iso-image\" src=\"res/images/welcome-brands.png\" />\n" +
    "		</ion-slide>\n" +
    "\n" +
    "		<!-- Swipe slide -->\n" +
    "		<ion-slide>\n" +
    "			<div class=\"iso-header\"></div>\n" +
    "			<h2>Swipe your way to the perfect outfit</h2>\n" +
    "			<img class=\"iso-image\" src=\"res/images/welcome-swipe.png\" />\n" +
    "		</ion-slide>\n" +
    "\n" +
    "		<!-- Stylefeeds slide -->\n" +
    "		<ion-slide>\n" +
    "			<div class=\"iso-header\"></div>\n" +
    "			<h2>Curate a wardrobe for every occasion with<br>style feeds</h2>\n" +
    "			<img class=\"iso-image\" src=\"res/images/welcome-stylefeeds.png\" />\n" +
    "		</ion-slide>\n" +
    "\n" +
    "		<!-- Inspiration slide -->\n" +
    "		<ion-slide>\n" +
    "			<div class=\"iso-header\"></div>\n" +
    "			<h2>Get the latest from leading bloggers and stylists</h2>\n" +
    "			<img class=\"iso-image\" src=\"res/images/welcome-inspiration.png\" />\n" +
    "		</ion-slide>\n" +
    "\n" +
    "		<!-- Saved items slide -->\n" +
    "		<ion-slide>\n" +
    "			<div class=\"iso-header\"></div>\n" +
    "			<h2>Save the perfect outfit.<br>Get notified when the price drops</h2>\n" +
    "			<img class=\"iso-image\" src=\"res/images/welcome-pricedrop.png\" />\n" +
    "		</ion-slide>\n" +
    "\n" +
    "		<ion-slide>\n" +
    "			<ng-include src=\"'views/register.html'\" ng-controller=\"RegisterCtrl\"></ng-include>\n" +
    "		</ion-slide>\n" +
    "\n" +
    "	</ion-slide-box>\n" +
    "\n" +
    "	<div class=\"bar bar-footer sign-up\">\n" +
    "		<div class=\"row\">\n" +
    "			<button class=\"button button-clear button-light col white\" ui-sref=\"register\">Sign up</button>\n" +
    "			<p class=\"divider\">|</p>\n" +
    "			<button class=\"button button-clear button-light col white\" ui-sref=\"login\">Log in</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</ion-view>");
}]);

angular.module("views/account/account.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/account/account.html",
    "<ion-view view-title=\"My Settings\">\n" +
    "    <ion-content class=\"bg-image\">\n" +
    "        <div class=\"list no-bottom-margin\">\n" +
    "            <!-- Profile section -->\n" +
    "            <a class=\"item item-icon-right\" ui-sref=\"tab.account-profile\">\n" +
    "                <i class=\"icon ion-chevron-right icon-accessory\"></i>\n" +
    "\n" +
    "                <h2>{{user.name.first}} {{user.name.last}}</h2>\n" +
    "                <p>{{user.gender | capitalise }}</p>\n" +
    "            </a>\n" +
    "            <!-- Notification -->\n" +
    "            <a class=\"item item-icon-right\" href=\"#/account/notifications\">Notifications <i class=\"icon ion-chevron-right icon-accessory\"></i></a>\n" +
    "            <!-- Settings -->\n" +
    "            <div class=\"item item-divider\">Information</div>\n" +
    "            <a class=\"item\" ng-click=\"inviteFriend()\">Invite a Friend</a>\n" +
    "            <a class=\"item\" ng-click=\"openLink('itms-apps://itunes.apple.com/app/id681106862')\">Review Mallzee</a>\n" +
    "            <a class=\"item\" ng-click=\"openLink('http://mallzee.com/privacy-policy')\">Privacy Policy</a>\n" +
    "            <a class=\"item\" ng-click=\"openLink('http://mallzee.com/terms-and-conditions')\">Terms &amp; Conditions</a>\n" +
    "            <a class=\"item\" ng-click=\"giveFeedback()\">Give Us Feedback</a>\n" +
    "            <!-- Account options -->\n" +
    "            <div class=\"item item-divider\">Account</div>\n" +
    "            <a class=\"item item-icon-right\" ng-click=\"logout()\">Sign Out<i class=\"icon ion-chevron-right icon-accessory\"></i></a>\n" +
    "        </div>\n" +
    "\n" +
    "        <current-version></current-version>\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("views/account/email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/account/email.html",
    "<ion-view view-title=\"Email Address\">\n" +
    "    <ion-content>\n" +
    "        <div class=\"row padding\">\n" +
    "        	Your email address is used to login to Mallzee and for password recovery\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"list\">\n" +
    "\n" +
    "	        <label class=\"item item-input\">\n" +
    "	        	<input type=\"text\" ng-model=\"user.email\" placeholder=\"Email Address\" />\n" +
    "	        </label>\n" +
    "\n" +
    "	        <button class=\"button button-full button-balanced\" ng-click=\"updateProfile()\">Save</button>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"row padding\">\n" +
    "        	We will never display your email to other Mallzee users\n" +
    "        </div>\n" +
    " 		<div class=\"row padding\">\n" +
    " 			Read our  <a href=\"#/\"> Privacy Policy </a>  to learn more\n" +
    " 		</div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/account/friends.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/account/friends.html",
    "<ion-view view-title=\"Friends\">\n" +
    "    <ion-nav-buttons side=\"primary\">\n" +
    "        <button class=\"button button-clear button-light\" ng-click=\"inviteFriends()\">\n" +
    "            Invite\n" +
    "        </button>\n" +
    "    </ion-nav-buttons>\n" +
    "    <ion-content class=\"has-header has-tabs\">\n" +
    "        <ion-list>\n" +
    "            <!-- Friends search bar -->\n" +
    "            <mlz-search placeholder=\"Who are you looking for?\" model=\"search.name.first\"></mlz-search>\n" +
    "\n" +
    "            <!-- Friends repeater -->\n" +
    "            <div class=\"item item-avatar\" ng-repeat=\"friend in friends | filter:search | orderBy:'name.full' track by friend._id\">\n" +
    "                <img ng-if=\"friend.fb_id\" ng-src=\"https://graph.facebook.com/{{friend.fb_id}}/picture?width=200&height=200\">\n" +
    "                <img ng-if=\"!friend.fb_id\" ng-src=\"res/images/anonymous.png\" class=\"profile-pic\"/>\n" +
    "\n" +
    "                <h2>{{friend.name.first}} {{friend.name.last}}</h2>\n" +
    "                <p>{{friend.gender | capitalise }}</p>\n" +
    "            </div>\n" +
    "        </ion-list>\n" +
    "    </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("views/account/mobile.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/account/mobile.html",
    "<ion-view view-title=\"Mobile #\">\n" +
    "    <ion-content>\n" +
    "        <div class=\"row padding\">\n" +
    "        	Friends who have your phone number in their address book will be able to find you on Mallzee\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"list\">\n" +
    "        	<li class=\"item item-toggle\">\n" +
    "                 Allow friends to find me\n" +
    "                 <label class=\"toggle toggle-balanced\">\n" +
    "                   <input type=\"checkbox\">\n" +
    "                   <div class=\"track\">\n" +
    "                     <div class=\"handle\"></div>\n" +
    "                   </div>\n" +
    "                 </label>\n" +
    "            </li>\n" +
    "\n" +
    "	        <label class=\"item item-input item-select\">\n" +
    "	            <div class=\"input-label\">\n" +
    "	                Country\n" +
    "	            </div>\n" +
    "	            <select class=\"item-note\" ng-model=\"user.country\">\n" +
    "	                <option>UK</option>\n" +
    "	                <option>US</option>\n" +
    "	            </select>\n" +
    "	        </label>\n" +
    "\n" +
    "	        <label class=\"item item-input\">\n" +
    "	        	<input type=\"number\" ng-model=\"user.mobile.number\" placeholder=\"Mobile Number\" />\n" +
    "	        </label>\n" +
    "\n" +
    "	        <label ng-if=\"!user.mobile.needs_verified\" class=\"item item-input\">\n" +
    "	        	<input type=\"number\" ng-model=\"user.mobile.verification_code\" placeholder=\"Verification code\" />\n" +
    "	        </label>\n" +
    "\n" +
    "	        <button class=\"button button-full button-balanced\" ng-click=\"verifyMobileNumber()\">Verify</button>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"row padding\">\n" +
    "        	We will never display your phone number to other Mallzee users\n" +
    "        </div>\n" +
    " 		<div class=\"row padding\">\n" +
    " 			Read our  <a href=\"#/\"> Privacy Policy </a>  to learn more\n" +
    " 		</div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/account/notifications.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/account/notifications.html",
    "<ion-view view-title=\"Notifications\">\n" +
    "  <ion-content>\n" +
    "    <ion-list>\n" +
    "      <div class=\"item item-divider\">Push Notifications</div>\n" +
    "      <div class=\"item item-toggle allow-click\">\n" +
    "          Price Drop\n" +
    "           <label class=\"toggle toggle-balanced\" ng-click=\"help('push-pricedrop')\">\n" +
    "             <input type=\"checkbox\" ng-model=\"user.settings.notifications.push.price_drop\" ng-change=\"updateProfile(user)\">\n" +
    "             <div class=\"track\">\n" +
    "               <div class=\"handle\"></div>\n" +
    "             </div>\n" +
    "           </label>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"item item-divider\" >Email Notifications</div>\n" +
    "      <div class=\"item item-toggle allow-click\" ng-click=\"help('email-pricedrop')\">\n" +
    "           Price Drop\n" +
    "           <label class=\"toggle toggle-balanced\" ion-stop-event=\"click\">\n" +
    "             <input type=\"checkbox\" ng-model=\"user.settings.notifications.email.price_drop\" ng-change=\"updateProfile(user)\">\n" +
    "             <div class=\"track\">\n" +
    "               <div class=\"handle\"></div>\n" +
    "             </div>\n" +
    "           </label>\n" +
    "      </div>\n" +
    "\n" +
    "    </ion-list>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/account/profile.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/account/profile.html",
    "<ion-view view-title=\"My Profile\">\n" +
    "    <ion-content class=\"profile\">\n" +
    "        <div class=\"list\">\n" +
    "            <!-- Details -->\n" +
    "            <div class=\"item item-divider\"></div>\n" +
    "\n" +
    "            <label class=\"item item-input\">\n" +
    "                <span class=\"input-label\">First Name</span>\n" +
    "                <input type=\"text\" ng-model=\"user.name.first\" />\n" +
    "            </label>\n" +
    "\n" +
    "            <label class=\"item item-input\">\n" +
    "                <span class=\"input-label\">Last Name</span>\n" +
    "                <input type=\"text\" ng-model=\"user.name.last\" />\n" +
    "            </label>\n" +
    "\n" +
    "            <a class=\"item item-icon-right\" href=\"#/account/profile/email\">\n" +
    "                Email\n" +
    "                <span class=\"item-note\">{{user.email}}</span>\n" +
    "                <i class=\"icon ion-chevron-right icon-accessory\"></i>\n" +
    "            </a>\n" +
    "\n" +
    "            <label class=\"item item-input item-select\">\n" +
    "                <div class=\"input-label\">\n" +
    "                    Gender\n" +
    "                </div>\n" +
    "                <select class=\"item-note\" ng-model=\"user.gender\">\n" +
    "                    <option value=\"male\" ng-selected=\"user.gender === 'male'\">Male</option>\n" +
    "                    <option value=\"female\" ng-selected=\"user.gender === 'female'\">Female</option>\n" +
    "                </select>\n" +
    "            </label>\n" +
    "\n" +
    "            <label class=\"item item-input\">\n" +
    "                <span class=\"input-label\">Birthday</span>\n" +
    "                <input type=\"date\" ng-model=\"user.birthday\" />\n" +
    "            </label>\n" +
    "\n" +
    "            <label class=\"item item-input item-select\">\n" +
    "                <div class=\"input-label\">\n" +
    "                    Region\n" +
    "                </div>\n" +
    "                <select class=\"item-note\" ng-model=\"user.regions[0]\">\n" +
    "                    <option value=\"GBR\" ng-selected=\"user.regions[0] === 'GBR'\">United Kingdom</option>\n" +
    "                    <option value=\"USA\" ng-selected=\"user.regions[0] === 'USA'\">USA</option>\n" +
    "                </select>\n" +
    "            </label>\n" +
    "\n" +
    "            <!--a class=\"item item-icon-right\" href=\"#/account/profile/mobile\">\n" +
    "                Mobile Number\n" +
    "                <span class=\"item-note\">{{user.phone.mobile}}</span>\n" +
    "                <i class=\"icon ion-chevron-right icon-accessory\"></i>\n" +
    "            </a-->\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"padding\">\n" +
    "            <button class=\"button button-block button-balanced\" ng-click=\"updateProfile(user)\">Save</button>\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/account/settings.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/account/settings.html",
    "<ion-view view-title=\"Settings\">\n" +
    "    <ion-content>\n" +
    "        <div class=\"list\">\n" +
    "\n" +
    "            <!-- Privacy options -->\n" +
    "            <div class=\"item item-divider\"></div>\n" +
    "            <a class=\"item\" href=\"#/walkthrough\">Mallzee Walkthrough</a>\n" +
    "            <a class=\"item\" ng-click=\"window.open('http://mallzee.com/privacy-policy', '_blank', 'location=no,closebuttoncaption=Back to Mallzee');\">Privacy Policy</a>\n" +
    "            <a class=\"item\" ng-click=\"window.open('http://mallzee.com/terms-and-conditions', '_blank', 'location=no,closebuttoncaption=Back to Mallzee');\">Terms &amp; Conditions</a>\n" +
    "            <a class=\"item\" ng-click=\"window.open('mailto:feedback@mallzee.zendesk.com', '_blank', 'location=no,closebuttoncaption=Back to Mallzee');\">Give Us Feedback</a>\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "\n" +
    "");
}]);

angular.module("views/brands/brand.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/brands/brand.html",
    "<ion-view view-title=\"{{brand.name}}\">\n" +
    "    <ion-content delegate-handle=\"brand\" class=\"padding\">\n" +
    "\n" +
    "\n" +
    "        <!-- Featured brands -->\n" +
    "        <div class=\"card\">\n" +
    "          <div class=\"item\">New in from {{brand.name}}</div>\n" +
    "          <ion-pane class=\"item item-full-width lookbook\">\n" +
    "            <ion-slide-box delegate-handle=\"brand-products\" on-slide-changed=\"updateSlideIndex($index)\">\n" +
    "              <ion-slide ng-repeat=\"product in brand.products | limitTo:5\" ng-click=\"ProductModalService.show(product, context)\">\n" +
    "                <mlz-img src=\"{{product.merchants[0].stock[0].images[0]}}\"></mlz-img>\n" +
    "              </ion-slide>\n" +
    "            </ion-slide-box>\n" +
    "            <div class=\"pager\"><span ng-repeat=\"product in brand.products | limitTo:5\" ng-class=\"{'active': $index === view.currentSlideIndex}\"></span></div>\n" +
    "          </ion-pane>\n" +
    "        </div>\n" +
    "\n" +
    "        <button class=\"button button-block button-outline button-balanced\" ng-click=\"shopBrand(brand)\" ng-if=\"view.shoppingAvailable\">Shop the brand</button>\n" +
    "\n" +
    "        <div class=\"card\">\n" +
    "          <div class=\"item\">Description</div>\n" +
    "            <!--div class=\"item item-icon-left\"><i class=\"icon icon-price primary\"></i> <span ng-repeat=\"bags in _.range(0, brand.info.price_min)\">&pound;</span> - <i ng-repeat=\"bags in _.range(0, brand.info.price_max)\">&pound;</i></div-->\n" +
    "\n" +
    "            <!--div class=\"item item-text-wrap item-icon-left\"><i class=\"icon icon-delivery primary\"></i> {{brand.info.delivery}}</div>\n" +
    "\n" +
    "            <div class=\"item item-text-wrap item-icon-left\"><i class=\"icon icon-returns primary\"></i> {{brand.info.returns}}</div-->\n" +
    "\n" +
    "            <div class=\"item item-text-wrap\" ng-bind=\"brand.info.description\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <button class=\"button button-block button-outline\" ng-class=\"{'button-assertive':brand.status === 'favourite', 'button-calm':brand.status !== 'favourite'}\" ng-click=\"toggleFavouriteBrand(brand)\" ng-bind=\"brand.status !== 'favourite' ? 'Favourite brand' : 'Unfavourite brand' \"></button>\n" +
    "\n" +
    "        <button class=\"button button-block button-outline\" ng-class=\"{'button-assertive':brand.status !== 'hidden', 'button-calm':brand.status === 'hidden'}\" ng-click=\"toggleHiddenBrand(brand)\" ng-bind=\"brand.status === 'hidden' ? 'Restore Brand' : 'Hide Brand'\"></button>\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/brands/brands.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/brands/brands.html",
    "<ion-view view-title=\"Brands\">\n" +
    "  <ion-content delegate-handle=\"brands\" class=\"bg-image\">\n" +
    "\n" +
    "    <!-- Brands search bar -->\n" +
    "    <mlz-search placeholder=\"What brand are you looking for?\" model=\"view.search.name\" on-focus=\"simplifyView(true)\" on-blur=\"simplifyView(false)\"></mlz-search>\n" +
    "\n" +
    "    <!-- Featured brands -->\n" +
    "    <div class=\"padding-left padding-right padding-top on-keyboard-hide\">\n" +
    "      <ion-pane class=\"featured\">\n" +
    "        <ion-slide-box delegate-handle=\"featured\" on-slide-changed=\"updateSlideIndex($index)\" auto-play=\"3000\">\n" +
    "          <ion-slide ng-repeat=\"brand in brands.records | filter:filter | orderBy:view.order track by brand._id\" ng-click=\"shopBrand(brand)\" ng-controller=\"BrandCtrl\">\n" +
    "            <h2 ng-if=\"brand.featured.text\" class=\"left\">{{brand.featured[Me.gender].text}}</h2><mlz-img src=\"{{brand.featured[user.gender].image}}\"></mlz-img>\n" +
    "          </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "        <div class=\"pager\"><span ng-repeat=\"brand in brands.records | filter:filter\" ng-class=\"{'active': $index === view.currentSlideIndex}\"></span></div>\n" +
    "      </ion-pane>\n" +
    "    </div>\n" +
    "\n" +
    "    <ion-list delegate-handle=\"brands-list\" show-delete=\"view.editingBrands\">\n" +
    "      <!-- The users selected brands -->\n" +
    "      <ion-item class=\"item item-brand item-full-width\" collection-repeat=\"brand in brands.records | orderBy:['statusOrder','name'] | filter:view.search track by brand._id\" collection-item-width=\"'100%'\" collection-item-height=\"53\" ng-click=\"shopBrand(brand)\" ng-show=\"brands.records.length > 0\" ng-class=\"{'item-disabled':brand.status === 'hidden'}\" ng-controller=\"BrandCtrl\">\n" +
    "        <button class=\"button button-clear\" ng-click=\"toggleBrand(brand)\" ion-stop-event=\"click\">\n" +
    "          <i class=\"icon\" ng-class=\"{'icon-favourite': brand.status !== 'favourite' && brand.status !== 'hidden', 'icon-favourite-active': brand.status === 'favourite', 'icon-eye-hidden': brand.status === 'hidden'}\"></i>\n" +
    "        </button>\n" +
    "        <mlz-img src=\"{{brand.logo}}\"></mlz-img>\n" +
    "        <button class=\"button button-clear\" ng-click=\"viewBrandInfo(brand)\" ion-stop-event=\"click\">\n" +
    "          <i class=\"icon icon-information\"></i>\n" +
    "        </button>\n" +
    "\n" +
    "        <!-- Swipe buttons -->\n" +
    "        <ion-option-button ng-class=\"{'button-calm': brand.status === 'hidden', 'button-assertive': brand.status !== 'hidden'}\" ng-click=\"toggleHiddenBrand(brand)\">{{brand.status === 'hidden' ? 'Show' : 'Hide'}}</ion-option-button>\n" +
    "\n" +
    "        <!-- Edit buttons -->\n" +
    "        <ion-delete-button class=\"icon icon-eye-hidden\" ion-stop-event=\"click\" ng-click=\"toggleHiddenBrand(brand)\"></ion-delete-button>\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "\n" +
    "    <!-- Empty screen card -->\n" +
    "    <div class=\"padding empty center\" ng-hide=\"brands.records.length > 0\">\n" +
    "      <h1>No brands found</h1>\n" +
    "      <img class=\"perc70\" src=\"res/images/empty-saved.png\" />\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/brands/modal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/brands/modal.html",
    "<div class=\"modal\" ng-controller=\"BrandCtrl\">\n" +
    "    <ion-header-bar class=\"bar-dark\">\n" +
    "        <div class=\"buttons\">\n" +
    "            <button class=\"button button-clear button-light\" ng-click=\"BrandModalService.hide()\"><i class=\"icon icon-cross\"></i></button>\n" +
    "        </div>\n" +
    "        <h1 class=\"title\">{{brand.name}}</h1>\n" +
    "    </ion-header-bar>\n" +
    "    <ng-include src=\"'views/brands/brand.html'\"></ng-include>\n" +
    "</div>");
}]);

angular.module("views/products/filters.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/products/filters.html",
    "<div class=\"modal filters\" ng-controller=\"FilterCtrl\">\n" +
    "    <ion-header-bar class=\"bar-dark\">\n" +
    "        <div class=\"buttons button-secondary\">\n" +
    "            <button ng-show=\"hasFilterSelection(filters)\" class=\"button button-clear button-light\" ng-click=\"clearFilters(filters)\">Clear</button>\n" +
    "        </div>\n" +
    "        <h1 class=\"title\">Filter Products</h1>\n" +
    "        <div class=\"buttons button-primary\">\n" +
    "            <button class=\"button button-clear button-light\" ng-click=\"applyFilters(filters)\">{{ hasFilterSelection(filters) ? 'Apply' : 'Close' }}</button>\n" +
    "        </div>\n" +
    "    </ion-header-bar>\n" +
    "\n" +
    "    <ion-content delegate-handle=\"filters\" scroll=\"false\">\n" +
    "        <!-- product filter search bar -->\n" +
    "        <mlz-search placeholder=\"type to search for an item...\" model=\"filters.search\" ng-enter=\"applyFilters(filters)\"></mlz-search>\n" +
    "\n" +
    "        <!-- product type picker -->\n" +
    "        <div ng-show=\"filters.type.length > 0\">\n" +
    "            <div class=\"item item-divider\">Type</div>\n" +
    "            <ion-spinner delegate-handle=\"types\" class=\"types\" items=\"filters.type\" item-width=\"78\" item-height=\"70\" ng-class=\"{'filter-active': hasSelection(filters.type)}\">\n" +
    "                <div class=\"button button-clear type icon-{{type.key}}-{{filters.gender}}\" ng-repeat=\"type in filters.type\" ng-class=\"{'selected': type.selected}\" ng-click=\"toggleFilterSelection(filters, 'type', type)\"><span ng-bind=\"type.key\"></span><span class=\"tick ion-checkmark\" ng-show=\"type.selected\"></span></div>\n" +
    "            </ion-spinner>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- product colour picker -->\n" +
    "        <div ng-show=\"filters.colour.length > 0\">\n" +
    "            <div class=\"item item-divider\">Colour</div>\n" +
    "            <ion-spinner delegate-handle=\"colours\" class=\"colours\" items=\"filters.colour\" item-width=\"70\" item-height=\"70\" ng-class=\"{'filter-active': hasSelection(filters.colour)}\">\n" +
    "                <div class=\"button button-clear colour {{colour.key}}\" ng-repeat=\"colour in filters.colour\" ng-class=\"{'selected': colour.selected}\" style=\"background-color: {{colour.hex}}\" ng-click=\"toggleFilterSelection(filters, 'colour', colour)\"><span ng-bind=\"colour.key\"></span><span class=\"tick ion-checkmark\" ng-show=\"colour.selected\"></span></div>\n" +
    "            </ion-spinner>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- product price range picker $filter('currency')(this.price[key], '£'); -->\n" +
    "        <div class=\"item item-divider price-range\">Price Range</div>\n" +
    "        <form class=\"row price-range\">\n" +
    "            <label class=\"col col-40 price-label\">{{view.currency}} From<input class=\"price-input\" ng-model=\"filters.min_price\" type=\"number\" step=\"1\"></label>\n" +
    "            <div class=\"col col-20 price-divider\">-</div>\n" +
    "            <label class=\"col col-40 price-label\">{{view.currency}} To<input class=\"price-input\" ng-model=\"filters.max_price\" type=\"number\" step=\"1\"></label>\n" +
    "        </form>\n" +
    "\n" +
    "    </ion-content>\n" +
    "\n" +
    "    <ion-footer-bar class=\"bar-light\" ng-click=\"applyFilters(filters)\">\n" +
    "      <div ng-show=\"products.loading\" class=\"title\">Searching ...</div>\n" +
    "      <div ng-hide=\"products.loading\" class=\"title\">{{products.count}} Products found</div>\n" +
    "    </ion-footer-bar>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/products/information.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/products/information.html",
    "<ion-content delegate-handle=\"product\" class=\"product-information\">\n" +
    "  <div class=\"card\">\n" +
    "    <div ng-if=\"stockItems.length > 1 && !view.savedProduct\" class=\"item row info\">\n" +
    "        <div class=\"col col-30 brand-logo-details\" ng-click=\"viewBrand(product.brand)\"><img class=\"brand-logo\" ng-src=\"{{product.brand.logo}}\" /></div>\n" +
    "        <div class=\"col col-20 center\"><mlz-colours radius=\"14\" inner-radius=\"8\" colours=\"product.colours\"></mlz-colours></div>\n" +
    "        <div class=\"col col-20 type-logo\"><i class=\"icon icon-{{product.type}}-{{product.gender}} {{product.merchants[0].stock[0].colour.display}}\"></i></div>\n" +
    "        <div class=\"col col-30 price\" ng-class=\"{'on-sale': product.isOnSale}\"><div class=\"sale\" ng-if=\"product.isOnSale\" ion-stop-event=\"click\" ng-click=\"buy(product, context, view.merchantIndex, view.stockIndex)\">was {{product.originalCost}}</div>\n" +
    "        <button class=\"button button-balanced button-rounded\"  ion-stop-event=\"click\" ng-click=\"buy(product, context, view.merchantIndex, view.stockIndex)\">Buy {{product.cost}}</button></div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"stockItems.length === 1 || view.savedProduct\" class=\"item row info\">\n" +
    "        <div class=\"col col-40 brand-logo-details\" ng-click=\"viewBrand(product.brand)\"><img class=\"brand-logo\" ng-src=\"{{product.brand.logo}}\" /></div>\n" +
    "        <div class=\"col col-20 type-logo\"><i class=\"icon icon-{{product.type}}-{{product.gender}} {{product.merchants[0].stock[0].colour.display}}\"></i></div>\n" +
    "        <div class=\"col col-40 price\"><div class=\"sale\" ng-if=\"product.isOnSale\" ion-stop-event=\"click\" ng-click=\"buy(product, context, view.merchantIndex, view.stockIndex)\">was {{product.originalCost}}</div>\n" +
    "        <button class=\"button button-balanced button-rounded\"  ion-stop-event=\"click\" ng-click=\"buy(product, context, view.merchantIndex, view.stockIndex)\">Buy {{product.cost}}</button></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"item item-text-wrap\">\n" +
    "      <h2 class=\"center\" ng-bind=\"product.name\"></h2>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Featured image -->\n" +
    "    <div class=\"item item-full-width\">\n" +
    "      <ion-pane class=\"lookbook\" ng-repeat=\"stockItem in stockItems\" ng-if=\"$index === view.stockIndex\">\n" +
    "        <ion-slide-box delegate-handle=\"product-images\" class=\"item lookbook\" on-slide-changed=\"updateSlideIndex($index)\">\n" +
    "          <ion-slide ng-repeat=\"image in stockItem.images\" ng-click=\"viewImages(product.images, $index)\">\n" +
    "            <mlz-img class=\"{{product.type}}\" src=\"{{image}}\" ></mlz-img>\n" +
    "          </ion-slide>\n" +
    "        </ion-slide-box>\n" +
    "        <div class=\"pager\"><span ng-repeat=\"image in stockItems[view.stockIndex].images\" ng-class=\"{'active': $index === view.currentSlideIndex}\"></span></div>\n" +
    "      </ion-pane>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"card\" ng-if=\"stockItems.length > 1\">\n" +
    "    <div class=\"item item-divider\">Colours</div>\n" +
    "\n" +
    "    <div class=\"item row splitter colours\">\n" +
    "      <div class=\"col colour\" ng-repeat=\"stockItem in stockItems\" ng-click=\"updateStockIndex($index)\"><span ng-style=\"{'background-color':stockItem.colour.hex}\"></span></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"card\" ng-if=\"stockItems[view.stockIndex].sizes[0].size | sizeAvailible\">\n" +
    "    <div class=\"item item-divider\">Sizes</div>\n" +
    "\n" +
    "    <div class=\"item row splitter center\">\n" +
    "      <div class=\"col\" ng-repeat=\"size in stockItems[view.stockIndex].sizes\">\n" +
    "        <div class=\"size\" ng-class=\"{'disabled': size.quantity === 0}\">\n" +
    "          {{size.size | uppercase}}\n" +
    "          <div class=\"low-stock\" ng-if=\"size.quantity > 0 && size.quantity < view.lowStockThreshold\">Low stock</div>\n" +
    "          <div class=\"out-of-stock\" ng-if=\"size.quantity === 0 \">Out of stock</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"padding\">\n" +
    "    <button class=\"button button-balanced button-block button-bold\" ng-click=\"buy(product, context, view.merchantIndex, view.stockIndex)\">Buy on store</button>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"card\">\n" +
    "    <div class=\"item item-divider\">Retailer Information</div>\n" +
    "\n" +
    "    <div class=\"item item-text-wrap item-icon-left\"><i class=\"icon icon-merchant primary\"></i> {{product.merchants[0].name}}</div>\n" +
    "    <div class=\"item item-text-wrap item-icon-left\"><i class=\"icon icon-delivery primary\"></i> {{product.merchants[0].info.delivery}}</div>\n" +
    "\n" +
    "    <div class=\"item item-text-wrap item-icon-left\"><i class=\"icon icon-returns primary\"></i> {{product.merchants[0].info.returns}}</div>\n" +
    "\n" +
    "    <div class=\"item item-divider\">Product Information</div>\n" +
    "    <div class=\"item item-text-wrap\"><p ng-bind-html=\"product.description\"></p></div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"padding\" ng-if=\"view.savedProduct === true\">\n" +
    "    <button class=\"button button-block button-outline button-assertive\" ng-click=\"deleteUserProduct(product)\">\n" +
    "        Delete\n" +
    "    </button>\n" +
    "  </div>\n" +
    "\n" +
    "</ion-content>\n" +
    "");
}]);

angular.module("views/products/modal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/products/modal.html",
    "<div class=\"modal\" ng-controller=\"ProductCtrl\">\n" +
    "  <ion-header-bar class=\"bar-dark\">\n" +
    "      <div class=\"buttons\">\n" +
    "          <button class=\"button button-clear button-light\" ng-click=\"ProductModalService.hide()\"><i class=\"icon icon-cross\"></i></button>\n" +
    "      </div>\n" +
    "      <h1 class=\"title\">Details</h1>\n" +
    "      <div class=\"buttons\">\n" +
    "        <button class=\"button button-clear button-light\" ng-click=\"share(product)\"><i class=\"icon ion-ios7-upload-outline\"></i></button>\n" +
    "      </div>\n" +
    "  </ion-header-bar>\n" +
    "\n" +
    "  <ng-include src=\"'views/products/information.html'\"></ng-include>\n" +
    "\n" +
    "  <ion-footer-bar class=\"bar-light no-margin\">\n" +
    "    <div class=\"title buttons row\">\n" +
    "      <button class=\"button button-clear col button-assertive\" ng-click=\"hide(product, context, true)\">Hide <i class=\"icon icon-thumb-down assertive\"></i></button>\n" +
    "      <button class=\"button button-clear col button-balanced\" ng-click=\"save(product, context, true)\"><i class=\"icon icon-thumb-up balanced\"></i> Save</button>\n" +
    "    </div>\n" +
    "  </ion-footer-bar>\n" +
    "</div>");
}]);

angular.module("views/products/product.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/products/product.html",
    "<div class=\"wrapper\" ng-click=\"modal.showProduct(product, context)\">\n" +
    "    <div class=\"image-center\">\n" +
    "        <mlz-img class=\"full-image\" src=\"{{product.merchants[0].stock[0].images[0]}}\"></mlz-img>\n" +
    "    </div>\n" +
    "\n" +
    "    <img class=\"brand-logo\" ng-src=\"{{product.brand.logo}}\" ion-stop-event=\"click\" ng-click=\"viewBrand(product.brand)\" />\n" +
    "\n" +
    "    <div class=\"updated\" am-time-ago=\"product.updated_at\"></div>\n" +
    "\n" +
    "    <div class=\"price\">\n" +
    "        <div class=\"type icon-{{product.type}}-{{product.gender}} {{product.colour}}\"></div>\n" +
    "        <mlz-colours ng-if=\"product.colours.length > 1\" radius=\"14\" inner-radius=\"8\" colours=\"product.colours\"></mlz-colours>\n" +
    "        <div class=\"sale\" ng-show=\"product.isOnSale\" ion-stop-event=\"click\" ng-click=\"buy(product, context, view.merchantIndex, view.stockIndex)\">was {{product.originalCost}}</div>\n" +
    "        <button class=\"button button-balanced button-rounded\"  ion-stop-event=\"click\" ng-click=\"buy(product, context, view.merchantIndex, view.stockIndex)\">Buy {{product.cost}}</button>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"button-bar row padding\">\n" +
    "        <div class=\"col\"><button class=\"button button-assertive button-block button-outline button-bold button-circle pull-right\" ion-stop-event=\"click\" ng-click=\"hide(product, context)\"><i class=\"icon icon-thumb-down\"></i></button></div>\n" +
    "        <div class=\"col\"><button class=\"button button-balanced button-block button-outline button-bold button-circle pull-left\" ion-stop-event=\"click\" ng-click=\"save(product, context)\"><i class=\"icon icon-thumb-up\"></i></button></div>\n" +
    "    </div>\n" +
    "\n" +
    "    <img ng-if=\"product.merchants[0].stock[0].pixel\" ng-src=\"{{product.merchants[0].stock[0].pixel}}\" />\n" +
    "</div>");
}]);

angular.module("views/products/products-list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/products/products-list.html",
    "<ion-content scroll=\"false\">\n" +
    "\n" +
    "    <ion-pane ng-switch on=\"view.multiView\" ng-show=\"!loading && products.records && products.records.length > 1\" class=\"products-pane\" ng-class=\"{'loading-pane':view.loading}\">\n" +
    "        <!-- Products multi view -->\n" +
    "        <ion-scroll mlz-scroll-window ng-switch-when=\"true\" scrollbar-x=\"false\" scrollbar-y=\"false\" on-scroll=\"checkScroll()\" class=\"products-multi switch-fade\" delegate-handle=\"multiview\">\n" +
    "\n" +
    "            <ng-include src=\"'views/products/products-multi.html'\"></ng-include>\n" +
    "\n" +
    "            <!-- TODO: Hack until ion-infinite-scroll directive works correctly with collection-repeat -->\n" +
    "            <div class=\"loading\" ng-if=\"products.has_more\"></div>\n" +
    "        </ion-scroll>\n" +
    "\n" +
    "        <!-- TODO: Hack until ion-infinite-scroll directive works correctly with collection-repeat -->\n" +
    "        <div class=\"loading-spinner\" ng-show=\"view.loading && products.has_more\"><i class=\"icon\" ng-class=\"{'ion-loading-c': products.has_more, 'ion-heart': !products.has_more}\"></i></div>\n" +
    "\n" +
    "        <!-- Products swipe view -->\n" +
    "        <div ng-switch-when=\"false\" class=\"products-swipe switch-fade\">\n" +
    "            <ng-include src=\"'views/products/products-swipe.html'\"></ng-include>\n" +
    "        </div>\n" +
    "    </ion-pane>\n" +
    "\n" +
    "    <!-- Loading card when we fetch the products -->\n" +
    "    <div class=\"empty padding center\" ng-show=\"loading && products.count === 0\">\n" +
    "        <h1>Hunting out products just for you</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Empty card when we fetch the products -->\n" +
    "    <div class=\"empty padding center\" ng-show=\"!loading && products.count === 0\">\n" +
    "        <h1>No products could be found</h1>\n" +
    "        <img class=\"perc30\" src=\"res/images/empty-products.png\" />\n" +
    "        <button class=\"item button button-block button-balanced button-outline\" ng-click=\"modal.showFilter(products)\" ng-show=\"products.metadata.selection\">Try another filter</button>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</ion-content>");
}]);

angular.module("views/products/products-modal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/products/products-modal.html",
    "<div class=\"modal\">\n" +
    "  <ion-header-bar class=\"bar-dark\">\n" +
    "    <div class=\"buttons\">\n" +
    "        <button class=\"button button-clear button-light\" ng-click=\"ProductsModalService.hide()\"><i class=\"icon icon-cross\"></i></button>\n" +
    "    </div>\n" +
    "\n" +
    "    <h1 class=\"title\" ng-bind=\"title\"></h1>\n" +
    "\n" +
    "    <div>\n" +
    "      <button class=\"button button-clear button-light view-switch\" ng-disabled=\"products.count === 0 && !products.metadata.selection\" ng-click=\"view.multiView = !view.multiView\">\n" +
    "        <i class=\"icon\" ng-class=\"{'icon-thumb-up': view.multiView, 'icon-multi-view': !view.multiView}\"></i>\n" +
    "      </button>\n" +
    "\n" +
    "      <button class=\"button button-clear button-light\" ng-disabled=\"products.count === 0 && !products.metadata.selection\"  ng-click=\"modal.showFilter(products)\">\n" +
    "          <i class=\"icon icon-filter\" ng-class=\"{'active': products.metadata.selection}\"></i>\n" +
    "      </button>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "\n" +
    "  <ng-include src=\"'views/products/products-list.html'\"></ng-include>\n" +
    "\n" +
    "</div>");
}]);

angular.module("views/products/products-multi.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/products/products-multi.html",
    "<div class=\"product-multi\"\n" +
    "    collection-repeat=\"product in products.records track by product._id\"\n" +
    "    collection-item-width=\"view.productWidth\"\n" +
    "    collection-item-height=\"view.productHeight\"\n" +
    "    ng-click=\"modal.showProduct(product, context)\">\n" +
    "\n" +
    "    <mlz-img class=\"multi-image\" src=\"{{product.merchants[0].stock[0].images[0]}}\" id=\"{{$id}}\"></mlz-img>\n" +
    "    <div class=\"info\">{{product.brand.name}}<span class=\"price\" ng-class=\"{'on-sale':product.isOnSale}\">{{product.cost}}</span><span class=\"sale\" ng-show=\"product.isOnSale\">{{product.originalCost}}</span></div>\n" +
    "</div>");
}]);

angular.module("views/products/products-swipe.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/products/products-swipe.html",
    "<!-- Product listings -->\n" +
    "<ion-pane>\n" +
    "    <mlz-help title=\"{{view.helpTitle}}\" message=\"{{view.helpMessage}}\" on-close=\"closeHelp()\" hide=\"view.settings.hide_help_sw\" ng-hide=\"view.settings.hide_help_sw\"></mlz-help>\n" +
    "    <div class=\"pane slide-up\">\n" +
    "        <mlz-product\n" +
    "            ng-repeat=\"product in products.records | limitTo:1\"\n" +
    "            product=\"product\"\n" +
    "            swipe-right=\"save(product, context)\"\n" +
    "            swipe-left=\"hide(product, context)\">\n" +
    "        </mlz-product>\n" +
    "    </div>\n" +
    "</ion-pane>\n" +
    "");
}]);

angular.module("views/products/products.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/products/products.html",
    "<ion-view view-title=\"{{view.title}}\">\n" +
    "\n" +
    "    <ion-nav-buttons side=\"secondary\">\n" +
    "        <button class=\"button button-clear button-light view-switch\" ng-click=\"view.multiView = !view.multiView\" ng-show=\"!(view.disableFilters || products.records === undefined)\">\n" +
    "            <i class=\"icon\" ng-class=\"{'icon-thumb-up': view.multiView, 'icon-multi-view': !view.multiView}\"></i>\n" +
    "        </button>\n" +
    "        <button class=\"button button-clear button-light\" ng-class=\"{'enabled': view.filtersSelected}\" ng-click=\"modal.showFilter(products)\" ng-show=\"!(view.disableFilters || products.records === undefined)\">\n" +
    "            <i class=\"icon icon-filter\"></i>\n" +
    "        </button>\n" +
    "    </ion-nav-buttons>\n" +
    "\n" +
    "    <ion-content scroll=\"false\" class=\"bg-image products\">\n" +
    "    	<ion-pane ng-switch on=\"view.multiView\" class=\"products-pane\" ng-class=\"{'loading-pane':products.loading}\">\n" +
    "    		<!-- Products multi view -->\n" +
    "	    	<ion-scroll mlz-scroll-window ng-switch-when=\"true\" scrollbar-x=\"false\" scrollbar-y=\"false\" on-scroll=\"checkScroll()\" class=\"products-multi switch-fade\" delegate-handle=\"multiview\">\n" +
    "\n" +
    "            	<ng-include src=\"'views/products/products-multi.html'\"></ng-include>\n" +
    "\n" +
    "                <!-- TODO: Hack until ion-infinite-scroll directive works correctly with collection-repeat -->\n" +
    "                <div class=\"loading\" ng-if=\"products.has_more\"></div>\n" +
    "		    </ion-scroll>\n" +
    "\n" +
    "            <!-- TODO: Hack until ion-infinite-scroll directive works correctly with collection-repeat -->\n" +
    "            <div class=\"loading-spinner\" ng-show=\"products.loading && products.has_more\"><i class=\"icon ion-loading-c\"></i></div>\n" +
    "\n" +
    "		    <!-- Products swipe view -->\n" +
    "		    <div ng-switch-when=\"false\" class=\"products-swipe switch-fade\">\n" +
    "		    	<ng-include src=\"'views/products/products-swipe.html'\"></ng-include>\n" +
    "		    </div>\n" +
    "	    </ion-pane>\n" +
    "\n" +
    "        <!-- Loading card when we fetch the products -->\n" +
    "        <div class=\"empty padding center\" ng-if=\"products.loading && (products.records === undefined || products.records.length === 0)\">\n" +
    "            <h1>Hunting out products from {{context.name}} just for you</h1>\n" +
    "            <img class=\"perc70\" src=\"res/images/empty-saved.png\" />\n" +
    "            <!-- TODO: Hack until ion-infinite-scroll directive works correctly with collection-repeat -->\n" +
    "            <div class=\"loading-spinner\" ng-show=\"products.loading\"><i class=\"icon ion-loading-c\"></i></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Empty card when we fetch the products and the user has swiped through them all -->\n" +
    "        <div class=\"empty padding center\" ng-if=\"!products.loading && !products.empty && products.records.length === 0\">\n" +
    "            <h1>No products left to show</h1>\n" +
    "            <img class=\"perc30\" src=\"res/images/empty-products.png\" />\n" +
    "            <button class=\"item button button-block button-balanced button-outline\" ng-click=\"modal.showFilter(products)\" ng-show=\"view.filtersSelected\">Try another filter</button>\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Empty card when we fetch the products and there are none to show -->\n" +
    "        <div class=\"empty padding center\" ng-if=\"!products.loading && products.empty\">\n" +
    "            <h1>No products could be found</h1>\n" +
    "            <img class=\"perc30\" src=\"res/images/empty-products.png\" />\n" +
    "            <button class=\"item button button-block button-balanced button-outline\" ng-click=\"modal.showFilter(products)\" ng-show=\"view.filtersSelected\">Try another filter</button>\n" +
    "        </div>\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "\n" +
    "");
}]);

angular.module("views/saved/popover.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/saved/popover.html",
    "<ion-popover-view>\n" +
    "    <ion-content>\n" +
    "      <!-- Saved item order selection -->\n" +
    "      <ion-list>\n" +
    "		    <ion-item class=\"item item-divider\">Order by</ion-item>\n" +
    "		    <ion-item class=\"item\" ng-repeat=\"option in view.filters.options track by option.value\" ng-class=\"{'item-full-width': !option.disabled, 'item-divider':option.disabled}\">\n" +
    "		    	<ion-radio ng-if=\"!option.disabled\" ng-model=\"view.selection\" value=\"{{option.value}}\" ng-change=\"update(option.value)\">{{option.name}}</ion-radio>\n" +
    "		    	<div ng-if=\"option.disabled\" ng-bind=\"option.name\"></div>\n" +
    "		    </ion-item>\n" +
    "	    </ion-list>\n" +
    "    </ion-content>\n" +
    "  </ion-popover-view>");
}]);

angular.module("views/saved/product.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/saved/product.html",
    "<ion-view view-title=\"{{product.name}}\">\n" +
    "    <ion-nav-buttons side=\"right\">\n" +
    "        <button class=\"button button-clear button-light\" ng-click=\"share(product)\"><i class=\"icon ion-ios7-upload-outline\"></i></button>\n" +
    "    </ion-nav-buttons>\n" +
    "\n" +
    "    <ng-include src=\"'views/products/information.html'\" ng-controller=\"ProductCtrl\"></ng-include>\n" +
    "\n" +
    "</ion-view>\n" +
    "\n" +
    "");
}]);

angular.module("views/saved/saved.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/saved/saved.html",
    "<ion-view view-title=\"Saved Items\">\n" +
    "  <ion-nav-buttons side=\"primary\">\n" +
    "    <button class=\"button button-clear button-light\" ng-click=\"openPopover($event)\"><i class=\"icon ion-more\"></i></button>\n" +
    "  </ion-nav-buttons>\n" +
    "  <ion-nav-buttons side=\"secondary\">\n" +
    "    <button class=\"button button-clear button-light\" ng-click=\"toggleEditUserProducts()\" ng-if=\"userproducts.records && userproducts.records.length > 0\" ng-bind=\"view.editTitle\">\n" +
    "    </button>\n" +
    "  </ion-nav-buttons>\n" +
    "  <ion-content delegate-handle=\"saved-items\" on-scroll-interval=\"100\" class=\"bg-image\">\n" +
    "    <!-- List of the users saved products -->\n" +
    "    <ion-list delegate-handle=\"saved-items-list\" show-delete=\"view.editingUserProducts\" ng-show=\"userproducts.records.length > 0\">\n" +
    "      <!-- Saved products -->\n" +
    "      <ion-item class=\"item-thumbnail-left item-product item-full-width\" collection-repeat=\"product in filteredproducts = (userproducts.records | orderBy:[view.order, 'updated_at'] | filter:view.filter:exact)\" collection-item-width=\"'100%'\" collection-item-height=\"101\" ng-click=\"viewUserProduct(product)\">\n" +
    "        <div class=\"item-image\"><mlz-img class=\"small-image\" src=\"{{product.merchants[0].stock[0].images[0]}}\"></mlz-img></div>\n" +
    "        <div class=\"item-price\">\n" +
    "          <span ng-class=\"{'on-sale': product.isOnSale}\"> {{product.cost}} <span ng-show=\"product.isOnSale\" class=\"sale\">{{product.originalCost}}</span></span>\n" +
    "          <div class=\"item-timestamp\" ng-show=\"product.updated_at\">Updated <span am-time-ago=\"product.updated_at\"></span></div>\n" +
    "        </div>\n" +
    "        <h2>{{product.name}}</h2>\n" +
    "        <p>{{product.context.name}}</p>\n" +
    "\n" +
    "        <div class=\"price-drop\" ng-if=\"product.price_drop\">Price Drop</div>\n" +
    "\n" +
    "        <!-- Swipe buttons -->\n" +
    "        <ion-option-button class=\"button-calm\" ng-click=\"share(product)\">Share</ion-option-button>\n" +
    "        <ion-option-button class=\"button-assertive\" ng-click=\"deleteUserProduct(product)\">Delete</ion-option-button>\n" +
    "\n" +
    "        <!-- Edit buttons -->\n" +
    "        <ion-delete-button class=\"ion-minus-circled\" ion-stop-event=\"click\" ng-click=\"deleteUserProduct(product)\"></ion-delete-button>\n" +
    "      </ion-item>\n" +
    "      <!-- TODO: Hack until ion-infinite-scroll directive works correctly with collection-repeat -->\n" +
    "      <!--div class=\"loading-spinner\" ng-show=\"view.loading && userproducts.has_more\"><i class=\"icon\" ng-class=\"{'ion-loading-c': userproducts.has_more, 'ion-heart': !userproducts.has_more}\"></i></div-->\n" +
    "    </ion-list>\n" +
    "\n" +
    "    <!-- Loading screen -->\n" +
    "    <div class=\"empty padding center\" ng-if=\"view.loading && (userproducts.records.length === 0 || filteredproducts.length > 0)\">\n" +
    "      <h1>Fetching your saved items</h1>\n" +
    "      <img class=\"perc70\" src=\"res/images/empty-saved.png\" />\n" +
    "    </div>\n" +
    "\n" +
    "    <!-- Empty screen card -->\n" +
    "    <div class=\"empty padding center\" ng-if=\"userproducts.records.length === 0 && !view.loading\">\n" +
    "      <h1>This is where your saved items live</h1>\n" +
    "      <img class=\"perc70\" src=\"res/images/empty-saved.png\" />\n" +
    "      <button class=\"item button button-block button-balanced button-outline\" ui-sref=\"tab.inspiration\">Get shopping</button>\n" +
    "    </div>\n" +
    "\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("views/style-feeds/add-brands.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/style-feeds/add-brands.html",
    "<div class=\"bar bar-header bar-clear\"></div>\n" +
    "<ion-content class=\"progress footer filters\">\n" +
    "\n" +
    "	<!-- Brands search bar -->\n" +
    "    <mlz-search placeholder=\"What brand are you looking for?\" model=\"search.key\"></mlz-search>\n" +
    "\n" +
    "	<ion-list ng-class=\"{'filter-active': hasSelected(filters.filter.brand)}\">\n" +
    "		<!-- The users selected brands -->\n" +
    "	    <ion-item class=\"item item-brand-logo brand\" ng-repeat=\"brand in filters.filter.brand | orderBy:'name' | orderBy:['order', 'key'] | filter:search\" ng-click=\"toggleFilter(filters.filter, 'brand', brand)\" ng-class=\"{'selected': brand.selected}\">\n" +
    "	        <img ng-src=\"{{brand.logo}}\" />\n" +
    "	        <span class=\"tick ion-checkmark\" ng-show=\"brand.selected\"></span>\n" +
    "	    </ion-item>\n" +
    "    </ion-list>\n" +
    "</ion-content>\n" +
    "");
}]);

angular.module("views/style-feeds/add-colours.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/style-feeds/add-colours.html",
    "<div class=\"bar bar-header bar-clear\"></div>\n" +
    "\n" +
    "<ion-content class=\"progress footer filters colours padding\" ng-class=\"{'filter-active': hasSelected(filters.filter.colour)}\">\n" +
    "	<div class=\"button button-clear colour {{colour.key}}\"\n" +
    "		ng-repeat=\"colour in filters.filter.colour\"\n" +
    "		ng-class=\"{'selected': colour.selected}\"\n" +
    "		ng-click=\"toggleFilter(filters.filter, 'colour', colour)\">\n" +
    "		<span ng-bind=\"colour.key\"></span>\n" +
    "		<span class=\"tick ion-checkmark\" ng-show=\"colour.selected\"></span>\n" +
    "	</div>\n" +
    "</ion-content>");
}]);

angular.module("views/style-feeds/add-name.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/style-feeds/add-name.html",
    "<div class=\"bar bar-header bar-clear\"></div>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <button class=\"round button icon-big icon\" ng-class=\"{'icon-camera': !stylefeed.image}\" ng-click=\"choosePhoto()\"><img ng-if=\"stylefeed.image\" mlz-camera-image ng-src=\"{{stylefeed.image}}\" /></button>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"list padding\">\n" +
    "  <label class=\"item item-input\">\n" +
    "    <input type=\"text\" tabindex=\"-1\" ng-model=\"stylefeed.name\" autofocus placeholder=\"Give your style feed a name\" ng-enter=\"walkthrough.closeKeyboard()\">\n" +
    "  </label>\n" +
    "\n" +
    "  <h5 class=\"center\">Select gender</h5>\n" +
    "  <div class=\"button-bar padding-top padding-bottom\">\n" +
    "    <button class=\"button button-balanced\" ng-class=\"{'button-outline': stylefeed.filter.gender !== 'male'}\" ng-click=\"setGender('male')\">Male</button>\n" +
    "    <button class=\"button button-balanced\" ng-class=\"{'button-outline': stylefeed.filter.gender !== 'female'}\" ng-click=\"setGender('female')\">Female</button>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("views/style-feeds/add-price.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/style-feeds/add-price.html",
    "<div class=\"bar bar-header bar-clear\"></div>\n" +
    "\n" +
    "<div class=\"padding\">\n" +
    "  <!-- product price range picker -->\n" +
    "    <h1 class=\"balanced\">Price Range</h1>\n" +
    "    <form class=\"row price-range\">\n" +
    "        <label class=\"col col-40 price-label\">{{view.currency}} From<input class=\"price-input\" ng-model=\"stylefeed.filter.min_price\" type=\"number\" step=\"1\"></label>\n" +
    "        <div class=\"col col-20 price-divider\">-</div>\n" +
    "        <label class=\"col col-40 price-label\">{{view.currency}} To<input class=\"price-input\" ng-model=\"stylefeed.filter.max_price\" type=\"number\" step=\"1\"></label>\n" +
    "    </form>\n" +
    "    <div class=\"padding-top\">\n" +
    "      <button class=\"button button-block button-outline button-balanced\" ng-click=\"saveStyleFeed(stylefeed)\">Save Style Feed</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("views/style-feeds/add-style-feed.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/style-feeds/add-style-feed.html",
    "<div class=\"modal stylefeed\" ng-controller=\"StyleFeedCtrl\">\n" +
    "  <ion-header-bar class=\"bar-dark\">\n" +
    "    <div class=\"buttons\">\n" +
    "      <button class=\"button button-clear button-light\" ng-click=\"cancelStyleFeed()\">Close</button>\n" +
    "    </div>\n" +
    "    <div class=\"title\" ng-bind=\"title\"></div>\n" +
    "    <div class=\"buttons\">\n" +
    "      <button class=\"button button-clear button-light\" ng-show=\"canSaveStyleFeed(stylefeed)\" ng-click=\"saveStyleFeed(stylefeed)\">Save</button>\n" +
    "    </div>\n" +
    "  </ion-header-bar>\n" +
    "\n" +
    "  <ion-content scroll=\"false\" class=\"has-header\">\n" +
    "    <ion-pane>\n" +
    "      <ion-slide-box delegate-handle=\"stylefeed\" on-slide-changed=\"calculateStyleFeed($index)\" disable-scroll=\"true\" class=\"header-pager\">\n" +
    "        <ion-slide ng-include=\"'views/style-feeds/add-name.html'\"></ion-slide>\n" +
    "        <ion-slide ng-include=\"'views/style-feeds/add-types.html'\"></ion-slide>\n" +
    "        <ion-slide ng-include=\"'views/style-feeds/add-colours.html'\"></ion-slide>\n" +
    "        <ion-slide ng-include=\"'views/style-feeds/add-brands.html'\"></ion-slide>\n" +
    "        <ion-slide ng-include=\"'views/style-feeds/add-price.html'\"></ion-slide>\n" +
    "        <ion-slide-pager></ion-slide-pager>\n" +
    "      </ion-slide-box>\n" +
    "    </ion-pane>\n" +
    "    <div class=\"bar bar-footer button-block button-balanced button-outline\">\n" +
    "      <button class=\"button button-clear\" ng-click=\"prev()\" ng-show=\"view.showPrev\">Prev</button>\n" +
    "      <div ng-show=\"view.loading\" class=\"title\">Searching...</div>\n" +
    "      <div ng-hide=\"view.loading\" class=\"title\">{{view.count}} Products found</div>\n" +
    "      <button class=\"button button-clear\" ng-click=\"next()\" ng-show=\"view.showNext\">Next</button>\n" +
    "    </div>\n" +
    "  </ion-content>\n" +
    "</div>");
}]);

angular.module("views/style-feeds/add-types.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/style-feeds/add-types.html",
    "<div class=\"bar bar-header bar-clear\"></div>\n" +
    "\n" +
    "<ion-content class=\"progress footer filters types padding\" ng-class=\"{'filter-active': hasSelected(filters.filter.type)}\">\n" +
    "	<div class=\"button button-clear type icon-{{type.key}}-{{stylefeed.filter.gender}}\"\n" +
    "		ng-repeat=\"type in filters.filter.type\"\n" +
    "		ng-class=\"{'selected': type.selected}\"\n" +
    "		ng-click=\"toggleFilter(filters.filter, 'type', type)\">\n" +
    "		<span ng-bind=\"type.key\"></span>\n" +
    "		<span class=\"tick ion-checkmark\" ng-show=\"type.selected\"></span>\n" +
    "	</div>\n" +
    "</ion-content>");
}]);

angular.module("views/style-feeds/style-feeds.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/style-feeds/style-feeds.html",
    "<ion-view view-title=\"Style Feeds\">\n" +
    "\n" +
    "    <ion-nav-buttons side=\"secondary\">\n" +
    "        <button class=\"button button-clear button-light\" ng-click=\"toggleEditingStyleFeeds()\" ng-show=\"stylefeeds.records.length > 0\">\n" +
    "            {{view.editTitle}}\n" +
    "        </button>\n" +
    "    </ion-nav-buttons>\n" +
    "\n" +
    "    <ion-nav-buttons side=\"primary\">\n" +
    "        <button class=\"button button-clear button-light\" ng-click=\"addStyleFeed()\">\n" +
    "            <i class=\"icon icon-new\"></i>\n" +
    "        </button>\n" +
    "    </ion-nav-buttons>\n" +
    "\n" +
    "    <ion-content class=\"bg-image\">\n" +
    "        <mlz-help on-close=\"closeHelp()\" title=\"{{view.helpTitle}}\" message=\"{{view.helpMessage}}\" hide=\"view.settings.hide_help_sf\" ng-hide=\"view.settings.hide_help_sf\"></mlz-help>\n" +
    "\n" +
    "        <ion-list show-delete=\"view.editingStyleFeeds\">\n" +
    "\n" +
    "            <!-- The users selected stylefeeds -->\n" +
    "            <ion-item\n" +
    "                class=\"item-thumbnail-left\"\n" +
    "                ng-repeat=\"stylefeed in (filteredRecords = (stylefeeds.records | orderBy:'name' | filter:view.search))\"\n" +
    "                ng-click=\"selectStyleFeed(stylefeed)\" style=\"pointer-events:initial\">\n" +
    "\n" +
    "                <!-- Item content -->\n" +
    "                <img ng-if=\"stylefeed.image\" mlz-camera-image ng-src=\"{{stylefeed.image}}\" class=\"round\" />\n" +
    "                <img ng-if=\"!stylefeed.image\" class=\"icon icon-polaroids round empty\" />\n" +
    "                <h2>{{stylefeed.name}}</h2>\n" +
    "                <p><span ng-show=\"stylefeed.new_count\">{{stylefeed.new_count}} new arrivals</span>&nbsp;</p>\n" +
    "                <div class=\"item-timestamp\" ng-if=\"stylefeed.counted_at\">Updated <span am-time-ago=\"stylefeed.counted_at\"></span></div>\n" +
    "\n" +
    "                <!-- Swipe buttons -->\n" +
    "                <ion-option-button class=\"button-calm\" ng-click=\"editStyleFeed(stylefeed)\">Edit</ion-option-button>\n" +
    "                <ion-option-button class=\"button-assertive\" ng-click=\"deleteStyleFeed(stylefeed)\">Delete</ion-option-button>\n" +
    "\n" +
    "                <!-- Edit buttons -->\n" +
    "                <ion-delete-button class=\"ion-minus-circled\" ng-click=\"deleteStyleFeed(stylefeed)\"></ion-delete-button>\n" +
    "\n" +
    "            </ion-item>\n" +
    "\n" +
    "            <div class=\"padding\">\n" +
    "                <button class=\"item button button-block button-balanced button-outline\" ng-click=\"addStyleFeed()\">Create a Style Feed</button>\n" +
    "            </div>\n" +
    "\n" +
    "        </ion-list>\n" +
    "\n" +
    "        <!-- Empty search card -->\n" +
    "        <div class=\"empty padding center\" ng-show=\"search.name.length > 0 && filteredRecords.length === 0\">\n" +
    "            <h1>We could not find the style feed you are looking for</h1>\n" +
    "        </div>\n" +
    "        <!-- Empty screen card -->\n" +
    "        <div class=\"empty padding center\" ng-hide=\"stylefeeds.records.length > 0\">\n" +
    "            <h1>Curate your style</h1>\n" +
    "            <img class=\"perc60\" src=\"res/images/empty-stylefeeds.png\" />\n" +
    "            <p>Create bespoke style feeds to take your wardrobe from work to play and beyond</p>\n" +
    "            <button class=\"item button button-block button-clear\" ng-click=\"addStyleFeed()\">Tap <i class=\"icon icon-new\"></i> to begin</button>\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
