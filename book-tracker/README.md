# Book Tracker CRUD App

A full‑stack **Create – Read – Update – Delete** application with **React** on the front‑end and **Node + Express** on the back‑end.

## Project structure

```
book-tracker/
├── server/          # Express API (port 5000)
│   ├── server.js
│   └── package.json
└── client/          # React front‑end (port 3000)
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── BookForm.jsx
    │   │   └── BookList.jsx
    │   ├── App.jsx
    │   ├── App.css
    │   └── index.js
    └── package.json
```

## Prerequisites

* **Node.js** ≥ 18
* npm (comes with Node)

## Getting started

1. Unzip or clone this folder.
2. Open **two** terminals.

**Back‑end**

```bash
cd book-tracker/server
npm install
npm start      # serves on http://localhost:5000
```

**Front‑end**

```bash
cd book-tracker/client
npm install
npm start      # opens http://localhost:3000
```

Because the React dev server is configured with `"proxy": "http://localhost:5000"`, API calls to `/api/*` are forwarded to the Express server, so CORS is invisible while developing.

## How it works

* **Express** keeps an in‑memory `books` array (no database to keep the demo lightweight).
* Each book has `{ id, title, author, status }`.
* **React** fetches `/api/books`, displays them, and offers forms/buttons to POST, PUT, and DELETE.
* State updates are reflected instantly thanks to React hooks (`useState`, `useEffect`).

### Extending

* Swap the in‑memory array for MongoDB or Postgres, e.g. with Mongoose.
* Add authentication, pagination, or a search bar.
* Deploy the back‑end on Render/Fly.io and the front‑end on Netlify/Vercel.

---

Built with ❤️ as an example of the CRUD pattern.
