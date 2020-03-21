var grid = document.querySelector('.custom-grid');
var msnry;

imagesLoaded( grid, function() {
  // init Isotope after all images have loaded
  msnry = new Masonry( grid, {
    itemSelector: '.custom-grid .grid-item',
    columnWidth: '.custom-grid .grid-sizer',
    percentPosition: true
  });
});


// 	// init Masonry
// 	var masonry_grid = $('.masonry-grid'); 
// 	masonry_grid.masonry({
// 		itemSelector: '.masonry-grid .grid-item',
// 		percentPosition: true,
// 		columnWidth: '.masonry-grid .grid-sizer'
// 	});

// 	// layout Masonry after each image loads
// 	masonry_grid.imagesLoaded().progress( function() {
// 		masonry_grid.masonry();
// 	});  
