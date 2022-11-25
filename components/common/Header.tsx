import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogoImg from "../../public/Logo/Logo.svg";

const Menus = ["홈", "스터디", "사이드프로젝트", "Q&A"];

const Header = () => {
  const [selected, setSelected] = useState("홈");
  const [isScrolled, setIsScrolled] = useState(false);

  const onTabClick = (tabName: string) => {
    setSelected(tabName);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) setIsScrolled(true);
      else setIsScrolled(false);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Image src={LogoImg} alt="WayfarerLogo" />
      <Tabs>
        <MenuTabs>
          {Menus.map((el) => (
            <span
              className={`${el === selected ? "selected" : ""}`}
              key={el}
              onClick={() => onTabClick(el)}
            >
              {el}
            </span>
          ))}
        </MenuTabs>
        <Login>로그인</Login>
      </Tabs>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div<{ isScrolled: boolean }>`
  width: 100%;
  height: 100px;
  padding: 0 35.32px;
  position: fixed;
  display: flex;
  align-items: center;
  font-size: 25px;
  color: #999999;
  background-color: ${(props) =>
    props.isScrolled ? `${props.theme.colors.Cosmic_black}` : "transparent"};
  z-index: 10;
`;

const Tabs = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 75.24px;
`;

const MenuTabs = styled.div`
  span {
    cursor: pointer;
    margin-right: 80px;
  }

  .selected {
    color: #ffffff;
    font-weight: bold;
  }
`;

const Login = styled.div`
  color: #ffffff;
  cursor: pointer;
`;
