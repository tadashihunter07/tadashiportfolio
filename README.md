# 🌐 Tadashi Interactive Portfolio

A modern, responsive, and interactive personal portfolio website built using **HTML**, **CSS**, and **JavaScript**.  
This project showcases my skills, personal information, and projects with clean UI, smooth animations, and theme persistence across pages.

---

## 📌 Overview

This portfolio includes **four pages**:

- **Home (`index.html`)** – Hero banner with typing animation and spinning avatar ring  
- **About (`about.html`)** – Personal introduction and skills section  
- **Projects (`projects.html`)** – Expandable project cards with images & details  
- **Contact (`contact.html`)** – Contact form with clean UI and validation placeholders  

The website is designed to be aesthetic, simple, and fully responsive.

---

## ✨ Features

### 🎨 Modern UI & Animations
- Gradient animated logo  
- Spinning avatar ring  
- Typing text animation  
- Smooth hover transitions  

### 🌓 Dark / Light Theme Toggle
Implemented in `script.js`:
- Toggle button on the navbar  
- Theme saved using `localStorage`  
- Automatically applied on every page  

### 🔍 Interactive Project Cards
Each project card includes:
- Preview image  
- Description  
- “Details” toggle button  
- Extra info section (tech + features)

### 📱 Fully Responsive
Optimized for:
- Desktop  
- Tablet  
- Mobile  
(using CSS media queries)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Page structure and content |
| **CSS3** | Styling, gradients, animations, responsive design |
| **JavaScript** | Theme toggle & project interactions |
| **LocalStorage** | Save theme preference |

---

## 📂 Project Structure
Tadashi Portfolio
├── index.html # Home
├── about.html # About + skills
├── projects.html # Projects with toggle details
├── contact.html # Contact form
│
├── styles.css # All styling, animations, themes, responsive rules
├── script.js # Theme toggle + project details functions
│
└── assets/
└── images/
├── profile.jpg
├── gradebook.jpg
├── portfolio.jpg
└── interactive.jpg

## ▶️ How to Run

### **Option 1: Open Locally**
Just open:

The website will load in your browser.

### **Option 2: Use Live Server (Recommended)**
1. Install **Live Server** extension in VS Code  
2. Right-click `index.html`  
3. Click **Open with Live Server**  

---

## 📌 JavaScript Functionality

### **Theme Toggle — `initTheme()`**
- Reads saved theme from `localStorage`  
- Applies theme to `<html data-theme="...">`  
- Updates toggle button icon  
- Saves the new theme when toggled  

### **Project Details Toggle — `initProjectDetails()`**
- Adds click listeners to all `.toggle-details` buttons  
- Expands/collapses the project details section  
- Updates button text (`Details` ↔ `Hide`)  

---

## 📬 Contact Form

Includes the following fields:
- Name  
- Email  
- Message  

Designed for frontend validation and can be connected to:
- Formspree  
- Firebase  
- Custom backend APIs  

---

## 🌱 Future Improvements

- Add functional project search filtering  
- Add smooth animations using GSAP  
- Connect the contact form to an email backend  
- Add individual project pages  
- Add transition animation between themes  

---

## 🏁 Conclusion

This portfolio demonstrates strong fundamentals in front-end development:
- UI/UX design  
- Responsive layout  
- CSS animations  
- JavaScript DOM manipulation  
- Theme persistence  

It is a solid and scalable personal website suitable for academic submission or future career use.