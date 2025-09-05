        document.addEventListener('DOMContentLoaded', function() {
            const signupForm = document.getElementById('signupForm');
            const signupContainer = document.getElementById('signupContainer');
            const firstNameInput = document.getElementById('firstName');
            const lastNameInput = document.getElementById('lastName');
            const emailInput = document.getElementById('email');
            const courseInput = document.getElementById('course');
            const yearInput = document.getElementById('yearLevel');
            const passwordInput = document.getElementById('password');
            const photoInput = document.getElementById('photo');
            const photoPreview = document.getElementById('photoPreview');
            const previewImage = document.getElementById('previewImage');
            const photoIcon = document.querySelector('.photo-icon');

            // Photo upload preview
            photoInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        previewImage.src = event.target.result;
                        previewImage.style.display = 'block';
                        photoIcon.style.display = 'none';
                    }
                    reader.readAsDataURL(file);
                }
            });

            // Add focus effects to all inputs
            document.querySelectorAll('input, select').forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentNode.querySelector('i').style.color = '#1e8449';
                    this.parentNode.style.borderColor = '#1e8449';
                });

                input.addEventListener('blur', function() {
                    this.parentNode.querySelector('i').style.color = '#888';
                    this.parentNode.style.borderColor = '#ddd';
                });
            });

            // Form validation
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                let isValid = true;

                // Validate first name
                if (firstNameInput.value.trim() === '') {
                    document.getElementById('firstNameError').style.display = 'block';
                    firstNameInput.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    document.getElementById('firstNameError').style.display = 'none';
                    firstNameInput.parentNode.classList.remove('shake');
                }

                // Validate last name
                if (lastNameInput.value.trim() === '') {
                    document.getElementById('lastNameError').style.display = 'block';
                    lastNameInput.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    document.getElementById('lastNameError').style.display = 'none';
                    lastNameInput.parentNode.classList.remove('shake');
                }

                // Validate email
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    document.getElementById('emailError').style.display = 'block';
                    emailInput.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    document.getElementById('emailError').style.display = 'none';
                    emailInput.parentNode.classList.remove('shake');
                }

                // Validate course
                if (courseInput.value === '' || courseInput.value === null) {
                    document.getElementById('courseError').style.display = 'block';
                    courseInput.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    document.getElementById('courseError').style.display = 'none';
                    courseInput.parentNode.classList.remove('shake');
                }

                // Validate year level
                if (yearInput.value === '' || yearInput.value === null) {
                    document.getElementById('yearError').style.display = 'block';
                    yearInput.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    document.getElementById('yearError').style.display = 'none';
                    yearInput.parentNode.classList.remove('shake');
                }

                // Validate password
                if (passwordInput.value.length < 8) {
                    document.getElementById('passwordError').style.display = 'block';
                    passwordInput.parentNode.classList.add('shake');
                    isValid = false;
                } else {
                    document.getElementById('passwordError').style.display = 'none';
                    passwordInput.parentNode.classList.remove('shake');
                }

                // Remove shake animation after it completes
                setTimeout(() => {
                    document.querySelectorAll('.shake').forEach(el => {
                        el.classList.remove('shake');
                    });
                }, 500);

                // If form is valid, simulate signup
                if (isValid) {
                    // Show loading state
                    const signupButton = signupForm.querySelector('.signup-button');
                    signupButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
                    signupButton.disabled = true;

                    // Simulate API call
                    setTimeout(() => {
                        signupButton.innerHTML = '<i class="fas fa-check"></i> Account Created!';
                        
                        // Redirect after a delay (in a real app, this would be after successful registration)
                        setTimeout(() => {
                            alert('Account created successfully! (This is a demo)');
                            signupForm.reset();
                            previewImage.style.display = 'none';
                            photoIcon.style.display = 'block';
                            signupButton.innerHTML = 'Create Account';
                            signupButton.disabled = false;
                        }, 1000);
                    }, 2000);
                }
            });

            // Add hover effect to signup container
            signupContainer.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            });

            signupContainer.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
            });
        });