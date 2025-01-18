import React from 'react';

const possibleChallenges = [
  "Poor signage or unclear road markings",
  "Incorrect or missing details on the parking notice",
  "Procedural errors by the parking operator",
  "Lighting or visibility issues at the time of alleged violation",
];

export default function ChallengesList() {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Potential Challenges</h2>
      <ul className="list-disc list-inside space-y-2">
        {possibleChallenges.map((challenge, idx) => (
          <li key={idx}>{challenge}</li>
        ))}
      </ul>
      <p className="mt-2 text-sm text-gray-600">
        These challenges are suggestions based on common issues. Always review official guidelines or consult an advisor.
      </p>
    </div>
  );
}