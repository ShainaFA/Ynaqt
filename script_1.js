
document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');

    
    if (email) {
        messageElement.textContent = 'A password reset link has been sent to ' + email;
    } else {
        messageElement.textContent = 'Please enter a valid email address.';
    }
});
