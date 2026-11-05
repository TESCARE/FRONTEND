import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertTriangle, AlertCircle, Loader2, MessageSquare, Phone, Clock, ShieldCheck, MessageCircle, User, Mail, Sparkles } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import submitLead from './leadSubmit.js';
import {
  validateName, validateMobile, validateEmail,
  runValidation, focusField, normaliseMobile,
} from './formValidation.js';
import './ContactForm.css';

const SERVICE_LABELS = {
  cockroach: 'Cockroach Control (Gel & Spray)',
  termite: 'Termite Control (Anti-Termite 5-Yr)',
  bedbug: 'Bedbug Elimination (Heat & Chemical)',
  birdnetting: 'Bird Netting (Balcony & Window)',
  mosquito: 'Mosquito Control & Misting',
  rodent: 'Rodent & Rat Proofing',
  woodborer: 'Wood Borer Syringe Treatment',
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: 'cockroach', message: '' });
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const RULES = {
    name: validateName,
    phone: validateMobile,
    email: validateEmail,
  };

  const getPrettyService = (service) => SERVICE_LABELS[service] || service;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name] && RULES[name] && !RULES[name](value)) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!RULES[name]) return;
    setErrors((prev) => ({ ...prev, [name]: RULES[name](value) }));
  };

  const fieldProps = (name) => ({
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const { errors: found, firstInvalid } = runValidation(formData, RULES);
    setErrors(found);
    if (firstInvalid) {
      focusField(firstInvalid);
      return;
    }

    setStatus('sending');

    const result = await submitLead('Contact', {
      name: formData.name,
      phone: normaliseMobile(formData.phone) || formData.phone,
      email: formData.email,
      service: getPrettyService(formData.service),
      message: formData.message,
    });

    setStatus(result.ok ? 'sent' : 'error');
    setShowNotification(true);
    if (result.ok) setTimeout(() => setShowNotification(false), 10000);
  };

  return (
    <section id="contact-form" className="section section--soft cform">
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
                <h4>We couldn&rsquo;t send your enquiry</h4>
                <p>
                  Something went wrong on our end, so your details were not received. Please call us on{' '}
                  <a href="tel:+919003328229"><strong>+91 90033 28229</strong></a> or{' '}
                  <a href="https://wa.me/919150044725" target="_blank" rel="noreferrer"><strong>message us on WhatsApp</strong></a>{' '}
                  so we can help you straight away.
                </p>
              </div>
            ) : (
              <div>
                <h4>Enquiry Received</h4>
                <p>
                  Thank you, <strong>{formData.name}</strong>. We have your enquiry about <strong>{getPrettyService(formData.service)}</strong> and our team will call you back on <strong>{formData.phone}</strong>.
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

      <div className="container cform__inner">
        {/* Left Information Panel */}
        <Reveal className="cform__side">
          <span className="eyebrow"><MessageSquare size={14} /> Direct Communications</span>
          <h2>We're Here To Help Clear Your Space</h2>
          <p className="cform__intro">
            Have an active infestation, need an urgent estimate, or have technical queries about our eco-safe chemicals? Our dispatch team is on standby 7 days a week.
          </p>

          <ul className="cform__points">
            <li>
              <span className="icon-box"><Clock /></span>
              <div>
                <strong>30-Minute Fast Response</strong>
                <span>Instant dispatch callback during operational hours</span>
              </div>
            </li>
            <li>
              <span className="icon-box"><ShieldCheck /></span>
              <div>
                <strong>Zero Obligation Free Advice</strong>
                <span>Honest assessment and transparent quote upfront</span>
              </div>
            </li>
            <li>
              <span className="icon-box"><Phone /></span>
              <div>
                <strong>Central Dispatch Helpline</strong>
                <a href="tel:+919003328229">+91 90033 28229</a>
              </div>
            </li>
          </ul>

          <div className="cform__chat-card">
            <div>
              <strong>Prefer Instant Chat?</strong>
              <p>Connect with a technician on WhatsApp for instant photos &amp; quotes.</p>
            </div>
            <a
              href="https://wa.me/919150044725"
              target="_blank"
              rel="noreferrer"
              className="btn btn--dark btn--sq btn--block"
            >
              <MessageCircle size={18} /> Chat On WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Right Form Card */}
        <Reveal className="cform__card" delay={0.1}>
          <div className="cform__card-head">
            <h3>Send An Inquiry</h3>
            <p>Fill out the form below and we'll confirm your slot quickly.</p>
          </div>

          <form className="cform__form" onSubmit={handleSubmit} noValidate>
            <div className="cform__row">
              <div className={`field ${errors.name ? 'field--error' : ''}`}>
                <label htmlFor="name">Full Name *</label>
                <div className="field__control field__control--icon">
                  <User />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    value={formData.name}
                    required
                    {...fieldProps('name')}
                  />
                </div>
                {errors.name && (
                  <span className="field__error" id="name-error" role="alert">
                    <AlertCircle size={13} /> {errors.name}
                  </span>
                )}
              </div>

              <div className={`field ${errors.phone ? 'field--error' : ''}`}>
                <label htmlFor="phone">Mobile Number *</label>
                <div className="field__control field__control--icon">
                  <Phone />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="10-digit mobile number"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={16}
                    value={formData.phone}
                    required
                    {...fieldProps('phone')}
                  />
                </div>
                {errors.phone && (
                  <span className="field__error" id="phone-error" role="alert">
                    <AlertCircle size={13} /> {errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="cform__row">
              <div className={`field ${errors.email ? 'field--error' : ''}`}>
                <label htmlFor="email">Email Address *</label>
                <div className="field__control field__control--icon">
                  <Mail />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    inputMode="email"
                    autoComplete="email"
                    value={formData.email}
                    required
                    {...fieldProps('email')}
                  />
                </div>
                {errors.email && (
                  <span className="field__error" id="email-error" role="alert">
                    <AlertCircle size={13} /> {errors.email}
                  </span>
                )}
              </div>

              <div className="field">
                <label htmlFor="service">Service Required *</label>
                <div className="field__control">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    {Object.entries(SERVICE_LABELS).map(([v, l]) => (
                      <option key={v} value={v}>{l}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Problem Details / Premises Info *</label>
              <div className="field__control">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your pest issue, location, or balcony dimensions..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
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
                  <span>Sending&hellip;</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Submit Inquiry</span>
                </>
              )}
            </button>
            <span className="field__hint text-center">We respect your privacy. No spam ever.</span>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactForm;
