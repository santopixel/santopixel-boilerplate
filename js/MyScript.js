window.MyScript = window.MyScript || {};

(function ( $, window, undefined ) {
	
	"use strict";

	MyScript.app = function() {

   		var globaVariable = 0,

		setGlobaVariable = function(value) {
			globaVariable++;
		},
		getGlobaVariable = function() {
			return globaVariable;
		},

		Effects = {
			Effects1 : function () {
				//
				console.log("Effects.Effects1");
				
			}
			
		},
		PrivateMethod = function() {
			console.log('PrivateMethod');
			
			//set global variable value
			setGlobaVariable();
			
			//call another private method
			AnotherPrivateMethod();
			
			//call public method
			appMyScript.PublicMethod();

			//use global variable value
			console.log( getGlobaVariable() );
		},
		AnotherPrivateMethod = function() {
			console.log('AnotherPrivateMethod');
		};
		
		return {

			Init: function() {
				console.log('init');

				//set global variable value
				setGlobaVariable();

				//use global variable value
				console.log( getGlobaVariable() );

				//call private method
				PrivateMethod();
				
				//call public method
				appMyScript.PublicMethod();

			},
			PublicMethod : function() {
				console.log('PublicMethod');
				//console.log( getGlobaVariable() );

				//use global variable value
				console.log( getGlobaVariable() );
			}

		};

	};

}($, window, undefined));


	