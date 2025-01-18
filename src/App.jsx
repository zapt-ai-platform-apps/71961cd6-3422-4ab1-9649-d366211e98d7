import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LegalInformation from './pages/LegalInformation';
import Questionnaire from './pages/Questionnaire';
import CaseAssessment from './pages/CaseAssessment';
import ChallengesList from './pages/ChallengesList';
import AppealLetter from './pages/AppealLetter';
import EvidenceSubmission from './pages/EvidenceSubmission';
import FaqsAndContact from './pages/FaqsAndContact';

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-900">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-grow h-full p-4">
        <Routes>
          <Route path="/legal-information" element={<LegalInformation />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/case-assessment" element={<CaseAssessment />} />
          <Route path="/challenges-list" element={<ChallengesList />} />
          <Route path="/appeal-letter" element={<AppealLetter />} />
          <Route path="/evidence-submission" element={<EvidenceSubmission />} />
          <Route path="/faqs-contact" element={<FaqsAndContact />} />
          <Route path="/" element={<LegalInformation />} />
        </Routes>
      </main>

      {/* Footer - "Made on ZAPT" badge */}
      <Footer />
    </div>
  );
}