import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    padding-left: 24px;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
  }
`;

export const LogoWrapper = styled.div`
  flex: 1;
  width: inherit;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30rem;
  color: #a08cdd;
  font-weight: 550;
  @media screen and (max-width: 1000px) {
    font-size: 4rem;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const AuthWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media screen and (max-width: 1000px) {
    align-items: flex-start;
  }
`;

export const Title = styled.span`
  font-size: 4rem;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: 2.625rem;
  }
`;

export const SubTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
  @media screen and (max-width: 500px) {
    font-size: 1.625rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px 20px;
  width: 288px;
  font-size: 1.25rem;
  border-radius: 30px;
  border: 2px solid #d5d5d5;
  &:focus {
    outline: none;
    border: 2px solid #c3b3f5;
  }
  &[type='submit'] {
    background-color: #a08cdd;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const GoAnotherPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const GoAnotherPageText = styled.span`
  font-size: 1.15rem;
  font-weight: 600;
`;

export const GoAnotherPageBtn = styled.button`
  width: 288px;
  color: #a08cdd;
  background-color: #fff;
  border: 1px solid #a08cdd;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    background: #c3b3f5;
    color: #fff;
  }
`;

export const Error = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: tomato;
`;
