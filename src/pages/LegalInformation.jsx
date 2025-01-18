import React from 'react';
import * as Sentry from '@sentry/browser';

export default function LegalInformation() {
  try {
    console.log("Navigated to LegalInformation page");
    return (
      <div className="h-full">
        <h1 className="text-xl font-bold mb-4">UK Parking Legislation &amp; Guidance</h1>
        <p className="mb-4">
          The UK has multiple types of parking notices, each governed by different laws and bodies. Understanding which notice applies to you is crucial when appealing or paying. Below is a summary of key laws and resources.
        </p>
        <h2 className="text-lg font-semibold mb-2">Key Legislation</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Traffic Management Act 2004 – Governs how local authorities issue and enforce Penalty Charge Notices (PCNs).</li>
          <li>Road Traffic Regulation Act 1984 – Covers parking offences, road signage, and restrictions.</li>
          <li>Protection of Freedoms Act 2012 – Relevant to private parking enforcement and keeper liability.</li>
        </ul>
        <p className="mb-4">
          It's important to identify whether your ticket is from a council (official PCN) or a private operator (Parking Charge Notice). Each follows different procedures and guidelines.
        </p>
        <p className="mb-4">
          For official guidance, visit:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.gov.uk/parking-tickets" target="_blank" rel="noreferrer" className="underline text-blue-600">GOV.UK Parking Tickets</a></li>
          <li><a href="https://www.citizensadvice.org.uk/" target="_blank" rel="noreferrer" className="underline text-blue-600">Citizens Advice</a></li>
        </ul>
        <p className="mt-4">
          Consult a legal advisor for specific concerns or if you need deeper clarification.
        </p>
      </div>
    );
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return <div>Error loading LegalInformation page.</div>;
  }
}