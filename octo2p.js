$(document).ready(function() { // p1g1
	var points = 0, clicks = 0, throws = 8;
	var ptsArray = [];
	

	$("#1_ring").click(function(e) { 										// outermost ring
		e.preventDefault();													// override <a>
		if (clicks > throws) {												// n+1 == 9 throws
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
	if (clicks > throws){
		$("#target1").css('display','none');
		$("#target2").css('display','block');
	}
	});  // end click	
	
	$("#2_ring").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
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
			if (clicks > throws){
		$("#target1").css('display','none');
		$("#target2").css('display','block');
	}
	});  // end click	
	
	$("#3_ring").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
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
			if (clicks > throws){
		$("#target1").css('display','none');
		$("#target2").css('display','block');
	}
	});  // end click	
	
	$("#4_ring").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
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
			if (clicks > throws){
		$("#target1").css('display','none');
		$("#target2").css('display','block');
	}
	});  // end click	
	
	$("#5_ring").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
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
		}
			if (clicks > throws){
		$("#target1").css('display','none');
		$("#target2").css('display','block');
		}
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
			if (clicks > throws){
		$("#target1").css('display','none');
		$("#target2").css('display','block');
	}
	});  // end click
	
		$("#killshot").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("killshot").disabled=true;
		} else{
			ptsArray.push(7);
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
		}
			if (clicks > throws){
		$("#target1").css('display','none');
		$("#target2").css('display','block');
	}
	});  // end click	
	
}); // end ready

