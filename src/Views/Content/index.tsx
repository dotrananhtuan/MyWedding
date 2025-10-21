import React from 'react';
import './content.scss';
import OurStory from './Components/OurStory';
import InvitationCard from './Components/InvitationCard';
import Location from './Components/Location';

function Content() {
  return (
    <div className=''>
      <OurStory />

      <InvitationCard />

      <Location />
    </div>
  );
}

export default Content;
