<?php
$servername = "sql211.infinityfree.com";
$username = "if0_39266217";
$password = "rahul2904";
$dbname = "if0_39266217_portfolio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo "<script>
        localStorage.setItem('feedback', 'Connection failed. Please try again.');
        window.location.href = 'index.html';
    </script>";
    exit;
}

if (!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["message"])) {
    $name = $conn->real_escape_string(trim($_POST["name"]));
    $email = $conn->real_escape_string(trim($_POST["email"]));
    $message = $conn->real_escape_string(trim($_POST["message"]));

    $stmt = $conn->prepare("INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo "<script>
            localStorage.setItem('feedback', 'Thank you! Your feedback was submitted successfully.');
            window.location.href = 'index.html';
        </script>";
    } else {
        echo "<script>
            localStorage.setItem('feedback', 'Failed to submit feedback. Please try again.');
            window.location.href = 'index.html';
        </script>";
    }

    $stmt->close();
} else {
    echo "<script>
        localStorage.setItem('feedback', 'Please fill in all the fields.');
        window.location.href = 'index.html';
    </script>";
}

$conn->close();
?>
