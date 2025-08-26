import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCaretDown, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (name) => setActiveDropdown(activeDropdown === name ? null : name);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuData = [
    {
      title: "Application Development",
      key: "appDev",
      items: [
        { title: "Application Development", desc: "You Can Build Powerful Responsive Enterprise Applications", link: "application-development.html" },
        { title: "Application Maintenance", desc: "Application maintenance", link: "application-maintenance.html" },
        { title: "Enterprise Application", desc: "Enterprise Application Testing Services", link: "enterprise-application.html" },
        { title: "e-Commerce Development", desc: "We ensure compliance with regulations, develop complex integration, and synchronization for all channels on a single platform.", link: "ecommerce-development.html" },
        { title: "Mobile Application", desc: "Mobile Application Development Company", link: "mobile-application.html" },
        { title: "Cloud Computing", desc: "Cloud Computing", link: "cloud-computing.html" },
        { title: "IOT", desc: "Combining IoT with your business is a smart way to enhance your business model", link: "iot.html" },
        { title: "ERP", desc: "We merge your activity, and streamline them into one seamless system.", link: "erp.html" },
        { title: "Customer Relationship Manager", desc: "Customer Relationship Manager", link: "customer-relationship-manager.html" },
      ],
    },
    {
      title: "Product Services",
      key: "productServices",
      items: [
        { title: "Product Concept & Design", desc: "product-design-and-development-services.html" },
        { title: "Product Lifecycle Services", desc: "product-lifecycle-services.html" },
        { title: "Product Maintenance & Support", desc: "product-maintenance-support.html" },
        { title: "Product Testing", desc: "product-testing.html" },
      ],
    },
    {
      title: "Business Services",
      key: "businessServices",
      items: [
        { title: "BPO", desc: "business-process-outsourcing.html" },
        { title: "IT Infrastructure Management", desc: "it-infrastructure-management-services.html" },
        { title: "Supply Chain Management", desc: "supply-chain-management-services.html" },
        { title: "IT Help Desk Services", desc: "it-help-desk-services.html" },
      ],
    },
    {
      title: "Industries",
      key: "industries",
      items: [
        { title: "Education", desc: "education.html" },
        { title: "Healthcare", desc: "healthcare.html" },
        { title: "Energy & Utilities", desc: "energy-utility-service.html" },
        { title: "Manufacturing", desc: "manufacturing.html" },
        { title: "Retail", desc: "retail.html" },
        { title: "Transport & Logistics", desc: "transport-logistics.html" },
        { title: "Travel & Hospitality", desc: "travel-hospitality-solution.html" },
      ],
    },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/">
            <img src="../../../public/1.png" alt="Devman Technology Solutions" className="logo-img" />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu-desktop">
          {menuData.map((menu, index) => (
            <li key={menu.key} className={`nav-item dropdown ${index === menuData.length - 1 ? 'align-right' : ''}`}>
              <span className="nav-link">
                {menu.title} <FaCaretDown className="dropdown-icon" />
              </span>
              <div className="dropdown-mega">
                {menu.items.map((item, idx) => (
                  <div key={idx} className="mega-item">
                    <a href={item.link}>{item.title}</a>
                    {item.desc && <p>{item.desc}</p>}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* Right Links */}
        <div className="navbar-right">
          <div className="top-links-and-social">
            <a href="/about-us" className="top-link">About Us</a>
            <a href="/careers" className="top-link">Careers</a>
            <a href="https://www.facebook.com/devmantechnology/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://in.linkedin.com/company/devman-technology-solution" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <a href="contact-us.php" className="contact-btn">Contact Us</a>
        </div>

        {/* Mobile Toggle */}
        <div className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <ul className={`navbar-menu-mobile ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="top-links-and-social-mobile">
            <a href="/about-us" className="mobile-nav-link">About Us</a>
            <a href="/careers" className="mobile-nav-link">Careers</a>
          </div>
          {menuData.map((menu) => (
            <li key={menu.key} className="mobile-nav-item">
              <div className="mobile-dropdown-header" onClick={() => toggleDropdown(menu.key)}>
                {menu.title}
                <FaCaretDown className={`mobile-dropdown-icon ${activeDropdown === menu.key ? "rotate" : ""}`} />
              </div>
              <div className={`mobile-dropdown-body ${activeDropdown === menu.key ? "open" : ""}`}>
                {menu.items.map((item, idx) => (
                  <a key={idx} href={item.link} className="mobile-dropdown-item">{item.title}</a>
                ))}
              </div>
            </li>
          ))}
          <li className="mobile-nav-item">
            <a href="contact-us.php" className="mobile-nav-link contact-btn">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