$(document).ready(function() { // p1g2
	var points = 0, clicks = 0, throws = 8;
	var ptsArrayg2 = [];
	
	$("#1_ringg2").click(function(e) { 										// outermost ring
		e.preventDefault();													// override <a>
		if (clicks > throws) {												// n+1 == 9 throws
			$("#1_linkg2").disabled=true;										// disable this ring
		} else{
			ptsArrayg2.push(1);												// add to array
			const add = (a, b) => a + b										// summing the array
			const sum = ptsArrayg2.reduce(add)								// summing the array
			console.log(ptsArrayg2.length); 									// < read the length of the amended array here
			$("#scoreg2").html(sum);											// the sum of the array
			clicks += 1;
			console.log(clicks);
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg2.length; i+=3){						// array / 3
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg2[i]+"</td>";
				  if (ptsArrayg2[i+1] > 0 ){									// 2nd column
					tr += "<td>"+ptsArrayg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg2[i+2] > 0 ){									// 3rd column
					tr += "<td>"+ptsArrayg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target2").css('display','none');
			$("#target3").css('display','block');
		}
	});  // end click	
	
	$("#2_ringg2").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#2_linkg2").disabled=true;
		} else{
			ptsArrayg2.push(2);
			const add = (a, b) => a + b
			const sum = ptsArrayg2.reduce(add)
			console.log(ptsArrayg2.length); // < read the length of the amended array here
			$("#scoreg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg2[i]+"</td>";
				  if (ptsArrayg2[i+1] > 0 ){
					tr += "<td>"+ptsArrayg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg2[i+2] > 0 ){
					tr += "<td>"+ptsArrayg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target2").css('display','none');
			$("#target3").css('display','block');
		}
	});  // end click	
	
	$("#3_ringg2").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#3_linkg2").disabled=true;
		} else{		
			ptsArrayg2.push(3);
			const add = (a, b) => a + b
			const sum = ptsArrayg2.reduce(add)		
			console.log(ptsArrayg2.length); // < read the length of the amended array here
			$("#scoreg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg2[i]+"</td>";
				  if (ptsArrayg2[i+1] > 0 ){
					tr += "<td>"+ptsArrayg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg2[i+2] > 0 ){
					tr += "<td>"+ptsArrayg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target2").css('display','none');
			$("#target3").css('display','block');
		}
	});  // end click	
	
	$("#4_ringg2").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#4_linkg2").disabled=true;
		} else{		
			ptsArrayg2.push(4);
			const add = (a, b) => a + b
			const sum = ptsArrayg2.reduce(add)		
			console.log(ptsArrayg2.length); // < read the length of the amended array here
			$("#scoreg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg2[i]+"</td>";
				  if (ptsArrayg2[i+1] > 0 ){
					tr += "<td>"+ptsArrayg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg2[i+2] > 0 ){
					tr += "<td>"+ptsArrayg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target2").css('display','none');
			$("#target3").css('display','block');
		}
	});  // end click	
	
	$("#5_ringg2").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#5_linkg2").disabled=true;
		} else{
			ptsArrayg2.push(5);
			const add = (a, b) => a + b
			const sum = ptsArrayg2.reduce(add)		
			console.log(ptsArrayg2.length); // < read the length of the amended array here
			console.log(ptsArrayg2, {'maxArrayLength': null});
			$("#scoreg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg2[i]+"</td>";
				  if (ptsArrayg2[i+1] > 0 ){
					tr += "<td>"+ptsArrayg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg2[i+2] > 0 ){
					tr += "<td>"+ptsArrayg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target2").css('display','none');
			$("#target3").css('display','block');
		}
	});  // end click	
	
	$("#deleteg2").click(function(e) { 
		e.preventDefault();
		if (ptsArrayg2.length > 0) {
			ptsArrayg2.pop();
			const add = (a, b) => a + b
			const sum = ptsArrayg2.reduce(add, 0)
			$("#scoreg2").html(sum);
			clicks -= 1;
				var t = "";	// table header
				//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
				for (var i = 0; i < ptsArrayg2.length; i+=3){
					  var tr = "<tr>";
					  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
					  tr += "<td>"+ptsArrayg2[i]+"</td>";
					  if (ptsArrayg2[i+1] > 0 ){
						tr += "<td>"+ptsArrayg2[i+1]+"</td>"
						} else{
							tr += "<td></td>"
						}
					  if (ptsArrayg2[i+2] > 0 ){
						tr += "<td>"+ptsArrayg2[i+2]+"</td>";
						} else{
							tr += "<td></td>"
						}
					  tr += "</tr>";
					  t += tr;
				}
				$("#scoresg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target2").css('display','none');
			$("#target3").css('display','block');
		}
	});  // end click
	
		$("#killshotg2").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("killshotg2").disabled=true;
		} else{
			ptsArrayg2.push(7);
			const add = (a, b) => a + b
			const sum = ptsArrayg2.reduce(add)		
			console.log(ptsArrayg2.length); // < read the length of the amended array here
			console.log(ptsArrayg2, {'maxArrayLength': null});
			$("#scoreg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg2[i]+"</td>";
				  if (ptsArrayg2[i+1] > 0 ){
					tr += "<td>"+ptsArrayg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg2[i+2] > 0 ){
					tr += "<td>"+ptsArrayg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target2").css('display','none');
			$("#target3").css('display','block');
		}
	});  // end click	
	
}); // end ready

