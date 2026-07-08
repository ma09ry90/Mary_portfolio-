<template>
  <div id="app" class="app">
    <!-- Navigation -->
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <container class="flex-between">
        <div class="navbar-logo">
          <span class="logo-text">Mary</span>
        </div>
        
        <button class="mobile-menu-btn" @click="isMobileMenuOpen = !isMobileMenuOpen" :class="{ 'menu-open': isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul class="navbar-menu" :class="{ 'mobile-open': isMobileMenuOpen }">
          <li><a href="#home" @click="scrollToSection; isMobileMenuOpen = false" class="nav-link">Home</a></li>
          <li><a href="#about" @click="scrollToSection; isMobileMenuOpen = false" class="nav-link">About</a></li>
          <li><a href="#experience" @click="scrollToSection; isMobileMenuOpen = false" class="nav-link">Experience</a></li>
          <li><a href="#projects" @click="scrollToSection; isMobileMenuOpen = false" class="nav-link">Projects</a></li>
          <li><a href="#contact" @click="scrollToSection; isMobileMenuOpen = false" class="nav-link">Contact</a></li>
        </ul>
      </container>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <container class="hero-container">
        <div class="hero-content animate-fadeInUp">
          <p class="hero-greeting">Hi, my name is</p>
          <h1 class="hero-name">Mary Mengistu</h1>
          <p class="hero-tagline">I build digital solutions that make businesses work smarter.</p>
          <p class="hero-bio">
            I'm a Software Engineer based in Addis Ababa, Ethiopia, with a Bachelor's in Information Technology and a Software Engineering Certificate from ALX. I specialize in building full-stack web applications, automating business processes, and designing network infrastructure.
          </p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        
        <div class="hero-image animate-slideInRight" style="animation-delay: 0.2s">
          <div class="profile-placeholder">
            <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none">
              <circle cx="150" cy="150" r="140" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
              <rect x="100" y="80" width="100" height="100" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" opacity="0.3"/>
              <text x="150" y="160" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.5">
                <tspan x="150" dy="0">Profile Photo</tspan>
                <tspan x="150" dy="20">(Add your image here)</tspan>
              </text>
            </svg>
          </div>
        </div>
      </container>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <container>
        <div class="section-header">
          <h2>About Me</h2>
          <div class="header-underline"></div>
        </div>
        
        <div class="about-content">
          <div class="about-text animate-slideInLeft">
            <p>Hello, I'm Mary Mengistu 👋</p>
            <p>
              I'm a Software Engineer based in Addis Ababa, Ethiopia, with a Bachelor's in Information Technology and a Software Engineering Certificate from ALX.
            </p>
            <p>
              I specialize in building full-stack web applications, automating business processes, and designing network infrastructure. I help businesses go digital and work more efficiently.
            </p>
            <p>
              What drives me is solving real problems through technology — whether it's building a multi-vendor e-commerce platform, automating manual inventory tracking, or designing network routing protocols.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, working on side projects, and finding ways to make technology accessible to businesses in Ethiopia and across Africa.
            </p>
            
            <div class="about-highlights mt-lg">
              <p><strong>📌</strong> BSc in Information Technology | ALX Software Engineering Certified</p>
              <p><strong>📍</strong> Addis Ababa, Ethiopia</p>
              <p><strong>🎯</strong> Available for IT related Jobs, Internships, freelance projects and collaboration</p>
            </div>
          </div>
          
          <div class="about-skills animate-slideInRight">
            <h3>Technologies & Tools</h3>
            <div class="skills-grid">
              <span class="skill-tag">Python (Flask, Django)</span>
              <span class="skill-tag">JavaScript (ES6+)</span>
              <span class="skill-tag">React.js</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">PHP (Laravel)</span>
              <span class="skill-tag">HTML5 & CSS3</span>
              <span class="skill-tag">MySQL</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">Git & GitHub</span>
              <span class="skill-tag">API Integration</span>
              <span class="skill-tag">Cisco Packet Tracer</span>
              <span class="skill-tag">Power Automate</span>
            </div>
            
            <div class="education mt-xl">
              <h4>Education</h4>
              <div class="education-item">
                <h5>BSc in Information Technology</h5>
                <p class="text-muted">Jimma University Institute of Technology</p>
                <p class="text-muted">Jimma, Ethiopia • 2026</p>
              </div>
              <div class="education-item mt-md">
                <h5>Software Engineering Certificate</h5>
                <p class="text-muted">ALX (African Leadership Group)</p>
                <p class="text-muted">2025</p>
              </div>
            </div>
            
            <div class="certifications mt-xl">
              <h4>Certifications</h4>
              <ul class="cert-list">
                <li>Software Engineering Certificate — ALX (2025)</li>
                <li>5 Million Coders Program — Udacity & Ministry of Innovation and Technology, Ethiopia (2026)</li>
                <li>e-She SSH Certificate — Ministry of Education & Partners, Ethiopia (2024)</li>
              </ul>
            </div>
          </div>
        </div>
      </container>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="experience">
      <container>
        <div class="section-header">
          <h2>Experience</h2>
          <div class="header-underline"></div>
        </div>
        
        <div class="experience-timeline">
          <div class="timeline-item animate-fadeInUp" style="animation-delay: 0.1s">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>Web Developer Intern</h3>
                <span class="timeline-date">July 2025</span>
              </div>
              <p class="timeline-company">Omishtu Joy Tech Solutions</p>
              <p class="timeline-location">Addis Ababa, Ethiopia</p>
              <ul class="timeline-responsibilities">
                <li>Built and deployed a fully functional blog website with content management features</li>
                <li>Collaborated with the development team on various web projects</li>
              </ul>
            </div>
          </div>
          
          <div class="timeline-item animate-fadeInUp" style="animation-delay: 0.2s">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>IT Expert (Volunteer)</h3>
                <span class="timeline-date">2025</span>
              </div>
              <p class="timeline-company">Green Love Appreciative Development Organization</p>
              <p class="timeline-location">Assosa, Ethiopia</p>
              <ul class="timeline-responsibilities">
                <li>Provided IT support and technical assistance for the organization's programs and activities</li>
                <li>Built a simple website that showcases the organization's works</li>
              </ul>
            </div>
          </div>
        </div>
      </container>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
      <container>
        <div class="section-header">
          <h2>Featured Projects</h2>
          <div class="header-underline"></div>
        </div>
        
        <div class="projects-grid">
          <article class="project-card animate-fadeInUp" v-for="(project, index) in projects" :key="index" :style="{ 'animation-delay': (index * 0.1) + 's' }">
            <div class="project-image">
              <div class="image-placeholder">
                <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
                  <rect width="400" height="300" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" opacity="0.3"/>
                  <rect x="50" y="40" width="300" height="220" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" opacity="0.3"/>
                  <circle cx="200" cy="150" r="40" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" opacity="0.3"/>
                  <text x="200" y="180" text-anchor="middle" font-size="16" fill="currentColor" opacity="0.5">
                    <tspan x="200" dy="0">Project Screenshot</tspan>
                  </text>
                </svg>
              </div>
            </div>
            
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" v-for="(tech, i) in project.technologies" :key="i">{{ tech }}</span>
              </div>
            </div>
          </article>
        </div>
        
        <!-- Network Projects -->
        <div class="network-projects mt-3xl">
          <h3 class="text-center mb-2xl">Networking Projects</h3>
          <div class="projects-grid">
            <article class="project-card animate-fadeInUp" v-for="(project, index) in networkProjects" :key="'net-' + index" :style="{ 'animation-delay': ((index + projects.length) * 0.1) + 's' }">
              <div class="project-image">
                <div class="image-placeholder">
                  <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none">
                    <rect width="400" height="300" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" opacity="0.3"/>
                    <circle cx="100" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" opacity="0.3"/>
                    <circle cx="300" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" opacity="0.3"/>
                    <circle cx="200" cy="200" r="25" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5" opacity="0.3"/>
                    <line x1="125" y1="100" x2="275" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
                    <text x="200" y="270" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.5">Network Diagram</text>
                  </svg>
                </div>
              </div>
              
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-tags">
                  <span class="tag" v-for="(tech, i) in project.technologies" :key="i">{{ tech }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </container>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
      <container class="contact-container">
        <div class="section-header text-center">
          <h2>Get In Touch</h2>
          <div class="header-underline center"></div>
        </div>
        
        <div class="contact-content">
          <div class="contact-info animate-slideInLeft">
            <p class="contact-intro">I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any of these channels:</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <span class="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:mmengistu885@gmail.com">mmengistu885@gmail.com</a>
                </div>
              </div>
              
              <div class="contact-method">
                <span class="contact-icon">📱</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+251991876250">+251 991 876 250</a>
                </div>
              </div>
              
              <div class="contact-method">
                <span class="contact-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p class="text-muted">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
            
            <div class="social-links mt-lg">
              <h4 class="mb-md">Connect With Me</h4>
              <div class="social-icons">
                <a href="https://github.com/ma09ry90" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/mary-mengistu-257a66329" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.832 0-9.753h3.554v1.381c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.74 1.395 3.74 4.393v5.587zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.948.77-1.707 1.968-1.707 1.197 0 1.928.759 1.94 1.707 0 .947-.743 1.705-1.993 1.705zm1.582 11.597H3.635V9.099h3.284v11.353zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <form class="contact-form animate-slideInRight" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="Your name">
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required placeholder="your@email.com">
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" v-model="form.subject" required placeholder="What's this about?">
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" required placeholder="Your message..." rows="6"></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
            
            <p v-if="submitSuccess" class="submit-success">✓ Message sent successfully!</p>
            <p v-if="submitError" class="submit-error">✗ Error sending message. Please try again.</p>
          </form>
        </div>
      </container>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <container class="text-center">
        <p class="mb-md">Designed & Built by Mary Mengistu</p>
        <p class="text-muted">© {{ currentYear }} Mary Mengistu. All rights reserved.</p>
      </container>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false,
      currentYear: new Date().getFullYear(),
      isSubmitting: false,
      submitSuccess: false,
      submitError: false,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      projects: [
        {
          title: 'Handy Store — Multi-Vendor E-Commerce Platform',
          description: 'Full-featured multi-vendor e-commerce with payment integration, wishlist, cart, reviews, AR view, and social video page with like/comment/share functionality with simple delivery system.',
          technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chapa Payment Gateway']
        },
        {
          title: 'Enterprise Inventory & Sales Management System',
          description: 'Comprehensive inventory and sales management system with stock tracking, sales reporting, analytics dashboard, and role-based access.',
          technologies: ['Django', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Ushelf — Document Collection & File Sharing Platform',
          description: 'Platform for collecting documents with secure file sharing via invitation links.',
          technologies: ['Flask', 'HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Wloye Task Tracker',
          description: 'Task tracker with Personal, Career, and Special categories plus community engagement features (Telegram & Instagram integration).',
          technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Library Management System',
          description: 'Desktop application with book borrowing, return tracking, and user management.',
          technologies: ['Java', 'NetBeans IDE']
        },
        {
          title: 'Blog Website',
          description: 'Built and maintained a blog website with content management features during my internship.',
          technologies: ['Vue.js', 'Laravel']
        }
      ],
      networkProjects: [
        {
          title: 'EIGRP, BGP & NAT Configuration',
          description: 'Designed and configured network topologies using routing protocols and NAT in Cisco Packet Tracer.',
          technologies: ['Cisco Packet Tracer', 'EIGRP', 'BGP', 'NAT']
        },
        {
          title: 'Subnetting Design — Varnero Building Wing 8',
          description: 'Designed an IP addressing scheme and subnetting plan for a multi-floor building with detailed technical documentation.',
          technologies: ['Subnetting', 'IP Planning', 'Technical Documentation']
        }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    scrollToSection(e) {
      e.preventDefault()
      const href = e.target.getAttribute('href')
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    async handleSubmit() {
      this.isSubmitting = true
      this.submitSuccess = false
      this.submitError = false
      
      try {
        // Simulate form submission
        // In production, you would send to a backend service
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        this.submitSuccess = true
        this.form = { name: '', email: '', subject: '', message: '' }
        setTimeout(() => {
          this.submitSuccess = false
        }, 3000)
      } catch (error) {
        this.submitError = true
        setTimeout(() => {
          this.submitError = false
        }, 3000)
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
/* =============================================
   NAVBAR
   ============================================= */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: all var(--transition-base);
  z-index: 1000;
}

.navbar.navbar-scrolled {
  background-color: rgba(15, 23, 42, 0.95);
  border-bottom-color: var(--color-border);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-accent);
}

.logo-text {
  background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
  align-items: center;
}

.nav-link {
  color: var(--color-text);
  font-weight: 500;
  position: relative;
  transition: color var(--transition-base);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent);
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.mobile-menu-btn span {
  width: 25px;
  height: 2px;
  background-color: var(--color-text);
  transition: all var(--transition-base);
  border-radius: 2px;
}

.mobile-menu-btn.menu-open span:nth-child(1) {
  transform: rotate(45deg) translate(10px, 10px);
}

.mobile-menu-btn.menu-open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.menu-open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }
  
  .navbar-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background-color: var(--color-secondary);
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base);
    border-bottom: 1px solid var(--color-border);
  }
  
  .navbar-menu.mobile-open {
    max-height: 300px;
  }
  
  .navbar-menu li {
    width: 100%;
    border-bottom: 1px solid var(--color-border);
  }
  
  .nav-link {
    display: block;
    padding: var(--spacing-md);
  }
  
  .nav-link::after {
    display: none;
  }
}

/* =============================================
   HERO SECTION
   ============================================= */

body {
  padding-top: 70px;
}

.hero {
  padding-top: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
}

.hero-content {
  z-index: 1;
}

.hero-greeting {
  color: var(--color-accent);
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
}

.hero-name {
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, #fff 0%, var(--color-accent-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-tagline {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  line-height: 1.4;
}

.hero-bio {
  font-size: 1.0625rem;
  color: var(--color-text-muted);
  margin-bottom: var(--spacing-xl);
  line-height: 1.8;
}

.hero-cta {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.profile-placeholder {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 20px;
  background: rgba(59, 130, 246, 0.05);
  border: 2px solid var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  animation: float 3s ease-in-out infinite;
  overflow: hidden;
}

.hero-image {
  position: relative;
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
  }
  
  .hero-image {
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: var(--spacing-2xl);
    padding-bottom: var(--spacing-2xl);
  }
  
  .hero-tagline {
    font-size: 1.25rem;
  }
  
  .hero-bio {
    font-size: 1rem;
  }
}

/* =============================================
   ABOUT SECTION
   ============================================= */

.about {
  background-color: var(--color-primary);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-2xl);
  position: relative;
}

