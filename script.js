$(document).ready(function() {
    $('#admissionForm').submit(function(e) {
        e.preventDefault();  // Prevent form submission

        // Get form data
        var fullName = $('#fullName').val();
        var dob = $('#dob').val();
        var gender = $('#gender').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();
        var highestQualification = $('#highestQualification').val();
        var instituteName = $('#instituteName').val();
        var yearOfCompletion = $('#yearOfCompletion').val();
        var marks = $('#marks').val();
        var preferredCourse = $('#preferredCourse').val();
        var preferredCampus = $('#preferredCampus').val();

        // Send data to PHP script for processing
        $.ajax({
            type: "POST",
            url: "submit.php",
            data: {
                fullName: fullName,
                dob: dob,
                gender: gender,
                email: email,
                phone: phone,
                address: address,
                highestQualification: highestQualification,
                instituteName: instituteName,
                yearOfCompletion: yearOfCompletion,
                marks: marks,
                preferredCourse: preferredCourse,
                preferredCampus: preferredCampus
            },
            success: function(response) {
                // Display the submitted data
                $('#response').show();
                $('#respName').text(fullName);
                $('#respDob').text(dob);
                $('#respGender').text(gender);
                $('#respEmail').text(email);
                $('#respPhone').text(phone);
                $('#respAddress').text(address);
                $('#respQualification').text(highestQualification);
                $('#respInstitute').text(instituteName);
                $('#respYear').text(yearOfCompletion);
                $('#respMarks').text(marks);
                $('#respCourse').text(preferredCourse);
                $('#respCampus').text(preferredCampus);
            }
        });
    });
});
