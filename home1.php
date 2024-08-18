<!DOCTYPE html>
<html>
<head>
	<title>Home Page</title>
	<style>
		/* Add some basic styling to our page */
		body {
			font-family: Arial, sans-serif;
			text-align: center;
		}
		
		.logout-button {
			background-color: #4CAF50;
			color: #ffffff;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
		}
		
		.logout-button:hover {
			background-color: #3e8e41;
		}
	</style>
</head>
<body>
	<h1>Welcome to the Home Page</h1>
	<p>You are currently logged in.</p>
	<button class="logout-button" id="logout-button"><a href="logout-user.php">Log Out</button>
    
	
	<script>
		// Add an event listener to the logout button
		document.getElementById("logout-button").addEventListener("click", function() {
			// Log out the user and redirect to the login page
			// Replace this with your actual logout functionality
			alert("You have been logged out.");
			window.location.href = "login-user.php";
		});
	</script>
</body>
</html>