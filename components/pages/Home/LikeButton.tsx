import React from "react";

const LikeButton = ({ like }: { like: boolean }) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.4559 8.26139C36.5408 7.34586 35.4543 6.61959 34.2584 6.12408C33.0625 5.62857 31.7808 5.37354 30.4863 5.37354C29.1919 5.37354 27.9101 5.62857 26.7142 6.12408C25.5184 6.61959 24.4318 7.34586 23.5167 8.26139L21.6176 10.1606L19.7184 8.26139C17.8699 6.41294 15.3629 5.37449 12.7488 5.37449C10.1347 5.37449 7.62768 6.41294 5.77923 8.26139C3.93078 10.1098 2.89233 12.6169 2.89233 15.231C2.89233 17.8451 3.93078 20.3521 5.77923 22.2006L7.6784 24.0997L21.6176 38.0389L35.5567 24.0997L37.4559 22.2006C38.3714 21.2855 39.0977 20.1989 39.5932 19.0031C40.0887 17.8072 40.3438 16.5254 40.3438 15.231C40.3438 13.9365 40.0887 12.6547 39.5932 11.4589C39.0977 10.263 38.3714 9.17649 37.4559 8.26139Z"
        fill={like ? "#FF0099" : "#8F92A3"}
      />
    </svg>
  );
};

export default LikeButton;