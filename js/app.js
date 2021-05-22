// show first review with animation
$('.review').fadeIn(2000).show();

// hide modal on page load
$('#reviewModal').hide();

// Create an animation for the paragraph with the id of "flashMessage." Chain an animation that 
$('#flashMessage')
  .slideDown(1000)
  .delay(2000)
  .slideUp(1000)

// reveal modal on button click
$('#reviewButton').click(function(){
  $('#reviewModal').show();
});

// Click handler to create a working restaurant review form.
$('#submitBtn').click(function(){
  const name = $('#restaurantNameInput').val();
  const review = $('#restaurantReviewInput').val();
  if (name === '') {
    alert('Please enter a Restaurant Name and Review');
  } else {
    const $div = $('<div class="review"></div>');
    $div.css('display', 'block');
    const $h3 = $('<h3></h3>');
    $h3.text(name);
    const $p = $('<p></p>');
    $p.text(review);
    $('#newRestaurant').append($div);
    $($div).append($h3);
    $($div).append($p);
    $('input').val('');
    $('textarea').val('');
    $('#reviewModal').hide();
  }
});

// Click handler to close modal
$('#closeButton').click(function(){
  $('#reviewModal').hide();
});


