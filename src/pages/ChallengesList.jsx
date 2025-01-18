import React from 'react';
import * as Sentry from '@sentry/browser';

export default function ChallengesList() {
  try {
    console.log("Navigated to ChallengesList page");
    const challenges = [
      "Poor signage or road markings",
      "Incorrect or missing details on the ticket",
      "Procedural errors by the operator",
      "Lighting or visibility issues"
    ];

    return (
      <div className="h-full">
        <h1 className="text-xl font-bold mb-4">Potential Challenges</h1>
        <ul className="list-disc list-inside space-y-2">
          {challenges.map((c, idx) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return <div>Error loading ChallengesList page.</div>;
  }
}