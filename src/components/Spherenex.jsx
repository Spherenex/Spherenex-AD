import React, { useState } from 'react';
import './SpherenexAd.css';
import IMG from '../assets/Logo1.png'; // Adjust the path as necessary
import { 
  CheckCircle, 
  Check, 
  MessageSquare, 
  Star, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  Bot, 
  Wifi, 
  Brain, 
  Zap, 
  Building2, 
  Code,
  Briefcase,
  LineChart,
  Lightbulb,
  Blocks,
  Glasses
} from "lucide-react";

// Add some additional CSS for the phone number links
const additionalStyles = `
  .phone-number-container {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  
  .whatsapp-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    color: #25D366;
    background-color: rgba(37, 211, 102, 0.1);
    border-radius: 50%;
    padding: 4px;
    transition: all 0.2s ease;
  }
  
  .whatsapp-link:hover {
    background-color: rgba(37, 211, 102, 0.2);
    transform: scale(1.1);
  }

  /* Floating WhatsApp Button Styles */
  .floating-whatsapp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
  }

  .floating-whatsapp-button {
    display: flex;
    align-items: center;
    background-color: #25D366;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 12px 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
  }

  .floating-whatsapp-button:hover {
    background-color: #128C7E;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  .floating-whatsapp-icon {
    margin-right: 8px;
  }

  .floating-whatsapp-text {
    white-space: nowrap;
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    .floating-whatsapp-button {
      padding: 12px;
      border-radius: 50%;
    }
    
    .floating-whatsapp-text {
      display: none;
    }

    .floating-whatsapp-icon {
      margin-right: 0;
    }
  }
`;

