$(document).foundation();

$('.gallery__item a').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

// $(function() {
//     $("img.lazy").lazyload({
//       container: $(".gallery__item"),
//       threshold : 300
//     });
// });
$(function() {
  var $grid = $('.gallery__grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
    $grid.masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.gallery__item',
      // use element for option
      columnWidth: '.gallery__item',
      percentPosition: true
    });
  });
});
