import React, { useState } from "react";
import styled from "styled-components";

const HeaderMenu = ["홈", "스터디", "사이드프로젝트", "Q&A"];

const Header = () => {
  const [selected, setSelected] = useState<string | null>("홈");

  const onTabClick = (tabName: string) => {
    setSelected(tabName);
  };

  return (
    <HeaderContainer>
      <InnerContainer>
        <Logo />
        <div className="menus">
          {HeaderMenu.map((el) => (
            <span
              className={`menu${el === selected ? " selected" : ""}`}
              key={el}
              onClick={() => onTabClick(el)}
            >
              {el}
            </span>
          ))}
        </div>
        <div className="member-menu">
          <span className="signup">회원가입/로그인</span>
        </div>
      </InnerContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 500;

  span {
    cursor: pointer;
  }

  .menus {
    margin-right: 105px;
  }

  .menu {
    margin-right: 36px;
    color: ${({ theme }) => theme.colors.gray_400};
  }

  .member-menu {
    color: ${({ theme }) => theme.colors.gray_600};
  }

  .signup {
    margin-right: 30px;
    font-size: 20px;
  }

  .selected {
    color: #000000;
    border-bottom: 2px solid ${({ theme }) => theme.colors.Blue};
  }
`;

const Logo = styled.div`
  width: 220px;
  height: 60px;
  background-color: lightgray;
`;
