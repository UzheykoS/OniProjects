import React from 'react';
import {
  AboutMainSection,
  AboutTopSection,
  AboutBottomSection,
  AboutLeftSection,
  AboutRightSection,
  AboutTextSection,
  ContactUsSection,
  Contacts,
  TextWrapper,
  IconWrapper,
  QuotesContainer,
  Quotes,
} from './styled';
import { Typography } from '@material-ui/core';
import { ImageWithFallback } from '@common/ImageWithFallback';
import colors from '@constants/colors';
import PhoneIcon from '@icons/phone.svg';
import EnvelopeIcon from '@icons/envelope.svg';
import { useHistory } from 'react-router-dom';
import { Button } from '@common/Button';

export function About() {
  const history = useHistory();

  return (
    <AboutMainSection>
      <AboutTopSection>
        <AboutLeftSection>
          <AboutTextSection>
            <Typography
              variant='h1'
              style={{ lineHeight: '1.2rem', marginBottom: '3rem' }}
            >
              О нас
            </Typography>
            <svg width='41' height='5'>
              <rect width='41' height='5' style={{ fill: '#B8A36A' }} />
            </svg>
            <Typography
              variant='body1'
              style={{ marginBottom: '2rem', marginTop: '1rem' }}
            >
              Привет!🙋‍♀️ Меня зовут Ира Ужейко. Я – основатель и бренд-шеф
              кондитерской ONI. Кондитер – это не моя работа.{' '}
              <b>Это – мой стиль жизни.</b>
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              Я люблю готовить с детства, и меня всегда привлекали именно
              десерты. Свой первый макарон я приготовила 9 лет назад. С улыбкой
              вспоминаю, как делала миндальную муку в ручной кофемолке, взбивала
              белок без миксера и использовала канцелярский файл вместо
              кондитерского мешка🤦‍♀️.
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              Тогда культура десертов ручной работы в Украине только
              зарождалась. Было сложно найти качественную информацию,
              ингредиенты и оборудование. Мне не хватало знаний и вдохновения. Я
              поехала во Францию🇫🇷.
            </Typography>
          </AboutTextSection>
          <QuotesContainer>
            <Quotes>“</Quotes>
            <Typography variant='h1' style={{ width: 590, zIndex: 1 }}>
              Меня удивило, что французы{' '}
              <span style={{ color: colors.secondary.gold }}>
                не ищут повод
              </span>{' '}
              для десерта. Они ходят в кондитерские каждый день.
            </Typography>
          </QuotesContainer>
        </AboutLeftSection>

        <AboutRightSection>
          <ImageWithFallback
            src={'./images/pages/about/about_4'}
            style={{
              width: '460px',
              height: '442px',
              objectFit: 'cover',
              textAlign: 'center',
              paddingTop: '3.5rem',
            }}
          />
          <Typography
            variant='body1'
            style={{ marginBottom: '2rem', marginTop: '2.5rem' }}
          >
            Моими учителями стали лучшие шефы мира Оливье Бажар, Патрик Казула,
            Гийом Мобиё, Ханс Овандо, Мишель Вийом👨‍🍳. Параллельно с учёбой я
            изучала местные кондитерские. Меня удивило, что французы не ищут
            повод для десерта. Они ходят в кондитерские каждый день. Утром перед
            работой берут кофе с круассаном☕🥐, а вечером пьют вино с любимым
            пирожным.
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Эта культура меня зацепила. Появилось желание развивать её у нас.
            Создавать десерты из натуральных🌿 ингредиентов, которыми захочется
            наслаждаться каждый день. Так родилась концепция ONI.
          </Typography>
        </AboutRightSection>
      </AboutTopSection>

      <AboutBottomSection>
        <AboutLeftSection>
          <AboutTextSection>
            <Typography
              variant='body1'
              style={{ marginBottom: '2rem', marginTop: '3rem' }}
            >
              10 лет назад никто в Украине не знал о шу, макарон и муссовых
              тортах. Медовик и Наполеон считались верхом кондитерского
              мастерства. К счастью, всё изменилось. Другими стали и десерты, и
              отношение к ним. Люди устали от привычных вкусов – захотелось
              чего-то нового. Это идеальное время для экспериментов.
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              <b>Мы не боимся неожиданных сочетаний.</b> Наша миссия – развивать
              культуру десертов и удивлять.
            </Typography>
          </AboutTextSection>
          <QuotesContainer>
            <Quotes>“</Quotes>
            <Typography variant='h1' style={{ width: 590, zIndex: 1 }}>
              Ничего лишнего – только{' '}
              <span style={{ color: colors.secondary.gold }}>натуральные</span>{' '}
              ингредиенты
            </Typography>
          </QuotesContainer>
          <ImageWithFallback
            src='./images/pages/about/about_5'
            style={{
              width: '710px',
              height: '320px',
              objectFit: 'cover',
              marginTop: '4rem',
            }}
          />
        </AboutLeftSection>

        <AboutRightSection style={{ paddingRight: '7rem' }}>
          <ImageWithFallback
            src={'./images/pages/about/about_2'}
            style={{
              width: '459px',
              height: '333px',
              objectFit: 'cover',
              textAlign: 'center',
              paddingTop: '2.5rem',
            }}
          />
          <Typography
            variant='body1'
            style={{ marginBottom: '2rem', marginTop: '2rem' }}
          >
            Современное кондитерское искусство не терпит брака, поэтому мы не
            экономим на продуктах. Лучший десерт получится только из лучших
            ингредиентов – это наше чёткое убеждение. Если шоколад – то
            бельгийский, если миндальная мука – то из калифорнийского миндаля,
            если ваниль – то свежие стручки из Мадагаскара.
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            В наших десертах вы не найдёте искусственные ароматизаторы и
            усилители вкуса. Только натуральные ингредиенты. Без компромиссов.
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            Нам удалось собрать команду, где все горят своим делом. Мы гордимся
            тем, что создаём авторские десерты и не копируем чужие работы. Чтобы
            придумать новый вкус, мы переводим килограммы продуктов, пробуем
            десятки вариантов и обсуждаем, как сделать ещё лучше.
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '2rem' }}>
            В нашу витрину попадают только избранные. Больше всего вдохновляет,
            когда получилось сделать десерт, который вы называете «любимым».
          </Typography>

          <Typography
            variant='h3'
            style={{ marginBottom: '2rem', marginTop: '2rem' }}
          >
            СВЯЗАТЬСЯ С НАМИ
          </Typography>
          <ContactUsSection>
            <Contacts>
              <TextWrapper>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                +38 096 249 04 30
              </TextWrapper>
              <TextWrapper>
                <IconWrapper>
                  <EnvelopeIcon />
                </IconWrapper>
                info@oni.ua
              </TextWrapper>
            </Contacts>
            <Button
              rounded
              onClick={() => {
                history.push('/contacts');
              }}
            >
              КОНТАКТЫ
            </Button>
          </ContactUsSection>
        </AboutRightSection>
      </AboutBottomSection>
    </AboutMainSection>
  );
}
