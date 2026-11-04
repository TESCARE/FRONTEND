import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Home, Building, Phone, CheckCircle, ShieldCheck, Info, ArrowRight } from 'lucide-react';
import './ServiceBookingCard.css';
import navigate from './navigate.js';

const PEST_OPTIONS = [
  { value: 'cockroach', label: 'Cockroach Control' },
  { value: 'termite', label: 'Termite Control' },
  { value: 'birdnetting', label: 'Bird Netting' },
  { value: 'bedbug', label: 'Bedbug Control' },
  { value: 'mosquito', label: 'Mosquito Control' },
  { value: 'rodent', label: 'Rodent Control' },
  { value: 'woodborer', label: 'Wood Borer Control' },
];

const ServiceBookingCard = ({ defaultPest = 'cockroach' }) => {
  const [pincode, setPincode] = useState('632326');
  const [premiseType, setPremiseType] = useState('residential');
  const [pestType, setPestType] = useState(defaultPest);
  const [premiseSize, setPremiseSize] = useState('2bhk');
  const [sqft, setSqft] = useState('1200');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBookNow = () => {
    try {
      sessionStorage.setItem('tescare_prefill_pest', pestType);
      sessionStorage.setItem('tescare_prefill_property', premiseType);
    } catch (e) {
      // ignore
    }
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('#book');
    }, 1400);
  };

  const handleTalkToAgent = () => {
    window.location.href = 'tel:+918754574229';
  };

  return (
    <div className="sbc">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="sbc__success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            >
              <CheckCircle size={56} />
            </motion.div>
            <h3>Service Estimate Confirmed!</h3>
            <p>Redirecting you to booking details…</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sbc__head">
        <div>
          <span className="sbc__kicker">Free Inspection Request</span>
          <h3>Check Service Availability</h3>
        </div>
        <span className="sbc__badge">
          <ShieldCheck size={14} /> Free Inspection
        </span>
      </div>

      <div className="field">
        <label htmlFor="sbc-pincode">Service Pincode</label>
        <div className="field__control field__control--icon">
          <MapPin />
          <input
            id="sbc-pincode"
            type="text"
            inputMode="numeric"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Enter Pincode"
            maxLength={6}
          />
        </div>
      </div>

      <div className="field">
        <label>Property Category *</label>
        <div className="segmented">
          <button
            type="button"
            className={premiseType === 'residential' ? 'active' : ''}
            onClick={() => setPremiseType('residential')}
          >
            <Home size={15} /> Residential
          </button>
          <button
            type="button"
            className={premiseType === 'commercial' ? 'active' : ''}
            onClick={() => setPremiseType('commercial')}
          >
            <Building size={15} /> Commercial
          </button>
        </div>
      </div>

      <div className="sbc__row">
        <div className="field">
          <label htmlFor="sbc-pest">Target Pest *</label>
          <div className="field__control">
            <select id="sbc-pest" value={pestType} onChange={(e) => setPestType(e.target.value)}>
              {PEST_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {premiseType === 'residential' ? (
          <div className="field">
            <label htmlFor="sbc-size">Layout Size *</label>
            <div className="field__control">
              <select id="sbc-size" value={premiseSize} onChange={(e) => setPremiseSize(e.target.value)}>
                <option value="1rk">1 RK</option>
                <option value="1bhk">1 BHK</option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="4bhk">4 BHK</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="field">
            <label htmlFor="sbc-sqft">Carpet Area (sq. ft) *</label>
            <div className="field__control">
              <input
                id="sbc-sqft"
                type="number"
                min="0"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                placeholder="e.g. 1200"
              />
            </div>
            <span className="field__hint">
              <Info size={12} style={{ display: 'inline', verticalAlign: '-2px' }} /> Min 200 sq.ft
            </span>
          </div>
        )}
      </div>

      <div className="sbc__quote">
        <span className="sbc__quote-icon"><ShieldCheck size={17} /></span>
        <p>
          Send these details and we&rsquo;ll confirm your price after a
          <strong> free on-site inspection</strong> — no charge for the visit.
        </p>
      </div>

      <div className="sbc__actions">
        <button
          type="button"
          className="btn btn--primary btn--sq btn--block"
          onClick={handleBookNow}
        >
          <span>Request Inspection</span>
          <ArrowRight size={15} />
        </button>
        <button
          type="button"
          className="btn btn--outline btn--sq btn--block"
          onClick={handleTalkToAgent}
        >
          <Phone size={15} /> Talk to Agent
        </button>
      </div>
    </div>
  );
};

export default ServiceBookingCard;
