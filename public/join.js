$("#joinform").submit(
	function()
	{
		var fname = document.forms["coldRegistrationForm"]["firstName"].value;
		
		if(fname=="" )
		{
			document.getElementById('firstName-error').style.display= 'block';
			document.getElementById('firstName-error').innerHTML = "Please enter a value.";
		}
		else
		{
			document.getElementById('firstName-error').style.display= 'none';
			document.getElementById('firstName-error').innerHTML = "";
		}
		var lname = document.forms["coldRegistrationForm"]["lastName"].value;
		if(lname=="" )
		{
			document.getElementById('lastName-error').style.display= 'block';
			document.getElementById('lastName-error').innerHTML = "Please enter a value.";
		}
		else
		{
			document.getElementById('lastName-error').style.display= 'none';
			document.getElementById('lastName-error').innerHTML = "";
		}

		var email = document.forms["coldRegistrationForm"]["email"].value;
		if(email=="" )
		{
			document.getElementById('email-error').style.display= 'block';
			document.getElementById('email-error').innerHTML = "Please enter a value.";
		}
		else
		{
			document.getElementById('email-error').style.display= 'none';
			document.getElementById('email-error').innerHTML = "";
		}

		var password = document.forms["coldRegistrationForm"]["password"].value;
		if(password=="" )
		{
			document.getElementById('password-error').style.display= 'block';
			document.getElementById('password-error').innerHTML = "Please enter a password.";
		}
		else
		{
			document.getElementById('password-error').style.display= 'none';
			document.getElementById('password-error').innerHTML = "";
		}
		

	}
);