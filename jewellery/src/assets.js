// src/assets/icons.js
import React from "react";

export function IconArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 12H4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconPin({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-4.6 7-12a7 7 0 10-14 0c0 7.4 7 12 7 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function IconClock({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22a10 10 0 110-20 10 10 0 010 20z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconPhone({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.6v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1A19.4 19.4 0 015.5 13 19.8 19.8 0 012.4 4.2 2 2 0 014.4 2h3a2 2 0 012 1.7c.1.8.3 1.7.6 2.5a2 2 0 01-.45 2.1L8.5 9.5a16 16 0 006 6l1.2-1.1a2 2 0 012.1-.45c.8.3 1.7.5 2.5.6A2 2 0 0122 16.6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconBag({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 8h12l-1 13H7L6 8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M9 8a3 3 0 016 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconSpark({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l1.6 5.3L19 9l-5.4 1.7L12 16l-1.6-5.3L5 9l5.4-1.7L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M20 14l.8 2.7L23 18l-2.2.7L20 21l-.8-2.3L17 18l2.2-1.3L20 14z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconRing({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 7c4.4 0 8 2.9 8 6.5S16.4 20 12 20 4 17.1 4 13.5 7.6 7 12 7z" stroke="currentColor" strokeWidth="2"/>
      <path d="M9.5 6.2L12 3.5l2.5 2.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconGift({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 12v10H4V12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M22 7H2v5h20V7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 22V7" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 7H8.5C7.1 7 6 5.9 6 4.5S7.1 2 8.5 2c2.2 0 3.5 2.5 3.5 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 7h3.5C16.9 7 18 5.9 18 4.5S16.9 2 15.5 2C13.3 2 12 4.5 12 7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconPerson({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2"/>
      <path d="M4 22c1.7-4 5-6 8-6s6.3 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconMedal({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 14a5 5 0 100-10 5 5 0 000 10z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 14l-2 8 6-3 6 3-2-8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconQuote({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 11H6c0-4 2-7 6-7v3c-2 0-2 1-2 1h0c0 0 2 0 2 3z" fill="currentColor"/>
      <path d="M20 11h-4c0-4 2-7 6-7v3c-2 0-2 1-2 1h0c0 0 2 0 2 3z" fill="currentColor"/>
    </svg>
  );
}
