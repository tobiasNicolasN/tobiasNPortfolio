import Link from 'next/link';
import React from 'react';

function PreviousPageButton() {
  return (
    <>
      <Link
        className="animate-fade-right animate-once animate-duration-[400ms] animate-delay-100 animate-ease-in w-8 mb-6 md:mb-8"
        href={'/'}
        aria-label="previous page button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5l-7.5-7.5 7.5-7.5M2.25 12h19.5"
          />
        </svg>
      </Link>
    </>
  );
}

export default PreviousPageButton;
