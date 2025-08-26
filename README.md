# 🚀 Dara Mustafa Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing my skills as a Full Stack Developer.

## 🌐 Live Demo

**[View Portfolio →](https://dara01x.github.io/dcs/)**

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with dark/light theme support
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Performance Optimized**: Lazy loading, code splitting, and asset optimization
- **🔍 SEO Friendly**: Complete meta tags, Open Graph, and structured data
- **📧 Contact Form**: Functional contact form with EmailJS integration
- **🎯 Smooth Animations**: Engaging user experience with framer-motion
- **♿ Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dara01x/dcs.git
   cd dcs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your EmailJS credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📧 Contact Form Setup

To enable the contact form:

1. **Create EmailJS Account**: Go to [EmailJS](https://emailjs.com)
2. **Add Email Service**: Connect your Gmail account
3. **Create Email Template**: Set up your email template
4. **Get Credentials**: Copy Service ID, Template ID, and Public Key
5. **Add to Secrets**: In GitHub repo settings, add the credentials as secrets:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

## 🌐 Deployment

This project automatically deploys to GitHub Pages using GitHub Actions.

### Setup:

1. **Enable GitHub Pages**: Go to repo Settings → Pages
2. **Select Source**: GitHub Actions
3. **Push to main branch**: Deployment will trigger automatically

### Custom Domain (Optional):

1. Add `CNAME` file to `public/` folder
2. Update URLs in SEO components
3. Configure DNS settings

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## ⚡ Performance Features

- **Code Splitting**: Lazy-loaded components for faster initial load
- **Image Optimization**: Progressive loading with blur placeholders
- **Bundle Analysis**: Optimized chunk sizes for better caching
- **Core Web Vitals**: Optimized for Google's performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📜 License

This project is open source and available under the MIT License.

## 🔗 Links

- **Portfolio**: [https://dara01x.github.io/dcs/](https://dara01x.github.io/dcs/)
- **GitHub**: [https://github.com/dara01x](https://github.com/dara01x)
- **LinkedIn**: [https://linkedin.com/in/dara01](https://linkedin.com/in/dara01)

---

⭐ **If you found this helpful, please give it a star!**
