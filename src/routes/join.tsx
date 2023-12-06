import { useNavigate } from 'react-router-dom';
import {
  AuthWrapper,
  Error,
  Form,
  GitHubBtn,
  GoAnotherPageBtn,
  GoAnotherPageText,
  GoAnotherPageWrapper,
  Input,
  LogoWrapper,
  SubTitle,
  Title,
  Wrapper,
} from '../components/auth-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { FirebaseError } from 'firebase/app';

type FormData = {
  name: string
  email: string
  password: string
}

export default function Join() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit } = useForm<FormData>();

  const goLogin = () => {
    navigate('/login');
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if(isLoading || data.name === '' || data.email === '' || data.password === '') return;

    try {
      setErrorMessage('');
      setLoading(true);
      const credential = await createUserWithEmailAndPassword(auth, data.email, data.password);

      await updateProfile(credential.user, {displayName: data.name});
      navigate('/');
    } catch (error) {
      if(error instanceof FirebaseError) setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <LogoWrapper>𝕏</LogoWrapper>
      <AuthWrapper>
        <Title>지금 일어나고 있는 일</Title>
        <SubTitle>지금 가입하세요.</SubTitle>
        <GitHubBtn>깃허브 회원가입</GitHubBtn>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input required type='text' {...register('name')} placeholder='name' />
          <Input required type='email' {...register('email')} placeholder='email' />
          <Input required type='password' {...register('password')} placeholder='password' />
          <Input type='submit' value={isLoading ? 'Loading...' : 'Join'} />
          {errorMessage !== '' ? <Error>{errorMessage}</Error> : null}
        </Form>
        <GoAnotherPageWrapper>
          <GoAnotherPageText>이미 switter에 가입하셨나요?</GoAnotherPageText>
          <GoAnotherPageBtn onClick={goLogin}>로그인</GoAnotherPageBtn>
        </GoAnotherPageWrapper>
      </AuthWrapper>
    </Wrapper>
  );
}
