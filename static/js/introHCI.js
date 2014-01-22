'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	
	$("#testjs").click(function(e) {
		$(".jumbotron h1").text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	$("#submitBtn").click(function(e) {
		var project = $("#project").val();
		var width = $("#width").val();
		var description = $("#description").val();
		
		$(project).animate({
			width: $("#width").val()
		});
		$(project + " .project-description").text(description);		
		console.log("project: " + project);
		console.log("width: " + width);
		console.log("description: " + description);
	});	
}
function projectClick(e) {
  	// Cancel the default action, which prevents the page from reloading
  	  e.preventDefault();

    	// In an event listener, $(this) is the leement that fired the event
    	var projectTitle = $(this).find("p").text();
    	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);
	var containingProject = $(this).closest(".project"); 
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) { 
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
	} else { 
	       	description.fadeOut();
	}

}
