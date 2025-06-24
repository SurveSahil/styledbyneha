# StyledByNeha Portfolio – Project Creation & Deployment Guide

## 1. **Project Initialization**

- **Created a new React project** using Vite for fast development.
  ```sh
  npm create vite@latest styledbyneha-portfolio -- --template react
  cd styledbyneha-portfolio
  npm install
  ```

- **Installed Tailwind CSS** for modern, utility-first styling:
  ```sh
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```

- **Configured Tailwind** in `tailwind.config.js` and `postcss.config.cjs`.
- **Set up Tailwind directives** in `src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## 2. **UI & Component Structure**

- **Created main React components** in `src/components/`:
  - `Hero.jsx` – Landing section with intro and call-to-action.
  - `About.jsx` – About section with certificates carousel.
  - `Services.jsx` – List of services.
  - `Gallery.jsx` – Masonry/mosaic gallery with filter buttons.
  - `Testimonials.jsx` – Client testimonials.
  - `Contact.jsx` – Contact form with custom dropdown and validation.
  - `Socials.jsx` – Social media links with modern icons.

- **Modernized the UI** with:
  - Gradients, glassmorphism, and pastel backgrounds.
  - Responsive layouts for desktop and mobile.
  - Light/dark mode toggle using Tailwind’s `darkMode: 'class'`.

---

## 3. **Gallery & Certificates**

- **Gallery**:
  - Images organized by category (Bridal, Party, Fashion, Hair).
  - Filter buttons to switch categories.
  - Responsive `<picture>` elements for desktop/mobile images.
  - Custom hover overlays with user-friendly labels (e.g., "Bridal Look", "Party Makeup").

- **Certificates**:
  - Swiper.js carousel in the About section for certificate images.

---

## 4. **Contact Form & Backend Integration**

- **Contact form** with fields: Name, Email, Contact Number, Service (custom dropdown), Date, Time, Message.
- **Form validation** and user feedback (loading spinner, success/error messages).
- **Backend**: Created `api/contact.js` as a Vercel serverless function using Nodemailer to send emails to `nehamakeup01@gmail.com`.
- **Environment variables** for email credentials (`EMAIL_USER`, `EMAIL_PASS`) set in Vercel dashboard.

---

## 5. **Version Control & Deployment**

- **Initialized git** and pushed the project to GitHub:
  ```sh
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/SurveSahil/styledbyneha.git
  git push -u origin main
  ```

- **Deployed to Vercel**:
  - Imported the GitHub repo into Vercel.
  - Set environment variables in Vercel dashboard.
  - Vercel auto-builds and deploys on every push to `main`.

---

## 6. **Troubleshooting & Improvements**

- **Fixed issues** with:
  - Tailwind/PostCSS config.
  - Gallery filter logic and image display.
  - Contact form POST errors (local vs. Vercel serverless).
  - Nodemailer and environment variable setup.
  - Vercel deployment cache and redeploys.
- **Improved accessibility** by using descriptive alt text and labels.
- **Ensured no sensitive data** (like `.env`) was pushed to GitHub.

---

## 7. **How to Update or Extend**

- **To add new images**: Place them in `src/assets/` and update the `allImages` array in `Gallery.jsx`.
- **To add new services**: Update the service dropdown options in `Contact.jsx`.
- **To change email recipient**: Update the `EMAIL_USER` variable in Vercel.
- **To redeploy**: Just push to GitHub; Vercel will auto-deploy.

---

## 8. **Tech Stack**

- **Frontend**: React, Tailwind CSS, Vite
- **Backend**: Vercel Serverless Functions (Node.js, Nodemailer)
- **Deployment**: Vercel
- **Version Control**: Git + GitHub

---

## 9. **Live Site & Repo**

- **Live Site**: [Your Vercel URL]
- **GitHub Repo**: [https://github.com/SurveSahil/styledbyneha](https://github.com/SurveSahil/styledbyneha)

---

If you want this as a `README.md` or need a more detailed section on any part (like the backend, gallery, or deployment), let me know!
