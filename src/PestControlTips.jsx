import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { BookOpen, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHead from './components/SectionHead.jsx';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PestControlTips.css';

import bedbugImg from './assets/services/bedbug_control_1779952136140.png';
import rodentImg from './assets/services/rodent_control_1779952155477.png';
import mosquitoImg from './assets/services/mosquito_control_1779952172778.png';
import cockroachImg from './assets/services/cockroach_control_1779952189408.png';
import termiteImg from './assets/services/termite_control_1779952210853.png';
import birdImg from './assets/services/bird_netting_1779952229064.png';
import woodborerImg from './assets/services/wood_borer_control_1779952247139.png';

const tipsData = [
  { id: 1, category: 'Bedbug Control', href: '#bedbug-control', title: 'Complete Guide to Bedbug Eradication', desc: 'Identify early warning signs of bedbugs and learn how professional heat and chemical treatments eliminate them.', image: bedbugImg, readTime: '5 min read' },
  { id: 2, category: 'Rodent Control', href: '#rodent-control', title: 'Effective Baiting & Rodent Proofing', desc: 'Keep rats and mice away with advanced proofing techniques, entry blocking, and targeted baiting solutions.', image: rodentImg, readTime: '6 min read' },
  { id: 3, category: 'Mosquito Control', href: '#mosquito-control', title: 'Preventing Mosquito Breeding Grounds', desc: 'Stop stagnant water accumulation and learn how misting treatments disrupt mosquito life cycles.', image: mosquitoImg, readTime: '5 min read' },
  { id: 4, category: 'Cockroach Control', href: '#cockroach-control', title: 'Eradicating Resistant Cockroach Colonies', desc: 'Discover why gel baiting and target sprays are the most effective methods to clear cockroach nests.', image: cockroachImg, readTime: '4 min read' },
  { id: 5, category: 'Termite Control', href: '#termite-control', title: 'Protecting Wood and Building Foundations', desc: 'Prevent costly structural damage with pre-construction soil treatment and post-construction drilling.', image: termiteImg, readTime: '7 min read' },
  { id: 6, category: 'Bird Netting', href: '#bird-netting', title: 'Balcony Bird Netting Installation Guide', desc: 'Secure balconies and windows with high-density polyethelene bird nets to keep pigeons away.', image: birdImg, readTime: '5 min read' },
  { id: 7, category: 'Wood Borer', href: '#woodborer-control', title: 'Stopping Wood Borer Damage Early', desc: 'Identify wood powder residue and protect premium wooden structures with targeted syringe injection treatments.', image: woodborerImg, readTime: '5 min read' },
];

const PestControlTips = () => {
  return (
    <section className="section section--soft tips">
      <div className="container">
        <div className="tips__head">
          <SectionHead
            eyebrow="Tips & Guides"
            icon={BookOpen}
            center={false}
            title="Pest Control Tips & Guides"
            text="Learn helpful tips and expert advice to protect your home from pests and birds. Stay informed with our latest guides and prevention tips."
          />
          <div className="tips__nav">
            <button type="button" className="tips__nav-btn tips-prev" aria-label="Previous"><ChevronLeft /></button>
            <button type="button" className="tips__nav-btn tips-next" aria-label="Next"><ChevronRight /></button>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1.1}
          loop
          grabCursor
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          navigation={{ prevEl: '.tips-prev', nextEl: '.tips-next' }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="tips__swiper"
        >
          {tipsData.map((tip) => (
            <SwiperSlide key={tip.id}>
              <a href={tip.href} className="tip-card">
                <div className="tip-card__media">
                  <img src={tip.image} alt={tip.title} loading="lazy" />
                  <span className="tip-card__cat">{tip.category}</span>
                </div>
                <div className="tip-card__body">
                  <span className="tip-card__meta"><Clock /> {tip.readTime}</span>
                  <h3>{tip.title}</h3>
                  <p>{tip.desc}</p>
                  <span className="tip-card__link">Read guide <ArrowRight /></span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PestControlTips;
