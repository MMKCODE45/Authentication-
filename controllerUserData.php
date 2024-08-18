<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
require "dbcon.php";
require 'vendor/autoload.php'; // Ensure PHPMailer is installed via Composer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$email = "";
$errors = array();

// Function to send emails using PHPMailer
function sendEmail($email, $name, $subject, $body) {
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'methamoetik@gmail.com'; // Replace with your email
        $mail->Password = 'wziq fyud dewx cwvz'; // Replace with your email password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('methamoetik@gmail.com', 'FunOly'); // Replace with your email and website name
        $mail->addAddress($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        return true;
    } catch (Exception $e) {
        error_log('Mailer Error: ' . $mail->ErrorInfo);
        return false;
    }
}

// Function to validate CSRF token
function validateCsrfToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Function to validate reCAPTCHA
function validateReCaptcha($response) {
    $secret = '6LfVROwpAAAAAIFsXrDy8e9KQ_wFcFAJ9Z6fx334';
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
    $responseKeys = json_decode($response, true);
    return $responseKeys['success'];
}

// Function to check password strength
function checkPasswordStrength($password) {
    $strength = 0;

    if (strlen($password) >= 8) $strength++;
    if (preg_match('/[a-z]/', $password)) $strength++;
    if (preg_match('/[A-Z]/', $password)) $strength++;
    if (preg_match('/\d/', $password)) $strength++;
    if (preg_match('/[\W]/', $password)) $strength++;

    return $strength;
}

