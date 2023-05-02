function add() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var result = num1 + num2;
    console.log(result);
	document.getElementById("result").innerHTML = result;
    document.getElementById("result").classList.remove("d-none");
}

function subtract() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var result = num1 - num2;
    console.log(result);
	document.getElementById("result").innerHTML = result;
    document.getElementById("result").classList.remove("d-none");
}
function clearInput() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").classList.add("d-none");
}
  