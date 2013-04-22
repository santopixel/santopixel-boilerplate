window.CartKingHost = window.CartKingHost || {};

(function ( $, window, undefined ) {
	
	"use strict";

	CartKingHost.app = function() {

   		var didScroll = false,
		
		getdidScroll = function() {
			return didScroll;
		},

		menuHighlight = function() {
			//
		},
		Effects = {
			ExpandCart : function () {
				//
				console.log("ExpandCart");
				
			}
			
		},
		GenerateCartJSON = function() {
			//
		};

		
		return {

			init: function(currentPlan, currentAction, objCurrentPlan, type) {
			    
			    Effects.ExpandCart();
				console.log(didScroll);
				console.log(getdidScroll());

			},
			getdidScroll2 : function() {
				return didScroll;
			}

		};

	};

}($, window, undefined));


	