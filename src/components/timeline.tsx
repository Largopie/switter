import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import styled from 'styled-components';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { Unsubscribe } from 'firebase/auth';
import Tweet from './tweet';

export interface ATweet {
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
  createdAt: string;
  id: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export default function Timeline() {
  const [tweets, setTweets] = useState<ATweet[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchTweets = async () => {
      const tweetQuery = query(collection(db, 'tweets'), orderBy('createdAt', 'desc'), limit(25));
  
      unsubscribe = await onSnapshot(tweetQuery, (snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          const { photo, tweet, userId, username, createdAt } = doc.data();
          return { tweet, createdAt, userId, username, photo, id: doc.id };
        });
        setTweets(tweets);
      });
    };
    fetchTweets();
    return () => {
      unsubscribe && unsubscribe();
    }
  }, []);

  return <Wrapper>{tweets.map((tweet) => <Tweet {...tweet} />)}</Wrapper>;
}
