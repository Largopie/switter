import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { auth } from "../firebase";

const Button = styled.button`
  display: flex;
  gap: 8px;
  justify-content: center;
  width: 50%;
  padding: 10px 20px;
  font-size: 1.25rem;
  font-weight: 600;
  border: 1px solid #A08CDD;
  background-color: #fff;
  border-radius: 30px;
  color: #A08CDD;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    background: #C3B3F5;
    color: #fff;
  }
`
  

const Logo = styled.img`
  height: 1.25rem;
`

const Text = styled.span`
  display: flex;
  font-size: 1rem;
`

export default function GithubButton() {
  const navigate = useNavigate();

  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();

      await signInWithPopup(auth, provider);
      console.log(auth.currentUser);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Button onClick={onClick}>
      <Logo src='/github-logo.svg' />
      <Text>깃허브 로그인</Text>
    </Button>
  );
}