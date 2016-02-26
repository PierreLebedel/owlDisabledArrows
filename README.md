# owlDisabledArrows
Add a disabled class owlCarousel's non-clickable arrows

## Usage
``` javascript
var $carousel = $('#slider');

$carousel.owlDisabledArrows({
	disabledClass : 'owl-disabled'
});

$carousel.owlCarousel({
	// owlCarousel config
});
```

According to the Owl's documentation, the `initialized.owl.carousel` event must be attached before Owl Carousel initialization, so the call to owlDisabledArrows too :
http://owlcarousel.owlgraphic.com/demos/events.html