.section-header h2 {
  font-size: 2.5rem;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, var(--color-text) 0%, var(--color-accent-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-underline {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  border-radius: 2px;
}

.header-underline.center {
  position: relative;
  bottom: auto;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--spacing-md);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.about-text p {
  margin-bottom: var(--spacing-md);
  line-height: 1.8;
}

.about-text p:first-child {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-text);
}

.about-highlights {
  padding: var(--spacing-lg);
  background-color: rgba(59, 130, 246, 0.05);
  border-left: 4px solid var(--color-accent);
  border-radius: var(--rounded-lg);
}

.about-highlights p {
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
}

.about-highlights p:last-child {
  margin-bottom: 0;
}

.about-skills h3 {
  margin-bottom: var(--spacing-lg);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.skill-tag {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: rgba(59, 130, 246, 0.1);
  border: 1px solid var(--color-accent);
  border-radius: var(--rounded-lg);
  color: var(--color-accent);
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all var(--transition-base);
}

.skill-tag:hover {
  background-color: var(--color-accent);
  color: white;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.education-item {
  padding: var(--spacing-md);
  background-color: rgba(59, 130, 246, 0.05);
  border-radius: var(--rounded-lg);
  border: 1px solid var(--color-border);
}

.education-item h5 {
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.cert-list {
  list-style: none;
  padding-left: 0;
}

.cert-list li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-md);
  position: relative;
  color: var(--color-text-muted);
}

.cert-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-success);
  font-weight: bold;
}

