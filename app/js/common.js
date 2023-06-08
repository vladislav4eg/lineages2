$(function () {


  $('[data-toggle="tooltip"]').tooltip();


  $('.modal').popup({transition: 'all 0.3s'});

  $('select').styler({
    selectSearch: true
  });
  
})



var eventDates = 1;

$('.datepicker-here').datepicker({
  // Передаем функцию, которая добавляет 11 числу каждого месяца класс 'my-class'
  onRenderCell: function(date, cellType) {
      if (cellType == 'day' && date.getDate() == eventDates) {
          return {
              classes: 'my-class',
          }
      }
  }
})