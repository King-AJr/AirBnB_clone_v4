$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  method: 'GET',
  dataType: 'json'
}).done(function(response) {
  if (response.status === 200) {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status'),removeClass('available');
  }
});

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

