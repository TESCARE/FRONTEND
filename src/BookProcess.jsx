import React from 'react';
import { Award, Leaf, IndianRupee, Star, ClipboardList } from 'lucide-react';
import Reveal from './components/Reveal.jsx';
import SectionHead from './components/SectionHead.jsx';
import './BookProcess.css';

const steps = [
  { num: '1', title: 'Book Inspection', desc: 'Fill out the form and choose your preferred date and time' },
  { num: '2', title: 'Technician Visit', desc: 'Our certified expert arrives at your location on time' },
  { num: '3', title: 'Problem Analysis', desc: 'Thorough inspection to identify the root cause of the issue' },
  { num: '4', title: 'Treatment Recommendation', desc: 'Receive a detailed quote and treatment plan tailored to your needs' },
];

const features = [
  { text: 'Certified Pest Experts', icon: Award },
  { text: 'Safe Chemicals', icon: Leaf },
  { text: 'Affordable Pricing', icon: IndianRupee },
  { text: '100% Customer Satisfaction', icon: Star },
];

const BookProcess = () => (
  <section className="section section--white bprocess">
    <div className="container">
      <SectionHead eyebrow="How it works" icon={ClipboardList} title="How Inspection Works" text="A simple four-step process from booking to a tailored treatment plan." />
      <div className="bprocess__steps">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 0.1} className="bprocess__step">
            <span className="bprocess__num">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Reveal>
        ))}
      </div>
      <div className="bprocess__features">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <Reveal key={i} delay={0.3 + i * 0.08} className="bprocess__feature">
              <Icon /> <span>{f.text}</span>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default BookProcess;
