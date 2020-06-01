import React from 'react';
import {
  InfoSection,
  AboutImageSection,
  AboutTextSection,
  DescriptionLink,
  InfoSectionMobile,
  AboutImageSectionMobile,
  AboutTextSectionMobile,
} from './styled';
import { Typography } from '@material-ui/core';
import colors from '@constants/colors';
import { SEPARATORS } from '@utils/Helper';
import { ImageWithFallback } from '@common/ImageWithFallback';
import { IMainPageSectionProps } from '.';
import { Flex } from '@styles/styled';

export function AboutSection({ isMobile }: IMainPageSectionProps) {
  if (isMobile) {
    return (
      <InfoSectionMobile>
        <Typography variant='h3' style={{ marginBottom: '1rem' }}>
          О НАС
        </Typography>

        <Typography variant='h1' style={{ lineHeight: '30px', fontSize: 26 }}>
          Мы{' '}
          <span style={{ color: colors.secondary.gold }}>фанаты десертов</span>{' '}
        </Typography>
        <Typography variant='h1' style={{ lineHeight: '30px', fontSize: 26 }}>
          и хотим, чтобы вы
        </Typography>
        <Typography
          variant='h1'
          style={{ lineHeight: '30px', fontSize: 26, marginBottom: '1rem' }}
        >
          разделили нашу слабость
        </Typography>
        <Flex direction='column' justifyBetween>
          <AboutImageSectionMobile>
            <ImageWithFallback
              src='./images/pages/about/about_10'
              style={{ width: '460px', objectFit: 'cover' }}
            />
          </AboutImageSectionMobile>
          <AboutTextSectionMobile>
            <Typography variant='body1' style={{ marginBottom: '1rem' }}>
              Современные десерты – это больше, чем просто «что-то сладкое». Это
              – вкус, эстетика и удовольствие.
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '1rem' }}>
              Мы говорим "нет" ароматизаторам и усилителям вкуса. Главное
              правило – использовать только натуральные ингредиенты.
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              Десерты в нашей кондитерской изготавливаются вручную. За каждым
              изделием стоит ежедневная работа большой команды. Здесь все любят
              то, что делают. Вы обязательно это почувствуете.
            </Typography>
            <DescriptionLink href='/about'>
              {`${SEPARATORS.DASH} О НАС `}
            </DescriptionLink>
            <ImageWithFallback
              src={'./images/pages/about/about_8'}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                textAlign: 'center',
                paddingTop: '2rem',
              }}
            />
          </AboutTextSectionMobile>
        </Flex>
      </InfoSectionMobile>
    );
  }

  return (
    <InfoSection>
      <Typography variant='h3' style={{ marginBottom: '2rem' }}>
        О НАС
      </Typography>
      <Typography variant='h1'>
        Мы <span style={{ color: colors.secondary.gold }}>фанаты десертов</span>{' '}
        и хотим,
      </Typography>
      <Typography variant='h1'>чтобы вы разделили нашу слабость</Typography>
      <Flex direction='row' justifyBetween>
        <AboutImageSection>
          <ImageWithFallback
            src='./images/pages/about/about_12'
            style={{ width: '460px', height: '442px', objectFit: 'cover' }}
          />
        </AboutImageSection>
        <AboutTextSection>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Современные десерты – это больше, чем просто «что-то сладкое». Это –
            вкус, эстетика и удовольствие.
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Мы говорим "нет" ароматизаторам и усилителям вкуса. Главное правило
            – использовать только натуральные ингредиенты.
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Десерты в нашей кондитерской изготавливаются вручную. За каждым
            изделием стоит ежедневная работа большой команды. Здесь все любят
            то, что делают. Вы обязательно это почувствуете.
          </Typography>
          <DescriptionLink href='/about'>
            {`${SEPARATORS.DASH} О НАС `}
          </DescriptionLink>
          <ImageWithFallback
            src={'./images/pages/about/about_8'}
            style={{
              width: '380px',
              height: 'auto',
              objectFit: 'cover',
              textAlign: 'center',
              paddingTop: '2.5rem',
            }}
          />
        </AboutTextSection>
      </Flex>
    </InfoSection>
  );
}
