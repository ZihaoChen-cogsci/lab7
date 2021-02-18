'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(click_count);
	// your code here
}
function click_count(e){
	e.preventDefault();
	ga("send", "event", "like", "click");	
}
