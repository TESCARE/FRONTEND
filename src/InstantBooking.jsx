import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck, Phone, Zap, ArrowRight, Sparkles } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import SectionHead from './components/SectionHead.jsx';
import foggingImg from './assets/fogging-worker.png';
import './InstantBooking.css';
import navigate from './navigate.js';
import { todayLocal, maxBookingDate } from './formValidation.js';

const InstantBooking = () => {
  return (
    <section className="section section--white ib">
      <div className="container">
        <SectionHead
          eyebrow="Fast-Track Scheduling"
          icon={Zap}
          center={true}
          title="Schedule Your Inspection In 60 Seconds"
          text="Select your target service and reserve an appointment with TESCARE certified technicians."
        />

        <Reveal className="ib__panel">
          <div className="ib__media">
            <img src={foggingImg} alt="Tescare specialist with fogging equipment" loading="lazy" />
            <div className="ib__media-badge">
              <ShieldCheck size={20} />
              <div>
                <strong>Certified &amp; Background-Verified</strong>
                <span>Fully insured technicians with safety PPE</span>
              </div>
            </div>
          </div>

          <div className="ib__form">
            <div className="ib__grid">
              <div className="field">
                <label>Select Target Pest</label>
                <div className="field__control">
                  <select defaultValue="cockroach">
                    <option value="cockroach">Cockroach Control</option>
                    <option value="termite">Termite Control</option>
                    <option value="bedbug">Bedbug Control</option>
                    <option value="mosquito">Mosquito Control</option>
                    <option value="rodent">Rodent Control</option>
                    <option value="woodborer">Wood Borer Control</option>
                    <option value="birdnetting">Bird Netting</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Service Plan</label>
                <div className="field__control">
                  <select defaultValue="single">
                    <option value="single">Single Treatment Service</option>
                    <option value="2_per_year">2 Services / 1 Year</option>
                    <option value="4_per_year">4 Services / 1 Year (AMC)</option>
                    <option value="6_per_year">6 Services / 2 Years</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Premise Layout</label>
                <div className="field__control">
                  <select defaultValue="2bhk">
                    <option value="1rk">1 RK</option>
                    <option value="1bhk">1 BHK</option>
                    <option value="2bhk">2 BHK</option>
                    <option value="3bhk">3 BHK</option>
                    <option value="4bhk">4 BHK</option>
                    <option value="villa">Independent Villa</option>
                    <option value="office">Commercial Office Space</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>Property Category</label>
                <div className="field__control">
                  <select defaultValue="apartment">
                    <option value="apartment">Apartment / Flat</option>
                    <option value="independent_house">Independent House</option>
                    <option value="villa">Luxury Villa</option>
                    <option value="office">Corporate Office</option>
                    <option value="commercial_building">Commercial Building</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label>City / Location</label>
                <div className="field__control">
                  <input type="text" placeholder="e.g. Chennai, Bangalore" defaultValue="Chennai" />
                </div>
              </div>

              <div className="field">
                <label>Preferred Visit Date</label>
                <div className="field__control">
                  <input type="date" min={todayLocal()} max={maxBookingDate()} />
                </div>
              </div>
            </div>

            <div className="ib__actions">
              <button
                type="button"
                className="btn btn--primary btn--sq btn--lg"
                onClick={() => navigate('#book')}
              >
                <span>Continue to Booking</span>
                <ArrowRight />
              </button>
              <a
                href="tel:+919003328229"
                className="btn btn--outline btn--sq btn--lg"
              >
                <Phone size={17} /> Talk to Specialist
              </a>
            </div>

            <ul className="ib__features">
              <li><CheckCircle2 size={16} /> Certified Technicians</li>
              <li><ShieldCheck size={16} /> 100% Odourless Formula</li>
              <li><CheckCircle2 size={16} /> Price Confirmed After Inspection</li>
              <li><CheckCircle2 size={16} /> Warranty Follow-Up Included</li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="ib__help" delay={0.15}>
          <span>Need custom enterprise pest proofing or large residential complex quote?</span>
          <a href="tel:+919003328229" className="ib__help-phone">
            <Phone size={16} /> Call +91 90033 28229
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default InstantBooking;
