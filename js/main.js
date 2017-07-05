//this creates the Nav scroll

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 400, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});






//proposal

function submit() {
		var results = document.getElementById('results')

		var association = document.getElementById('AssoName').value
		var address = document.getElementById('address').value
		var units = document.getElementById('numUnits').value
		var project = document.getElementById('cProject').value
		var	development = document.getElementById('development').value
		var manageYears = document.getElementById('years').value
		var companies = document.getElementById('5years').value
		var manageReq = document.getElementById('requiredManage').value
		var	position = document.getElementById('position').value
		var amenities = document.getElementById('positionOne').value
		var provide = document.getElementById('provide').value

		//break
		var name = document.getElementById('name').value
		var addressTwo = document.getElementById('address2').value
		var phone = document.getElementById('phone').value
		var email = document.getElementById('email').value
		var verify = document.getElementById('verify').value

	//input 1
	if (association == "") {
		results.addClassName = "failure"
		results.textContent = "------Please Insert an Association------"
		//alert('Please Insert an Association')
		return
	}
	//input 2
	if (address == "") {
		results.addClassName = "failure"
		results.textContact = "------Please insert an address------"
		return
	}
	//input 3
	if (units == "") {
		results.addClassName = "failure"
		results.textContact = "------please enter the number of Units------"
		return
	}
	//input 4
	if (project == "") {
		results.addClassName = "failure"
		results.textContact = "------please enter your Project------"
		return
	}
	//input 5
	if (development == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter a planned development------"
		return
	}
	//input 6
	if (manageYears == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter a how many years your with management company------"
		return
	}
	//input 7
	if (companies == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter how many companies you have been with------"
		return
	}
	//input 8
	if (manageReq == "") {
		results.addClassName = "failure"
		results.textContact = "------Please choose an option------"
		return
	}
	//input 9
	if (position == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter a position------"
		return
	}
	//input 10
	if (positionOne == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter a requirement------"
		return
	}
	//input 11
	if (provide == "") {
		results.addClassName = "failure"
		results.textContact = "------Please have an entry------"
		return
	}
	//input 12
	if (amenities == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter Amenities------"
		return
	}
	//this is the break between
	//input 13
	if (name == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter a name------"
		return
	}
	//input 14
	if (addressTwo == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter an address------"
		return
		}
	//input 15
	if (phone == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter a phone number------"
		return
	}
	//input 16
	if (email == "") {
		results.addClassName = "failure"
		results.textContact = "------Please enter a email------"
		return
	}
	//input 17
	if (verify == true) {
		results.addClassName = "failure"
		results.textContact = "------Please enter the correct verification code------"
		return
	}
	//this is after all the inputs
	results.className = 'success'
	results.textContent = 'Thanks for the input! One moment please'
	$("#register").addClass("animated rotateOutUpLeft")

}
document.getElementById('btn').addEventListener('click', submit, false)
