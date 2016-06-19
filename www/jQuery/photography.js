// Add overlay and append an image element inside of it
var $image = $('<img>');                      
var $overlay = $('<div class="overlay"></div>');
$("body").append($overlay)
$overlay.append($image);  


// Capture image click
$(".gallery .row a").click(function(event){
  event.preventDefault(); 
  
  var imageHref = $(this).attr("href");
  
  $image.attr("src", imageHref);
  
  console.log("href");
  
  $overlay.show(); 
  $('.nav').slideToggle("fast");
  
 
  
  // Place image in overlay
  // Set caption with alt attribute

 });





// Hide overlay on click.

$overlay.click(function() {
  $overlay.hide();
  $('.nav').slideToggle('fast');
});
