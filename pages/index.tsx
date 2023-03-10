import { atom } from "jotai";
import { useAtom } from "jotai/react";
import type { NextPage } from "next";
import styled from "styled-components";

const productAtom = atom({ id: 12, name: "good stuff" });

const Home: NextPage = () => {
  const [product, setProduct] = useAtom(productAtom);
  return (
    <HomeContainer>
      <div>{product.name}</div>
      <button
        onClick={() => {
          setProduct((prev) => ({ ...prev, name: "good day" }));
        }}
      >
        체인지 아톰
      </button>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const BigCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
  margin-top: 68.23px;
  gap: 193.22px;
`;

const SmallCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
`;
