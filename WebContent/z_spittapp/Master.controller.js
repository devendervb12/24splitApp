sap.ui.controller("z_spittapp.Master", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf z_spittapp.Master
*/
//	onInit: function() {
//
//	},

onItemPress : function(oControlEvent){
		
		// need to pass productID
		
		var selectedProductID = oControlEvent.getSource().getTitle();
		

		debugger;
//navigate to Page2
		this.getOwnerComponent().getRouter().navTo("toDetailPage", {prod : selectedProductID });
		
	}

});