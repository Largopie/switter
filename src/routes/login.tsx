import { useNavigate } from "react-router-dom";
import { AuthWrapper, Form, GitHubBtn, GoAnotherPageBtn, GoAnotherPageText, GoAnotherPageWrapper, Input, LogoWrapper, SubTitle, Title, Wrapper } from "../components/auth-components";

export default function Login() {
  const navigate = useNavigate();

  const goJoin = () => {
    navigate('/join');
  }

  return (
    <Wrapper>
      <LogoWrapper>
        𝕏
      </LogoWrapper>
      <AuthWrapper>
        <Title>지금 일어나고 있는 일</Title>
        <SubTitle>지금 로그인하세요.</SubTitle>
        <GitHubBtn>깃허브 로그인</GitHubBtn>
        <Form>
          <Input type='email' name='email' placeholder='email' />
          <Input type='password' name='password' placeholder='password' />
          <Input type='submit' value='Log in' />
        </Form>
        <GoAnotherPageWrapper>
          <GoAnotherPageText>switter에 가입하셨나요?</GoAnotherPageText>
          <GoAnotherPageBtn onClick={goJoin}>회원가입</GoAnotherPageBtn>
        </GoAnotherPageWrapper>
      </AuthWrapper>
    </Wrapper>
  );
}
