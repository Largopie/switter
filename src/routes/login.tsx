import { AuthWrapper, Form, GitHubBtn, Input, LogoWrapper, SubTitle, Title, Wrapper } from "../components/auth-components";

export default function Login() {
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
      </AuthWrapper>
    </Wrapper>
  );
}
