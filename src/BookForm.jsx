import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import './BookForm.css';

const BookForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    serviceType: '',
    propertyType: '',
    date: '',
    timeSlot: '',
    message: ''
  });
  const [showNotification, setShowNotification] = useState(false);

  const getPrettyService = (service) => {
    const services = {
      bedbug: 'Bedbug Control',
      cockroach: 'Cockroach Control',
      mosquito: 'Mosquito Control',
      rodent: 'Rodent Control',
      termite: 'Termite Control',
      woodborer: 'Wood Borer Control',
      birdnetting: 'Bird Netting'
    };
    return services[service] || service;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setShowNotification(true);
    
    // Auto-dismiss after 7 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 7000);
  };

  return (
    <section className="book-form-section">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="bform-notification"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="notification-icon">🎉</div>
            <div className="notification-details">
              <h4>Booking Successful!</h4>
              <p>
                Thank you, <strong>{formData.fullName}</strong>. Your free pest inspection for <strong>{getPrettyService(formData.serviceType)}</strong> has been scheduled on <strong>{formData.date}</strong> during the <strong>{formData.timeSlot}</strong> slot. Our technician will contact you shortly at <strong>{formData.mobile}</strong>.
              </p>
            </div>
            <button className="notification-close" onClick={() => setShowNotification(false)}>×</button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="book-form-container">
        
        <div className="book-form-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Schedule Your Inspection
          </motion.h2>
        </div>

        <div className="book-form-grid">
          {/* Left Column: Form */}
          <motion.div 
            className="book-form-main"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bform">
              
              <div className="bform-row">
                <div className="bform-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required value={formData.fullName} onChange={handleChange} />
                </div>
                <div className="bform-group">
                  <label htmlFor="mobile">Mobile Number *</label>
                  <input type="tel" id="mobile" name="mobile" placeholder="+91 9600652424" required value={formData.mobile} onChange={handleChange} />
                </div>
              </div>

              <div className="bform-row">
                <div className="bform-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" placeholder="your.email@example.com" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="bform-group">
                  <label htmlFor="city">City / Location *</label>
                  <div className="bform-select-wrapper">
                    <select id="city" name="city" required value={formData.city} onChange={handleChange} className={formData.city === '' ? 'placeholder' : ''}>
                      <option value="" disabled hidden>Select your city</option>
                      <option value="chennai">Chennai</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="hyderabad">Hyderabad</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bform-row">
                <div className="bform-group">
                  <label htmlFor="serviceType">Service Type *</label>
                  <div className="bform-select-wrapper">
                    <select id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange} className={formData.serviceType === '' ? 'placeholder' : ''}>
                      <option value="" disabled hidden>Select Service</option>
                      <option value="bedbug">Bedbug Control</option>
                      <option value="cockroach">Cockroach Control</option>
                      <option value="mosquito">Mosquito Control</option>
                      <option value="rodent">Rodent Control</option>
                      <option value="termite">Termite Control</option>
                      <option value="woodborer">Wood Borer Control</option>
                      <option value="birdnetting">Bird Netting</option>
                    </select>
                  </div>
                </div>
                <div className="bform-group">
                  <label htmlFor="propertyType">Property Type *</label>
                  <div className="bform-select-wrapper">
                    <select id="propertyType" name="propertyType" required value={formData.propertyType} onChange={handleChange} className={formData.propertyType === '' ? 'placeholder' : ''}>
                      <option value="" disabled hidden>Select Property</option>
                      <option value="apartment">Apartment</option>
                      <option value="independent_house">Independent House</option>
                      <option value="office">Office</option>
                      <option value="commercial_building">Commercial Building</option>
                      <option value="villa">Villa</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bform-row">
                <div className="bform-group">
                  <label htmlFor="date">Preferred Inspection Date *</label>
                  <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} className={formData.date === '' ? 'placeholder' : ''} />
                </div>
                <div className="bform-group">
                  <label htmlFor="timeSlot">Preferred Time Slot *</label>
                  <div className="bform-select-wrapper">
                    <select id="timeSlot" name="timeSlot" required value={formData.timeSlot} onChange={handleChange} className={formData.timeSlot === '' ? 'placeholder' : ''}>
                      <option value="" disabled hidden>Select time slot</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening">Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bform-group">
                <label htmlFor="message">Message / Problem Description</label>
                <textarea id="message" name="message" rows="3" placeholder="Describe the pest problem or bird issue..." value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="bform-submit">Book Inspection</button>
              <p className="bform-disclaimer">By submitting, you agree to our terms and privacy policy</p>

            </form>
          </motion.div>

          {/* Right Column: Contact Card */}
          <motion.div 
            className="book-form-sidebar"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bform-contact-card">
              <h3>Need Immediate Help?</h3>
              
              <div className="bcc-phones">
                <Phone className="bcc-icon" size={24} />
                <div className="bcc-numbers">
                  <span className="bcc-label">Call us now</span>
                  <span className="bcc-num">+91 9600652424</span>
                  <span className="bcc-num">+91 9600652424</span>
                </div>
              </div>

              <div className="bcc-actions">
                <button className="bcc-btn bcc-call">
                  <Phone size={18} />
                  <span>Call Now</span>
                </button>
                <button className="bcc-btn bcc-whatsapp">
                  <MessageCircle size={18} />
                  <span>WhatsApp Chat</span>
                </button>
              </div>

              <div className="bcc-divider"></div>

              <div className="bcc-hours">
                <span className="bcc-hours-label">Business Hours</span>
                <span className="bcc-hours-time">Mon - Sat: 8 AM - 8 PM</span>
                <span className="bcc-hours-time">Sunday: 9 AM - 6 PM</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BookForm;
