/*
 * jquery.stickyFooter - v1.2.1
 * Simple stickyFooter
 * https://github.com/reinos/jquery.stickyFooter
 *
 * Made by Rein de Vries
 * Under MIT License
 */
(function ( $, window, document, undefined ) {
    // Create the defaults once
    var pluginName = "stickyFooter",
        defaults = {
            removeNegativMargin : true,
            css : {},
            executeWhen : function(){
                return true;
            }
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }
    
    //do some default shizzle
    Plugin.prototype.init = function () {     
    	var obj = this; 
	     	 
	 	this.footerHeight = 0;
		this.footerTop = 0;
		
		obj.positionFooter();
		
    	setTimeout(function(){
            $(window)
                .scroll(function(){
                    obj.positionFooter();
                })
                .resize(function(){
                    obj.positionFooter();
                });
        }, 100);
    };
	
	// set the position
    Plugin.prototype.positionFooter = function () {           
        var obj = this,
            $elem = $(this.element); 

        //execute this when the give condition is true
        if(obj.options.executeWhen()) {
            //first reset
            $elem.attr("style", "");
             
            //set footer height
            obj.footerHeight = $elem.height();

            //set the top offset
            var offset = $elem.offset();
            offset = offset.top || 0;
          
            // is there a negativ marign?
            if(obj.options.removeNegativMargin && $elem.css("margin-top")[0] === "-") {
                $elem.css("margin-top", 0); 
            }

            if ( offset < ($(window).height()-(obj.footerHeight + 20))){
                //css
                var css = $.extend( {}, {
                    position: "fixed",
                    bottom: 0,
                    left:0,
                    right:0
                }, obj.options.css);
                
                //must stick to bottom
                $elem.css(css);
            } else {
                //reset
                $elem.attr("style", "");
                $elem.css(obj.options.css);
            }

        //otherwhise reset  
        } else {
            //reset
            $elem.attr("style", "");
            $elem.css(obj.options.css);
        }
        

        
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );