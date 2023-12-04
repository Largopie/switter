import { AuthWrapper, Form, GitHubBtn, Input, LogoWrapper, SubTitle, Title, Wrapper } from '../components/auth-components';



export default function Join() {
  return (
    <Wrapper>
      <LogoWrapper>
        𝕏
      </LogoWrapper>
      <AuthWrapper>
        <Title>지금 일어나고 있는 일</Title>
        <SubTitle>지금 가입하세요.</SubTitle>
        <GitHubBtn>깃허브 회원가입</GitHubBtn>
        <Form>
          <Input type='text' name='name' placeholder='name' />
          <Input type='email' name='email' placeholder='email' />
          <Input type='password' name='password' placeholder='password' />
          <Input type='submit' value='Join' />
        </Form>
      </AuthWrapper>
    </Wrapper>
  );
}
