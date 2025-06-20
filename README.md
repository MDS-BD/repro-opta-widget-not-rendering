# Opta Widget Next.js Example

This is a [Next.js](https://nextjs.org) project demonstrating the integration of Opta widgets.

## How to Use

- Load the home page → both widgets are displayed.
- Click **"Go to Empty Page"** → a page appears with the message: "Press browser back button".
- Press the browser back button → you return to the home page, but the widgets do not load.
- In the browser console, execute `window.Opta.start()` → the tournament tree widget remains pending, while the standings widget is displayed.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
pnpm dev
```

Open [http://dev.sportmediaset.mediaset.it:3000](http://dev.sportmediaset.mediaset.it:3000) in your browser to see the result.
