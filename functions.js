//Colm Ryan R00125071
var total = 0;
function getSize(){
	
	var size = document.getElementById("size").value;
	document.getElementById("sizeDisplay").innerHTML = "You selected: " + size + " Pizza";
	

	if(size=='9-inch'){
			document.getElementById("basicPizza").style.width='180px';
			document.getElementById("basicPizza").style.height='180px';
			document.getElementById("topping-1").style.width='180px';
			document.getElementById("topping-1").style.height='180px';
			document.getElementById("topping-2").style.width='180px';
			document.getElementById("topping-2").style.height='180px';
			document.getElementById("topping-3").style.width='180px';
			document.getElementById("topping-3").style.height='180px';
			document.getElementById("topping-4").style.width='180px';
			document.getElementById("topping-4").style.height='180px';
			document.getElementById("topping-5").style.width='180px';
			document.getElementById("topping-5").style.height='180px';
			total=12.00;
			showPrice();
			
	}else if(size=='12-inch'){
			document.getElementById("basicPizza").style.width='240px';
			document.getElementById("basicPizza").style.height='240px';
			document.getElementById("topping-1").style.width='240px';
			document.getElementById("topping-1").style.height='240px';
			document.getElementById("topping-2").style.width='240px';
			document.getElementById("topping-2").style.height='240px';
			document.getElementById("topping-3").style.width='240px';
			document.getElementById("topping-3").style.height='240px';
			document.getElementById("topping-4").style.width='240px';
			document.getElementById("topping-4").style.height='240px';
			document.getElementById("topping-5").style.width='240px';
			document.getElementById("topping-5").style.height='240px';
			total=14.00;
			showPrice()
	}else if(size=='14-inch'){
			document.getElementById("basicPizza").style.width='280px';
			document.getElementById("basicPizza").style.height='280px';
			document.getElementById("topping-1").style.width='280px';
			document.getElementById("topping-1").style.height='280px';
			document.getElementById("topping-2").style.width='280px';
			document.getElementById("topping-2").style.height='280px';
			document.getElementById("topping-3").style.width='280px';
			document.getElementById("topping-3").style.height='280px';
			document.getElementById("topping-4").style.width='280px';
			document.getElementById("topping-4").style.height='280px';
			document.getElementById("topping-5").style.width='280px';
			document.getElementById("topping-5").style.height='280px';
			total=16.00;
			showPrice()			
	}else if(size=='16-inch'){
			document.getElementById("basicPizza").style.width='320px';
			document.getElementById("basicPizza").style.height='320px';
			document.getElementById("topping-1").style.width='320px';
			document.getElementById("topping-1").style.height='320px';
			document.getElementById("topping-2").style.width='320px';
			document.getElementById("topping-2").style.height='320px';
			document.getElementById("topping-3").style.width='320px';
			document.getElementById("topping-3").style.height='320px';
			document.getElementById("topping-4").style.width='320px';
			document.getElementById("topping-4").style.height='320px';
			document.getElementById("topping-5").style.width='320px';
			document.getElementById("topping-5").style.height='320px';
			total=20.00;
			showPrice();
			
	}	
}
/* ---------------------------------------------------------------------------------------------------------------------------------------------- */
function getimage1(){
	if(document.getElementById("pizza1").checked) {
		document.getElementById("topping-1").style.display="block";
		total+=1.50;
		showPrice();
	}
	
	else {document.getElementById("topping-1").style.display="none";
		total-=1.50;
		showPrice();
	}
}
function getimage2(){
	if(document.getElementById("pizza2").checked) {
		document.getElementById("topping-2").style.display="block";
		total+=1.50;
		showPrice();
		}
	
	else {document.getElementById("topping-2").style.display="none";
		total-=1.50;
		showPrice();
	}
}
function getimage3(){
	if(document.getElementById("pizza3").checked) {
		
		
		document.getElementById("topping-3").style.display="block";
		total+=1.50;
		showPrice();
		}
	
	else {document.getElementById("topping-3").style.display="none";
		total-=1.50;
		showPrice();
	}
}
function getimage4(){
	if(document.getElementById("pizza4").checked) {
		document.getElementById("topping-4").style.display="block";
		total+=1.50;
		showPrice();
		}
	
	else {document.getElementById("topping-4").style.display="none";
		total-=1.50;
		showPrice();
	}
}
function getimage5(){
	if(document.getElementById("pizza5").checked) {
		document.getElementById("topping-5").style.display="block";
		total+=1.50;
		showPrice();
		}
	
	else {document.getElementById("topping-5").style.display="none";
		total-=1.50;
		showPrice();
	}
}


/* ---------------------------------------------------------------------------------------------------------------------------------------------- */

function discount(){
	if ("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" == mycit.ie){
		total*=0.8;
		alert("you got a discount");
		showPrice();
	}
	else{total=total;
	showPrice();
	}		
} 

/* ---------------------------------------------------------------------------------------------------------------------------------------------- */
function showPrice(){
	
	document.getElementById("total").innerHTML = "Total:&euro;" + total;
}