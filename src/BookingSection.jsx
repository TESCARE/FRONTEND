import React, { useState } from 'react';
import { MapPin, Info, Calendar, ShieldCheck, BadgeCheck, Leaf, Phone, ArrowRight, CheckCircle2, Building2, Home } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import SectionHead from './components/SectionHead.jsx';
import './BookingSection.css';
import navigate from './navigate.js';
import { todayLocal, maxBookingDate } from './formValidation.js';

const PEST_LIST = [
  { value: 'cockroach', label: 'Cockroach Control', mult: 1.0 },
  { value: 'termite', label: 'Termite Control', mult: 1.6 },
  { value: 'bedbug', label: 'Bedbug Control', mult: 1.3 },
  { value: 'mosquito', label: 'Mosquito Control', mult: 1.0 },
  { value: 'rodent', label: 'Rodent Control', mult: 1.0 },
  { value: 'woodborer', label: 'Wood Borer Control', mult: 1.4 },
  { value: 'birdnetting', label: 'Bird Netting', mult: 1.8 },
];

const RESIDENTIAL_SIZES = [
  { value: '1rk', label: '1 RK', base: 1200 },
  { value: '1bhk', label: '1 BHK', base: 1800 },
  { value: '2bhk', label: '2 BHK', base: 2400 },
  { value: '3bhk', label: '3 BHK', base: 3200 },
  { value: '4bhk', label: '4 BHK', base: 4200 },
];

const FREQUENCIES = [
  { value: '1_service', label: '1 Service (Single Treatment)', mult: 1.0 },
  { value: '3_service_2year', label: '3 Services / 1 Year (Popular)', mult: 2.3 },
  { value: '6_service_2year', label: '6 Services / 2 Years (Save 25%)', mult: 4.1 },
  { value: '9_service_3year', label: '9 Services / 3 Years (Save 35%)', mult: 5.6 },
];

const TIERS = [
  { value: 'standard', label: 'Standard Pest Control', mult: 1.0 },
  { value: 'silver_shield_3d', label: 'Silver Shield Service 3D', mult: 1.15 },
  { value: 'gold_shield_4d', label: 'Gold Shield Service 4D (Recommended)', mult: 1.3 },
  { value: 'platinum_shield_5d', label: 'Platinum Shield Service 5D', mult: 1.45 },
];

const BookingSection = () => {
  const [pincode, setPincode] = useState('632326');
  const [premiseType, setPremiseType] = useState('residential');
  const [pestType, setPestType] = useState('cockroach');
  const [premiseSize, setPremiseSize] = useState('2bhk');
  const [sqft, setSqft] = useState('1200');
  const [frequency, setFrequency] = useState('1_service');
  const [serviceTier, setServiceTier] = useState('gold_shield_4d');
  const [bookingDate, setBookingDate] = useState('');

  const handleBookNow = () => {
    // Store selected params in sessionStorage so BookForm can pick them up
    try {
      sessionStorage.setItem('tescare_prefill_pest', pestType);
      sessionStorage.setItem('tescare_prefill_property', premiseType);
      sessionStorage.setItem('tescare_prefill_date', bookingDate);
    } catch (e) {
      // fallback
    }
    navigate('#book');
  };

  return (
    <section className="section section--soft booking">
      <div className="container">
        <SectionHead
          eyebrow="Free Inspection"
          icon={BadgeCheck}
          center={true}
          title="Check Availability &amp; Book an Inspection"
          text="Tell us about your property and preferred slot. We confirm the price after a free on-site inspection."
        />

        <Reveal className="booking__panel">
          <div className="booking__form">
            {/* Pincode & Serviceability */}
            <div className="field">
              <label>Service Pincode</label>
              <div className="field__control field__control--icon">
                <MapPin />
                <input
                  type="text"
                  inputMode="numeric"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="e.g. 600001"
                  maxLength={6}
                />
              </div>
              <span className="field__hint text-primary">✓ Service available with same-day dispatch</span>
            </div>

            {/* Premise Type */}
            <div className="field">
              <label>Property Category</label>
              <div className="segmented">
                <button
                  type="button"
                  className={premiseType === 'residential' ? 'active' : ''}
                  onClick={() => setPremiseType('residential')}
                >
                  <Home size={16} /> Residential
                </button>
                <button
                  type="button"
                  className={premiseType === 'commercial' ? 'active' : ''}
                  onClick={() => setPremiseType('commercial')}
                >
                  <Building2 size={16} /> Commercial
                </button>
              </div>
            </div>

            {/* Pest Type */}
            <div className="field">
              <label>Target Pest</label>
              <div className="field__control">
                <select value={pestType} onChange={(e) => setPestType(e.target.value)}>
                  {PEST_LIST.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Premise Size / Sqft */}
            {premiseType === 'residential' ? (
              <div className="field">
                <label>Property Layout / Size</label>
                <div className="field__control">
                  <select value={premiseSize} onChange={(e) => setPremiseSize(e.target.value)}>
                    {RESIDENTIAL_SIZES.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <div className="field">
                <label>Carpet Area (sq. ft)</label>
                <div className="field__control">
                  <input
                    type="number"
                    min="200"
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    placeholder="e.g. 1500"
                  />
                </div>
                <span className="field__hint">Minimum 200 sq.ft required for commercial service</span>
              </div>
            )}

            {/* Frequency Plan */}
            <div className="field">
              <label>Service Frequency</label>
              <div className="field__control">
                <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                  {FREQUENCIES.map((f) => (
                    <option key={f.value} value={f.value}>{f.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Treatment Shield Tier */}
            <div className="field">
              <label>Protection Tier</label>
              <div className="field__control">
                <select value={serviceTier} onChange={(e) => setServiceTier(e.target.value)}>
                  {TIERS.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred Date */}
            <div className="field booking__field-full">
              <label>Preferred Visit Date</label>
              <div className="field__control">
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  min={todayLocal()}
                  max={maxBookingDate()}
                />
              </div>
            </div>
          </div>

          {/* Pricing Summary Aside */}
          <aside className="booking__summary">
            <div className="booking__summary-badge">
              <ShieldCheck size={14} /> Free Site Inspection
            </div>
            <span className="booking__summary-label">What happens next</span>

            <p className="booking__quote-note">
              A technician visits, assesses the infestation and the property, and
              gives you a firm price before any work starts. The inspection itself
              is free.
            </p>

            <div className="booking__divider" />

            <ul className="booking__tags">
              <li><CheckCircle2 size={16} /> Certified Non-Toxic Chemicals</li>
              <li><ShieldCheck size={16} /> Free 30-90 Day Re-Treatment Guarantee</li>
              <li><Leaf size={16} /> 100% Safe for Toddlers &amp; House Pets</li>
            </ul>

            <div className="booking__actions">
              <button
                type="button"
                className="btn btn--primary btn--sq btn--block btn--lg"
                onClick={handleBookNow}
              >
                Book This Service <ArrowRight />
              </button>
              <a
                href="tel:+919003328229"
                className="btn btn--outline-light btn--sq btn--block"
              >
                <Phone size={17} /> Talk to Pest Specialist
              </a>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
};

export default BookingSection;
