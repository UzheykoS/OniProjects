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
          Каждый день <span style={{ color: colors.secondary.gold }}>мы</span>{' '}
        </Typography>
        <Typography
          variant='h1'
          style={{ lineHeight: '30px', fontSize: 26, marginBottom: '1rem' }}
        >
          <span style={{ color: colors.secondary.gold }}>создаём</span> десерты,
          {'\n'}которые вдохновляют!
        </Typography>
        <Flex direction='column' justifyBetween>
          <AboutImageSectionMobile>
            <ImageWithFallback
              src='./images/pages/about/about_3'
              style={{ width: '460px', height: '442px', objectFit: 'cover' }}
            />
          </AboutImageSectionMobile>
          <AboutTextSectionMobile>
            <Typography variant='body1' style={{ marginBottom: '1rem' }}>
              Наша главная цель – показать, что современное кондитерское
              искусство – это больше, чем просто «что-то сладкое». Это –
              интересные сочетания вкусов и текстур, натуральные ингредиенты
              высокого качества, авторские рецептуры и внимание к деталям.{' '}
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '1rem' }}>
              Все десерты в нашей кондитерской изготавливаются вручную. За
              каждым изделием стоят десятки теоретических и практических
              мастер-классов. Мы перенимаем опыт ведущих шефов мира и получаем
              знания из первых рук, чтобы привезти всё самое лучшее в Украину.{' '}
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              Для нас идеальный десерт – это 100% натуральный состав, честный
              вкус и современная подача. Мы работаем в своем стиле и уверенны,
              что люди, которые выбирают наш продукт, знают толк в кондитерском
              искусстве!
            </Typography>
            <DescriptionLink href='/about'>
              {`${SEPARATORS.DASH} О НАС `}
            </DescriptionLink>
            <ImageWithFallback
              src={'./images/pages/about/about_2'}
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
        Каждый день{' '}
        <span style={{ color: colors.secondary.gold }}>мы создаём</span>
      </Typography>
      <Typography
        variant='h1'
        style={{ lineHeight: '1.2rem', marginBottom: '3rem' }}
      >
        десерты, которые вдохновляют!
      </Typography>
      <Flex direction='row' justifyBetween>
        <AboutImageSection>
          <ImageWithFallback
            src='./images/pages/about/about_3'
            style={{ width: '460px', height: '442px', objectFit: 'cover' }}
          />
        </AboutImageSection>
        <AboutTextSection>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Наша главная цель – показать, что современное кондитерское искусство
            – это больше, чем просто «что-то сладкое». Это – интересные
            сочетания вкусов и текстур, натуральные ингредиенты высокого
            качества, авторские рецептуры и внимание к деталям.{' '}
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Все десерты в нашей кондитерской изготавливаются вручную. За каждым
            изделием стоят десятки теоретических и практических мастер-классов.
            Мы перенимаем опыт ведущих шефов мира и получаем знания из первых
            рук, чтобы привезти всё самое лучшее в Украину.{' '}
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Для нас идеальный десерт – это 100% натуральный состав, честный вкус
            и современная подача. Мы работаем в своем стиле и уверенны, что
            люди, которые выбирают наш продукт, знают толк в кондитерском
            искусстве!
          </Typography>
          <DescriptionLink href='/about'>
            {`${SEPARATORS.DASH} О НАС `}
          </DescriptionLink>
          <ImageWithFallback
            src={'./images/pages/about/about_2'}
            style={{
              width: '380px',
              height: '275px',
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
