import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30rem;
  color: #A08CDD;
  font-weight: 550;
`;

export const AuthWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Title = styled.span`
  font-size: 4rem;
  font-weight: bold;
`;

export const SubTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const GitHubBtn = styled.button`
  width: 50%;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  background-color: #A08CDD;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  &:hover{
    opacity: 0.7;
  }
`

export const Input = styled.input`
  padding: 10px 20px;
  width: 50%;
  border-radius: 30px;
  border: 2px solid #D5D5D5;
  &:focus {
    outline: none;
    border: 2px solid #C3B3F5;
  }
  &[type="submit"] {
    background-color: #A08CDD;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    &:hover{
      opacity: 0.7;
    }
  }
`;

export const GoAnotherPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const GoAnotherPageText = styled.span`
  font-size: 1.15rem;
  font-weight: 600;
`

export const GoAnotherPageBtn = styled.button`
  width: 50%;
  color: #A08CDD;
  background-color: #fff;
  border: 1px solid #A08CDD;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    background: #C3B3F5;
    color: #fff;
  }
`

export const Error = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: tomato;  
`;