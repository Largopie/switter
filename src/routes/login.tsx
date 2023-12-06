import { useNavigate } from "react-router-dom";
import { AuthWrapper, Error, Form, GitHubBtn, GoAnotherPageBtn, GoAnotherPageText, GoAnotherPageWrapper, Input, LogoWrapper, SubTitle, Title, Wrapper } from "../components/auth-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

type FormData = {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<FormData>();

  const goJoin = () => {
    navigate('/join');
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (isLoading || data.email === '' || data.password === '') return;

    try {
      setLoading(true);
      setErrorMessage('');
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/');
    } catch (error) {
      if(error instanceof FirebaseError) setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
    
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type='email' {...register('email')} placeholder='email' required/>
          <Input type='password' {...register('password')} placeholder='password' required/>
          <Input type='submit' value={isLoading ? 'Loading...' : 'Login'} />
          {errorMessage !== '' ? <Error>{errorMessage}</Error> : null}
        </Form>
        <GoAnotherPageWrapper>
          <GoAnotherPageText>switter에 가입하셨나요?</GoAnotherPageText>
          <GoAnotherPageBtn onClick={goJoin}>회원가입</GoAnotherPageBtn>
        </GoAnotherPageWrapper>
      </AuthWrapper>
    </Wrapper>
  );
}
