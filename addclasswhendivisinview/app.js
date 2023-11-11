jQuery(document).ready(function($) {
            
    // Select elements with the class "mifadein"
    var targetElements = $('.mifadein');


function isScrolledIntoView(elem) {
// Get the top position of the viewport (the visible part of the page)
var docViewTop = $(window).scrollTop();

// Calculate the bottom position of the viewport
var docViewBottom = docViewTop + $(window).height();

// Get the top position of the target element
var elemTop = $(elem).offset().top;

// Calculate the bottom position of the target element by adding its height
var elemBottom = elemTop;

// Check if the bottom of the target element is above the bottom of the viewport
// AND if the top of the target element is below the top of the viewport
return (elemBottom <= docViewBottom) && (elemTop >= docViewTop);
}


    // On scroll, check if any of the target elements are in view
    $(window).scroll(function() {
        targetElements.each(function() {
            if (isScrolledIntoView(this)) {
                // If an element is in view, add the class "myfade"
                $(this).addClass('myfade');
                                     $(this).removeClass('mybeforefade');
            }
                            else{
                                 $(this).addClass('mybeforefade');
                            }
        });
    });
});