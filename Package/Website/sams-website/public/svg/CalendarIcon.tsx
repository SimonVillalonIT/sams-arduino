import * as React from "react";
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={120}
    fill="none"
    {...props}
  >
    <path
      stroke="#01B6AD"
      strokeLinejoin="round"
      strokeWidth={9}
      d="M97.5 18.75h-75c-6.213 0-11.25 5.037-11.25 11.25v67.5c0 6.213 5.037 11.25 11.25 11.25h75c6.213 0 11.25-5.037 11.25-11.25V30c0-6.213-5.037-11.25-11.25-11.25Z"
    />
    <path
      fill="#01B6AD"
      d="M69.375 60a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM88.125 60a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM69.375 78.75a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM88.125 78.75a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM31.875 78.75a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM50.625 78.75a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM31.875 97.5a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM50.625 97.5a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25ZM69.375 97.5a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25Z"
    />
    <path
      stroke="#01B6AD"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={9}
      d="M30 11.25v7.5m60-7.5v7.5"
    />
    <path
      stroke="#01B6AD"
      strokeLinejoin="round"
      strokeWidth={9}
      d="M108.75 37.5h-97.5"
    />
  </svg>
);
export default SvgComponent;
