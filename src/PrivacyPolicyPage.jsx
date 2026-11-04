import React from 'react';
import { ShieldCheck } from 'lucide-react';
import LegalLayout from './components/LegalLayout.jsx';
import { CONTACT_EMAIL } from './siteConfig.js';

const sections = [
  {
    heading: 'Who this policy covers',
    body: (
      <>
        <p>
          This policy explains how Tescare (&ldquo;Tescare&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) handles personal information when you use this website, send us
          an enquiry, or book a pest control or bird netting service.
        </p>
        <p>
          It applies to information you give us directly and to information collected
          automatically when you browse the site. It does not cover any third-party website
          you reach by following a link from here.
        </p>
      </>
    ),
  },
  {
    heading: 'Information we collect',
    body: (
      <>
        <p>We only ask for what we need to respond to you and carry out the service.</p>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Contact details</strong> — your name, mobile number and email address.
          </li>
          <li>
            <strong>Service location</strong> — your city, area or pincode, and the property
            address once a visit is scheduled.
          </li>
          <li>
            <strong>Property and service details</strong> — property type (residential or
            commercial), layout or carpet area, the pest or service you need, and your
            preferred inspection date and time.
          </li>
          <li>
            <strong>Anything you write to us</strong> — the notes you add to an enquiry form,
            and the contents of calls, WhatsApp messages and emails.
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>
            Standard technical data sent by your browser, such as your IP address, device
            type and browser version, as part of ordinary web traffic.
          </li>
        </ul>
        <div className="legal__callout">
          <p>
            We do not ask for financial account details, government identity numbers, health
            information or any other sensitive personal data through this website. Please do
            not send them to us in an enquiry form.
          </p>
        </div>
      </>
    ),
  },
  {
    heading: 'How we use your information',
    body: (
      <>
        <p>Your information is used to:</p>
        <ul>
          <li>respond to your enquiry and answer questions about our services;</li>
          <li>prepare an estimate and schedule an inspection or treatment visit;</li>
          <li>carry out the service, including follow-up visits where these apply;</li>
          <li>keep a record of work carried out at your property;</li>
          <li>raise invoices and keep accounting records; and</li>
          <li>meet legal or regulatory obligations that apply to us.</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not share it with third parties
          for their own marketing.
        </p>
      </>
    ),
  },
  {
    heading: 'Consent and your choices',
    body: (
      <>
        <p>
          We process your information on the basis of the consent you give when you submit an
          enquiry, call us or message us, and where processing is necessary to provide a
          service you have asked for or to comply with the law.
        </p>
        <p>
          You can withdraw consent at any time by contacting us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Withdrawing consent does not
          affect anything we did lawfully beforehand, and we may still need to keep certain
          records, such as invoices, where the law requires it.
        </p>
      </>
    ),
  },
  {
    heading: 'Who we share information with',
    body: (
      <>
        <p>We share personal information only where it is necessary, and only with:</p>
        <ul>
          <li>
            <strong>Our technicians and field staff</strong>, so they can reach you and carry
            out the service at your property.
          </li>
          <li>
            <strong>Service providers who work on our behalf</strong>, such as hosting,
            communication and accounting providers, and only to the extent they need it.
          </li>
          <li>
            <strong>Authorities or advisers</strong>, where we are required to disclose
            information by law, or to establish or defend a legal claim.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Third-party services used on this site',
    body: (
      <>
        <p>
          Some parts of this website rely on services operated by other companies. When you
          use them, those companies may receive technical data such as your IP address, under
          their own privacy policies rather than ours.
        </p>
        <ul>
          <li>
            <strong>Google Maps</strong> — the map on our contact page is embedded from
            Google. Loading that page sends a request to Google.
          </li>
          <li>
            <strong>Google Fonts</strong> — typefaces used across the site are loaded from
            Google&rsquo;s servers.
          </li>
          <li>
            <strong>WhatsApp</strong> — our WhatsApp buttons open a conversation in WhatsApp,
            operated by Meta. Messages you send there are handled under WhatsApp&rsquo;s terms.
          </li>
          <li>
            <strong>Social media links</strong> — our Facebook, Instagram and YouTube links
            take you to those platforms, which run under their own policies.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Cookies and browser storage',
    body: (
      <p>
        This website does not use advertising or analytics cookies, and it does not run
        tracking pixels. The embedded Google Map may set cookies in your browser when the
        contact page loads. You can block or clear cookies in your browser settings; doing so
        may stop the map from displaying.
      </p>
    ),
  },
  {
    heading: 'How long we keep information',
    body: (
      <p>
        Enquiries that do not lead to a booking are kept only as long as needed to follow them
        up. Records relating to a completed service — including treatment history and
        invoices — are kept for as long as we need them to honour any follow-up entitlement
        and to satisfy tax and accounting requirements. After that, we delete them or remove
        anything that identifies you.
      </p>
    ),
  },
  {
    heading: 'Keeping your information secure',
    body: (
      <p>
        We take reasonable steps to protect the information you give us against loss, misuse
        and unauthorised access, and we limit access to staff who need it to do their job. No
        website or method of transmission is completely secure, so we cannot guarantee
        absolute security, but we will tell you and the relevant authority about a breach
        affecting your information where we are required to.
      </p>
    ),
  },
  {
    heading: 'Your rights',
    body: (
      <>
        <p>
          Subject to applicable Indian law, including the Digital Personal Data Protection
          Act, 2023, you may ask us to:
        </p>
        <ul>
          <li>confirm what personal information we hold about you and give you access to it;</li>
          <li>correct information that is inaccurate, incomplete or out of date;</li>
          <li>delete information we no longer need to keep;</li>
          <li>stop contacting you for service updates or offers; and</li>
          <li>nominate another person to exercise these rights on your behalf.</li>
        </ul>
        <p>
          Write to us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will
          respond within a reasonable period. We may need to verify who you are before acting
          on a request.
        </p>
      </>
    ),
  },
  {
    heading: 'Children',
    body: (
      <p>
        Our services are arranged by adults and this website is not directed at children. We
        do not knowingly collect personal information from anyone under 18. If you believe a
        child has given us their information, contact us and we will delete it.
      </p>
    ),
  },
  {
    heading: 'Changes to this policy',
    body: (
      <p>
        We may update this policy as our services or the law change. The revised version
        applies from the date it is published on this page, and the &ldquo;last updated&rdquo;
        date above will tell you when that was. Please check back from time to time.
      </p>
    ),
  },
  {
    heading: 'Contact and grievances',
    body: (
      <>
        <p>
          If you have a question about this policy, want to exercise a right, or wish to
          complain about how we have handled your information, contact us using the details
          below. We will acknowledge your grievance and work to resolve it.
        </p>
        <p>
          If you are not satisfied with our response, you may escalate the matter to the
          competent authority under applicable Indian data protection law.
        </p>
      </>
    ),
  },
];

const PrivacyPolicyPage = () => (
  <LegalLayout
    eyebrow="Legal"
    icon={ShieldCheck}
    title={
      <>
        Privacy <span className="highlight-green">Policy</span>
      </>
    }
    text="How Tescare collects, uses and protects the information you share with us."
    updated="4 November 2026"
    intro="We ask for your details so we can reach you, quote accurately and treat your property properly — nothing more. This page sets out exactly what we collect, why, who sees it and what you can ask us to do with it."
    sections={sections}
  />
);

export default PrivacyPolicyPage;
