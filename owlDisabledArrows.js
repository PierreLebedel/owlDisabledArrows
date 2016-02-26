/*
 *  owlDisabledArrows - v1.0.0
 *  Add a disabled class owlCarousel's non-clickable arrows
 *  
 *  owlCarousel : http://owlcarousel.owlgraphic.com/
 *  owlDisabledArrows : http://
 *
 *  Made by Pierre Lebedel
 *  Under MIT License
 */

;(function($){

	$.fn.owlDisabledArrows = function(options){

		var settings = {
			disabledClass : 'owl-disabled'
		};
		if(options) $.extend(settings, options);

		return this.each(function(){

			var $carousel = $(this);

			var updateArrows = function(event){
				//console.log(event);

				var $target       = $(event.target);
				var item          = event.item;
				var defaults      = event.relatedTarget.options;

				var prevArrow = $target.find('.'+defaults.navClass[0]);
				var nextArrow = $target.find('.'+defaults.navClass[1]);

				if(!defaults.loop){
					if( item.index==0 || item.count==0 ){
						prevArrow.addClass(settings.disabledClass);
					}else{
						prevArrow.removeClass(settings.disabledClass);
					}
					if( item.index==item.count-1 || item.count==0 ){
						nextArrow.addClass(settings.disabledClass);
					}else{
						nextArrow.removeClass(settings.disabledClass);
					}
				}
			}

			$carousel.on('initialized.owl.carousel', updateArrows);
			$carousel.on('changed.owl.carousel', updateArrows);

		});

	};

})(window.jQuery);