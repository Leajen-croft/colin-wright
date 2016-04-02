$(document).foundation();

$('.gallery-item a').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

$(function() {
    $("img.lazy").lazyload({
      threshold : 300,
      failure_limit : 1000
    });
});
