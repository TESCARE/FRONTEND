import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle2, AlertTriangle, Loader2, Clock, CalendarCheck, ArrowRight, ShieldCheck, User, Mail, MapPin, Sparkles } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import submitLead from './leadSubmit.js';
import './BookForm.css';

const SERVICE_LABELS = {
  cockroach: 'Cockroach Control (Gel & Spray)',
  termite: 'Termite Control (Anti-Termite 5-Yr)',
  birdnetting: 'Bird Netting (Balcony & Window)',
  bedbug: 'Bedbug Elimination (Thermal & Chemical)',
  mosquito: 'Mosquito Misting & Control',
  rodent: 'Rodent & Rat Proofing',
  woodborer: 'Wood Borer Syringe Injection',
};

const BookForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: 'chennai',
    serviceType: 'cockroach',
    propertyType: 'apartment',
    date: '',
    timeSlot: 'morning',
    message: '',
  });
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  // Pick up prefill from sessionStorage if user came from instant calculator or service card
  useEffect(() => {
    try {
      const prefillPest = sessionStorage.getItem('tescare_prefill_pest');
      const prefillProp = sessionStorage.getItem('tescare_prefill_property');
      const prefillDate = sessionStorage.getItem('tescare_prefill_date');

      if (prefillPest && SERVICE_LABELS[prefillPest]) {
        setFormData((prev) => ({ ...prev, serviceType: prefillPest }));
      }
      if (prefillProp) {
        setFormData((prev) => ({ ...prev, propertyType: prefillProp === 'commercial' ? 'office' : 'apartment' }));
      }
      if (prefillDate) {
        setFormData((prev) => ({ ...prev, date: prefillDate }));
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const getPrettyService = (service) => SERVICE_LABELS[service] || service;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const result = await submitLead('Booking', {
      name: formData.fullName,
      phone: formData.mobile,
      email: formData.email,
      city: formData.city,
      service: getPrettyService(formData.serviceType),
      propertyType: formData.propertyType,
      preferredDate: formData.date,
      timeSlot: formData.timeSlot,
      message: formData.message,
    });

    // Only confirm to the customer once the enquiry has actually been
    // recorded — a false confirmation leaves them waiting for a call
    // that will never come.
    setStatus(result.ok ? 'sent' : 'error');
    setShowNotification(true);
    if (result.ok) setTimeout(() => setShowNotification(false), 10000);
  };

  return (
    <section id="booking-form" className="section section--soft bform">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className={`toast ${status === 'error' ? 'toast--error' : ''}`}
            role={status === 'error' ? 'alert' : 'status'}
            initial={{ opacity: 0, y: -30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          >
            <div className="toast__icon">{status === 'error' ? <AlertTriangle /> : <CheckCircle2 />}</div>
            {status === 'error' ? (
              <div>
                <h4>We couldn&rsquo;t send your request</h4>
                <p>
                  Something went wrong on our end, so your details were not received. Please call us on{' '}
                  <a href="tel:+918754574229"><strong>+91 87545 74229</strong></a> or{' '}
                  <a href="https://wa.me/919150044725" target="_blank" rel="noreferrer"><strong>message us on WhatsApp</strong></a>{' '}
                  and we will book your inspection right away.
                </p>
              </div>
            ) : (
              <div>
                <h4>Inspection Request Received</h4>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. We have your request for <strong>{getPrettyService(formData.serviceType)}</strong> on <strong>{formData.date || 'the requested date'}</strong> ({formData.timeSlot} slot). Our field specialist will call you on <strong>{formData.mobile}</strong> to confirm the visit.
                </p>
              </div>
            )}
            <button
              type="button"
              className="toast__close"
              onClick={() => setShowNotification(false)}
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container bform__inner">
        {/* Main Booking Form */}
        <Reveal className="bform__main">
          <div className="bform__head">
            <span className="eyebrow"><CalendarCheck size={14} /> Zero-Obligation Booking</span>
            <h2>Schedule Your Free Inspection</h2>
            <p>Our senior entomology technician will inspect your space, assess the root cause, and provide a transparent customized solution.</p>
          </div>

          <form onSubmit={handleSubmit} className="bform__form">
            {/* Group 1: Contact Details */}
            <div className="bform__group-title">
              <span>Step 1</span> Personal &amp; Contact Details
            </div>

            <div className="bform__row">
              <div className="field">
                <label htmlFor="fullName">Full Name *</label>
                <div className="field__control field__control--icon">
                  <User />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="mobile">Mobile Number *</label>
                <div className="field__control field__control--icon">
                  <Phone />
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    placeholder="+91 8754574229"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="bform__row">
              <div className="field">
                <label htmlFor="email">Email Address *</label>
                <div className="field__control field__control--icon">
                  <Mail />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="city">City / Region *</label>
                <div className="field__control field__control--icon">
                  <MapPin />
                  <select
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <option value="chennai">Chennai &amp; Suburbs</option>
                    <option value="bangalore">Bangalore Metropolitan</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="coimbatore">Coimbatore</option>
                    <option value="tiruchirappalli">Tiruchirappalli</option>
                    <option value="thiruvananthapuram">Thiruvananthapuram</option>
                    <option value="thrissur">Thrissur</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                    <option value="other">Other City / District</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Group 2: Service & Property Details */}
            <div className="bform__group-title">
              <span>Step 2</span> Treatment &amp; Appointment Slot
            </div>

            <div className="bform__row">
              <div className="field">
                <label htmlFor="serviceType">Target Pest / Service *</label>
                <div className="field__control">
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    {Object.entries(SERVICE_LABELS).map(([v, l]) => (
                      <option key={v} value={v}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="propertyType">Property Type *</label>
                <div className="field__control">
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    value={formData.propertyType}
                    onChange={handleChange}
                  >
                    <option value="apartment">Apartment / Flat</option>
                    <option value="independent_house">Independent House</option>
                    <option value="villa">Luxury Villa / Bungalow</option>
                    <option value="office">Corporate Office Space</option>
                    <option value="commercial_building">Commercial Building</option>
                    <option value="warehouse">Industrial / Warehouse</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bform__row">
              <div className="field">
                <label htmlFor="date">Preferred Inspection Date *</label>
                <div className="field__control">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="timeSlot">Preferred Time Slot *</label>
                <div className="field__control">
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    required
                    value={formData.timeSlot}
                    onChange={handleChange}
                  >
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="evening">Evening (4:00 PM - 7:30 PM)</option>
                    <option value="anytime">Anytime / Earliest Available</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Infestation Observations / Special Instructions</label>
              <div className="field__control">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="e.g. Cockroaches spotted in kitchen sink cabinet, 3-bedroom apartment on 4th floor..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--lg btn--sq btn--block"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="btn__spin" />
                  <span>Sending your request&hellip;</span>
                </>
              ) : (
                <>
                  <span>Confirm Free Inspection Booking</span>
                  <ArrowRight />
                </>
              )}
            </button>
            <p className="bform__disclaimer">
              ✓ 100% Free on-site audit • No advance payment required • Verified technician arrives with safety ID
            </p>
          </form>
        </Reveal>

        {/* Right Help Sidebar */}
        <Reveal className="bform__aside" delay={0.15}>
          <div className="bform__help">
            <span className="bform__help-tag"><Sparkles size={13} /> Direct Technician Desk</span>
            <h3>Need Emergency Advice?</h3>
            <p>Our pest coordinators can recommend immediate safety measures and schedule emergency slots.</p>

            <div className="bform__phones">
              <div className="bform__phones-icon"><Phone size={22} /></div>
              <div>
                <span>Toll-Free &amp; Helpline</span>
                <a href="tel:+918754574229">+91 87545 74229</a>
                <span>Direct Dispatch Support</span>
              </div>
            </div>

            <div className="bform__help-actions">
              <a href="tel:+918754574229" className="btn btn--white btn--sq btn--block">
                <Phone size={17} /> Call Technician Now
              </a>
              <a
                href="https://wa.me/919150044725"
                target="_blank"
                rel="noreferrer"
                className="btn btn--dark btn--sq btn--block"
              >
                <MessageCircle size={18} /> Chat On WhatsApp
              </a>
            </div>

            <div className="bform__hours">
              <span className="bform__hours-label"><Clock size={14} /> Operational Hours</span>
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
              <span>Sunday: 9:00 AM - 5:00 PM</span>
              <span className="bform__hours-emergency">⚡ 24/7 Emergency Response Active</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default BookForm;
