# 🏆 Esther Okoro, PHRi™ · HR Executive & Talent Management

[![Live Demo](https://img.shields.io/badge/Live-Demo-7B0323?style=for-the-badge&logo=github&logoColor=white)](https://esther-okoro729.github.io/portfolio/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/esther-okoro729/portfolio)
[![Made with](https://img.shields.io/badge/Made%20with-❤️-7B0323?style=for-the-badge)]()

> A premium, responsive portfolio website for a PHRi™-certified HR Executive with 7+ years of experience.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Color Palette](#-color-palette)
- [File Structure](#-file-structure)
- [Installation](#-installation)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

---

## 🎯 Overview

This is a professional portfolio website for **Esther Okoro, PHRi™**, a dedicated and results-driven Human Resources professional with over 7 years of comprehensive experience across HR management and talent development.

The website is designed to:
- ✅ Establish credibility in the HR space
- ✅ Showcase professional certifications and awards
- ✅ Display client testimonials and speaking engagements
- ✅ Provide easy access to consultation booking
- ✅ Build a professional online presence

---

## ✨ Features

### 🏆 Core Features
- **Fully Responsive Design** — Optimized for all devices
- **Smooth Scrolling** — Powered by Lenis
- **Glassmorphism UI** — Modern, premium aesthetic
- **Custom Cursor** — Interactive pointer with glow effect
- **Typewriter Animation** — Dynamic hero text
- **GSAP Animations** — Professional scroll-triggered reveals
- **Magnetic Buttons** — Interactive hover effect

### 🎨 Visual Features
- **Noise/Grain Overlay** — Subtle texture for depth
- **Tilt Animation** — 3D-like hover on hero image
- **Gradient Background** — Dynamic color transitions
- **Glass Cards** — Frosted glass effect on all cards
- **Animated Stats Counters** — Numbers count up on load

### 🚀 Advanced Features
- **Work/Certification Carousel** — Auto-scrolling with seamless loop
- **Testimonial Carousel** — 14 client testimonials with dots navigation
- **Back to Top Button** — Smooth scroll to top
- **Sticky Navigation** — Glass-nav with scroll effect
- **Contact Form** — Integrated with Formspree
- **Mobile Menu** — Hamburger toggle for mobile

### 🏅 HR-Specific
- **PHRi™ Certification Badge** — Professional credential
- **Compact Certifications & Awards** — Clean display with pill design
- **Impact Metrics** — 6 measurable results
- **Speaking Engagements** — Gallery of training facilitations
- **Client Testimonials** — 14 authentic testimonials

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure |
| **CSS3** | Styling with custom properties |
| **JavaScript (ES6)** | Interactivity & animations |
| **GSAP** | Scroll-triggered animations |
| **Lenis** | Smooth scrolling |
| **Font Awesome 6** | Icons |
| **Google Fonts** | Space Grotesk + Playfair Display |
| **Formspree** | Contact form backend |

### 📦 Dependencies

🎨 Color Palette
Role	Color Code	Usage
Primary Wine	#7B0323	Buttons, accents, links
Dark Wine	#5A0219	Hover states
Light Wine	#A8395A	Subtle accents
Pale Pink	#F5E6EA	Section backgrounds
Charcoal	#1A1A1A	Text, footer
Warm Gray	#6B6B6B	Secondary text
Cream	#FDF8F9	Main background
Gold	#FFD700	Award text
📁 File Structure
text
portfolio/
│
├── index.html              # Main HTML file
├── style.css               # All styles
├── script.js               # All JavaScript
├── README.md               # Documentation
│
├── assets/                 # All media files
│   ├── esther.jpg          # Profile photo
│   ├── esther_resume.pdf   # Downloadable CV
│   ├── favicon.ico         # Favicon
│   ├── og-image.jpg        # Social media preview
│   │
│   ├── award_1.jpg         # Appreciation Award
│   ├── award_2.jpg         # Presidential Service Award
│   ├── award_3.jpg         # PHRi Certification
│   ├── award_4.jpg         # Community Service Award
│   ├── award_5.jpg         # Vocational Service Award
│   │
│   ├── cert_1.jpg          # Total Reward Masterclass
│   ├── cert_2.jpg          # Purpose Discovery (IKIGAI)
│   ├── cert_3.jpg          # Stormy Waters Conference
│   ├── cert_4.jpg          # HR Effectiveness
│   │
│   ├── rotary.jpg          # Rotary Club Event
│   ├── santus.jpg          # Santus Consulting Event
│   ├── santus_2.jpg        # Santus Consulting Highlight
│   ├── speaking-4.jpg      # Event Host/Anchoring
│   └── speaking-5.jpg      # Event with Audience
│
└── .gitignore              # Git ignore file
🚀 Installation
1. Clone the Repository
bash
git clone https://github.com/esther-okoro729/portfolio.git
cd portfolio
2. Open the Project
Simply open index.html in your browser:

bash
# Using VS Code
code .

# Or open directly
open index.html
3. Local Development Server (Optional)
bash
# Using Python
python -m http.server 8000

# Using Node.js (live-server)
npx live-server

# Using VS Code Live Server Extension
# Right-click index.html → Open with Live Server
🎨 Customization
Changing Colors
Edit the CSS variables in style.css:

css
:root {
    --primary-wine: #7B0323;      /* Change this */
    --primary-dark: #5A0219;      /* Change this */
    --primary-light: #A8395A;     /* Change this */
    /* ... etc */
}
Updating Content
All content is in index.html. Update the following:

Section	What to Update
Hero	Name, title, tagline, description
About	Bio, story, highlight cards
Services	Service titles, descriptions, icons
Tools	Tool categories and technologies
Experience	Job titles, companies, dates, duties
Impact Metrics	Stats and numbers
Testimonials	Quotes, names, roles
Certifications	Cert name, issuer, date (with images)
Awards	Award name, issuer, date (with images)
Speaking	Event details and photos
Contact	Email, phone, location, social links
Replacing Images
Replace images in the assets/ folder

Update image paths in index.html:

html
<!-- Profile photo -->
<img src="./assets/your-photo.jpg" alt="Your Name" />

<!-- Certifications -->
<img src="./assets/cert-name.jpg" alt="Certification Name" />
Changing Social Links
Update URLs in index.html:

html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/your-profile" target="_blank">

<!-- WhatsApp -->
<a href="https://wa.me/your-number" target="_blank">

<!-- Booking -->
<a href="https://calendar.app.google/your-link" target="_blank">
📄 Content Sections
Section	Purpose
Navigation	Sticky glass-nav with all section links
Hero	Profile image + tagline + CTA buttons
About	Full bio + 3 highlight cards
Services	6 HR services with icons
Tools	HR tech stack by category
Experience	7 roles with timeline
Impact Metrics	6 measurable results
Testimonials	14 client testimonials with carousel
Certifications	5 certifications with images
Awards	4 awards with images
Speaking	5 speaking engagements with photos
Contact	Contact info + Formspree form
Connect	Social media links
Footer	Quick links + copyright
Back to Top	Floating scroll-to-top button
📧 Contact Form Setup
The contact form uses Formspree to handle submissions.

Update Form Endpoint
In index.html, update the form action:

html
<form id="contactForm" action="https://formspree.io/f/YOUR_ENDPOINT" method="POST">
Go to Formspree

Create an account

Create a new form

Copy your form endpoint

Replace YOUR_ENDPOINT in the HTML

Email Notifications
When someone submits the form, you'll receive an email with:

Sender's name

Sender's email

Subject line

Message content

Spam Protection
Formspree includes built-in:

✅ CAPTCHA protection

✅ Rate limiting

✅ Email verification

🚢 Deployment
Option 1: GitHub Pages (Recommended)
bash
git add .
git commit -m "Deploy portfolio"
git push origin main
Enable GitHub Pages:

Go to repository Settings

Navigate to Pages

Select main branch

Click Save

Your site will be live at: https://esther-okoro729.github.io/portfolio/

Option 2: Netlify (Drag & Drop)
Go to Netlify

Drag your entire portfolio folder

Done! Your site is live

Option 3: Vercel
bash
vercel
Option 4: Custom Domain
Purchase a domain (e.g., estherokoro.com)

Configure DNS with your hosting provider

Update the og:url meta tag:

html
<meta property="og:url" content="https://estherokoro.com/" />
📝 Credits
Design & Development
Built from a premium portfolio template

Customized for Esther Okoro's HR brand

Fonts & Icons
Google Fonts: Space Grotesk + Playfair Display

Font Awesome 6: Font Awesome

Libraries & Frameworks
GSAP: GreenSock Animation Platform

Lenis: Lenis Smooth Scroll

Formspree: Formspree

Images
All images © Esther Okoro

Background patterns: Custom generated

📄 License
This project is proprietary and not for public distribution.

text
© 2026 Esther Okoro, PHRi™ · HR Executive & Talent Management
All Rights Reserved

Unauthorized copying, modification, distribution, or use
of this software is strictly prohibited without prior
written permission from the owner.
🤝 Contributing
This is a private portfolio. Contributions are not accepted.

📬 Contact
For inquiries about this portfolio:

Esther Okoro, PHRi™

📧 estherokoro338@gmail.com

📱 +234 706 895 6795 | +234 701 706 0269

🔗 LinkedIn

📅 Schedule a Call

🔗 Live Links
Link	URL
GitHub Repository	https://github.com/esther-okoro729/portfolio
Live Site	https://esther-okoro729.github.io/portfolio/
Booking Link	https://calendar.app.google/PDi21Y4RMacuLFhR9
📸 Screenshots
Desktop	Mobile
https://via.placeholder.com/800x400/7B0323/FFFFFF?text=Desktop+View	https://via.placeholder.com/400x800/7B0323/FFFFFF?text=Mobile+View
🔧 Troubleshooting
Issue: Images not loading
Ensure images are in the assets/ folder

Check file names match exactly (case-sensitive)

Verify image paths in HTML

Issue: Contact form not working
Check Formspree endpoint

Ensure internet connection

Check browser console for errors

Issue: Animations not working
Ensure all scripts are loaded

Check for ad blockers (may block GSAP)

Verify internet connection for CDN scripts

Issue: Custom cursor not showing
Cursor is disabled on touch devices

Check if cursor: none is applied

Verify the cursor divs exist in HTML

🌟 Show Your Support
If you found this portfolio helpful, please give it a ⭐ on GitHub!

🎉 Thank You!
Thank you for viewing Esther Okoro's portfolio.
Ready to transform your HR strategy?
Book a consultation today!

Made with ❤️ by Esther Okoro, PHRi™
