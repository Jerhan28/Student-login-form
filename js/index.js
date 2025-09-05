       document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('loginForm');
            const loginContainer = document.getElementById('loginContainer');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const emailError = document.getElementById('emailError');
            const passwordError = document.getElementById('passwordError');

            // Add focus effects
            emailInput.addEventListener('focus', function() {
                this.parentNode.querySelector('i').style.color = '#1e8449';
            });

            emailInput.addEventListener('blur', function() {
                this.parentNode.querySelector('i').style.color = '#888';
            });

            passwordInput.addEventListener('focus', function() {
                this.parentNode.querySelector('i').style.color = '#1e8449';
            });

            passwordInput.addEventListener('blur', function() {
                this.parentNode.querySelector('i').style.color = '#888';
            });

            // Form validation
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;

                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    emailError.style.display = 'block';
                    emailInput.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    emailError.style.display = 'none';
                    emailInput.parentNode.classList.remove('shake');
                }

                // Validate password
                if (passwordInput.value.length < 8) {
                    passwordError.style.display = 'block';
                    passwordInput.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    passwordError.style.display = 'none';
                    passwordInput.parentNode.classList.remove('shake');
                }

                // Remove shake animation after it completes
                setTimeout(() => {
                    emailInput.parentNode.classList.remove('shake');
                    passwordInput.parentNode.classList.remove('shake');
                }, 500);

                // If form is valid, simulate login
                if (isValid) {
                    // Show loading state
                    const loginButton = loginForm.querySelector('.login-button');
                    loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
                    loginButton.disabled = true;

                    // Simulate API call
                    setTimeout(() => {
                        loginButton.innerHTML = '<i class="fas fa-check"></i> Login Successful!';
                        
                        // Redirect after a delay (in a real app, this would be after successful auth)
                        setTimeout(() => {
                            alert('Login successful! (This is a demo)');
                            loginButton.innerHTML = 'Login';
                            loginButton.disabled = false;
                        }, 1000);
                    }, 1500);
                }
            });

            // Add hover effect to login container
            loginContainer.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            });

            loginContainer.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
            });
        });