import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Logo = styled.span`
  font-size: 4rem;
  color: #A08CDD;
`

export default function LoadingScreen() {
  return (
    <Wrapper>
      <Logo>𝕏</Logo>
    </Wrapper>
  );
}