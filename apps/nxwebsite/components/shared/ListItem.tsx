import React from 'react';
export interface ListItemProps {
  number: string;
  initial_snippet: string;
  bold_snippet: string;
  last_snippet: string;
}

const ListItem = ({ number, initial_snippet, bold_snippet, last_snippet }) => {
  return (
    <>
      <a className="mb-1">
        <span className="text-red-600 w-8 h-8 mr-3 rounded-full inline-flex items-center justify-center text-2xl border-2 border-red-600 float-left">
          <Check />
        </span>
        <span className="grid">
          {initial_snippet} <strong>{bold_snippet}</strong> {last_snippet}
        </span>
      </a>
    </>
  );
};

export default ListItem;
const Check = React.memo(() => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5"></path>
  </svg>
));
