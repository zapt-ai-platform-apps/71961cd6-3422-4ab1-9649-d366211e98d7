import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function AppealLetter() {
  const [letterText, setLetterText] = useState(`
[Your Name]
[Address]
[Date]

Re: Parking Charge Notice
To whom it may concern,

I am writing to formally appeal the above parking notice...
`);

  const handleExport = () => {
    console.log("Exporting appeal letter");
    alert("Appeal letter text copied or exported!");
  };

  try {
    return (
      <div className="h-full">
        <h1 className="text-xl font-bold mb-4">Appeal Letter</h1>
        <textarea
          className="box-border w-full h-64 p-2 border border-gray-300 rounded mb-4 focus:border-blue-500"
          value={letterText}
          onChange={(e) => setLetterText(e.target.value)}
        />
        <br />
        <button
          className="cursor-pointer px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
          onClick={handleExport}
        >
          Export Letter
        </button>
      </div>
    );
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return <div>Error loading AppealLetter page.</div>;
  }
}