// If user signup button
if (isset($_POST['signup'])) {
    $name = $_POST['FullName'];
    $email = $_POST['Email'];
    $contactNumber = $_POST['ContactNumber'];
    $country = $_POST['Country'];
    $password = $_POST['password'];
    $cpassword = $_POST['password_confirm'];
    $csrf_token = $_POST['csrf_token'];
    $recaptcha_response = $_POST['g-recaptcha-response'];

    if (!validateCsrfToken($csrf_token)) {
        $errors['csrf'] = "Invalid CSRF token!";
    }
    
    if (!validateReCaptcha($recaptcha_response)) {
        $errors['recaptcha'] = "ReCAPTCHA validation failed!";
    }

    $passwordStrength = checkPasswordStrength($password);
    if ($passwordStrength < 3) {
        $errors['password'] = "Password is too weak. Please include at least 8 characters, a mix of upper and lower case letters, numbers, and special characters.";
    }

    if ($password !== $cpassword) {
        $errors['password'] = "Confirm password not matched!";
    }

    $stmt = $conn->prepare("SELECT * FROM user WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $res = $stmt->get_result();

    if ($res->num_rows > 0) {
        $errors['email'] = "Email that you have entered already exists!";
    }

    if (count($errors) === 0) {
        $encpass = password_hash($password, PASSWORD_BCRYPT);
        $code = rand(999999, 111111);
        $status = "notverified";
        $stmt = $conn->prepare("INSERT INTO user (FullName, Email, ContactNumber, Country, Password, code, status) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("sssssis", $name, $email, $contactNumber, $country, $encpass, $code, $status);
        $data_check = $stmt->execute();

        if ($data_check && sendEmail($email, $name, 'Email Verification Code', '<p>Your verification code is: <b style="font-size: 30px;">' . $code . '</b></p>')) {
            $info = "We've sent a verification code to your email - $email";
            $_SESSION['info'] = $info;
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            header('location: user-otp.php');
            exit();
        } else {
            $errors['otp-error'] = "Failed while sending code!";
        }
    }
}

// Continue with the rest of your script



// If user clicks verification code submit button
if (isset($_POST['check'])) {
    $_SESSION['info'] = "";
    $otp_code = $_POST['otp'];
    $stmt = $conn->prepare("SELECT * FROM user WHERE code = ? AND status = 'notverified'");
    $stmt->bind_param("i", $otp_code);
    $stmt->execute();
    $code_res = $stmt->get_result();

    if ($code_res->num_rows > 0) {
        $fetch_data = $code_res->fetch_assoc();
        $email = $fetch_data['Email'];
        $code = 0;
        $status = 'verified';
        $stmt = $conn->prepare("UPDATE user SET code = ?, status = ? WHERE Email = ?");
        $stmt->bind_param("iss", $code, $status, $email);
        $update_res = $stmt->execute();

        if ($update_res) {
            $_SESSION['name'] = $fetch_data['FullName'];
            $_SESSION['email'] = $email;
            header('location: login-user.php');
            exit();
        } else {
            $errors['otp-error'] = "Failed while updating code!";
        }
    } else {
        $errors['otp-error'] = "You've entered incorrect code!";
    }
}

// If user clicks login button
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $stmt = $conn->prepare("SELECT * FROM user WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $res = $stmt->get_result();

    if ($res->num_rows > 0) {
        $fetch = $res->fetch_assoc();
        $fetch_pass = $fetch['Password'];
        if (password_verify($password, $fetch_pass)) {
            $_SESSION['user_id'] = $fetch['id'];
            $_SESSION['email'] = $email;

            $status = $fetch['status'];
            if ($status == 'verified') {
                if ($fetch['Role'] == 'admin') {
                    header('location: adminDash.php');
                    exit();
                } else {
                    header('location: home1.php');
                    exit();
                }
            } else {
                $info = "It looks like you haven't still verified your email - $email";
                $_SESSION['info'] = $info;
                header('location: user-otp.php');
            }
        } else {
            $errors['email'] = "Incorrect email or password!";
        }
    } else {
        $errors['email'] = "It looks like you're not yet a member! Click on the bottom link to signup.";
    }
}

// If user clicks check email button
if (isset($_POST['check-email'])) {
    $email = strtolower(trim($_POST['email'])); // Ensure 'email' is lowercase

    $stmt = $conn->prepare("SELECT * FROM user WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $run_sql = $stmt->get_result();

    if ($run_sql->num_rows > 0) {
        $code = rand(999999, 111111);
        $stmt = $conn->prepare("UPDATE user SET code = ? WHERE Email = ?");
        $stmt->bind_param("is", $code, $email);
        $run_query = $stmt->execute();

        if ($run_query) {
            $body = "<p>Your password reset code is: <b style='font-size: 30px;'>$code</b></p>";
            if (sendEmail($email, '', 'Password Reset Code', $body)) {
                $info = "We've sent a password reset OTP to your email - $email";
                $_SESSION['info'] = $info;
                $_SESSION['email'] = $email;
                header('location: reset-code.php');
                exit();
            } else {
                $errors['otp-error'] = "Failed while sending code!";
            }
        } else {
            $errors['db-error'] = "Something went wrong!";
        }
    } else {
        $errors['email'] = "This email address does not exist!";
    }
}

// If user clicks check reset otp button
if (isset($_POST['check-reset-otp'])) {
    $_SESSION['info'] = "";
    $otp_code = $_POST['otp'];
    $stmt = $conn->prepare("SELECT * FROM user WHERE code = ?");
    $stmt->bind_param("i", $otp_code);
    $stmt->execute();
    $code_res = $stmt->get_result();

    if ($code_res->num_rows > 0) {
        $fetch_data = $code_res->fetch_assoc();
        $email = $fetch_data['Email'];
        $_SESSION['email'] = $email;
        $info = "Please create a new password that you don't use on any other site.";
        $_SESSION['info'] = $info;
        header('location: new-password.php');
        exit();
    } else {
        $errors['otp-error'] = "You've entered incorrect code!";
    }
}

// If user clicks change password button
if (isset($_POST['change-password'])) {
    $_SESSION['info'] = "";
    $password = $_POST['password'];
    $cpassword = $_POST['password_confirm'];
    if ($password !== $cpassword) {
        $errors['password'] = "Confirm password not matched!";
    } else {
        $code = 0;
        $email = $_SESSION['email'];
        $encpass = password_hash($password, PASSWORD_BCRYPT);
        $stmt = $conn->prepare("UPDATE user SET code = ?, Password = ? WHERE Email = ?");
        $stmt->bind_param("iss", $code, $encpass, $email);
        $run_query = $stmt->execute();

        if ($run_query) {
            $info = "Your password has been changed. Now you can login with your new password.";
            $_SESSION['info'] = $info;
            header('Location: password-changed.php');
        } else {
            $errors['db-error'] = "Failed to change your password!";
        }
    }
}

// If login now button click
if (isset($_POST['login-now'])) {
    header('Location: login-user.php');
}
?>
