import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between border-b border-gray-300">
      <div className="font-bold text-xl">ParkAppeal UK</div>
      <nav className="space-x-4">
        <Link to="/legal-information" className="cursor-pointer hover:underline">
          Legal Info
        </Link>
        <Link to="/questionnaire" className="cursor-pointer hover:underline">
          Questionnaire
        </Link>
        <Link to="/case-assessment" className="cursor-pointer hover:underline">
          Assessment
        </Link>
        <Link to="/challenges-list" className="cursor-pointer hover:underline">
          Challenges
        </Link>
        <Link to="/appeal-letter" className="cursor-pointer hover:underline">
          Appeal Letter
        </Link>
        <Link to="/evidence-submission" className="cursor-pointer hover:underline">
          Evidence
        </Link>
        <Link to="/faqs-contact" className="cursor-pointer hover:underline">
          FAQs &amp; Contact
        </Link>
      </nav>
    </header>
  );
}