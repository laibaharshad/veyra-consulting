# Veyra Consulting

A premium, responsive consulting agency website built as an individual Week 2 project using Node.js, Express, HTML, CSS, and JavaScript.

## Project Overview

Veyra Consulting is a fictional business and digital consulting agency focused on helping growing businesses with strategy, digital transformation, and market growth.

The project was developed as part of a practical web development assignment covering the full workflow from research and planning to development, testing, and deployment.

## Live Demo

**Live Website:** https://veyra-consulting-alpha.vercel.app/

## Features

* Responsive multi-page consulting website
* Premium editorial-style design
* Interactive 3D-inspired hero element
* Mouse-based movement interaction
* Business, digital transformation, and growth service sections
* Case studies section
* Contact/enquiry form
* Client-side form validation
* Express.js backend for handling contact form submissions
* Server-side form validation
* Responsive navigation and layouts
* Keyboard focus states for accessibility

## Pages

### Home

Introduces Veyra Consulting, its value proposition, services, and primary calls-to-action.

### About

Presents the agency's approach and core values.

### Services

Provides information about the agency's three main consulting services:

* Business Strategy
* Digital Transformation
* Market & Growth Consulting

### Case Studies

Shows three conceptual consulting case studies covering strategy, digital transformation, and growth.

### Contact

Provides contact information and an enquiry form connected to the Express backend.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js

## Project Structure

```text
veyra-consulting/
│
├── public/
│   ├── css/
│   │   ├── style.css
│   │   └── hero.css
│   │
│   ├── js/
│   │   ├── hero.js
│   │   └── script.js
│   │
│   ├── images/
│   │
│   ├── index.html
│   ├── about.html
│   ├── services.html
│   ├── case-studies.html
│   └── contact.html
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Contact Form

The contact form uses the following flow:

```text
Contact Form
     ↓
JavaScript fetch()
     ↓
POST /api/contact
     ↓
Express Server
     ↓
Server-side Validation
     ↓
Response
     ↓
Success/Error Message
```

The current implementation does not use a database. Submitted enquiries are validated and logged in the server terminal as a mock backend implementation.

## Research

The design direction was informed by research into professional consulting websites, including:

1. McKinsey & Company
2. BCG
3. Centric Consulting
4. Slalom
5. Sia Partners

The research focused on navigation, hero sections, service organization, calls-to-action, typography, case studies, visual presentation, and overall consulting-site structure.

The research was used as design inspiration rather than direct copying.

## Testing

The project was tested for:

* Navigation and page links
* Contact form validation
* Contact form submission
* Responsive layouts
* Browser console errors
* Lighthouse performance
* Lighthouse accessibility
* Lighthouse best practices
* Lighthouse SEO

The deployed website was also tested to verify that the contact form works through the live Express backend.

Initial Lighthouse testing on the contact page produced:

* Performance: 100
* Accessibility: 93
* Best Practices: 100
* SEO: 90

Accessibility improvements were then made, including improved text contrast, keyboard focus indicators, and an accessible live region for form messages.

## Running the Project Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the Express server:

```bash
npm run server
```

Then open:

```text
http://localhost:3000
```

## Project Status

The website has been developed, tested, and deployed as part of the Week 2 individual project.

## Author

**Laiba Arshad**

BS Software Engineering Student

Frontend Developer | AI Engineering
