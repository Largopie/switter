import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

export const LeftWrapper = styled.div`
  height: 100%;
  max-width: 690px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d5d5d5;
`;

export const RightWrapper = styled.div`
  width: 350px;
  margin-right: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #d5d5d5;
`;
