import React, { useEffect, useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function CaseAssessment() {
  const [likelihood, setLikelihood] = useState(null);

  useEffect(() => {
    console.log("Navigated to CaseAssessment page");
    try {
      // Example: simulate an assessment
      setLikelihood('Medium');
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    }
  }, []);

  return (
    <div className="h-full">
      <h1 className="text-xl font-bold mb-4">Case Assessment</h1>
      <p className="mb-2">
        Based on the data provided, your likelihood of a successful appeal is: <strong>{likelihood}</strong>
      </p>
      <p className="text-sm text-gray-700">This is just advisory. Always double-check official resources.</p>
    </div>
  );
}