import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Questionnaire from './pages/Questionnaire';
import CaseAssessment from './pages/CaseAssessment';
import AppealLetter from './pages/AppealLetter';
import EvidenceSubmission from './pages/EvidenceSubmission';
import FaqsAndContact from './pages/FaqsAndContact';
import ParkingChargesInfo from './pages/ParkingChargesInfo';

export default function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-slate-900">
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="flex-grow h-full p-4">
        <Routes>
          <Route path="/parking-charges-info" element={<ParkingChargesInfo />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/case-assessment" element={<CaseAssessment />} />
          <Route path="/appeal-letter" element={<AppealLetter />} />
          <Route path="/evidence-submission" element={<EvidenceSubmission />} />
          <Route path="/faqs-contact" element={<FaqsAndContact />} />
          <Route path="/" element={<ParkingChargesInfo />} />
        </Routes>
      </main>

      {/* Footer - "Made on ZAPT" badge */}
      <Footer />
    </div>
  );
}