$(document).ready(function() { // p1g3
	var points = 0, clicks = 0, throws = 8;
	var ptsArrayg3 = [];
	
	$("#1_ringg3").click(function(e) { 										// outermost ring
		e.preventDefault();													// override <a>
		if (clicks > throws) {												// n+1 == 9 throws
			$("#1_linkg3").disabled=true;										// disable this ring
		} else{
			ptsArrayg3.push(1);												// add to array
			const add = (a, b) => a + b										// summing the array
			const sum = ptsArrayg3.reduce(add)								// summing the array
			console.log(ptsArrayg3.length); 									// < read the length of the amended array here
			$("#scoreg3").html(sum);											// the sum of the array
			clicks += 1;
			console.log(clicks);
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg3.length; i+=3){						// array / 3
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg3[i]+"</td>";
				  if (ptsArrayg3[i+1] > 0 ){									// 2nd column
					tr += "<td>"+ptsArrayg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg3[i+2] > 0 ){									// 3rd column
					tr += "<td>"+ptsArrayg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg3").html(t);											// update page
		}

	});  // end click	
	
	$("#2_ringg3").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#2_linkg3").disabled=true;
		} else{
			ptsArrayg3.push(2);
			const add = (a, b) => a + b
			const sum = ptsArrayg3.reduce(add)
			console.log(ptsArrayg3.length); // < read the length of the amended array here
			$("#scoreg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg3[i]+"</td>";
				  if (ptsArrayg3[i+1] > 0 ){
					tr += "<td>"+ptsArrayg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg3[i+2] > 0 ){
					tr += "<td>"+ptsArrayg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg3").html(t);											// update page
		}
	});  // end click	
	
	$("#3_ringg3").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#3_linkg3").disabled=true;
		} else{		
			ptsArrayg3.push(3);
			const add = (a, b) => a + b
			const sum = ptsArrayg3.reduce(add)		
			console.log(ptsArrayg3.length); // < read the length of the amended array here
			$("#scoreg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg3[i]+"</td>";
				  if (ptsArrayg3[i+1] > 0 ){
					tr += "<td>"+ptsArrayg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg3[i+2] > 0 ){
					tr += "<td>"+ptsArrayg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg3").html(t);											// update page
		}
	});  // end click	
	
	$("#4_ringg3").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#4_linkg3").disabled=true;
		} else{		
			ptsArrayg3.push(4);
			const add = (a, b) => a + b
			const sum = ptsArrayg3.reduce(add)		
			console.log(ptsArrayg3.length); // < read the length of the amended array here
			$("#scoreg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg3[i]+"</td>";
				  if (ptsArrayg3[i+1] > 0 ){
					tr += "<td>"+ptsArrayg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg3[i+2] > 0 ){
					tr += "<td>"+ptsArrayg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg3").html(t);											// update page
		}
	});  // end click	
	
	$("#5_ringg3").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#5_linkg3").disabled=true;
		} else{
			ptsArrayg3.push(5);
			const add = (a, b) => a + b
			const sum = ptsArrayg3.reduce(add)		
			console.log(ptsArrayg3.length); // < read the length of the amended array here
			console.log(ptsArrayg3, {'maxArrayLength': null});
			$("#scoreg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg3[i]+"</td>";
				  if (ptsArrayg3[i+1] > 0 ){
					tr += "<td>"+ptsArrayg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg3[i+2] > 0 ){
					tr += "<td>"+ptsArrayg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg3").html(t);											// update page
}
	});  // end click	
	
	$("#deleteg3").click(function(e) { 
		e.preventDefault();
		if (ptsArrayg3.length > 0) {
			ptsArrayg3.pop();
			const add = (a, b) => a + b
			const sum = ptsArrayg3.reduce(add, 0)
			$("#scoreg3").html(sum);
			clicks -= 1;
				var t = "";	// table header
				//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
				for (var i = 0; i < ptsArrayg3.length; i+=3){
					  var tr = "<tr>";
					  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
					  tr += "<td>"+ptsArrayg3[i]+"</td>";
					  if (ptsArrayg3[i+1] > 0 ){
						tr += "<td>"+ptsArrayg3[i+1]+"</td>"
						} else{
							tr += "<td></td>"
						}
					  if (ptsArrayg3[i+2] > 0 ){
						tr += "<td>"+ptsArrayg3[i+2]+"</td>";
						} else{
							tr += "<td></td>"
						}
					  tr += "</tr>";
					  t += tr;
				}
				$("#scoresg3").html(t);											// update page
		}
		
	});  // end click
	
		$("#killshotg3").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("killshotg3").disabled=true;
		} else{
			ptsArrayg3.push(7);
			const add = (a, b) => a + b
			const sum = ptsArrayg3.reduce(add)		
			console.log(ptsArrayg3.length); // < read the length of the amended array here
			console.log(ptsArrayg3, {'maxArrayLength': null});
			$("#scoreg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArrayg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArrayg3[i]+"</td>";
				  if (ptsArrayg3[i+1] > 0 ){
					tr += "<td>"+ptsArrayg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArrayg3[i+2] > 0 ){
					tr += "<td>"+ptsArrayg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scoresg3").html(t);											// update page
		}
	});  // end click	
	
}); // end ready

