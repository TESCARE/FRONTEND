import React from 'react';
import Reveal from './Reveal.jsx';
import SectionHead from './SectionHead.jsx';
import './Service.css';

/**
 * ProcessCards — treatment / installation stages.
 *
 * Steps that carry photography (`bg`) render as image cards.
 * Icon-only steps render as a connected timeline instead: their copy is a few
 * words long, which left most of an image-card's height empty.
 *
 * steps: [{ number, title, desc, bg?, icon? }]
 */
const ProcessCards = ({ eyebrow = 'Our Process', title, text, steps = [], soft = true }) => {
  const asTimeline = steps.length > 0 && steps.every((s) => !s.bg);

  return (
    <section className={`section ${soft ? 'section--soft' : 'section--white'}`}>
      <div className="container">
        <SectionHead eyebrow={eyebrow} title={title} text={text} />

        {asTimeline ? (
          <ol className="svc-timeline">
            {steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 0.1} className="svc-timeline__step">
                <span className="svc-timeline__node" aria-hidden="true">
                  {s.icon || <strong>{s.number || i + 1}</strong>}
                </span>
                <span className="svc-timeline__count">Step {s.number || i + 1}</span>
                <h3>{s.title}</h3>
                {s.desc && <p>{s.desc}</p>}
              </Reveal>
            ))}
          </ol>
        ) : (
          <div className="grid grid--4 process-grid">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 0.1} className="process-card">
                <img src={s.bg} alt="" loading="lazy" className="process-card__bg" />
                <div className="process-card__shade" />
                <div className="process-card__body">
                  <div className="process-card__top">
                    <span className="process-card__num">{s.number || i + 1}</span>
                    {s.icon && <span className="process-card__icon">{s.icon}</span>}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProcessCards;
