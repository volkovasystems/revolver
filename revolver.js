try{ var base = window; }catch( error ){ base = exports; }
( function module( base ){
	define( "revolver",
		function construct( ){
			requirejs.config( {
				"paths": {
					"async": staticBaseURL + "/library/async/async"
				}
			} );

			requirejs( [ 
					"async" 
				],
				function construct( ){
					var revolver = function revolver( modules, order ){
						if( typeof modules == "object" ){
							requiresjs( { "paths": modules } );
							modules = Object.keys( modules );
						}
						
					};
					base.revolver = revolver;
				} );
		} );
} )( base );