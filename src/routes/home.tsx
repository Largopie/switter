import styled from 'styled-components';
import PostTweetForm from '../components/post-tweet-form';
import Timeline from '../components/timeline';
import { LeftWrapper, RightWrapper, Wrapper } from '../components/page-components';

const HeaderWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #d5d5d5;
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
`;

export default function Home() {
  return (
    <Wrapper>
      <LeftWrapper>
        <HeaderWrapper>
          <HeaderBtn>For you</HeaderBtn>
          <HeaderBtn>Following</HeaderBtn>
        </HeaderWrapper>
        <PostTweetForm />
        <Timeline />
      </LeftWrapper>
      <RightWrapper>RightWrapper</RightWrapper>
    </Wrapper>
  );
}