@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   EXPERIENCE SECTION
   ============================================= */

.experience {
  background-color: var(--color-secondary);
}

.experience-timeline {
  position: relative;
  padding: var(--spacing-lg) 0;
}

.experience-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--color-accent) 0%, transparent 100%);
  transform: translateX(-1px);
}

.timeline-item {
  margin-bottom: var(--spacing-2xl);
  position: relative;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-left: 0;
  margin-right: 51%;
  text-align: right;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 51%;
  margin-right: 0;
  text-align: left;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  top: 20px;
  width: 16px;
  height: 16px;
  background-color: var(--color-accent);
  border: 4px solid var(--color-secondary);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 3px var(--color-accent);
  opacity: 0.5;
}

.timeline-content {
  padding: var(--spacing-lg);
  background-color: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--rounded-lg);
  transition: all var(--transition-base);
}

.timeline-content:hover {
  border-color: var(--color-accent);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.timeline-header h3 {
  color: var(--color-text);
  margin: 0;
}

.timeline-date {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.875rem;
  white-space: nowrap;
}

.timeline-company {
  color: var(--color-accent);
  font-weight: 600;
  font-size: 1rem;
}

.timeline-location {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-bottom: var(--spacing-md);
}

.timeline-responsibilities {
  list-style: none;
  padding-left: 0;
  margin-top: var(--spacing-md);
}

.timeline-responsibilities li {
  padding-left: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  position: relative;
  color: var(--color-text-muted);
}

.timeline-responsibilities li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

@media (max-width: 1024px) {
  .experience-timeline::before {
    left: 20px;
  }
  
  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 60px;
    margin-right: 0;
    text-align: left;
  }
  
  .timeline-marker {
    left: 20px;
  }
}

