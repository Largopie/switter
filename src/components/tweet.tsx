import styled from 'styled-components';
import { ATweet } from './timeline';
import { auth, db, storage } from '../firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

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
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const MoreWrapper = styled.div`
  display: flex;
`;

const Button = styled.button<{ color: string; hidden: boolean }>`
  width: 36px;
  height: 36px;
  border: none;
  display: ${({ hidden }) => (hidden ? 'hidden' : 'block')};
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  color: ${({ color }) => color};
  &:hover {
    color: #b09cf7;
    background-color: #eae4ff;
  }
`;

const UpdatePayload = styled.textarea`
  padding: 20px;
  border-radius: 20px;
  font-size: 1rem;
  background-color: #fff;
  width: 100%;
  resize: none;
  border: 2px solid #a08cdd;
  color: #a08cdd;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  &:focus {
    outline: none;
  }
`;

const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpdateButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

const UpdateButton = styled.span`
  margin: 4px;
  padding: 5px 10px;
  border: 2px solid #a08cdd;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    color: #b09cf7;
    background-color: #eae4ff;
  }
`;

interface updateForm {
  updateData: string;
}

export default function Tweet({ photo, tweet, userId, username, id }: ATweet) {
  const user = auth.currentUser;
  const [isUpdate, setUpdate] = useState(false);
  const { register, handleSubmit, setValue } = useForm<updateForm>({
    defaultValues: {
      updateData: tweet,
    },
  });

  const onUpdate = () => {
    setUpdate(!isUpdate);
  };

  const onSubmitUpdate: SubmitHandler<updateForm> = async (data) => {
    if (data.updateData === '' || data.updateData.length > 180) return;

    const ok = confirm('Are you update your tweet?');

    if (ok) {
      await updateDoc(doc(db, 'tweets', id), {
        tweet: data.updateData,
      });
      setUpdate(false);
    }
  };

  const cancelUpdate = () => {
    const ok = confirm('Are you cancel Update?');

    if (ok) {
      setUpdate(false);
      setValue('updateData', tweet);
    }
  };

  const onDelete = async () => {
    const ok = confirm('Are you sure you want to delete this tweet?');
    if (!ok || user?.uid !== userId) return;
    try {
      console.log('deleting');
      await deleteDoc(doc(db, 'tweets', id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          {isUpdate ? (
            <UpdateWrapper>
              <UpdatePayload {...register('updateData')} />
              <UpdateButtonWrapper>
                <UpdateButton onClick={cancelUpdate}>취소</UpdateButton>
                <UpdateButton onClick={handleSubmit(onSubmitUpdate)}>수정</UpdateButton>
              </UpdateButtonWrapper>
            </UpdateWrapper>
          ) : (
            <Payload>{tweet}</Payload>
          )}
        </PayLoadWrapper>
        <PhotoWrapper>{photo ? <Photo src={photo} /> : null}</PhotoWrapper>
      </SubWrapper>
      <MoreWrapper>
        {user?.uid === userId ? (
          <>
            <Button onClick={onUpdate} hidden={isUpdate} color='#000'>
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                />
              </svg>
            </Button>
            <Button onClick={onDelete} hidden={false} color='tomato'>
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                />
              </svg>
            </Button>
          </>
        ) : null}
      </MoreWrapper>
    </Wrapper>
  );
}
