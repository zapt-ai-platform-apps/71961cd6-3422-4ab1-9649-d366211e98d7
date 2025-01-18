# Park Appeal UK (Rebuilt from scratch)

Park Appeal UK is a simple single-page React application that we are re-initializing from scratch. The original codebase has been removed, and this new, minimalist approach serves as a foundation for future development.

Below is a list of key user journeys in recommended order. (These journeys are documented in the docs/journeys folder for reference; they are not yet implemented in the new code.)

1. [Parking Charges Info](docs/journeys/parking-charges-info.md) - Overview of UK parking charges (council vs. private) and how the app can help.  
2. [Filling Out a Questionnaire](docs/journeys/filling-out-a-questionnaire.md) - Gather essential details about the parking notice.  
3. [Case Assessment & Challenges](docs/journeys/case-assessment-challenges.md) - Review likely success and explore standard challenges.  
4. [Appeal Letter Creation](docs/journeys/appeal-letter-creation.md) - Generate a personalized appeal letter.  
5. [Evidence Submission & Uploads](docs/journeys/evidence-submission-uploads.md) - Attach supporting documents or images.  
6. [Accessing FAQs & Contact Info](docs/journeys/faqs-contact.md) - Find official resources and contact information.

## How to Run

1. Install dependencies:  
   npm install

2. Start the development server:  
   npm run dev

3. View the application in your browser (typically at http://localhost:5173).

## Technical Overview of the New Setup

- Minimal React + Vite application.  
- Sentry is configured for error tracking in production.  
- Umami analytics is loaded only in production (if you set VITE_PUBLIC_UMAMI_WEBSITE_ID in .env).  
- This new project is a bare skeleton, ready for your custom logic.

## Environment Variables

Make sure the following environment variables are set in your .env file:
- VITE_PUBLIC_APP_ID
- VITE_PUBLIC_APP_ENV
- VITE_PUBLIC_SENTRY_DSN
- VITE_PUBLIC_UMAMI_WEBSITE_ID

COCKROACH_DB_URL and NPM_TOKEN remain here as originally mentioned, though not used in this minimal version. You may remove them or reuse them if you expand this app to use databases or private npm packages.

## External APIs & Services

- Sentry: Used for error tracking.  
- Umami: Anonymous analytics tracking in production.  

No other APIs are currently used. Should you add more, document them here.

---