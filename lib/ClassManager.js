(function(root, undefined){

	var classManager = (function(){
		var classes = {};

		return {
			classes : classes
		};
	})();

	if(typeof(root.classManager) === 'undefined' || root.classManager === null){
		root.classManager = root.cm = classManager;
	}

})(window);