@media (max-width: 768px) {
  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-xs);
  }
  
  .timeline-date {
    white-space: normal;
  }
}

/* =============================================
   PROJECTS SECTION
   ============================================= */

.projects {
  background-color: var(--color-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid var(--color-border);
  border-radius: var(--rounded-xl);
  overflow: hidden;
  background-color: var(--color-secondary);
  transition: all var(--transition-base);
}

.project-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
}

.project-image {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background-color: var(--color-primary);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(59, 130, 246, 0.02) 100%);
}

.image-placeholder svg {
  width: 100%;
  height: 100%;
}

.project-content {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  color: var(--color-text);
  margin-bottom: var(--spacing-md);
  line-height: 1.4;
}

.project-description {
  flex-grow: 1;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--color-accent);
  border-radius: var(--rounded-md);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.network-projects {
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-2xl);
  border-top: 1px solid var(--color-border);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   CONTACT SECTION
   ============================================= */

.contact {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%);
}

.contact-container {
  max-width: 1000px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: start;
}

.contact-intro {
  font-size: 1.0625rem;
  margin-bottom: var(--spacing-xl);
  color: var(--color-text-muted);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.contact-method {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.contact-icon {
  font-size: 1.75rem;
  min-width: 2rem;
}

.contact-method h4 {
  color: var(--color-text);
  margin-bottom: var(--spacing-xs);
}

.contact-method a {
  color: var(--color-accent);
  font-weight: 500;
}

.social-links h4 {
  color: var(--color-text);
}

.social-icons {
  display: flex;
  gap: var(--spacing-md);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  color: var(--color-accent);
  transition: all var(--transition-base);
}

.social-icon:hover {
  background-color: var(--color-accent);
  color: white;
  transform: translateY(-4px);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-group label {
  color: var(--color-text);
  font-weight: 500;
  font-size: 0.875rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem 1rem;
  background-color: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--rounded-lg);
  color: var(--color-text);
  font-family: inherit;
  font-size: 1rem;
  transition: all var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-success,
.submit-error {
  text-align: center;
  padding: var(--spacing-sm);
  border-radius: var(--rounded-lg);
  font-weight: 500;
}

.submit-success {
  color: var(--color-success);
  background-color: rgba(16, 185, 129, 0.1);
}

.submit-error {
  color: var(--color-error);
  background-color: rgba(239, 68, 68, 0.1);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}

/* =============================================
   FOOTER
   ============================================= */

.footer {
  background-color: var(--color-secondary);
  padding: var(--spacing-2xl) 0;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.footer p {
  margin: 0;
}

/* =============================================
   RESPONSIVE
   ============================================= */

@media (max-width: 768px) {
  .section-header h2 {
    font-size: 1.75rem;
  }
  
  .about-content {
    gap: var(--spacing-lg);
  }
  
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
