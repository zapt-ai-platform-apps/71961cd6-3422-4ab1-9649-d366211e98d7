# Park Appeal UK

Park Appeal UK is a comprehensive application designed to help UK drivers better understand and potentially appeal parking fines and notices. It provides clearer guidance on parking charges, an interactive questionnaire, and tools for generating an appeal letter and submitting evidence where necessary.

Below is a list of key user journeys in recommended order. Click on each to see detailed instructions:

1. [Parking Charges Info](docs/journeys/parking-charges-info.md) - Overview of UK parking charges (council vs. private) and how the app can help.
2. [Filling Out a Questionnaire](docs/journeys/filling-out-a-questionnaire.md) - Gather essential details about the parking notice.
3. [Case Assessment & Challenges](docs/journeys/case-assessment-challenges.md) - Review likely success and explore standard challenges.
4. [Appeal Letter Creation](docs/journeys/appeal-letter-creation.md) - Generate a personalized appeal letter.
5. [Evidence Submission & Uploads](docs/journeys/evidence-submission-uploads.md) - Attach supporting documents or images.
6. [Accessing FAQs & Contact Info](docs/journeys/faqs-contact.md) - Find official resources and contact information.

---

## How to Run

1. Install dependencies:  
   npm install

2. Start the development server:  
   npm run dev

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

Please ensure the following environment variables are set in the .env file:
- COCKROACH_DB_URL
- NPM_TOKEN
- VITE_PUBLIC_APP_ID
- VITE_PUBLIC_APP_ENV
- VITE_PUBLIC_SENTRY_DSN
- VITE_PUBLIC_UMAMI_WEBSITE_ID

---