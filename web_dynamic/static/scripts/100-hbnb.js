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

$.ajax({
    url: api + ':5001/api/v1/places_search/',
    type: 'POST',
    data: '{}',
    contentType: 'application/json',
    dataType: 'json',
    success: appendData

$('BUTTON').click(function () {
    $.ajax({
      url: api + ':5001/api/v1/places_search/',
      type: 'POST',
      data: JSON.stringify({ 'amenities': Object.keys(amenities) }),
      contentType: 'application/json',
      dataType: 'json',
      success: appendData
    });
  });
});

function appendData (data) {
      const placesHTML = data.map(place => {
        return `<ARTICLE>
                  <DIV class="title">
                    <H2>${place.name}</H2>
                    <DIV class="price_by_night">
                      ${place.price_by_night}
                    </DIV>
                  </DIV>
                  <DIV class="information">
                    <DIV class="max_guest">
                      <I class="fa fa-users fa-3x" aria-hidden="true"></I>
                      </BR>
                      ${place.max_guest} Guests
                    </DIV>
                    <DIV class="number_rooms">
                      <I class="fa fa-bed fa-3x" aria-hidden="true"></I>
                      </BR>
                      ${place.number_rooms} Bedrooms
                    </DIV>
                    <DIV class="number_bathrooms">
                      <I class="fa fa-bath fa-3x" aria-hidden="true"></I>
                      </BR>
                      ${place.number_bathrooms} Bathrooms
                    </DIV>
                  </DIV>
                  <DIV class="description">
                    ${place.description}
                  </DIV>
                </ARTICLE>`;
      }).join('');
      $('SECTION.places').append(placesHTML);
    }
  });


function updateLocations() {
  const locations = Object.assign({}, states, cities);
  if (Object.values(locations).length === 0) {
    $('.locations H4').html('&nbsp;');
  } else {
    $('.locations H4').text(Object.values(locations).join(', '));
  }
}

let states = {};
$('.locations > UL > H2 > INPUT[type="checkbox"]').change(function () {
  if ($(this).is(':checked')) {
    states[$(this).attr('data-id')] = $(this).attr('data-name');
  } else {
    delete states[$(this).attr('data-id')];
  }
  updateLocations();
});

let cities = {};
$('.locations > UL > UL > LI INPUT[type="checkbox"]').change(function () {
  if ($(this).is(':checked')) {
    cities[$(this).attr('data-id')] = $(this).attr('data-name');
  } else {
    delete cities[$(this).attr('data-id')];
  }
  updateLocations();
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

