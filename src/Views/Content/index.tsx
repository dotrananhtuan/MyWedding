import React from 'react';
import './content.scss';
import MyFamily from './Components/MyFamily';
import InvitationCard from './Components/InvitationCard';

function Content() {
  return (
    <div className=''>
      <MyFamily />

      <InvitationCard />
    </div>
  );
}

export default Content;
