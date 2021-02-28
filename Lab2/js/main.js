function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

//Відео
$("#video").on('click', function() {

    $.fancybox.open([
      {
        src  : 'video/vid-1.mp4',
        opts : {
          caption : 'First caption',
          thumb   : 'video/vid-1.mp4'
        }
      },
      {
        src  : 'video/vid-2.mp4',
        opts : {
          caption : 'Second caption',
          thumb   : 'video/vid-2.mp4'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });