import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import useHeaderScroll from "../../../hooks/Header/useHeaderScroll";
import useMenuSelect from "../../../hooks/Header/useMenuSelect";
import LogoImg from "../../../public/Logo/Logo.svg";

const HeaderMenus = [
  { name: "홈", route: "/" },
  { name: "스터디", route: "/study" },
  { name: "사이드프로젝트", route: "/project" },
  { name: "커뮤니티", route: "/community" },
];

const Header = () => {
  const { isScrolled } = useHeaderScroll();
  const { selected, onTabClick } = useMenuSelect();

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Image src={LogoImg} alt="WayfarerLogo" />
      <Tabs>
        <MenuTabs>
          {HeaderMenus.map((el) => (
            <Link href={el.route} key={el.name}>
              <span
                className={`${el.name === selected ? "selected" : ""}`}
                onClick={() => onTabClick(el.name)}
              >
                {el.name}
              </span>
            </Link>
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
  transition: all 0.3s;

  img {
    cursor: pointer;
  }
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
    border-bottom: 3px solid #ffffff;
  }
`;

const Login = styled.div`
  color: #ffffff;
  cursor: pointer;
`;
