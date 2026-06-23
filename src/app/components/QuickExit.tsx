'use client';

// Safety feature: lets a visitor leave the site instantly. Replaces the
// current history entry so the page does not show up when pressing Back,
// then sends the browser to a neutral site. Also wired to the Esc key.
import { useEffect } from 'react';

const SAFE_URL = 'https://www.weather.com';

function leave() {
  try {
    window.location.replace(SAFE_URL);
  } catch {
    window.location.href = SAFE_URL;
  }
}

export default function QuickExit() {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') leave();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <button
      type="button"
      onClick={leave}
      aria-label="Quickly leave this site"
      className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:bg-ink-soft"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-3.5 w-3.5"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
      Quick exit
    </button>
  );
}
