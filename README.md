# PathPilot — AI Career Coach

A beginner-friendly career exploration web app. Users enter their degree, interests, current skills, experience level and weekly learning time. The app displays a suggested career direction, a four-step learning roadmap and focus skills.

## Run locally
1. Download and extract the project ZIP.
2. Open the `ai_career_coach` folder.
3. Double-click `index.html` to open it in a modern browser.

No installation or API key is needed.

## Files
- `index.html` — page structure and form
- `style.css` — responsive styling
- `script.js` — career matching rules, roadmap rendering and plan download

## Current functionality
- Five career tracks: AI/ML, Data Science, Web Development, Cloud Computing and Cybersecurity
- Profile form with skills and learning-time inputs
- Rule-based career recommendation and roadmap
- Downloadable text version of the plan
- Responsive mobile layout

## Important project note
This is a front-end prototype with rule-based recommendations. It does not currently use a trained AI model, validate a person's aptitude, or guarantee employment. A future version could add a backend, user accounts, saved progress, a real recommendation model and verified learning-resource links.

## Suggested next improvements
1. Add a Python Flask or FastAPI backend.
2. Store user profiles and progress in SQLite or PostgreSQL.
3. Add curated course links and project milestones.
4. Evaluate recommendations with real user feedback before describing them as AI-powered.
