import React from 'react';
import * as Sentry from '@sentry/browser';

export default function LegalInformation() {
  try {
    console.log("Navigated to LegalInformation page");
    return (
      <div className="h-full">
        <h1 className="text-xl font-bold mb-4">UK Parking Legislation</h1>
        <p className="mb-4">
          Learn about the basics of UK parking regulations, official documents, and how to understand different kinds of notices.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Difference between Penalty Charge Notice (PCN) and private parking notice</li>
          <li>Guidelines from Citizens Advice and GOV.UK</li>
          <li>Links to official resources</li>
        </ul>
      </div>
    );
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return <div>Error loading LegalInformation page.</div>;
  }
}