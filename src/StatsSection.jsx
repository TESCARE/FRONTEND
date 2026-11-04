import React, { useRef, useEffect } from 'react';
import { useInView, animate } from 'framer-motion';
import { Users, ShieldCheck, Wrench, MapPin } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import './StatsSection.css';

const Counter = ({ from, to, duration = 2.2, suffix = '+' }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: '-60px' });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          if (nodeRef.current) {
            const rounded = Math.round(value);
            nodeRef.current.textContent = (rounded > 999 ? rounded.toLocaleString() : rounded) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};

const stats = [
  { target: 10000, label: 'Protected Properties', sub: 'Residential & Commercial', suffix: '+', icon: <Users /> },
  { target: 7, label: 'Specialist Services', sub: 'Pest control & bird netting', suffix: '', icon: <ShieldCheck /> },
  { target: 50, label: 'Certified Specialists', sub: 'Full-time trained experts', suffix: '+', icon: <Wrench /> },
  { target: 12, label: 'Service Metro Hubs', sub: 'Rapid dispatch network', suffix: '+', icon: <MapPin /> },
];

const StatsSection = () => (
  <section className="section section--soft stats">
    <div className="container">
      <div className="stats__grid">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.1} className="card card--hover stats__card">
            <span className="icon-box stats__icon">{s.icon}</span>
            <div className="stats__num">
              <Counter from={0} to={s.target} suffix={s.suffix} />
            </div>
            <div className="stats__label">{s.label}</div>
            <div className="stats__sub">{s.sub}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
