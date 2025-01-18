# ParkAppeal UK

ParkAppeal UK is a comprehensive application designed to help UK drivers better understand and potentially appeal parking fines and notices. It provides legal information, an interactive step-by-step questionnaire, and tools for generating an appeal letter and submitting evidence where necessary.

Below is a list of key user journeys in recommended order. Click on each to see detailed instructions:

1. [Legal Information Module](docs/journeys/legal-information-module.md) - Overview of UK parking legislation and official resources.
2. [Filling Out a Questionnaire](docs/journeys/filling-out-a-questionnaire.md) - Gather essential details about the parking notice.
3. [Case Assessment & Challenges](docs/journeys/case-assessment-challenges.md) - Review likely success and explore standard challenges.
4. [Appeal Letter Creation](docs/journeys/appeal-letter-creation.md) - Generate a personalized appeal letter.
5. [Evidence Submission & Uploads](docs/journeys/evidence-submission-uploads.md) - Attach supporting documents or images.
6. [Accessing FAQs & Contact Info](docs/journeys/faqs-contact.md) - Find official resources and contact information.

---

## How to Run

1. Install dependencies:  
   ```bash
   npm install
   ```
2. Start the development server:  
   ```bash
   npm run dev
   ```
3. View the application in your browser at http://localhost:5173 (or the provided local address).

---

## Technical Overview

- Built with React, Vite, and Tailwind CSS.  
- Routing handled by react-router-dom for multiple pages.  
- Sentry is integrated for error logging (frontend).  
- Umami is used for analytics (production environment).  
- PWA support via Progressier (service worker added in public/progressier.js).  

### External APIs & Services

- Sentry: Error tracking and monitoring.  
- Umami: Anonymous analytics tracking.  
- Progressier: PWA service worker and offline caching.  

No other external APIs are used at this time.

---