import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import './Service.css';

/**
 * BenefitGrid — "Why choose Tescare" / benefits.
 *
 * Pass `image` to get the split layout: heading and a photograph on the left,
 * a two-up card grid on the right. Without it the cards run full width.
 *
 * items: string | { title, desc?, icon? }
 */
const BenefitGrid = ({
  eyebrow = 'Why Tescare',
  title = 'Why Choose TESCARE',
  text,
  items = [],
  dark = true,
  image,
  imageAlt = '',
}) => {
  const split = Boolean(image);

  const cards = items.map((raw, i) => {
    const item = typeof raw === 'string' ? { title: raw } : raw;
    const Icon = item.icon || CheckCircle2;
    return (
      <Reveal
        key={i}
        delay={i * 0.08}
        className={`benefit-card ${item.desc ? '' : 'benefit-card--compact'} ${
          dark ? 'benefit-card--dark' : 'card card--hover'
        }`}
      >
        <span className={`icon-box icon-box--round ${dark ? 'icon-box--dark' : ''}`}>
          {React.isValidElement(Icon) ? Icon : <Icon />}
        </span>
        <div className="benefit-card__text">
          <h3>{item.title}</h3>
          {item.desc && <p>{item.desc}</p>}
        </div>
      </Reveal>
    );
  });

  return (
    <section className={`section ${dark ? 'section--dark benefit-dark' : 'section--white'}`}>
      {dark && <div className="hero-glow hero-glow--a" />}

      {split ? (
        <div className="container benefit-split">
          {/* Heading spans the full width so the photograph and the card
              grid below it form one aligned, equal-height band. */}
          <SectionHead eyebrow={eyebrow} title={title} text={text} center={false} />
          <Reveal className="benefit-split__media" y={30}>
            <img src={image} alt={imageAlt} loading="lazy" />
          </Reveal>
          <div className="benefit-split__cards">{cards}</div>
        </div>
      ) : (
        <div className="container">
          <SectionHead eyebrow={eyebrow} title={title} text={text} />
          <div className="grid grid--4 benefit-grid">{cards}</div>
        </div>
      )}
    </section>
  );
};

export default BenefitGrid;
