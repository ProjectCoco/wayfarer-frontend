import React from "react";
import styled from "styled-components";
import CommuntiyPost from "./CommuntiyPost";
import PostSortFilter from "./PostSortFilter";

const communityPostData = [
  {
    nickName: "JENO",
    occupation: "디자인",
    title: "IT 업계 디자인 톺아보기 세미나 시작합니다",
    content:
      "안녕하세요! 요새 제 회사 메이킹 과정을 메이커 로그로 글을 올려야 하는데 이런 저런일이 너무 많이 일어나다 보니 정신이 없네요 ㅜ_ㅜ ...",
    like: 4,
    comment: ["...", "...", "...", "..."],
    createdAt: "12초 전",
    id: 3,
  },
  {
    nickName: "개발천재",
    occupation: "개발",
    title: "angular js 변수 할당 질문드립니다.",
    content:
      "service.getlistranking 에서 데이터 제대로 가져왔는데 아래 toursum에서 데이터를 가공하려고 하는데 undefined가 뜹니다. 통신중에 콘솔을 찍어서 안나오는걸까요.. 이거때매 다른데이터도 가공하기가 힘듭니다 ㅜ ...",
    like: 4,
    comment: ["...", "...", "...", "..."],
    createdAt: "12초 전",
    id: 2,
  },
  {
    nickName: "개발자1",
    occupation: "개발",
    title: "key 값 없는 json 질문드립니다.",
    content: `데이터가 [["가나다",1,"ABC"],["마바사",9,"DEF"].....] 형식으로 넘어옵니다. 구글링해서 Object obj = parser.parse(Str);
      JSONArray jsonArr = (JSONArray)obj; ...`,
    like: 4,
    comment: ["...", "...", "...", "..."],
    createdAt: "13초 전",
    id: 1,
  },
  {
    nickName: "기획자입니다.",
    occupation: "기획",
    title: "[북클럽28] 성공하는 스타트업을 위한 101가지 비즈니스 모델 이야기",
    content:
      "대표적인 프리미엄(Freemium) 모델로 파일 동기화와 클라우드 컴퓨팅을 이용한 웹 기반의 파일 공유 서비스를 제공한다. Freemium은 free와 premium이 결합된 말로,  기본적인 상품과 서비스를 무료로 제공한 후, 충분한 사용자 기반이 확보되었을 때 제품의 일부 기능이나 콘텐츠등을 유료화하여 수익을 창출하는 비즈니스 모델이다.",
    like: 4,
    comment: ["...", "...", "...", "..."],
    createdAt: "20초 전",
    id: 0,
  },
];

const CommunityPosts = () => {
  return (
    <CommunityPostsContainer>
      <HeaderConatiner>
        <h2>새로 올라온 추천글을 둘러보세요!</h2>
        <PostSortFilter />
      </HeaderConatiner>
      {communityPostData.map((data) => (
        <CommuntiyPost key={data.id} data={data} />
      ))}
    </CommunityPostsContainer>
  );
};

export default CommunityPosts;

const CommunityPostsContainer = styled.div`
  width: 100%;
`;

const HeaderConatiner = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: ${(props) => props.theme.fontSize.text_5xl};
    font-weight: 600;
  }
`;
