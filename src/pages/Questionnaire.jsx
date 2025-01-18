import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';

export default function Questionnaire() {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    noticeDate: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Questionnaire form submitting...");
    setSubmitting(true);
    try {
      // Example form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Questionnaire submitted successfully!');
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <h1 className="text-xl font-bold mb-4">Questionnaire</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Notice Date:</label>
          <input 
            type="date"
            name="noticeDate"
            value={formData.noticeDate}
            onChange={handleChange}
            className="box-border w-full p-2 border border-gray-300 rounded outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Location:</label>
          <input 
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="box-border w-full p-2 border border-gray-300 rounded outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}