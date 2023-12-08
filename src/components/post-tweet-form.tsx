import styled from 'styled-components';
import { auth, db, storage } from '../firebase';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ChangeEvent, useState } from 'react';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const Wrapper = styled.div`
  padding: 8px;
  display: flex;
  border-bottom: 1px solid #d5d5d5;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const LinkProfile = styled(Link)`
  width: 50px;
  height: 50px;
  &:hover {
    opacity: 0.7;
  }
`;

const AvatarSVGWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a08cdd;
  border-radius: 50%;
`;

const Avatar = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border-radius: 20px;
  font-size: 1.25rem;
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

const AttachFileButton = styled.label`
  cursor: pointer;
  width: 100%;
  border: 1px solid #a08cdd;
  color: #a08cdd;
  padding: 10px 0px;
  border-radius: 20px;
  font-weight: 600;
  text-align: center;
  &:hover {
    opacity: 0.7;
  }
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitButton = styled.input`
  cursor: pointer;
  width: 100%;
  background-color: #a08cdd;
  color: white;
  border-radius: 20px;
  text-align: center;
  border: none;
  padding: 10px 0px;
  font-size: 16px;
  font-weight: 600;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

type FormData = {
  tweet: string;
};

export default function PostTweetForm() {
  const user = auth.currentUser;
  const userPhotoURL = user?.photoURL;
  const [isLoading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const fileOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    
    if (files && files.length === 1) {
      const MAX_SIZE = 1024 * 1024;
      if(MAX_SIZE < files[0].size) {
        alert('The file must be no more than 1MB!');
        return;
      }
      setFile(files[0]);
    }
  }

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!user || isLoading || data.tweet.length === 0 || data.tweet.length > 180) return;

    try {
      setLoading(true);
      const doc = await addDoc(collection(db, 'tweets'), {
        tweet: data.tweet,
        createdAt: Date.now(),
        username: user.displayName || 'Anonymous',
        userId: user.uid
      })

      if (file) {
        const locationRef = ref(storage, `tweets/${user.uid}/${doc.id}`);
        const result = await uploadBytes(locationRef, file);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, {
          photo: url
        })
      }

      reset();
      setFile(null);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <AvatarWrapper>
        <LinkProfile to='/profile'>
          {userPhotoURL ? (
            <Avatar src={userPhotoURL} />
          ) : (
            <AvatarSVGWrapper>
              <svg fill='none' stroke='currentColor' strokeWidth={1.5} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </AvatarSVGWrapper>
          )}
        </LinkProfile>
      </AvatarWrapper>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextArea {...register('tweet')} required rows={5} maxLength={180} placeholder='what is happening?!' />
        <AttachFileButton htmlFor='file'>{file ? 'Photo Added ✅' : 'Add Photo'}</AttachFileButton>
        <AttachFileInput onChange={fileOnChange} type='file' id='file' accept='image/*' />
        <SubmitButton type='submit' value={isLoading ? 'Posting...' : 'Post Tweet'} />
      </Form>
    </Wrapper>
  );
}
