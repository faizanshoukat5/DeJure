# DeJure — Law & Consulting (React Frontend)

This repository contains the React frontend for DeJure — a law and consulting website. It was rebuilt as a lightweight, editable template that mirrors the public-facing content and structure of the firm's marketing site.

## Repository layout

- `client/` — React application (this is the working app).
	- `public/` — static assets served by the app.
	- `src/` — React source files (components, pages, styles, data).
	- `scripts/` — utility scripts (scrapers, download helpers).

## Quick start (Windows / PowerShell)

1. Install dependencies (from the `client` folder):

```powershell
cd client
npm install
```

2. Start the development server:

```powershell
npm start
```

3. Open a browser at `http://localhost:3000`.

## Useful npm scripts (run from `client/`)

- `npm start` — run the dev server
- `npm run build` — create a production build
- `npm test` — run tests (create-react-app defaults)
- `npm run fetch:people` — attempt to parse the old site and generate `src/data/people.json` (requires `axios`, `cheerio`)
- `npm run download:images` — attempt to fetch team images found on the old site into `public/assets/people`

## Environment

If you use EmailJS or any third-party services, add environment variables in the project root `.env` file (Create React App requires `REACT_APP_` prefix). Example:

```powershell
# client/.env
REACT_APP_EMAILJS_PUBLIC_KEY=public_xxx
REACT_APP_EMAILJS_USER_ID=user_xxx
```

Restart the dev server after changing `.env`.

## People page and scraping

This project includes a small scraper (`client/scripts/fetch-people.js`) to extract team bios/images from the legacy site. Running it may require installing `axios` and `cheerio` if not already present.

Note: scraping remote websites should be done only for content you own or have permission to copy.

## Contributing

1. Create a feature branch: `git checkout -b feat/my-change`
2. Make changes and commit.
3. Push and open a pull request.

## License & notes

This repository is a copy of the firm's marketing frontend for internal use. Make sure you have the legal right to host any content you copy from other sites.

If you want, I can also add a `CONTRIBUTING.md`, tests, or a GitHub Action for automated linting and build on push.

