var SelectForm = document.getElementById('user_input_form');
var elements = SelectForm.elements;
var elDementiaType = elements.TypeOfD;
var elConPass = document.getElementById('ConPass');
var elPass = document.getElementById('Pass');
var elScreenName = document.getElementById('Screen');
var checkInputOther = 0
//This function will only display the other text box when other is selected from the drop down menu
function GetType() {
	if (elType.value === "Other") {
		checkInputOther = 1; 
		var inputText1 = document.getElementById('OtherTextBox');
		inputText1.innerHTML="Please enter the type of dementia you have: ";
		
		var newrow = document.createElement('input'); // Create a new element and assign to variable
		 newInput = document.createTextNode("good"); // Create a new text node and assign to variable
  	 	newrow.appendChild(newInput) // Attach text node to <p> element
  	 	var position = document.getElementById('TextBox'); // Identify position to add the <option> element
  	 	position.appendChild(newrow); // Add <option> element into position in <select>
  	 	
  	} 	
} 

function CheckType() {
	if (elType.value !== "Other") {
	debugger;
		if (checkInputOther === 1) {
			var inputText2 = document.getElementById('OtherTextBox');
			inputText2.innerHTML="";
			var position2 = document.getElementById('TextBox'); //here I am deleting the child node not the <p> text box
  			position2.removeChild(position2.childNodes[0]); 
		}
	}
}

//this function makes sure the required fields are entered. 
function elSubmitWhen() {

	if (elConPass.value !== elPass.value || elPass.value.length < 8 || elScreenName.value === "" || elPass.value === "") {
  		if (elScreenName.value === "") {
  			alert("You have not input a screen name. Please input a screen name.");
			document.getElementById("Screen").focus();
			return false// Stop the form from being sent
			
  			//put focus on screen name text box
  			}
  		else if (elPass.value === "") {
  			alert("You have not entered a password. We cannot add your profile without a password");
  			document.getElementById("Pass").focus(); // Stop the form from being sent
  			return false
  			}
  		else if (elPass.value.length < 8) {
  			alert("Your passwords less than 8 characters. Please update your password to be at least 8 characters.");
  			document.getElementById("ConPass").focus();//put focus on password text box
  			return false
  			}
  		else if (elConPass.value !== elPass.value) {
  			alert("Your passwords don't match. We can't add your profile until your password is confirmed.");
  			document.getElementById("ConPass").focus();//put focus on confirm password text box
  			return false
  			}
	}
}

(function() {

var chk = document.getElementById("ShowPass"); //get checkbox
addEvent(chk, 'change', function(e) {
		var target = e.target || e.srcElement;
		try {
			if (target.checked) {
				elConPass.type = 'text';
			} else {
				elConPass.type = 'password';
			}
		} catch(error) {
			alert("This browser cannot switch type");
		}
		});
}());

 
var elType = document.getElementById('TypeD');
elType.addEventListener('input', GetType, false);

var elSubmit = document.getElementById('Go');
elSubmit.addEventListener('click', elSubmitWhen, false);

var elCheckType = document.getElementById('TypeD');
elCheckType.addEventListener('input',CheckType, false);



//This part of the script shows the input information as the user's profile
(function () {
var elFirstName = document.getElementById('First');
var elLastName = document.getElementById('Last');
var elAge = document.getElementById('Age');
var elDiagnosis = document.getElementById('TypeD');

	addEvent(SelectForm, 'submit', function (e) {
    e.preventDefault(); // Stop the form from being sent
    document.getElementById('user_input_form').textContent = 'Screen Name: ' + elScreenName.value; // Replace form with message through DOM
 	document.getElementById('inputFirst').textContent = 'First Name: ' + elFirstName.value;
 	document.getElementById('inputLast').textContent = 'Last Name: ' + elLastName.value;
 	document.getElementById('inputAge').textContent = 'Age: ' + elAge.value;
 	document.getElementById('inputDiagnosis').textContent = 'Diagnosis: ' + elDiagnosis.value;
  });
}());



