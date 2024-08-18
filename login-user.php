<?php
require_once "controllerUserData.php";

// Function to sanitize and escape input
function cleanInput($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

// Sanitize and escape email if set
$email = isset($_POST['email']) ? cleanInput($_POST['email']) : '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Form</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="logAndsign.css">
    <style>
        .toggle-password {
            cursor: pointer;
            float: right;
            margin-right: 10px;
            margin-top: -30px;
            position: relative;
            z-index: 2;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-4 offset-md-4 form login-form">
                <form action="login-user.php" method="POST" autocomplete="">
                    <h2 class="text-center">Login Form</h2>
                    <p class="text-center">Login with your email and password.</p>
                    <?php if(count($errors) > 0): ?>
                        <div class="alert alert-danger text-center">
                            <?php foreach($errors as $showerror): ?>
                                <?php echo cleanInput($showerror); ?>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                    <div class="form-group">
                        <input class="form-control" type="email" name="email" placeholder="username" required value="<?php echo cleanInput($email); ?>">
                    </div>
                    <div class="form-group position-relative">
                        <input class="form-control" type="password" name="password" placeholder="Password" required id="password">
                        <span class="toggle-password" onclick="togglePasswordVisibility()">&#128065;</span>
                    </div>
                    <div class="link forget-pass text-left"><a href="forgot-password.php">Forgot password?</a></div>
                    <div class="g-recaptcha" data-sitekey="6LfVROwpAAAAAGYfzvTj8vEAWoqVdjAfHfoa1mea"></div>
                    <div class="form-group mt-3">
                        <input class="form-control button" type="submit" name="login" value="Login">
                    </div>
                    <div class="link login-link text-center">Not yet a member? <a href="signup-user.php">Signup now</a></div>
                </form>
            </div>
        </div>
    </div>
    <script>
        function togglePasswordVisibility() {
            var passwordField = document.getElementById("password");
            if (passwordField.type === "password") {
                passwordField.type = "text";
            } else {
                passwordField.type = "password";
            }
        }
    </script>
</body>
</html>
