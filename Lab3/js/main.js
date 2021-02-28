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
$(function(){
  alert('Завдання 1'+'\nРозміри екрану : '+screen.width+'x'+screen.height);

  alert('Завдання 2'+'\nКількість URL : '+history.length+'\nКількість абзаців на сторінці : '
  +document.getElementById('count-parag').value.replace(/\n$/gm, '').split(/\n/).length);

  alert('Завдання 3'+'\nШирина екрану : '+screen.width+'\nВисота екрану : '+screen.height+
  '\nІмя браузера : '+navigator.appName+'\nВерсія браузера : '+navigator.appVersion);
});


