import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Map } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import mapIndiaImg from './assets/map_india.png';
import './OurFootprints.css';

const locations = [
  { name: 'Chennai', hub: 'HQ & Main Dispatch Hub', timing: '30-45 mins' },
  { name: 'Bangalore', hub: 'Tech Hub Operations', timing: '45 mins' },
  { name: 'Hyderabad', hub: 'Regional Operations', timing: '45 mins' },
  { name: 'Coimbatore', hub: 'Active Fleet Hub', timing: '60 mins' },
  { name: 'Tiruchirappalli', hub: 'Active Unit', timing: '60 mins' },
  { name: 'Thiruvananthapuram', hub: 'Kerala State Hub', timing: '60 mins' },
  { name: 'Thrissur', hub: 'Active Unit', timing: '60 mins' },
  { name: 'Mumbai', hub: 'West Zone Hub', timing: '45 mins' },
  { name: 'Pune', hub: 'Active Fleet Hub', timing: '45 mins' },
  { name: 'Ahmedabad', hub: 'Gujarat Operations', timing: '60 mins' },
  { name: 'Kolkata', hub: 'East Zone Hub', timing: '60 mins' },
  { name: 'Surat', hub: 'Active Unit', timing: '60 mins' },
];

const OurFootprints = () => {
  const ref = useRef(null);
  const [selectedLoc, setSelectedLoc] = useState(locations[0]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const mapY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section className="section section--white footprints" ref={ref}>
      <div className="container footprints__inner">
        {/* Left Column: Information & Interactive Chips */}
        <div className="footprints__content">
          <Reveal>
            <span className="eyebrow"><Map size={14} /> National Presence</span>
            <h2>Rapid Response Across India's Major Hubs</h2>
            <p className="footprints__lead">
              TESCARE operates dedicated fleet vans and certified field units across 12+ metro and tier-1 cities, ensuring fast same-day response whenever you encounter a pest issue.
            </p>
          </Reveal>

          {/* City Chips */}
          <div className="footprints__chips">
            {locations.map((loc, i) => {
              const isSelected = selectedLoc.name === loc.name;
              return (
                <Reveal key={loc.name} as="div" delay={i * 0.03} y={8}>
                  <button
                    type="button"
                    className={`footprints__chip ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => setSelectedLoc(loc)}
                  >
                    <MapPin size={14} />
                    <span>{loc.name}</span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3} className="footprints__footer">
            <p className="footprints__note">
              Don't see your specific town? <a href="#contact">Contact us</a> — we frequently dispatch mobile units to surrounding districts.
            </p>
          </Reveal>
        </div>

        {/* Right Column: India Map Visual */}
        <motion.div className="footprints__map-wrap" style={{ y: mapY }}>
          <Reveal y={30} className="footprints__map-card">
            <img src={mapIndiaImg} alt="Map of India showing Tescare certified service network" loading="lazy" />
            <div className="footprints__map-glow" />
            
            <div className="footprints__stat-badge">
              <strong>12+ Cities</strong>
              <span>50+ Dedicated Vehicles</span>
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
};

export default OurFootprints;
