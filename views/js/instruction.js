	CKEDITOR.disableAutoInline = true;

	$( document ).ready( function() {
		$( '#editor' ).ckeditor(); // Use CKEDITOR.replace() if element is <textarea>.
	} );

	function setValue() {
		$( '#editor' ).val( $( 'input#val' ).val() );
	}