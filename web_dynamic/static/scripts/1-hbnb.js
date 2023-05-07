$(function() {
  var = checkedValues = {}
  $('input[type="checkbox"]')on(change, function() {
     let id = $(this).data('id');
     if ($(this).is(':checked')) {
        checkedValues[id] = true;
     } else {
        delete checkedValues[id];
     }
    $('.amenities H4').text(Object.values(checkedValues).join(', '));
  });
});
