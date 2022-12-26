import React from "react";

const MessageCircle = ({ color }: { color: string }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5 12.2198C21.5034 13.5396 21.1951 14.8416 20.6 16.0198C19.8944 17.4315 18.8098 18.6189 17.4674 19.449C16.1251 20.2791 14.5782 20.7191 13 20.7198C11.6801 20.7232 10.3781 20.4148 9.2 19.8198L3.5 21.7198L5.4 16.0198C4.80493 14.8416 4.49656 13.5396 4.5 12.2198C4.50061 10.6415 4.94061 9.09461 5.77072 7.75231C6.60083 6.41 7.78825 5.32532 9.2 4.61976C10.3781 4.02469 11.6801 3.71631 13 3.71976H13.5C15.5843 3.83475 17.553 4.71452 19.0291 6.19061C20.5052 7.66671 21.385 9.63541 21.5 11.7198V12.2198Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MessageCircle;
