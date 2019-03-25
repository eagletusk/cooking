var gallonsToLiters = function(num1){
	num1 = parseInt(num1);
  //liters = US gallon * 3.7854
  return num1 * 3.7854;
}

var response = gallonsToLiters(prompt("Convert gallons to liters, what quantity of gallons would you like to convert today kind sir/madam? "));
alert(response);
