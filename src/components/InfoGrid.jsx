import React from 'react';
import { AlertTriangle } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import './Service.css';

/**
 * InfoGrid — "signs / problems / risks" cards.
 * items: string | { title, desc?, icon? }
 */
const InfoGrid = ({ eyebrow = 'Warning Signs', title, text, items = [], icon: DefaultIcon = AlertTriangle, tone = 'warn', columns = 4, soft = false }) => {
  return (
    <section className={`section ${soft ? 'section--soft' : 'section--white'}`}>
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} text={text} />
        <div className={`grid grid--${columns} info-grid`}>
          {items.map((raw, i) => {
            const item = typeof raw === 'string' ? { title: raw } : raw;
            const Icon = item.icon || DefaultIcon;
            return (
              <Reveal key={i} delay={i * 0.07} className="card card--hover info-card">
                <span className={`icon-box ${tone === 'warn' ? 'icon-box--warn' : ''}`}>
                  {React.isValidElement(Icon) ? Icon : <Icon />}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  {item.desc && <p>{item.desc}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoGrid;
