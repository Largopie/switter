import styled from 'styled-components';
import { auth, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import { HeaderWrapper, LeftWrapper, RightWrapper, Wrapper } from '../components/page-components';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const AvatarWrapper = styled.div`
  width: 5.625rem;
  height: 5.625rem;
`;

const AvatarUpload = styled.label`
  width: 8rem;
  height: 8rem;
  margin: 0.25rem;
  top: -64px;
  left: 12px;
  border: 5px solid white;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background-color: #a08cdd;
  color: #f6f4fd;
  padding: border 2px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 80px;
  }
  &:hover {
    opacity: 0.7;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
`;

const AvatarInput = styled.input`
  display: none;
`;

const GoBackBtn = styled.span`
  width: 40px;
  margin: 4px;
  font-size: 1rem;
  border-radius: 50%;
  padding: 8px;
  &:hover {
    cursor: pointer;
    background-color: #f6f4fd;
  }
`;

const UserNameText = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  justify-content: center;
  font-weight: 700;
`;

const Background = styled.div`
  top: 0;
  height: 200px;
  background-color: #f6f4fd;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem 1rem;
  gap: 0.625rem;
  border-bottom: 1px solid #d5d5d5;
`;

const Name = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Email = styled.span`
  font-size: 1rem;
  color: #808080;
`;

export default function Profile() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const user = auth.currentUser;
  const [avatar, setAvatar] = useState('');

  const onAvatarCahnge = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!user) return;

    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(storage, `avatars/${user?.uid}`);
      const result = await uploadBytes(locationRef, file);
      const avatarUrl = await getDownloadURL(result.ref);

      setAvatar(avatarUrl);
      await updateProfile(user, {
        photoURL: avatarUrl,
      });
    }
  };

  return (
    <Wrapper>
      <LeftWrapper>
        <HeaderWrapper>
          <GoBackBtn onClick={goBack}>
            <svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
              <path
                clipRule='evenodd'
                fillRule='evenodd'
                d='M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z'
              />
            </svg>
          </GoBackBtn>
          <UserNameText>{user?.displayName ?? 'Anonymous'}</UserNameText>
        </HeaderWrapper>
        <Background />
        <AvatarWrapper>
          <AvatarUpload htmlFor='avatar'>
            {avatar ? (
              <AvatarImg src={avatar} />
            ) : (
              <svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path d='M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z' />
              </svg>
            )}
          </AvatarUpload>
          <AvatarInput onChange={onAvatarCahnge} id='avatar' type='file' accept='image/*' />
        </AvatarWrapper>
        <ProfileWrapper>
          <Name>{user?.displayName ?? 'Anonymous'}</Name>
          <Email>@{user?.email ?? 'Anonymous'}</Email>
        </ProfileWrapper>
      </LeftWrapper>
      <RightWrapper>rightWrapper</RightWrapper>
    </Wrapper>
  );
}
