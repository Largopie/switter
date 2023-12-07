import styled from 'styled-components';
import { ATweet } from './timeline';

const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  border-bottom: 1px solid #d5d5d5;
  &:hover {
    background-color: #f6f4fd;
  }
`;

const SubWrapper = styled.div`
  width: 80%;
  margin-left: 8px;
  margin-right: auto;
`;

const ProfileWrapper = styled.div`
  width: 40px;
`;

const ProfileImg = styled.span`
  width: 40px;
`;

const Username = styled.span`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
`;

const UsernameWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 4px;
  margin: 0 auto;
`;

const PayLoadWrapper = styled.div`
  flex: 6;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
`;

const PhotoWrapper = styled.div`
  flex: 2;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;

export default function Tweet({ photo, tweet, userId, username, id }: ATweet) {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImg>
          <svg fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
            <path
              clipRule='evenodd'
              fillRule='evenodd'
              d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
            />
          </svg>
        </ProfileImg>
      </ProfileWrapper>
      <SubWrapper>
        <UsernameWrapper>
          <Username>{username}</Username>
        </UsernameWrapper>
        <PayLoadWrapper>
          <Payload>{tweet}</Payload>
        </PayLoadWrapper>
        <PhotoWrapper>{photo ? <Photo src={photo} /> : null}</PhotoWrapper>
      </SubWrapper>
    </Wrapper>
  );
}
