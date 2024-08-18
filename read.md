Web Application for User Authentication and Account Management
Overview
FunOly is a robust web application designed to streamline user registration, authentication, and account management processes. Built using PHP, MySQL, Bootstrap, and JavaScript, FunOly offers a secure and intuitive platform for various online activities. With features such as signup, login, account verification, password reset, and role-based access control, FunOly ensures a seamless experience for both users and administrators.

Features
User Authentication
Signup: Users can easily create new accounts by providing essential details including name, email, contact number, country, and password.

Login: Registered users can securely log in using their email and password credentials.

Logout: Users can terminate their current session by logging out of their accounts.

Account Management
Account Verification: Upon signup, users receive a verification code via email to validate their accounts.

Password Reset: Users can request a password reset code via email in case they forget their password.

Change Password: Users can securely change their passwords after verifying their identity.

Role-Based Access Control
Admin Dashboard: Administrators have exclusive access to a dashboard for managing user accounts and system settings.

Regular User Dashboard: Regular users can access their personalized dashboard to view account details and perform various actions.

Technologies Used
PHP: Backend scripting language for server-side logic and database interactions.

MySQL: Relational database management system for storing user data and application settings.

Bootstrap: Frontend framework for designing responsive and visually appealing user interfaces.

JavaScript: Client-side scripting language for enhancing interactivity and dynamic content.

File Structure
controllerUserData.php: PHP script for handling user-related operations such as signup, login, and account verification.

dbcon.php: PHP script for establishing a connection to the MySQL database.

login-user.php: Login page for users.

signup-user.php: Signup page for users.

user-otp.php: Code verification page for users during account creation.

reset-code.php: Code verification page for users during password reset.

new-password.php: Page for users to create a new password.

password-changed.php: Page confirming successful password change.

logout-user.php: PHP script for logging out users.

logAndSign.css: CSS file for styling login and signup forms.

passwordStrength.js: JavaScript file for checking the strength of passwords entered by users.

Setup
Clone the Repository: Clone the FunOly repository to your local machine using Git or download it as a ZIP file.

Local Development Environment: Set up a local web server environment with PHP and MySQL support using software packages like XAMPP, WAMP, or MAMP.

Database Setup: Import the database schema from database.sql into your MySQL database using a database management tool like phpMyAdmin or MySQL Workbench.

Database Configuration: Update the database connection settings in dbcon.php with your MySQL database credentials (hostname, database name, username, password).

Email Configuration: Ensure that the PHP mail() function is configured correctly on your server to enable sending verification and reset emails.

Testing: Open the FunOly application in your web browser and test the signup, login, account verification, and password reset functionalities.

Customization: Customize the application as per your requirements by modifying the PHP scripts, HTML templates, CSS styles, and JavaScript code.

Testing
Signup Process
Navigate to the signup page (signup-user.php).

Fill in the required fields with valid information (name, email, contact number, country, password, and password confirmation).

Click the "Signup" button.

Check your email inbox for the verification code.

Enter the verification code on the code verification page (user-otp.php).

If the code is correct, your account will be successfully verified, and you will be redirected to the login page.

Login Process
Navigate to the login page (login-user.php).

Enter your registered email and password.

Click the "Login" button.

If the credentials are correct, you will be logged in and redirected to your dashboard.

Password Reset
Navigate to the login page (login-user.php).

Click the "Forgot password?" link.

Enter your registered email address.

Check your email inbox for the password reset code.

Enter the reset code on the code verification page (reset-code.php).

If the code is correct, you will be prompted to create a new password on the new password page (new-password.php).

After successfully changing your password, you can log in with your new credentials.

Testing Results
Signup Process
Successfully signed up with valid user information.
Received the verification code via email promptly.
Account was successfully verified using the code.
Login Process
Logged in using registered email and password.
Authentication process was smooth and efficient.
Redirected to the dashboard upon successful login.
Password Reset
Requested a password reset via the "Forgot password?" link.
Received the reset code via email within minutes.
Successfully reset the password using the code and created a new password.
