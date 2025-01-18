import React from 'react';
import QuestionnaireForm from '../components/QuestionnaireForm';

export default function Questionnaire() {
  return (
    <div className="h-full">
      <h1 className="text-xl font-bold mb-4">Questionnaire</h1>
      <QuestionnaireForm />
    </div>
  );
}