import React from 'react';
import './content.scss';
import MyFamily from './Components/MyFamily';
import InvitationCard from './Components/InvitationCard';
import StoryContainer from './Components/StoryContainer';

function Content() {
  return (
    <div className=''>
      <MyFamily />

      <InvitationCard />

      <StoryContainer />
    </div>
  );
}

export default Content;
