// function add() {
//     let num1 = parseInt(document.getElementById('num1').value);
//     let num2 = parseInt(document.getElementById('num2').value);
//     let result = num1 + num2;
//     document.getElementById('result').innerHTML = "Result: " + result;
//   }
  
//   function subtract() {
//     let num1 = parseInt(document.getElementById('num1').value);
//     let num2 = parseInt(document.getElementById('num2').value);
//     let result = num1 - num2;
//     document.getElementById('result').innerHTML = "Result: " + result;
//   }
  
//   function clearInputs() {
//     document.getElementById('num1').value = "";
//     document.getElementById('num2').value = "";
//     document.getElementById('result').innerHTML = "";
//   }
  
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
  }
  