import React, { useEffect } from 'react';
import {
  InstagramContainer,
  InstagramSubtitle,
  InstagramTitle,
  InstagramDescriptionText,
  InstagramDescriptionWrapper,
  InstagramDescriptionLink,
} from './styled';
import { useLoading } from '@hooks/useLoading';
import { SEPARATORS } from '@utils/Helper';
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
      <InstagramSubtitle>Ищи нас в</InstagramSubtitle>
      <InstagramTitle>Instagram</InstagramTitle>
      <InstagramDescriptionWrapper>
        <InstagramDescriptionText>
          <p>Мы работаем в своём стиле и уверенны, что люди, которые</p>
          <p>выбирают наш продукт, знают толк в кондитерском</p>
          <p>искусстве!</p>
        </InstagramDescriptionText>
        <InstagramDescriptionLink
          target='_blank'
          href='https://www.instagram.com'
        >{`${SEPARATORS.DASH} В INSTAGRAM`}</InstagramDescriptionLink>
      </InstagramDescriptionWrapper>
      <div id='instafeed' />
    </InstagramContainer>
  );
}
