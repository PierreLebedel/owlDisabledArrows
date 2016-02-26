# owlDisabledArrows
Add a disabled class [owlCarousel](https://github.com/smashingboxes/OwlCarousel2)'s non-clickable arrows

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

The [Owl's documentation](http://owlcarousel.owlgraphic.com/demos/events.html) says the `initialized.owl.carousel` event must be attached before Owl Carousel initialization, so the call to owlDisabledArrows too.
