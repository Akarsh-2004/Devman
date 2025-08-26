import React, { useState, useEffect } from 'react';
import './Body.css';

const Body = () => {
  const [visibleSections, setVisibleSections] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-section]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    
    { 
      title: "OTT Platforms", 
      desc: "We create, and help your business choose platforms for various user experience strategies such as omni-channel", 
      img: "9.jpg" 
    },
    { 
      title: "UI & UX Design", 
      desc: "We ensure on-time delivery through our unique control solutions", 
      img: "10.jpg" 
    },
    { 
      title: "Application Development", 
      desc: "The core in our processes are proof of concept & design", 
      img: "11.jpg" 
    },
    { 
      title: "Product Development", 
      desc: "We ensure on-time delivery through our unique control solutions", 
      img: "12.jpg" 
    },
    { 
      title: "Social Media Platforms", 
      desc: "We can help you make social media apps to collect a large audience", 
      img: "13.jpg" 
    },
    { 
      title: "Gambling & Betting Apps", 
      desc: "We can develop websites, or web applications with real-time data exchange capabilities", 
      img: "14.jpg" 
    },
    { 
      title: "Job Boards", 
      desc: "We serve various web development services for job boards & portals", 
      img: "15.jpg" 
    },
    { 
      title: "Sport & Fitness Applications", 
      desc: "We can help you make the fitness conscious people, be regulars at your physical gym", 
      img: "16.jpg" 
    },
    { 
      title: "Software as a Service (SaaS)", 
      desc: "A combination of software & a cloud based server can form the infrastructure to serve infinite digital services", 
      img: "17.jpg" 
    },
    { 
      title: "Business Management Tools", 
      desc: "We can recalibrate your business structure. We smoothen your processes while building custom software", 
      img: "18.jpg" 
    },
    { 
      title: "Travel & Booking Portals", 
      desc: "We help take your concierge business to a new height", 
      img: "19.jpg" 
    },
    { 
      title: "Educational Portals", 
      desc: "We can develop an educational platform for your colleges, institutions, and schools", 
      img: "20.jpg" 
    },
    { 
      title: "Product Development", 
      desc: "We help you harness the Cloud in developing, delivering new applications to the market, and increase your financial savings", 
      img: "21.jpg" 
    },
    { 
      title: "Salesforce Customization", 
      desc: "Get a Salesforce implementation fully customized to your business needs", 
      img: "22.jpg" 
    },
    { 
      title: "IT Help Desk Services", 
      desc: "Take your IT products to various markets without worrying about support functions", 
      img: "23.jpg" 
    }
  ];


  const values = [
    { title: "Quality Focus", desc: "We only produce work that we can be proud of" },
    { title: "Client Relationships", desc: "Building personal and professional rapport beyond business" },
    { title: "Shared Success", desc: "We measure our success with our clients' achievements" },
    { title: "Innovation Drive", desc: "Exploring new technology through creative research & development" }
  ];

  return (
    <div className="body-container">
      {/* Hero Section */}
      <section className="hero">
        {/* Removed the hero-overlay div here */}
        <video 
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Devman
            <span className="hero-subtitle">Technology Solutions</span>
          </h1>
          <p className="hero-description">
            Driving businesses to soaring heights with cutting-edge technology solutions and innovative research & development
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              Explore Services 
              <span className="arrow">→</span>
            </button>
            <button className="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section 
        id="values" 
        data-section
        className={`section values-section ${visibleSections.values ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Foundation</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Built upon life-long relationships, brutal honesty, and uncompromising integrity
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <span className="icon-placeholder">{index + 1}</span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Analysis Section */}
      <section 
        id="requirements" 
        data-section
        className={`section requirements-section ${visibleSections.requirements ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Requirement Analysis</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Comprehensive analysis ensuring clear, complete, and unambiguous requirements
            </p>
          </div>

          <div className="requirements-grid">
            <div className="requirement-card">
              <div 
                className="requirement-image"
                style={{ backgroundImage: `url('4.jpg')` }}
              >
                <div className="requirement-overlay"></div>
                <div className="requirement-number">01</div>
              </div>
              <div className="requirement-content">
                <h3 className="requirement-title">Eliciting Requirements</h3>
                <p className="requirement-desc">Activities that define a project such as documentation of the business process, and interviews of stakeholders. This is commonly known as requirements gathering.</p>
              </div>
            </div>
            
            <div className="requirement-card">
              <div 
                className="requirement-image"
                style={{ backgroundImage: `url('5.jpg')` }}
              >
                <div className="requirement-overlay"></div>
                <div className="requirement-number">02</div>
              </div>
              <div className="requirement-content">
                <h3 className="requirement-title">Analyzing Requirements</h3>
                <p className="requirement-desc">Analyzing requirements aims to determine if the requirements are clear, complete, consistent, and unambiguous. The process resolves any conflicts in the set of requirements.</p>
              </div>
            </div>
            
            <div className="requirement-card">
              <div 
                className="requirement-image"
                style={{ backgroundImage: `url('6.jpg')` }}
              >
                <div className="requirement-overlay"></div>
                <div className="requirement-number">03</div>
              </div>
              <div className="requirement-content">
                <h3 className="requirement-title">Recording Requirements</h3>
                <p className="requirement-desc">Recording requirements refers to activities that document these in different formats such as cases for use, natural-language documents, process specifications, and stories from users in summary lists.</p>
              </div>
            </div>
          </div>

          <div className="skills-note">
            <h3 className="skills-title">Essential Skills Required</h3>
            <p className="skills-desc">
              Soft psychological skills are necessary for conducting requirement analysis. This can be a long and tiring process. 
              Bringing in new systems often changes the company environment and stakeholder relationships. Therefore, it's essential 
              to identify all stakeholders, account for their needs, and ensure everyone comprehends the effects of new systems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        id="services" 
        data-section
        className={`section services-section ${visibleSections.services ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              Comprehensive technology solutions tailored to drive your business forward
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div 
                  className="service-image"
                  style={{ backgroundImage: `url('${service.img}')` }}
                >
                  <div className="service-overlay"></div>
                  <div className="service-icon">
          
                  </div>
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                  <button className="service-link">
                    Learn More <span className="arrow-small">→</span>
                  </button>
                </div>
              </div>
            ))}
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Let's build something extraordinary together. Contact us today to discuss your project and explore possibilities.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary-inverted">Start Your Project</button>
              <button className="btn btn-secondary-inverted">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;