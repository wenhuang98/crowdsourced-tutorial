CKEDITOR.disableAutoInline = true;

$( document ).ready( function() {
	$( '#editor' ).ckeditor(); // Use CKEDITOR.replace() if element is <textarea>.
} );

var submit = function(){
	//send a request to api/instruction/modify
	console.log($('#editor').val());
	window.location = 'tutorial.html';	
};

