
      const signInBtn = document.getElementById('sign-in-btn');
      const signUpBtn = document.getElementById('sign-up-btn');
      const container = document.querySelector('.container');

      signUpBtn.addEventListener('click', () => {
        container.classList.add('sign-up-mode');
      });

      signInBtn.addEventListener('click', () => {
        container.classList.remove('sign-up-mode');
      });

      document.getElementById('signInForm').addEventListener('submit', function (e) {
        e.preventDefault(); 

        const email = document.getElementById('signInEmail').value;
        const password = document.getElementById('signInPassword').value;

        if (email === "ally@gmail.com" && password === "12345678") {
          alert('Login successful!');
          window.location.href = 'index.html'; 
        } else {
          alert('Please fill in both fields.');
        }
      });

      
      document.getElementById('signUpForm').addEventListener('submit', function (e) {
        e.preventDefault(); 

        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const termsAccepted = document.getElementById('terms').checked;

        if (password !== confirmPassword) {
          alert('Passwords do not match!');
        } else if (!termsAccepted) {
          alert('You must agree to the Terms and Conditions.');
        } else {
          alert('Sign-up successful!');
          window.location.href = 'index.html';
        }
      });
    