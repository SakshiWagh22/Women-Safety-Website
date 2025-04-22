// login
document.getElementById("registerForm").addEventListener("submit", function(event) {
    let valid = true;

    // Name Validation
    let name = document.getElementById("name").value.trim();
    let nameError = document.getElementById("nameError");
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password Validation
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters, with at least one uppercase letter, one lowercase letter, and one number.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!valid) {
        event.preventDefault(); // Stop submission if validation fails
    } else {
        // Allow form submission without an alert
        this.action = "home.html"; // Set form action to home page
        this.submit(); // Submit the form
    }
});

//register
document.getElementById("registerForm").addEventListener("submit", function(event) {
    let valid = true;

    // Name Validation
    let name = document.getElementById("name").value.trim();
    let nameError = document.getElementById("nameError");
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Mobile Number Validation
    let mobile = document.getElementById("mobile").value.trim();
    let mobileError = document.getElementById("mobileError");
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        mobileError.textContent = "Mobile number must be exactly 10 digits.";
        valid = false;
    } else {
        mobileError.textContent = "";
    }

    // Password Validation
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 6 characters, with one uppercase, one lowercase, and one number.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

//sos button 

document.getElementById('sosButton').addEventListener('click', function(e) {
    e.preventDefault();

    // Confirm or trigger the SOS alert
    if (confirm("Are you sure you want to send an SOS alert?")) {
        // Play an alarm sound (optional)
        const alarm = new Audio('alarm.mp3'); // Replace with actual file path
        alarm.play();

        // Share location (mockup, use proper APIs in production)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                alert("SOS Sent!\nLocation:\nLatitude: " + lat + "\nLongitude: " + lon);

                // Example: Send this data to your backend or Firebase
                // fetch('/send-sos', {
                //     method: 'POST',
                //     headers: {'Content-Type': 'application/json'},
                //     body: JSON.stringify({ latitude: lat, longitude: lon })
                // });
            }, function() {
                alert("Unable to access your location.");
            });
        } else {
            alert("Geolocation is not supported by your browser.");
        }

        // Optionally: initiate a call or redirect
        // window.location.href = 'tel:100'; // Auto-call Police
    }
});


//// MediaRecorder API to record audio
navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = e => {
            const blob = new Blob([e.data], { type: 'audio/wav' });
            // send blob to backend
        };
        recorder.start();
    });