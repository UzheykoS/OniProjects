import React from 'react';

interface IFooterProps {}

export const Footer: React.SFC<IFooterProps> = () => {
  return (
    <>
      <div className='footer'>
        <img src='/images/icons/Oni_logo.png' />
      </div>
      <div className='socials'>
        <a target='_blank' href='https://www.facebook.com/'>
          <img className='social_network' src='images/icons/facebook.png' />
        </a>
        <a target='_blank' href='https://www.instagram.com'>
          <img className='social_network' src='images/icons/instagram.png' />
        </a>
        <a target='_blank' href='https://www.telegram.com'>
          <img className='social_network' src='images/icons/twitter.png' />
        </a>
      </div>
    </>
  );
};
