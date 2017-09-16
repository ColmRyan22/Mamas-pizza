<!-- Colm Ryan R00125071 -->
<!DOCTYPE html>
<html>
	<head>
	<title>Mama's Pizza</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="functions.js"></script>
		
	</head>
		<body>
			<div id="header">
				<img id="logo" src = "images/mama's-pizza.jpg" alt="mama's-pizza"><br>
				<h1>MAMA'S Pizza</h1>
		
			</div>
			<div class="mydiv">
				<div id="nav">
				<ul>
					<li id="Home"><a href="index.html">Home</a></li>
					<li><a href="#Toppings">Toppings</a></li>	
					<li><a href="#Customerdetails">Customer Details</a></li>					
					</ul>
				</div>
			</div>
			
			<div id="container">
				<p id="discount">Discounts:20% for student with mycit.ie.</p>
			<div class="pizza">			
				<img id="basicPizza" class="cheese-pizza" src = "images/cheese-pizza.jpg" alt="cheese-pizza"><br>
				<img id="topping-1" src = "images/pepperoni.png" alt="Pepperoni"><br>				
				<img id="topping-2" src = "images/black-olives.png" alt="Olives"><br>
				<img id="topping-3" src = "images/red-onion.png" alt="redOnion"><br>
				<img id="topping-4" src = "images/Spinach.png" alt="spinach"><br>
				<img id="topping-5" src = "images/mushroom.png" alt="mushroom"><br>			
			</div>
			
			<div id="form">
				<form name="myForm"action= "http://atlantis.cit.ie/displayvalues.php" onsubmit="validation()">
			<div id="pizzabase">
				<input type = "Radio" name="based" value="thin" onclick="based()">Thin base<br>
				<input type = "Radio" name="based" value="thick" onclick="based()">Thick base<br>
			</div>
					
			<div id="Size">
				<label for="cde">Size:</label><br>
					<select id="size" onchange="getSize()">
						<option value="9-inch">9"</option>
						<option value="12-inch">12"</option>
						<option value="14-inch">14"</option>
						<option value="16-inch">16"</option>
					</select><br><br>
			</div>
							
			<div id="Toppings">
				<h2>Topping</h2>					
				<input type="checkbox" id ="pizza1" onclick="getimage1()"  value="Pepperoni">Pepperoni<br>
				<input type="checkbox" id ="pizza2" onclick="getimage2()"  value="Olives">Olives<br>
				<input type="checkbox" id ="pizza3" onclick="getimage3()"  value="redonions">Red-Onions<br>
				<input type="checkbox" id ="pizza4" onclick="getimage4()"  value="Spinach">Spinach<br>
				<input type="checkbox" id ="pizza5" onclick="getimage5()"  value="Mushrooms">Mushrooms<br>
			</div>
								
			<p id="sizeDisplay"></p>
			
			<p id="total" >Total:&euro;0.00</p>
							
							
			<div id="Customerdetails">
				<h2>Customer details<h2>
				<label for="fname">First Name:</label><br>
				<input type="text" name="fname" size="30" required ></input><br>
				<label for="lname">Last Name:</label><br>
				<input type="text" name="Last Name" size="30" required></input><br>
				<label for="tel">Tel:</label><br>
				<input type="num" name="Tel:" size="30" required pattern="[0-9]{10,10}$"></input><br>
				<label for="add">Address:</label><br>
				<input type="text" name="Address" size="30" required ></input><br>
				<label for="cde">Card:</label><br>
											
				<select id="myselect">
						<option>Master Card</option>
						<option>VISA</option>
						<option>PayPal</option>	
				</select><br>
				<label for="cnum">Card Num</label><br>
				<input type="num" name="Card Num" size="30"></input><br>
				<label for="cde">Expires:</label><br>
				<select id="myselect">
					<option>January</option>
					<option>feb</option>
					<option>March</option>
					<option>April</option>
					<option>May</option>
					<option>June</option>
					<option>July</option>
					<option>Aug</option>
					<option>September</option>
					<option>October</option>
					<option>November</option>
					<option>December</option>
				</select>
				<select id="myselect">
					<option>2017</option>
					<option>2018</option>
					<option>2019</option>
					<option>2020</option>
					<option>2021</option>
					<option>2022</option>
					<option>2023</option>
					<option>2024</option>
					<option>2025</option>
					<option>2026</option>
				</select><br>		
				<label for="email">Email:</label><br>
				<input type="Email" name="Email" onsubmit="discount" required size="30"></input><br>
				<input type="button" onclick="discount" value="Submit Discount"></input>
				<input type="submit" value="Submit"></input><br>
				<input type="reset" value="Reset"></input><br>
			</div>
				</form>
			</div>
			</div>
			<div id="footer">
				<h2>Email:<a href="mailto:mamma'sPizza@example.com">Click here</a></h2>
				<h2>Tell:<a href="tel:+0872056080">Call</a></h2>
			</div>
	</body>
</html>
