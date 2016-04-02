$(document).foundation();

$('.gallery-item a').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

$(function() {
    $("img.lazy").lazyload({
      
      failure_limit : 1000
    });
});
