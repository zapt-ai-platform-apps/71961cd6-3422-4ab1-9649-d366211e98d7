import React from 'react';
import * as Sentry from '@sentry/browser';

export default function FaqsAndContact() {
  try {
    console.log("Navigated to FaqsAndContact page");
    return (
      <div className="h-full">
        <h1 className="text-xl font-bold mb-4">FAQs &amp; Contact</h1>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Q: What if I receive a PCN? A: Follow instructions on the notice and gather info.</li>
          <li>Q: Are private fines enforceable? A: They can be if properly issued.</li>
        </ul>
        <p>
          Official Resources:
          <br />
          <a
            href="https://www.gov.uk/parking-tickets"
            className="underline text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            GOV.UK Parking Tickets
          </a>
          <br />
          <a
            href="https://www.citizensadvice.org.uk/"
            className="underline text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            Citizens Advice
          </a>
        </p>
      </div>
    );
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return <div>Error loading FAQs &amp; Contact page.</div>;
  }
}