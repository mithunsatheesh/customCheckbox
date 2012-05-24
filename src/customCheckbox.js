/*
 * Custom Checkbox jQuery Plugin
 *
 * Copyright (c) 2010 Mithun Satheesh
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 * mail:mithunsatish@gmail.com
 * @version 0.1
 */

(function($){
    $.fn.extend({ 
 
     	customCheckbox: function(options) {
 
 
             var defaults = {
                on : "5.gif",
				off : "6.gif",
				divOuter : "doImagePan",
				
            }
                 
            var options =  $.extend(defaults, options);
			
			
                  return this.each(function() {
                  
				  var o =options;
                  var obj = $(this); 
				  var outerlayer =  o.divOuter+"_"+obj.attr('id');              
                  var opendata = o.divOuter+"_"+obj.attr('id')+"_icon";
                  
				  obj.wrap("<span id="+outerlayer+" />");
				  obj.hide();
				  setImage();
				  
				  
				  
				  $("#"+outerlayer).bind("click",function(){
					  
					  
					  obj.attr('checked',(obj.attr('checked')?false:true));
					  setImage();
					  					  					  
					  });
					  
					  				  
					  function setImage()
					  {
						  $('.'+opendata).remove();		
						  if(obj.attr('checked'))
						  {
							$("#"+outerlayer).append("<img class='"+opendata+"' src='"+o.on+"' />");
						  }
						  else
						  {
							 $("#"+outerlayer).append("<img class='"+opendata+"' src='"+o.off+"' />"); 
						  } 
						  $('.'+opendata).css({cursor:'pointer'});
					  }
				  
			    				  				  				  
            });
        }
    });
})(jQuery);