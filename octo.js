$(document).ready(function() {
	var points = 0, clicks = 0, throws = 35;
	var ptsArray = [];
	
	$("#1_ring").click(function(e) { 										// outermost ring
		e.preventDefault();													// override <a>
		if (clicks > throws) {												// n+1 == 36 throws
			$("#1_link").disabled=true;										// disable this ring
		} else{
			ptsArray.push(1);												// add to array
			const add = (a, b) => a + b										// summing the array
			const sum = ptsArray.reduce(add)								// summing the array
			console.log(ptsArray.length); 									// < read the length of the amended array here
			$("#score").html(sum);											// the sum of the array
			clicks += 1;
			console.log(clicks);
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray.length; i+=3){						// array / 3
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray[i]+"</td>";
				  if (ptsArray[i+1] > 0 ){									// 2nd column
					tr += "<td>"+ptsArray[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray[i+2] > 0 ){									// 3rd column
					tr += "<td>"+ptsArray[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores").html(t);											// update page
		}
		
		$(".st0").css('fill','#FF0000');

	});  // end click	
	
	$("#2_ring").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 36 throws
			$("#2_link").disabled=true;
		} else{
			ptsArray.push(2);
			const add = (a, b) => a + b
			const sum = ptsArray.reduce(add)
			console.log(ptsArray.length); // < read the length of the amended array here
			$("#score").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray[i]+"</td>";
				  if (ptsArray[i+1] > 0 ){
					tr += "<td>"+ptsArray[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray[i+2] > 0 ){
					tr += "<td>"+ptsArray[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores").html(t);											// update page
		}
		
		$(".st1").css('fill','#FFFFFF');
	});  // end click	
	
	$("#3_ring").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 36 throws
			$("#3_link").disabled=true;
		} else{		
			ptsArray.push(3);
			const add = (a, b) => a + b
			const sum = ptsArray.reduce(add)		
			console.log(ptsArray.length); // < read the length of the amended array here
			$("#score").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray[i]+"</td>";
				  if (ptsArray[i+1] > 0 ){
					tr += "<td>"+ptsArray[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray[i+2] > 0 ){
					tr += "<td>"+ptsArray[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores").html(t);											// update page
		}
		$(".st2").css('fill','#FF0000');
	});  // end click	
	
	$("#4_ring").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 36 throws
			$("#4_link").disabled=true;
		} else{		
			ptsArray.push(4);
			const add = (a, b) => a + b
			const sum = ptsArray.reduce(add)		
			console.log(ptsArray.length); // < read the length of the amended array here
			$("#score").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray[i]+"</td>";
				  if (ptsArray[i+1] > 0 ){
					tr += "<td>"+ptsArray[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray[i+2] > 0 ){
					tr += "<td>"+ptsArray[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores").html(t);											// update page
		}
		$(".st3").css('fill','#FFFFFF');
	});  // end click	
	
	$("#5_ring").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 36 throws
			$("#5_link").disabled=true;
		} else{
			ptsArray.push(5);
			const add = (a, b) => a + b
			const sum = ptsArray.reduce(add)		
			console.log(ptsArray.length); // < read the length of the amended array here
			console.log(ptsArray, {'maxArrayLength': null});
			$("#score").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray[i]+"</td>";
				  if (ptsArray[i+1] > 0 ){
					tr += "<td>"+ptsArray[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray[i+2] > 0 ){
					tr += "<td>"+ptsArray[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores").html(t);											// update page
}		$(".st4").css('fill','#FF0000');
	});  // end click	
	
	$("#delete").click(function(e) { 
		e.preventDefault();
		if (ptsArray.length > 0) {
			ptsArray.pop();
			const add = (a, b) => a + b
			const sum = ptsArray.reduce(add, 0)
			$("#score").html(sum);
			clicks -= 1;
				var t = "";	// table header
				//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
				for (var i = 0; i < ptsArray.length; i+=3){
					  var tr = "<tr>";
					  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
					  tr += "<td>"+ptsArray[i]+"</td>";
					  if (ptsArray[i+1] > 0 ){
						tr += "<td>"+ptsArray[i+1]+"</td>"
						} else{
							tr += "<td></td>"
						}
					  if (ptsArray[i+2] > 0 ){
						tr += "<td>"+ptsArray[i+2]+"</td>";
						} else{
							tr += "<td></td>"
						}
					  tr += "</tr>";
					  t += tr;
				}
				$("#scores").html(t);											// update page
		}
		
	});  // end click
	
}); // end ready