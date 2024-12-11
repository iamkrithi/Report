<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input data
    $fullName = htmlspecialchars($_POST['fullName']);
    $dob = htmlspecialchars($_POST['dob']);
    $gender = htmlspecialchars($_POST['gender']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);
    $highestQualification = htmlspecialchars($_POST['highestQualification']);
    $instituteName = htmlspecialchars($_POST['instituteName']);
    $yearOfCompletion = htmlspecialchars($_POST['yearOfCompletion']);
    $marks = htmlspecialchars($_POST['marks']);
    $preferredCourse = htmlspecialchars($_POST['preferredCourse']);
    $preferredCampus = htmlspecialchars($_POST['preferredCampus']);

    // Process the form data (e.g., store in a database or send via email)
    // For now, we'll return a success message

    echo "Success! Your admission form has been submitted.";
}
?>
