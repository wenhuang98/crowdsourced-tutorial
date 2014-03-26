$( document ).ready( function() {
	load_data();
} );

var calc_stat = function(answers){
	var answer_count = {};
	for (var i in answers){
		if (answers[i] in answer_count){
			answer_count[answers[i]]+=1;
		}else{
			answer_count[answers[i]]=0;
		}
	}
	var maxItem = "";
	var maxValue = -1;
	for (var key in answer_count){
		if(answer_count[key] > maxValue){
			maxItem = key;
			maxValue = answer_count[key];
		}
	}
	return {'tasks': answers.length, 'maxItem': maxItem, 'agreement': maxValue/answers.length}
};

var add = function(){
	alert('add this task to tutorial');
}

var load_data = function(){
	$.get("data/fake_data.json", function(res){
		console.log(res);
		for (var i in res){
			if (i == 0){
				var table_haed_html = "<tr><th>id</th>";
				for (var key in res[i]['data']){
					table_haed_html+= "<th>data : " + key + "</th>";
				}
				table_haed_html+= "<th>workers</th><th>agreement</th><th>majority</th><th>feedback</th><th></th></tr>";
				$('#table_head').html(table_haed_html);
			}
			var id = parseInt(i)+1;
			var stat = calc_stat(res[i].answers);
			
			if (stat.agreement < 0.5){
				var table_body_html = '<tr class="low_agreement"><td>' + id + '</td>';				
			}else{
				var table_body_html = '<tr><td>' + id + '</td>';
			}
			
			//var table_body_html = '<tr><td>' + id + '</td>';
			for (var key in res[i]['data']){
				console.log(key);
				table_body_html+= "<td>" + res[i]['data'][key] + "</td>";
			}

			table_body_html+= "<td>" + stat.tasks + "</td><td>" + stat.agreement + "</td><td>" + stat.maxItem +"</td><td></td>"
			table_body_html+= '<td><div class="submit-button"><button class="btn btn-primary" type="submit" onclick="add()">Add</button></div></td>';
			table_body_html+= "</tr>";
			$('#table_body').append(table_body_html); 
			//var id = data 
		}
		//console.log($('#table_head').html());
		$('#main').dataTable();
	});

};
