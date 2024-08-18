<?php
// Database connection settings
$host = 'localhost:3308'; // Change this if your database is hosted elsewhere
$dbname = 'funoly';
$username = 'root';
$password = 'Whales123';

// Create connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} 
?>
