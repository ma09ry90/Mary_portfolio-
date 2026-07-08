# Mary Mengistu's Portfolio Website

A modern, responsive single-page portfolio website built with Vue.js, showcasing Mary Mengistu's professional experience, skills, and projects as a Software Engineer.

## Features

✨ **Modern Design**
- Dark theme with blue accent colors
- Smooth animations and transitions
- Fully responsive mobile-first design
- Fixed navigation bar with smooth scrolling

📱 **Sections**
1. **Hero Section** - Engaging introduction with call-to-action
2. **About Me** - Professional background, skills, education, and certifications
3. **Experience** - Timeline of work experience and internships
4. **Projects** - Showcase of 6+ notable projects with technology tags
5. **Networking Projects** - Special section for networking/IT infrastructure projects
6. **Contact** - Contact form, email, phone, and social media links
7. **Footer** - Copyright and closing information

🚀 **Tech Stack**
- Vue.js 3 (Composition API & Options API ready)
- Modern CSS3 with CSS Variables
- Vite for fast development and building
- Responsive Grid and Flexbox layouts
- Custom animations and transitions

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ma09ry90/Mary_portfolio-.git
cd Mary_portfolio-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Customization

### Adding Images

Replace the placeholder SVGs with your actual images:

1. **Profile Photo**: Add your image to `src/assets/` and update the hero section
2. **Project Screenshots**: Add images for each project card
3. **Featured Image**: Add a main showcase image for your featured project

Example:
```vue
<img src="/src/assets/profile.jpg" alt="Profile Photo" class="profile-image">
```

### Updating Content

Edit the data in `src/App.vue`:
- Update the `projects` array for project details
- Modify `networkProjects` for networking/IT projects
- Change personal information in the component

### Color Scheme

Customize colors in `src/style.css` under `:root`:
```css
:root {
  --color-accent: #3b82f6; /* Change this to your preferred color */
  /* ... other colors ... */
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically deploy your site

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### GitHub Pages

1. Update `vite.config.js` with your repository name
2. Run `npm run build`
3. Push the `dist` folder to your `gh-pages` branch

## Project Structure

```
Mary_portfolio-/
├── src/
│   ├── App.vue          # Main component with all sections
│   ├── main.js          # Vue app entry point
│   └── style.css        # Global styles and animations
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized for fast page loads
- Smooth 60fps animations
- Mobile-first responsive design
- Minimal dependencies

## Features to Consider Adding

- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Case study deep-dives
- [ ] Download resume button
- [ ] Email subscription
- [ ] Comments/reactions on projects
- [ ] GitHub contributions graph
- [ ] Reading time estimates

## License

This project is open source and available under the MIT License.

## Contact

📧 Email: [mmengistu885@gmail.com](mailto:mmengistu885@gmail.com)
📱 Phone: +251 991 876 250
🔗 GitHub: [ma09ry90](https://github.com/ma09ry90)
🔗 LinkedIn: [mary-mengistu](https://linkedin.com/in/mary-mengistu-257a66329)

---

**Made with ❤️ by Mary Mengistu**
