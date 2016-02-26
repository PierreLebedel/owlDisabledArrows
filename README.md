# owlDisabledArrows
Add a disabled class on [owlCarousel](https://github.com/smashingboxes/OwlCarousel2)'s arrows, when we can't go to next or go to previous slide.

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
