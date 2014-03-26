CKEDITOR.disableAutoInline = true;

var current_tutorial_count;

$( document ).ready( function() {
	$( '.editable' ).ckeditor(); // Use CKEDITOR.inline().
	current_tutorial_count = 1;
} );

var submit = function(){
	//send a request to api/instruction/modify
	console.log($('#editor').val());
	window.location = 'tutorial.html';	
};

var hide = function(element_id){
	console.log(element_id);
	var changing_element_id = element_id.replace('hide','tutorial');
	console.log($('#' + element_id).html());
	if ($('#' + element_id).html() == 'Hide'){
		$( '#' + changing_element_id).fadeOut("slow");
		$('#' + element_id).html('Show');		
	}else{
		$( '#' + changing_element_id).fadeIn("slow");
		$('#' + element_id).html('Hide');		
	}
};

var add = function(){
	current_tutorial_count++;
	var new_tutorial_instance = '						\
							<div id="tutorial-instance-container-'+current_tutorial_count+'">\
							<div class="tutorial-options">\
								<span class="tutorial-text">Tutorial '+current_tutorial_count+':</span>\
								<button class="btn btn-default btn-sm btn-hide" id="hide-'+current_tutorial_count+'" onclick="hide(this.id)">Hide</button> \
							</div>					\
							<div class="tutorial-instance" id="tutorial-'+current_tutorial_count+'"> \
								<div class="tutorial-explanation"> \
									<div class="tutorial-options"> \
										<span class="tutorial-text">Explanation:</span> \
									</div> \
										<div class="editable" id="explanation-editor-'+current_tutorial_count+'" contenteditable="true"></div>\
								</div> \
								<div class="tutorial-example"> \
									<div class="tutorial-options"> \
										<span class="tutorial-text">Example:</span> \
										<button class="btn btn-default btn-sm btn-hide" onclick="load_instruction(\'#example-editor-' +current_tutorial_count+'\')">Load instruction</button> \
									</div> \
										<div class="editable" id="example-editor-'+current_tutorial_count+'" contenteditable="true"></div>\
								</div>\
								<div class="tutorial-test">\
									<div class="tutorial-options">\
										<span class="tutorial-text">Test:</span>\
										<button class="btn btn-default btn-sm btn-hide" onclick="load_instruction(\'#test-editor-' + current_tutorial_count +'\')">Load instruction</button>\
									</div>\
									<div class="editable" id="explanation-editor-' + current_tutorial_count+'" contenteditable="true"></div>\
								</div>						\
							</div>\
						</div>';

	$('#tutorials-container').append(new_tutorial_instance);
	$( '.editor' ).ckeditor(); // Use CKEDITOR.replace() if element is <textarea>.

};

var load_instruction = function(element_id){
	console.log(element_id);
	$.get("data/instruction_sample.txt", function(data){
		$(element_id).html(data);
	});

};

