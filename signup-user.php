<?php 
require_once "controllerUserData.php"; 
$errors = $errors ?? [];
$name = $name ?? '';
$email = $email ?? '';

// Start the session if not already started
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Generate CSRF token
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}
$csrf_token = $_SESSION['csrf_token'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Signup Form</title>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="logAndsign.css">
    <style>
        .password-strength {
            display: none;
            margin-top: 10px;
        }
        .password-strength.weak {
            color: red;
        }
        .password-strength.medium {
            color: orange;
        }
        .password-strength.strong {
            color: green;
        }
        </style>
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form action="signup-user.php" method="POST" autocomplete="off">
                    <h2 class="text-center">Signup Form</h2>
                    <p class="text-center">It's quick and easy.</p>
                    <?php if(count($errors) > 0): ?>
                        <div class="alert alert-danger">
                            <?php foreach($errors as $error): ?>
                                <p><?php echo htmlspecialchars($error, ENT_QUOTES); ?></p>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                    <div class="form-group">
                        <input class="form-control" type="text" name="FullName" placeholder="Full Name" required value="<?php echo htmlspecialchars($name, ENT_QUOTES); ?>">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="email" name="Email" placeholder="User Name" required value="<?php echo htmlspecialchars($email, ENT_QUOTES); ?>">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="tel" name="ContactNumber" placeholder="Contact Number" required pattern="[0-9]{8}">
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="text" name="Country" placeholder="Country" required>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password" placeholder="Create password" required>
                    </div>
                    <div class="form-group">
                        <input class="form-control" type="password" name="password_confirm" placeholder="Confirm password" required>
                    </div>
                    <input type="hidden" name="csrf_token" value="<?php echo $csrf_token; ?>">
                    <div class="g-recaptcha" data-sitekey="6LfVROwpAAAAAGYfzvTj8vEAWoqVdjAfHfoa1mea"></div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block" type="submit" name="signup">Signup</button>
                    </div>
                    <div class="text-center">Already a member? <a href="login-user.php">Login here</a></div>
                </form>
            </div>
        </div>
    </div>
    <script src="passwordStrength.js" defer></script>
</body>
</html>
