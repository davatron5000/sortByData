;(function($) {

	$.fn.sortByData = function(options) {	
			options = options || {};	
			
			var defaults = {
				data: typeof options == "string" ? options : "",
				order: 'asc'
			};
			
			// Extend our default options with those provided.
			var opts = $.extend(defaults, options);
							    		
	    return this.each(function() {
	        
	      // Sort by some data
	      var list = $(this).children().toArray();
	      var reordered = $(list.sort(function(a, b) {
	      	var itemA = $(a).data( opts.data ), itemB = $(b).data( opts.data );
	      	return opts.order.toLowerCase() == 'asc' ? GenCmp(itemA, itemB) : GenCmp(itemB, itemA);
	      }));
				
	      // After restyling, rearrange the HTML
	      reordered.appendTo($(this));
	    });
	
			// http://www.merlyn.demon.co.uk/js-order.htm#Sort
			function GenCmp(a, b) { return (b<a)-(a<b) }	
	};
	
})(jQuery);