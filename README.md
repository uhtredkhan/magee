# Personal Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Interactive Elements**: Dynamic content and form validation
- **Semantic HTML5**: Proper use of semantic elements for better accessibility
- **Modern CSS**: Flexbox, Grid, and CSS Variables for styling
- **Form Validation**: Client-side validation for contact and survey forms
- **Time-based Greeting**: Dynamic greeting based on time of day

## Project Structure

```
portfolio/
├── index.html          # Homepage
├── about.html          # About page
├── portfolio.html      # Portfolio/Projects page
├── contact.html        # Contact form page
├── survey.html         # Survey page
├── css/
│   ├── styles.css      # Main stylesheet
│   └── theme.css       # Theme-specific styles
├── js/
│   └── main.js         # Main JavaScript file
└── images/             # Project images
```

## Key Features Implemented

1. **HTML5 Semantic Structure**
   - Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
   - Meta tags for SEO optimization
   - Accessible form elements with proper labels

2. **CSS Features**
   - Responsive design using media queries
   - CSS Grid and Flexbox layouts
   - CSS Variables for theming
   - Print-friendly styles
   - Modern animations and transitions

3. **JavaScript Functionality**
   - Time-based greeting
   - Dark/light mode toggle with localStorage
   - Form validation with regex
   - Dynamic content manipulation
   - Event listeners for user interactions

4. **Forms**
   - Contact form with validation
   - Survey form with various input types
   - Client-side validation
   - Proper error handling

## Challenges and Solutions

1. **Responsive Navigation**
   - Challenge: Creating a navigation that works well on both desktop and mobile
   - Solution: Used Flexbox with media queries to switch between horizontal and vertical layouts

2. **Theme Persistence**
   - Challenge: Maintaining user's theme preference across page reloads
   - Solution: Implemented localStorage to save and retrieve theme preference

3. **Form Validation**
   - Challenge: Ensuring proper validation for various input types
   - Solution: Created comprehensive validation functions using regex patterns

4. **Cross-browser Compatibility**
   - Challenge: Ensuring consistent appearance across different browsers
   - Solution: Used CSS reset and vendor prefixes where necessary

## Usage

1. Clone the repository
2. Open `index.html` in your browser
3. Navigate through the different sections
4. Try out the dark/light mode toggle
5. Fill out the contact form or survey

## Future Improvements

- Add more interactive animations
- Implement a blog section
- Add a projects filter system
- Integrate with a backend for form submissions
- Add more accessibility features

## License

This project is licensed under the MIT License - see the LICENSE file for details. 