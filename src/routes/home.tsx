import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import Timeline from "../components/timeline";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const LeftWrapper = styled.div`
  flex: 1.5;
  height: 100%;
  max-width: 690px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #D5D5D5;
`;

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px){
    display: none;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #D5D5D5;
`;

const HeaderBtn = styled.span`
  flex: 1;
  display: flex;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  cursor: pointer;
  &:hover {
    background-color: #f6f4fd;
  }
`

export default function Home() {
  return <Wrapper>
    <LeftWrapper>
      <HeaderWrapper>
        <HeaderBtn>For you</HeaderBtn>
        <HeaderBtn>Following</HeaderBtn>
      </HeaderWrapper>
      <PostTweetForm />
      <Timeline />
    </LeftWrapper>
    <RightWrapper>
      RightWrapper
    </RightWrapper>
  </Wrapper>;
}
