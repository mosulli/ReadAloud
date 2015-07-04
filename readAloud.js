function readAloud(readMe) {
	
	$readElement = $('.readAloud');
	if ($readElement.length == 0) {
		var readAloud= $('<div/>', { 
		id: 'readAloud', 
		class: 'readAloud', 
		role: 'alert'
		}).attr({
		'aria-relevant':"additions", 
		'aria-live':"assertive"
		});
		$('body').append(readAloud);
		setTimeout(function(){ $('.readAloud').text(readMe) }, 200);
		
	}
	else {
		$readElement.text(readMe)
	}
}



