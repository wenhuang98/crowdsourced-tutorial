CKEDITOR.disableAutoInline = true;

$( document ).ready( function() {
		$( '.editable' ).ckeditor(); // Use CKEDITOR.inline().
} );

var submit = function(){
	//send a request to api/instruction/modify
	console.log($('#editor').val());
	window.location = 'tutorial.html';	
};

var load_template = function(){

};

