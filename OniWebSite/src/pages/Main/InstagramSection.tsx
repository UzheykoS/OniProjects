import React, { useEffect } from 'react';
import {
  InstagramContainer,
  InstagramDescriptionWrapper,
  DescriptionLink,
} from './styled';
import { useLoading } from '@hooks/useLoading';
import { SEPARATORS } from '@utils/Helper';
import { Typography } from '@material-ui/core';
const Instafeed = require('instafeed.js');

export function InstagramSection() {
  const { showLoading, closeLoading } = useLoading();
  useEffect(() => {
    showLoading();
    const userFeed = new Instafeed({
      get: 'user',
      userId: process.env.INSTAGRAM_USER_ID,
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
      resolution: 'standard_resolution',
      template:
        '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
      sortBy: 'most-recent',
      limit: 6,
      links: false,
      success: () => {
        closeLoading();
      },
    });
    userFeed.run();
  }, []);

  return (
    <InstagramContainer>
      <Typography variant='h3' gutterBottom>
        ИЩИ НАС В
      </Typography>
      <Typography variant='h1' gutterBottom>
        Instagram
      </Typography>

      <InstagramDescriptionWrapper>
        <Typography variant='body1' gutterBottom>
          Мы работаем в своём стиле и уверенны, что люди, которые {'\n'}
          выбирают наш продукт, знают толк в кондитерском {'\n'}
          искусстве!
        </Typography>
        <DescriptionLink target='_blank' href='https://www.instagram.com'>
          {`${SEPARATORS.DASH} В INSTAGRAM`}
        </DescriptionLink>
      </InstagramDescriptionWrapper>
      <div id='instafeed' />
    </InstagramContainer>
  );
}
