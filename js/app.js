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
