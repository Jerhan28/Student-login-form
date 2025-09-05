        document.addEventListener('DOMContentLoaded', function() {
            const resetForm = document.getElementById('resetForm');
            const codeForm = document.getElementById('codeForm');
            const newPasswordForm = document.getElementById('newPasswordForm');
            const resetContainer = document.getElementById('resetContainer');
            const resetEmail = document.getElementById('resetEmail');
            const emailError = document.getElementById('emailError');
            const successMessage = document.getElementById('successMessage');
            const steps = document.querySelectorAll('.step');
            
            // Add focus effects
            resetEmail.addEventListener('focus', function() {
                this.parentNode.querySelector('i').style.color = '#1e8449';
            });

            resetEmail.addEventListener('blur', function() {
                this.parentNode.querySelector('i').style.color = '#888';
            });

            // Form validation for email submission
            resetForm.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;

                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(resetEmail.value)) {
                    emailError.style.display = 'block';
                    resetEmail.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    emailError.style.display = 'none';
                    resetEmail.parentNode.classList.remove('shake');
                }

                // Remove shake animation after it completes
                setTimeout(() => {
                    resetEmail.parentNode.classList.remove('shake');
                }, 500);

                // If form is valid, simulate sending reset email
                if (isValid) {
                    // Show loading state
                    const resetButton = resetForm.querySelector('.reset-button');
                    resetButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                    resetButton.disabled = true;

                    // Simulate API call
                    setTimeout(() => {
                        // Show success message and move to next step
                        successMessage.style.display = 'block';
                        
                        // Move to verification code step after a delay
                        setTimeout(() => {
                            changeStep(1, 2);
                            resetButton.innerHTML = 'Send Reset Link';
                            resetButton.disabled = false;
                        }, 2000);
                    }, 1500);
                }
            });

            // Code verification form
            codeForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const codeInput = document.getElementById('verificationCode');
                const codeError = document.getElementById('codeError');
                
                if (codeInput.value.length !== 6) {
                    codeError.style.display = 'block';
                    codeInput.parentNode.classList.add('shake');
                    
                    setTimeout(() => {
                        codeInput.parentNode.classList.remove('shake');
                    }, 500);
                    return;
                }
                
                // Show loading state
                const verifyButton = codeForm.querySelector('.reset-button');
                verifyButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...';
                verifyButton.disabled = true;
                
                // Simulate verification
                setTimeout(() => {
                    // Move to password reset step
                    changeStep(2, 3);
                    verifyButton.innerHTML = 'Verify Code';
                    verifyButton.disabled = false;
                }, 1500);
            });

            // New password form
            newPasswordForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const newPassword = document.getElementById('newPassword');
                const confirmPassword = document.getElementById('confirmPassword');
                const newPasswordError = document.getElementById('newPasswordError');
                const confirmPasswordError = document.getElementById('confirmPasswordError');
                let isValid = true;
                
                // Validate password
                if (newPassword.value.length < 8) {
                    newPasswordError.style.display = 'block';
                    newPassword.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    newPasswordError.style.display = 'none';
                    newPassword.parentNode.classList.remove('shake');
                }
                
                // Validate password confirmation
                if (newPassword.value !== confirmPassword.value) {
                    confirmPasswordError.style.display = 'block';
                    confirmPassword.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    confirmPasswordError.style.display = 'none';
                    confirmPassword.parentNode.classList.remove('shake');
                }
                
                // Remove shake animations
                setTimeout(() => {
                    newPassword.parentNode.classList.remove('shake');
                    confirmPassword.parentNode.classList.remove('shake');
                }, 500);
                
                if (!isValid) return;
                
                // Show loading state
                const resetButton = newPasswordForm.querySelector('.reset-button');
                resetButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Resetting...';
                resetButton.disabled = true;
                
                // Simulate password reset
                setTimeout(() => {
                    resetButton.innerHTML = '<i class="fas fa-check"></i> Password Reset!';
                    
                    // Redirect to login after success
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                }, 1500);
            });

            // Function to change steps
            function changeStep(current, next) {
                steps[current - 1].classList.remove('active');
                steps[next - 1].classList.add('active');
            }

            // Add hover effect to reset container
            resetContainer.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            });

            resetContainer.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
            });
        });