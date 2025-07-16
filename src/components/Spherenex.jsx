import React, { useState } from 'react';
import './SpherenexAd.css';
import IMG from '../assets/Logo.png'; // Adjust the path as necessary
const SpherenexAd = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-icon">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
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
             {/* <h3 className="contact-title">Need Help?</h3> */}
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
                <svg xmlns="http://www.w3.org/2000/svg" className="whatsapp-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </button>
              </div>
          </div>
          
          <div className="benefits-card">
            <h3 className="benefits-title">
              <span className="benefits-icon-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="benefit-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
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
                  'Certification & Career-Based Training'
                ].map((item, index) => (
                  <li key={index} className="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="feature-check" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div id="specializations" className="feature-card">
              <h3 className="feature-title">We specialize in:</h3>
              <div className="specializations-grid">
                {[
                  { icon: '🤖', text: 'Robotics & Automation' },
                  { icon: '🌐', text: 'IoT & Embedded Systems' },
                  { icon: '🧠', text: 'AI & Machine Learning' },
                  { icon: '⚡', text: 'Renewable Energy' },
                  { icon: '🏗', text: 'Mechanical & Civil Engineering' },
                  { icon: '💻', text: 'ECE, CSE & more' }
                ].map((item, index) => (
                  <div key={index} className="specialization-item">
                    <span className="specialization-icon">{item.icon}</span>
                    <span className="specialization-text">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="rating-container">
                <div className="rating">
                  <span className="rating-star">⭐</span>
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
                  { icon: '🌐', label: 'Website:', value: 'www.spherenex.com', link: 'https://www.spherenex.com' },
                  { icon: '📧', label: 'Email:', value: 'info@spherenex.com', link: 'mailto:info@spherenex.com' },
                  { icon: '📱', label: 'Phone / WhatsApp:', value: '+91 88619 38913', link: 'tel:+918861938913' },
                  { icon: '📍', label: 'Location:', value: 'Bengaluru, India', link: null }
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
                        <span className="contact-value">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* <div className="contact-cta">
              <h3 className="contact-title">Need Help?</h3>
              <button 
                className="whatsapp-button"
                onClick={() => window.open('https://wa.me/918861938913', '_blank')}
              >
                <span className="whatsapp-text">WhatsApp Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="whatsapp-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </button>
              <p className="contact-note">
                Have questions or need assistance with your projects? <br />
                Our team of <span className="contact-highlight">experts</span> is ready to help you build the next big thing!
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="copyright">© {new Date().getFullYear()} Spherenex Innovation Labs. All rights reserved.</p>
        <p className="company">A Unit of Nexspyder Technologies Pvt. Ltd.</p>
      </footer>
    </div>
  );
};

export default SpherenexAd;