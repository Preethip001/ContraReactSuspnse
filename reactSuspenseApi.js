/**
 * In this short assessment, the following code tries to implement the React Suspense API,
 * but does so incorrectly. There are 3 core issues with how these components utilize Suspense and concurrent mode -- can you find them?
 * 
 * In your submission, be sure to:
 * 1) Clearly identify what the 3 core issues are, and how they violate the principles of React Suspense;
 * 2) Write and submit the code to fix the core issues you have identified in a gist of your own
 * 
 * If you aren't familiar with Suspense, the docs are a good starting place:
 * 
 * https://reactjs.org/docs/concurrent-mode-intro.html
 * 
 * We rate each answer by comparing the submitted answer to how we would write the same code in production at Contra.
 * You are guaranteed an interview if your code ticks all the boxes. Good luck!
 */

import { Suspense, useState, useEffect } from 'react';


//userId is passed to the UserProfile component where the data is fetched
//fallback component to be included
const SuspensefulUserProfile = ({ userId }) => {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <UserProfile userId={userId} />
    </Suspense>
  );
};
const UserProfile = ({ userId }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchUserProfile(userId).then((profile) => setData(profile));
  }, [])
  //userId and setData cannot go into useEffect variables array
  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </>
  );
};
const UserProfileList = () => (
  <>
    <SuspensefulUserProfile userId={1} />
    <SuspensefulUserProfile userId={2} />
    <SuspensefulUserProfile userId={3} />
  </>
);

---------------------------------

