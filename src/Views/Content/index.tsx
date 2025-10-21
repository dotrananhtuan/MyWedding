import React, { useState, useEffect } from 'react';
import './content.scss';
import OurStory from './Components/OurStory';
import ImageCarousel from './Components/Image';
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
