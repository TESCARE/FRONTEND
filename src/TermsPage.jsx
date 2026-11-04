import React from 'react';
import { ScrollText } from 'lucide-react';
import LegalLayout from './components/LegalLayout.jsx';
import { CONTACT_EMAIL } from './siteConfig.js';

const sections = [
  {
    heading: 'About these terms',
    body: (
      <>
        <p>
          These terms apply when you use this website and when you book a pest control or
          bird netting service from Tescare (&ldquo;Tescare&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;). By making an enquiry or confirming a booking, you accept them.
        </p>
        <p>
          Where we give you a written quotation, work order or invoice for a specific job,
          the terms set out in that document apply to that job alongside these terms, and
          take precedence if the two differ.
        </p>
      </>
    ),
  },
  {
    heading: 'The services we provide',
    body: (
      <>
        <p>
          We provide pest management and bird netting services for residential and commercial
          premises, including cockroach, termite, mosquito, rodent, bedbug and wood borer
          treatments, and the supply and installation of bird netting.
        </p>
        <p>
          The scope of any particular job — what is treated, which method is used and what is
          excluded — is agreed with you before work begins and recorded on your quotation or
          work order.
        </p>
      </>
    ),
  },
  {
    heading: 'Estimates and pricing',
    body: (
      <>
        <p>
          The rate calculator on this website produces an{' '}
          <strong>indicative estimate only</strong>. It is generated from the property type
          and size you select and is not a quotation, an offer or a binding price.
        </p>
        <ul>
          <li>
            Prices shown are <strong>exclusive of GST</strong> unless stated otherwise.
          </li>
          <li>
            A firm price is given only after a site inspection, because the severity of an
            infestation, the condition of the property and the access available all affect
            the work required.
          </li>
          <li>
            If the work needed changes once we are on site, we will tell you and agree any
            revised price with you before continuing.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Bookings, rescheduling and cancellation',
    body: (
      <>
        <p>
          A booking is confirmed once we have agreed a date and time with you. Appointment
          slots are indicative and may shift on the day due to traffic, weather or an earlier
          job overrunning; we will let you know if we are delayed.
        </p>
        <ul>
          <li>
            Please give us as much notice as you can if you need to reschedule or cancel.
          </li>
          <li>
            If our technician cannot access the property at the agreed time, we may need to
            charge for the visit and rebook.
          </li>
          <li>
            We may reschedule where conditions make treatment unsafe or ineffective, such as
            heavy rain for outdoor work.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'What we need from you',
    body: (
      <>
        <p>
          Treatment works properly only if the property is prepared. Before our visit, please:
        </p>
        <ul>
          <li>give our technician safe access to the areas to be treated;</li>
          <li>
            tell us in advance about children, elderly or unwell occupants, pregnant women,
            pets, fish tanks or birds at the property, and about any allergies or sensitivities;
          </li>
          <li>
            cover or move food, utensils and personal items away from the areas being treated;
            and
          </li>
          <li>tell us about any prior treatment carried out by someone else.</li>
        </ul>
        <p>
          After treatment, please follow the instructions our technician gives you, including
          any period to stay out of a treated area and any advice on cleaning. Treatment
          results can be affected if those instructions are not followed.
        </p>
      </>
    ),
  },
  {
    heading: 'Safety and materials',
    body: (
      <p>
        Our technicians apply products according to the manufacturer&rsquo;s label and the
        applicable regulations. If you would like details of the products being used at your
        property, ask the technician or contact us and we will provide them.
      </p>
    ),
  },
  {
    heading: 'Follow-up visits and service cover',
    body: (
      <>
        <p>
          Where a job includes follow-up visits, re-treatment or a service period, the exact
          entitlement, its duration and anything excluded from it are stated on your
          quotation, work order or invoice for that job.
        </p>
        <div className="legal__callout">
          <p>
            Service cover applies to the specific areas treated and to the pest covered by
            that job. It does not extend to a new infestation caused by factors outside the
            treatment, such as structural gaps left unrepaired, untreated neighbouring
            premises, or instructions not being followed.
          </p>
        </div>
      </>
    ),
  },
  {
    heading: 'Payment',
    body: (
      <p>
        Payment terms, accepted payment methods and any advance payable are set out on your
        quotation or invoice. Invoices are payable by the due date shown. Where a job is
        carried out in stages, we may invoice for each stage as it is completed.
      </p>
    ),
  },
  {
    heading: 'Liability',
    body: (
      <>
        <p>
          We carry out our work with reasonable care and skill. We are responsible for loss or
          damage we cause by failing to do so.
        </p>
        <ul>
          <li>
            We are not responsible for pre-existing damage, or for damage arising from the
            condition of the property that was not disclosed to us.
          </li>
          <li>
            We are not responsible for loss you could have avoided by following the
            instructions given to you, or by telling us about occupants, pets or sensitivities
            as asked above.
          </li>
          <li>
            Nothing in these terms limits any liability that cannot be limited under Indian
            law, including under the Consumer Protection Act, 2019.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Use of this website',
    body: (
      <>
        <p>
          You may use this website to learn about our services and to contact us. Please do
          not attempt to disrupt the site, access it by automated means, or use it in a way
          that breaks the law.
        </p>
        <p>
          The text, images, branding and layout on this site belong to Tescare or are used
          with permission, and may not be copied or reused without our consent. Links to other
          websites are provided for convenience; we are not responsible for their content.
        </p>
      </>
    ),
  },
  {
    heading: 'Changes to these terms',
    body: (
      <p>
        We may revise these terms from time to time. The version published on this page when
        you make a booking is the version that applies to that booking.
      </p>
    ),
  },
  {
    heading: 'Governing law and disputes',
    body: (
      <>
        <p>
          These terms are governed by the laws of India, and the courts at Chennai, Tamil
          Nadu have jurisdiction over any dispute arising from them.
        </p>
        <p>
          If something has gone wrong, please contact us first at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> — most issues are resolved
          quickly once we know about them.
        </p>
      </>
    ),
  },
];

const TermsPage = () => (
  <LegalLayout
    eyebrow="Legal"
    icon={ScrollText}
    title={
      <>
        Terms of <span className="highlight-green">Service</span>
      </>
    }
    text="The terms that apply when you use this website or book a service with Tescare."
    updated="4 November 2026"
    intro="These terms set out what you can expect from us, what we need from you, and how pricing, scheduling and service cover work. They are written to be read, not to be skimmed past."
    sections={sections}
  />
);

export default TermsPage;
