import { Instagram, Linkedin, Menu, MessageCircle, Star, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import BrandsSection from './BrandsSection/BrandsSection';
import ContactSection from './ContactSection/ContactSection';
import './Home.css';
import LocationSection from './LocationSection/LocationSection';
import ReferralSection from './ReferralSection/ReferralSection';

const PhotographyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Headshots',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1227,fit=crop,trim=97.03826955074875;0;341.43094841930116;0/AMq8DzDaxqIMJv93/dsc_7152-mePJgX7nKGT4QRl0.JPG',
      delay: '0ms'
    },
    {
      title: 'Product Photography and Videography',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1449,fit=crop,trim=939.2448233861145;1146.8849270664505;0;1236.320907617504/AMq8DzDaxqIMJv93/_dsc0151-m7VbDZWMp1hQLQDp.JPG',
      delay: '200ms'
    },
    {
      title: 'Weddings and Pre-Weddings',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1449,fit=crop,trim=0;268.9655172413793;0;365.51724137931035/AMq8DzDaxqIMJv93/f65fd760-ac28-4142-aa20-1bd021436256-dJobPbgokVI6jKr4.JPG',
      delay: '400ms'
    },
    {
      title: 'Corporate Events',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1449,fit=crop,trim=0;258.56733524355303;0;759.1977077363897/AMq8DzDaxqIMJv93/_dsc5904-m7VbDbwLjlhk2VXY.jpg',
      delay: '0ms'
    },
    {
      title: 'Real Estate',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1506,fit=crop,trim=14.327927927927929;23.288770053475936;51.043243243243246;17.914438502673796/AMq8DzDaxqIMJv93/screenshot-2025-07-14-at-14.51.05-AQEZee26QgU9PyJ0.png',
      delay: '200ms'
    },
    {
      title: 'Fashion Photography',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1449,fit=crop,trim=801.9512195121952;278.0530164533821;0;362.9323583180987/AMq8DzDaxqIMJv93/090a1470-dOqDZ6BOP3CoJKak.JPG',
      delay: '400ms'
    }
  ];

  return (
    <div className="photography-website">
      {/* Top Banner */}
      <div className="top-banner">
        <p className="animate-fade-in">
          <span className="banner-text">ऊँ गणेशाय नमः</span> · REFER & EARN - REFER TO YOUR FRIENDS & FAMILY AND EARN 10% OFF CREDITS TO YOUR NEXT SHOOT.
        </p>
      </div>

      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo animate-fade-in">
              M
            </div>

            {/* Desktop Menu */}
            <ul className="nav-menu">
              <li><a href="/" onClick={(e) => e.preventDefault()} className="nav-link">Home</a></li>
              <li><a href="/services" onClick={(e) => e.preventDefault()} className="nav-link">Services</a></li>
              <li><a href="/portfolio" onClick={(e) => e.preventDefault()} className="nav-link">Portfolio</a></li>
              <li><a href="/about" onClick={(e) => e.preventDefault()} className="nav-link">About</a></li>
              <li><a href="/contact" onClick={(e) => e.preventDefault()} className="nav-link">Contact</a></li>
              <li><a href="/privacy" onClick={(e) => e.preventDefault()} className="nav-link">Privacy policy</a></li>
            </ul>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="/" onClick={(e) => e.preventDefault()}>
                <Instagram size={20} />
              </a>
              <a href="/" onClick={(e) => e.preventDefault()}>
                <Linkedin size={20} />
              </a>
              <a href="/" onClick={(e) => e.preventDefault()}>
                <MessageCircle size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu animate-slide-down">
              <div className="mobile-menu-content">
                <a href="/" onClick={(e) => e.preventDefault()}>Home</a>
                <a href="/services" onClick={(e) => e.preventDefault()}>Services</a >
                <a href="/portfolio" onClick={(e) => e.preventDefault()}>Portfolio</a>
                <a href="/about" onClick={(e) => e.preventDefault()}>About</a>
                <a href="/contact" onClick={(e) => e.preventDefault()}>Contact</a>
                <a href="/privacy" onClick={(e) => e.preventDefault()}>Privacy policy</a>
                <div className="mobile-social">
                  <Instagram size={20} />
                  <Linkedin size={20} />
                  <MessageCircle size={20} />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        
        <div className={`hero-content ${isVisible ? 'visible animate-fade-in-up' : ''}`}>
          <h1 className="hero-title">
            Visuals that Speak-------.
          </h1>
          <h2 className="hero-subtitle">
            Stories that Sell.
          </h2>
          <p className="hero-description">
            Professional Photography and Video Production Services
          </p>
          <button className="cta-button">
            Contact us
          </button>

          {/* Rating */}
          <div className="rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={24} 
                  fill="white" 
                  className="star-icon" 
                  style={{animationDelay: `${i * 0.1}s`}}
                />
              ))}
            </div>
            <p className="rating-text">RATED 5 STARS BY CLIENTS.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-container">
          <div className="services-header">
            <p className="services-label">NEW COLLECTION</p>
            <h2 className="services-title">Explore our Services</h2>
          </div>
        </div>

        <div className="services-scroll scrollbar-hide">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-card"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: service.delay
                }}
              >
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-overlay"></div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <button className="service-button">
                      See more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BrandsSection/>
      <LocationSection/>
      <ReferralSection/>
      <ContactSection/>
    </div>
  );
};

export default PhotographyWebsite;