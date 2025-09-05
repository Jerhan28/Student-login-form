# Screenshot
![Screenshot of interactive login form]()

Student Login System

A modern, responsive student login interface with password recovery functionality.

Features

· Clean, Modern Design: Professional green-themed UI with smooth animations
· Responsive Layout: Works on all device sizes from mobile to desktop
· Form Validation: Client-side validation for email and password fields
· Interactive Elements: Hover effects, focus states, and visual feedback
· Password Recovery: Integrated "Forgot Password" workflow
· Remember Me: Option to save login credentials
· Sign Up Link: Easy access to registration page

Files Structure

```
login-system/
│
├── index.html          # Main login page
├── forgot_password.html # Password recovery page
├── signUp.html         # Registration page (to be created)
└── README.md           # This documentation file
```

Pages Overview

1. Login Page (index.html)

· Email and password input fields
· Remember me checkbox
· Forgot password link
· Login button with loading animation
· Sign up redirect link

2. Forgot Password Page (forgot_password.html)

· Multi-step password recovery process:
  1. Email submission for verification
  2. Verification code input
  3. New password creation
· Success/error messages
· Back to login link

Technical Details

Styling

· CSS custom properties for consistent theming
· Flexbox for layout
· CSS animations for interactive feedback
· Media queries for responsiveness
· Google Fonts (Poppins) for typography
· Font Awesome for icons

Validation

· Email format validation using regex
· Password minimum length requirement (8 characters)
· Visual error indicators with shake animation
· Success states for completed actions

Browser Compatibility

· Compatible with all modern browsers
· Graceful degradation for older browsers

Usage

1. Open index.html in a web browser to access the login form
2. Enter email and password to login (validation is client-side only)
3. Click "Forgot password?" to navigate to the password recovery page
4. Use the sign up link to create a new account (requires signUp.html)

Customization

Colors

Modify the CSS custom properties to change the color scheme:

```css
/* Main gradient background */
background: linear-gradient(135deg, #0a3d1a 0%, #1e8449 100%);

/* Accent colors */
color: #1e8449;
color: #0a3d1a;
```

Form Fields

Add or remove input fields by modifying the HTML structure and corresponding JavaScript validation.

Animation Timing

Adjust animation durations in the CSS:

```css
transition: all 0.3s ease;
animation: shake 0.5s;
```

Future Enhancements

· Backend integration for actual authentication
· Password strength meter
· Social media login options
· Two-factor authentication
· CAPTCHA integration
· Session management

Browser Support

· Chrome (latest)
· Firefox (latest)
· Safari (latest)
· Edge (latest)

# Developer
- Jerhan Taji
- 09/06/2025
