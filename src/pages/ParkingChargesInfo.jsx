import React from 'react';
import * as Sentry from '@sentry/browser';

export default function ParkingChargesInfo() {
  try {
    console.log("Navigated to ParkingChargesInfo page");
    return (
      <div className="h-full">
        <h1 className="text-xl font-bold mb-4">Parking Charges in the UK</h1>
        <p className="mb-4">
          In the UK, there are generally two types of parking charges:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Council-issued Penalty Charge Notices (PCNs):</strong> Official enforcement notices issued by local authorities under specific legislation like the Traffic Management Act 2004.</li>
          <li><strong>Private Parking Notices:</strong> Issued by private parking operators on private land, often enforced under contract law and the Protection of Freedoms Act 2012.</li>
        </ul>
        <p className="mb-4">
          This app helps you gather crucial details about your situation, explore common challenges, and potentially craft an appeal letter. While it cannot guarantee the outcome, it streamlines the steps you can take.
        </p>
        <p className="text-sm text-gray-600">
          Always verify your specific ticket type and consult official resources or professional advice for more detailed guidance.
        </p>
      </div>
    );
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return <div>Error loading ParkingChargesInfo page.</div>;
  }
}