const SpherenexAd = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container">
      <style>{additionalStyles}</style>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-icon">
              {/* <img src={IMG} alt="Spherenex Logo" /> */}
              <img src={IMG} alt="Spherenex Logo" />
            </div>
            <div>
              <h1 className="logo-title">Spherenex Innovation Labs</h1>
              <p className="logo-subtitle">A Unit of Nexspyder Technologies Pvt. Ltd.</p>
            </div>
          </div>
          <div className="nav-links">
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#specializations" className="nav-link">Specializations</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="workshop-badge">
              FREE 1-DAY ONLINE WORKSHOP
            </div>
            
            <h2 className="hero-title">
              Build Industry-Ready Projects & Prepare for Future Tech Careers
            </h2>
            
            <p className="hero-description">
              Join our interactive workshop designed for students and faculty to gain real-world project experience and career insights.
            </p>
            
            <div className="cta-container">
              <button 
                className={`cta-button ${isHovered ? 'cta-hovered' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.open('https://chat.whatsapp.com/FnmYk4ZSSvjAMmCQBfy9yg?mode=r_c', '_blank')}
              >
                Join WhatsApp Community
                <span className="cta-arrow">→</span>
              </button>
              <p className="cta-note">Certificate of Participation provided</p>
            </div>
             <div className="contact-cta">
             <p className="contact-note">
                Have questions or need assistance with your projects? <br />
                Our team of <span className="contact-highlight">experts</span> is ready to help you build the next big thing!
              </p>
            <button 
                className="whatsapp-button"
                onClick={() => window.open('https://wa.me/918861938913', '_blank')}
              >
                <span className="whatsapp-text">WhatsApp Us</span>
                <MessageSquare className="whatsapp-icon" />
              </button>
              </div>
          </div>
          
          <div className="benefits-card">
            <h3 className="benefits-title">
              <span className="benefits-icon-container">
                <CheckCircle className="check-icon" />
              </span>
              This workshop helps you:
            </h3>
            
            <ul className="benefits-list">
              {[
                'Choose the right project domain (AI, IoT, Robotics, etc.)',
                'Understand how real-time projects are built',
                'Learn the tools & skills industry expects',
                'Explore future career opportunities & tech roles',
                'Ask questions & interact with industry experts'
              ].map((item, index) => (
                <li key={index} className="benefit-item">
                  <Check className="benefit-check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="audience-container">
              <p className="audience-text">
                Open to: <span className="audience-highlight">B.E/B.Tech, M.Tech, MCA, BCA, MBA, PhD Students & Faculty</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="section-header">
            <h2 className="section-title">About Spherenex Innovation Labs</h2>
            <div className="section-divider"></div>
          </div>
          
          <p className="about-description">
            Spherenex Innovation Labs is a platform created by Spherenex, a deep-tech division of Nexspyder Technologies Pvt. Ltd., 
            focused on building real-time, industry-grade projects across all engineering and tech domains.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-title">We support:</h3>
              <ul className="feature-list">
                {[
                  'Final Year & Mini Projects',
                  'PhD & Faculty R&D Work',
                  'Mentoring for Stuck/Incomplete Projects',
                  'Weekly Skill Development Workshops',
                  'Certification & Career-Based Training',
                  'Job Placement Assistance & Career Guidance',
                  'Industry Internships & Project Experience'
                ].map((item, index) => (
                  <li key={index} className="feature-item">
                    <Check className="feature-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div id="specializations" className="feature-card">
              <h3 className="feature-title">We specialize in:</h3>
              <div className="specializations-grid">
                {[
                  { icon: <Bot size={20} />, text: 'Robotics & Automation' },
                  { icon: <Wifi size={20} />, text: 'IoT & Embedded Systems' },
                  { icon: <Brain size={20} />, text: 'AI & Machine Learning' },
                  { icon: <Zap size={20} />, text: 'Renewable Energy' },
                  { icon: <Building2 size={20} />, text: 'Mechanical & Civil Engineering' },
                  { icon: <Code size={20} />, text: 'ECE, CSE & more' },
                  { icon: <Lightbulb size={20} />, text: 'R&D & Innovation' },
                  { icon: <LineChart size={20} />, text: 'Data Science & Analytics' },
                  { icon: <Blocks size={20} />, text: 'Blockchain Technology' },
                  { icon: <Glasses size={20} />, text: 'AR/VR Applications' },
                  { icon: <Briefcase size={20} />, text: 'Industry Consulting' }
                ].map((item, index) => (
                  <div key={index} className="specialization-item">
                    <span className="specialization-icon">{item.icon}</span>
                    <span className="specialization-text">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="rating-container">
                <div className="rating">
                  <Star className="rating-star" fill="gold" color="gold" />
                  <span className="rating-score">4.9★ on Google</span>
                  <span className="rating-count">by 1000+ students & innovators</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Contact Us</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-title">Get In Touch</h2>
              <ul className="contact-list">
                {[
                  { icon: <Globe size={20} />, label: 'Website:', value: 'www.spherenex.com', link: 'https://www.spherenex.com' },
                  { icon: <Mail size={20} />, label: 'Email:', value: 'info@spherenex.com', link: 'mailto:info@spherenex.com' },
                  { 
                    icon: <Phone size={20} />, 
                    label: 'Phone / WhatsApp:', 
                    value: (
                      <>
                        <div className="phone-number-container">
                          <a href="tel:+918861938913" className="contact-value contact-link">+91 8861938913</a>
                          <a href="https://wa.me/918861938913" className="whatsapp-link">
                            <MessageSquare size={16} />
                          </a>
                        </div>
                        <div className="phone-number-container">
                          <a href="tel:+919606271260" className="contact-value contact-link">+91 9606271260</a>
                          <a href="https://wa.me/919606271260" className="whatsapp-link">
                            <MessageSquare size={16} />
                          </a>
                        </div>
                      </>
                    ),
                    link: null
                  },
                  { icon: <MapPin size={20} />, label: 'Location:', value: 'Bengaluru, India', link: null }
                ].map((item, index) => (
                  <li key={index} className="contact-item">
                    <span className="contact-icon">{item.icon}</span>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="contact-value contact-link">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-value">{typeof item.value === 'string' ? item.value : item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="copyright">© {new Date().getFullYear()} Spherenex Innovation Labs. All rights reserved.</p>
        <p className="company">A Unit of Nexspyder Technologies Pvt. Ltd.</p>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <div className="floating-whatsapp">
        <button 
          className="floating-whatsapp-button"
          onClick={() => window.open('https://wa.me/918861938913', '_blank')}
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="floating-whatsapp-icon" />
          <span className="floating-whatsapp-text">Chat with us</span>
        </button>
      </div>
    </div>
  );
};

export default SpherenexAd;