$(document).ready(function() { // p2 g1
	var points = 0, clicks = 0, throws = 8;
	var ptsArray2p = [];
	
	$("#1_ring2p").click(function(e) { 										// outermost ring
		e.preventDefault();													// override <a>
		if (clicks > throws) {												// n+1 == 9 throws
			$("#1_link2p").disabled=true;										// disable this ring
		} else{
			ptsArray2p.push(1);												// add to array
			const add = (a, b) => a + b										// summing the array
			const sum = ptsArray2p.reduce(add)								// summing the array
			console.log(ptsArray2p.length); 									// < read the length of the amended array here
			$("#score2p").html(sum);											// the sum of the array
			clicks += 1;
			console.log(clicks);
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2p.length; i+=3){						// array / 3
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2p[i]+"</td>";
				  if (ptsArray2p[i+1] > 0 ){									// 2nd column
					tr += "<td>"+ptsArray2p[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2p[i+2] > 0 ){									// 3rd column
					tr += "<td>"+ptsArray2p[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2p").html(t);											// update page
		}
		if (clicks > throws){
			$("#target4").css('display','none');
			$("#target5").css('display','block');
		}
	});  // end click	
	
	$("#2_ring2p").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#2_link2p").disabled=true;
		} else{
			ptsArray2p.push(2);
			const add = (a, b) => a + b
			const sum = ptsArray2p.reduce(add)
			console.log(ptsArray2p.length); // < read the length of the amended array here
			$("#score2p").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2p.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2p[i]+"</td>";
				  if (ptsArray2p[i+1] > 0 ){
					tr += "<td>"+ptsArray2p[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2p[i+2] > 0 ){
					tr += "<td>"+ptsArray2p[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2p").html(t);											// update page
		}
		if (clicks > throws){
			$("#target4").css('display','none');
			$("#target5").css('display','block');
		}
	});  // end click	
	
	$("#3_ring2p").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#3_link2p").disabled=true;
		} else{		
			ptsArray2p.push(3);
			const add = (a, b) => a + b
			const sum = ptsArray2p.reduce(add)		
			console.log(ptsArray2p.length); // < read the length of the amended array here
			$("#score2p").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2p.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2p[i]+"</td>";
				  if (ptsArray2p[i+1] > 0 ){
					tr += "<td>"+ptsArray2p[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2p[i+2] > 0 ){
					tr += "<td>"+ptsArray2p[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2p").html(t);											// update page
		}
		if (clicks > throws){
			$("#target4").css('display','none');
			$("#target5").css('display','block');
		}
	});  // end click	
	
	$("#4_ring2p").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#4_link2p").disabled=true;
		} else{		
			ptsArray2p.push(4);
			const add = (a, b) => a + b
			const sum = ptsArray2p.reduce(add)		
			console.log(ptsArray2p.length); // < read the length of the amended array here
			$("#score2p").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2p.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2p[i]+"</td>";
				  if (ptsArray2p[i+1] > 0 ){
					tr += "<td>"+ptsArray2p[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2p[i+2] > 0 ){
					tr += "<td>"+ptsArray2p[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2p").html(t);											// update page
		}
		if (clicks > throws){
			$("#target4").css('display','none');
			$("#target5").css('display','block');
		}
	});  // end click	
	
	$("#5_ring2p").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#5_link2p").disabled=true;
		} else{
			ptsArray2p.push(5);
			const add = (a, b) => a + b
			const sum = ptsArray2p.reduce(add)		
			console.log(ptsArray2p.length); // < read the length of the amended array here
			console.log(ptsArray2p, {'maxArrayLength': null});
			$("#score2p").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2p.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2p[i]+"</td>";
				  if (ptsArray2p[i+1] > 0 ){
					tr += "<td>"+ptsArray2p[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2p[i+2] > 0 ){
					tr += "<td>"+ptsArray2p[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2p").html(t);											// update page
		}
		if (clicks > throws){
			$("#target4").css('display','none');
			$("#target5").css('display','block');
		}
	});  // end click	
	
	$("#delete2p").click(function(e) { 
		e.preventDefault();
		if (ptsArray2p.length > 0) {
			ptsArray2p.pop();
			const add = (a, b) => a + b
			const sum = ptsArray2p.reduce(add, 0)
			$("#score2p").html(sum);
			clicks -= 1;
				var t = "";	// table header
				//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
				for (var i = 0; i < ptsArray2p.length; i+=3){
					  var tr = "<tr>";
					  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
					  tr += "<td>"+ptsArray2p[i]+"</td>";
					  if (ptsArray2p[i+1] > 0 ){
						tr += "<td>"+ptsArray2p[i+1]+"</td>"
						} else{
							tr += "<td></td>"
						}
					  if (ptsArray2p[i+2] > 0 ){
						tr += "<td>"+ptsArray2p[i+2]+"</td>";
						} else{
							tr += "<td></td>"
						}
					  tr += "</tr>";
					  t += tr;
				}
				$("#scores2p").html(t);											// update page
		}
		if (clicks > throws){
			$("#target4").css('display','none');
			$("#target5").css('display','block');
		}
	});  // end click
	
		$("#killshot2p").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("killshot2p").disabled=true;
		} else{
			ptsArray2p.push(7);
			const add = (a, b) => a + b
			const sum = ptsArray2p.reduce(add)		
			console.log(ptsArray2p.length); // < read the length of the amended array here
			console.log(ptsArray2p, {'maxArrayLength': null});
			$("#score2p").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2p.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2p[i]+"</td>";
				  if (ptsArray2p[i+1] > 0 ){
					tr += "<td>"+ptsArray2p[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2p[i+2] > 0 ){
					tr += "<td>"+ptsArray2p[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2p").html(t);											// update page
		}
		if (clicks > throws){
			$("#target4").css('display','none');
			$("#target5").css('display','block');
		}
	});  // end click	
	
}); // end ready

$(document).ready(function() { // p2g2
	var points = 0, clicks = 0, throws = 8;
	var ptsArray2pg2 = [];
	
	$("#1_ring2pg2").click(function(e) { 										// outermost ring
		e.preventDefault();													// override <a>
		if (clicks > throws) {												// n+1 == 9 throws
			$("#1_link2pg2").disabled=true;										// disable this ring
		} else{
			ptsArray2pg2.push(1);												// add to array
			const add = (a, b) => a + b										// summing the array
			const sum = ptsArray2pg2.reduce(add)								// summing the array
			console.log(ptsArray2pg2.length); 									// < read the length of the amended array here
			$("#score2pg2").html(sum);											// the sum of the array
			clicks += 1;
			console.log(clicks);
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg2.length; i+=3){						// array / 3
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg2[i]+"</td>";
				  if (ptsArray2pg2[i+1] > 0 ){									// 2nd column
					tr += "<td>"+ptsArray2pg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg2[i+2] > 0 ){									// 3rd column
					tr += "<td>"+ptsArray2pg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target5").css('display','none');
			$("#target6").css('display','block');
		}
	});  // end click	
	
	$("#2_ring2pg2").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#2_link2pg2").disabled=true;
		} else{
			ptsArray2pg2.push(2);
			const add = (a, b) => a + b
			const sum = ptsArray2pg2.reduce(add)
			console.log(ptsArray2pg2.length); // < read the length of the amended array here
			$("#score2pg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg2[i]+"</td>";
				  if (ptsArray2pg2[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg2[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target5").css('display','none');
			$("#target6").css('display','block');
		}
	});  // end click	
	
	$("#3_ring2pg2").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#3_link2pg2").disabled=true;
		} else{		
			ptsArray2pg2.push(3);
			const add = (a, b) => a + b
			const sum = ptsArray2pg2.reduce(add)		
			console.log(ptsArray2pg2.length); // < read the length of the amended array here
			$("#score2pg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg2[i]+"</td>";
				  if (ptsArray2pg2[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg2[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target5").css('display','none');
			$("#target6").css('display','block');
		}
	});  // end click	
	
	$("#4_ring2pg2").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#4_link2pg2").disabled=true;
		} else{		
			ptsArray2pg2.push(4);
			const add = (a, b) => a + b
			const sum = ptsArray2pg2.reduce(add)		
			console.log(ptsArray2pg2.length); // < read the length of the amended array here
			$("#score2pg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg2[i]+"</td>";
				  if (ptsArray2pg2[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg2[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target5").css('display','none');
			$("#target6").css('display','block');
		}
	});  // end click	
	
	$("#5_ring2pg2").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#5_link2pg2").disabled=true;
		} else{
			ptsArray2pg2.push(5);
			const add = (a, b) => a + b
			const sum = ptsArray2pg2.reduce(add)		
			console.log(ptsArray2pg2.length); // < read the length of the amended array here
			console.log(ptsArray2pg2, {'maxArrayLength': null});
			$("#score2pg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg2[i]+"</td>";
				  if (ptsArray2pg2[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg2[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target5").css('display','none');
			$("#target6").css('display','block');
		}
	});  // end click	
	
	$("#delete2pg2").click(function(e) { 
		e.preventDefault();
		if (ptsArray2pg2.length > 0) {
			ptsArray2pg2.pop();
			const add = (a, b) => a + b
			const sum = ptsArray2pg2.reduce(add, 0)
			$("#score2pg2").html(sum);
			clicks -= 1;
				var t = "";	// table header
				//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
				for (var i = 0; i < ptsArray2pg2.length; i+=3){
					  var tr = "<tr>";
					  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
					  tr += "<td>"+ptsArray2pg2[i]+"</td>";
					  if (ptsArray2pg2[i+1] > 0 ){
						tr += "<td>"+ptsArray2pg2[i+1]+"</td>"
						} else{
							tr += "<td></td>"
						}
					  if (ptsArray2pg2[i+2] > 0 ){
						tr += "<td>"+ptsArray2pg2[i+2]+"</td>";
						} else{
							tr += "<td></td>"
						}
					  tr += "</tr>";
					  t += tr;
				}
				$("#scores2pg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target5").css('display','none');
			$("#target6").css('display','block');
		}
	});  // end click
	
		$("#killshot2pg2").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("killshot2pg2").disabled=true;
		} else{
			ptsArray2pg2.push(7);
			const add = (a, b) => a + b
			const sum = ptsArray2pg2.reduce(add)		
			console.log(ptsArray2pg2.length); // < read the length of the amended array here
			console.log(ptsArray2pg2, {'maxArrayLength': null});
			$("#score2pg2").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg2.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg2[i]+"</td>";
				  if (ptsArray2pg2[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg2[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg2[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg2").html(t);											// update page
		}
		if (clicks > throws){
			$("#target5").css('display','none');
			$("#target6").css('display','block');
		}
	});  // end click	
	
}); // end ready

$(document).ready(function() { // p2g3
	var points = 0, clicks = 0, throws = 8;
	var ptsArray2pg3 = [];
	
	$("#1_ring2pg3").click(function(e) { 										// outermost ring
		e.preventDefault();													// override <a>
		if (clicks > throws) {												// n+1 == 9 throws
			$("#1_link2pg3").disabled=true;										// disable this ring
		} else{
			ptsArray2pg3.push(1);												// add to array
			const add = (a, b) => a + b										// summing the array
			const sum = ptsArray2pg3.reduce(add)								// summing the array
			console.log(ptsArray2pg3.length); 									// < read the length of the amended array here
			$("#score2pg3").html(sum);											// the sum of the array
			clicks += 1;
			console.log(clicks);
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg3.length; i+=3){						// array / 3
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg3[i]+"</td>";
				  if (ptsArray2pg3[i+1] > 0 ){									// 2nd column
					tr += "<td>"+ptsArray2pg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg3[i+2] > 0 ){									// 3rd column
					tr += "<td>"+ptsArray2pg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg3").html(t);											// update page
		}

	});  // end click	
	
	$("#2_ring2pg3").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#2_link2pg3").disabled=true;
		} else{
			ptsArray2pg3.push(2);
			const add = (a, b) => a + b
			const sum = ptsArray2pg3.reduce(add)
			console.log(ptsArray2pg3.length); // < read the length of the amended array here
			$("#score2pg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg3[i]+"</td>";
				  if (ptsArray2pg3[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg3[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg3").html(t);											// update page
		}
	});  // end click	
	
	$("#3_ring2pg3").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#3_link2pg3").disabled=true;
		} else{		
			ptsArray2pg3.push(3);
			const add = (a, b) => a + b
			const sum = ptsArray2pg3.reduce(add)		
			console.log(ptsArray2pg3.length); // < read the length of the amended array here
			$("#score2pg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg3[i]+"</td>";
				  if (ptsArray2pg3[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg3[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg3").html(t);											// update page
		}
	});  // end click	
	
	$("#4_ring2pg3").click(function(e) {
		e.preventDefault();	
		if (clicks > throws) {												// n+1 == 9 throws
			$("#4_link2pg3").disabled=true;
		} else{		
			ptsArray2pg3.push(4);
			const add = (a, b) => a + b
			const sum = ptsArray2pg3.reduce(add)		
			console.log(ptsArray2pg3.length); // < read the length of the amended array here
			$("#score2pg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg3[i]+"</td>";
				  if (ptsArray2pg3[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg3[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg3").html(t);											// update page
		}
	});  // end click	
	
	$("#5_ring2pg3").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("#5_link2pg3").disabled=true;
		} else{
			ptsArray2pg3.push(5);
			const add = (a, b) => a + b
			const sum = ptsArray2pg3.reduce(add)		
			console.log(ptsArray2pg3.length); // < read the length of the amended array here
			console.log(ptsArray2pg3, {'maxArrayLength': null});
			$("#score2pg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg3[i]+"</td>";
				  if (ptsArray2pg3[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg3[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg3").html(t);											// update page
}
	});  // end click	
	
	$("#delete2pg3").click(function(e) { 
		e.preventDefault();
		if (ptsArray2pg3.length > 0) {
			ptsArray2pg3.pop();
			const add = (a, b) => a + b
			const sum = ptsArray2pg3.reduce(add, 0)
			$("#score2pg3").html(sum);
			clicks -= 1;
				var t = "";	// table header
				//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
				for (var i = 0; i < ptsArray2pg3.length; i+=3){
					  var tr = "<tr>";
					  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
					  tr += "<td>"+ptsArray2pg3[i]+"</td>";
					  if (ptsArray2pg3[i+1] > 0 ){
						tr += "<td>"+ptsArray2pg3[i+1]+"</td>"
						} else{
							tr += "<td></td>"
						}
					  if (ptsArray2pg3[i+2] > 0 ){
						tr += "<td>"+ptsArray2pg3[i+2]+"</td>";
						} else{
							tr += "<td></td>"
						}
					  tr += "</tr>";
					  t += tr;
				}
				$("#scores2pg3").html(t);											// update page
		}
		
	});  // end click
	
		$("#killshot2pg3").click(function(e) { 
		e.preventDefault();
				if (clicks > throws) {										// n+1 == 9 throws
			$("killshot2pg3").disabled=true;
		} else{
			ptsArray2pg3.push(7);
			const add = (a, b) => a + b
			const sum = ptsArray2pg3.reduce(add)		
			console.log(ptsArray2pg3.length); // < read the length of the amended array here
			console.log(ptsArray2pg3, {'maxArrayLength': null});
			$("#score2pg3").html(sum);
			clicks += 1;
			var t = "";	// table header
			//var t = "<tr><th>Rd</th><th>Left</th><th>Bottom</th><th>Right</th></tr>";	// table header
			for (var i = 0; i < ptsArray2pg3.length; i+=3){
				  var tr = "<tr>";
				  tr += "<td>"+(i+3)/3+"</td>";								// Round Column
				  tr += "<td>"+ptsArray2pg3[i]+"</td>";
				  if (ptsArray2pg3[i+1] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+1]+"</td>"
					} else{
						tr += "<td></td>"
					}
				  if (ptsArray2pg3[i+2] > 0 ){
					tr += "<td>"+ptsArray2pg3[i+2]+"</td>";
					} else{
						tr += "<td></td>"
					}
				  tr += "</tr>";
				  t += tr;
			}
			$("#scores2pg3").html(t);											// update page
		}
	});  // end click	
	
}); // end ready