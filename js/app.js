// initialize fancybox
$('[data-fancybox="gallery"]').fancybox({
	// Options will go here
});

// show first review with animation
$('.review').fadeIn(2000).show();

// hide modal on page load
$('#reviewModal').hide();

// Create an animation for the paragraph with the id of "flashMessage." Chain an animation that 
$('#flashMessage')
  .slideDown(1000)
  .delay(3000)
  .slideUp(1000);

// reveal modal on button click
$('#reviewButton').click(function(){
  $('#reviewModal').show();
});

// Helper function to create star
function createStar(container) {
  const $span = $('<span><span>');
  const $star = $('<i></i>');
  $star.addClass('fas fa-star');
  $($span).append($star);
  $(container).append($span);
}

// Click handler to create a working restaurant review form.
$('#submitBtn').on('click', function(event){
  const name = $('#restaurantNameInput').val();
  const review = $('#restaurantReviewInput').val();
  if (name === '') {
    event.preventDefault();
    alert('Please enter a Restaurant Name and Review');
  } else {
    const $div = $('<div></div>');
    $div.addClass('review'); 
    $div.css('display', 'block');
    const $h3 = $('<h3></h3>');
    $h3.text(name);
    const $pReview = $('<p></p>');
    $pReview.text(review);
    $('#newRestaurant').append($div);
    $($div).append($h3);
    $($div).append($pReview);
    // see which star is checked then create star for the main page
    const $checkedId = $(':checked').attr('id');
    if ($checkedId === 'st1') {
      for (let i = 0; i < 5; i++){
        createStar($div);
      } 
    } else if ($checkedId === 'st2'){
      for (let i = 0; i < 4; i++){
        createStar($div);
      } 
    } else if ($checkedId === 'st3'){
      for (let i = 0; i < 3; i++){
        createStar($div);
      } 
    } else if ($checkedId === 'st4'){
      for (let i = 0; i < 2; i++){
        createStar($div);
      } 
    } else if ($checkedId === 'st5'){
        createStar($div); 
    }
    $('input').val('');
    $('textarea').val('');
    $('input:radio:checked').prop('checked', false);
    $('#reviewModal').hide();
  }
});

// Click handler to close modal
$('#closeButton').click(function(){
  $('#reviewModal').hide();
});

