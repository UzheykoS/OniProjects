import React from 'react';
import { ContactUsSection, TextWrapper, IconWrapper, Quotes } from './styled';
import { Typography, useMediaQuery, Link } from '@material-ui/core';
import { ImageWithFallback } from '@common/ImageWithFallback';
import colors from '@constants/colors';
import PhoneIcon from '@icons/phone.svg';
import EnvelopeIcon from '@icons/envelope.svg';
import { useHistory } from 'react-router-dom';
import { Button } from '@common/Button';
import { BREAKPOINT } from '@constants';
import { Flex } from '@styles/styled';

export function About() {
  const history = useHistory();
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINT})`);

  return (
    <Flex direction='column' justifyCenter>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        justifyCenter
        style={{ margin: isMobile ? '5rem 2rem 2rem 2rem' : '50px 0px' }}
      >
        <Flex
          direction='column'
          flexEnd
          style={{ paddingTop: '3.5rem', alignItems: 'flex-end' }}
        >
          <Flex direction='column' style={{ width: isMobile ? 'auto' : 450 }}>
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
              Привет! Меня зовут Ира Ужейко. Я – основатель и бренд-шеф
              кондитерской ONI.
            </Typography>
            <Typography variant='body1' style={{ marginBottom: '2rem' }}>
              Свой первый макарон я приготовила 9 лет назад. С улыбкой
              вспоминаю, как использовала канцелярский файл вместо кондитерского
              мешка и делала миндальную муку в кофемолке. Тогда культура
              десертов ручной работы в Украине только зарождалась. Мало кто
              воспринимал кондитерское дело, как искусство.
            </Typography>
            {isMobile && (
              <ImageWithFallback
                src={'./images/pages/about/about_6'}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  textAlign: 'center',
                }}
              />
            )}
            <Typography
              variant='body1'
              style={{ marginBottom: '2rem', marginTop: '2rem' }}
            >
              Меня вдохновляли десерты французских шефов. Я смотрела на их
              работы и понимала, что хочу двигаться именно в этом направлении.
              Два года я набивала шишки и училась на своей домашней кухне. Мне
              очень хотелось попасть во Францию, чтобы получить знания из первых
              рук. Я поставила себе цель и спустя год сделала это.
            </Typography>
          </Flex>
          <Flex
            style={{
              position: 'relative',
              marginTop: isMobile ? '2rem' : '4rem',
            }}
          >
            <Quotes isMobile={isMobile}>“</Quotes>
            <Typography
              variant='h1'
              style={{
                width: isMobile ? '' : 590,
                zIndex: 1,
                fontSize: isMobile ? 32 : 46,
              }}
            >
              Кондитерский мир{' '}
              <span style={{ color: colors.secondary.gold }}>
                слишком интересный,{' '}
              </span>
              чтобы кушать плохие десерты
            </Typography>
          </Flex>
        </Flex>
        <Flex
          direction='column'
          style={{
            padding: isMobile ? '' : '3rem 0 0 5rem',
            flexBasis: isMobile ? '' : '30rem',
          }}
        >
          {!isMobile && (
            <ImageWithFallback
              src={'./images/pages/about/about_6'}
              style={{
                width: '500px',
                height: 'auto',
                objectFit: 'cover',
                textAlign: 'center',
                paddingTop: '3.5rem',
              }}
            />
          )}
          <Typography
            variant='body1'
            style={{ marginBottom: '2rem', marginTop: '2.5rem' }}
          >
            Моими учителями стали лучшие шефы мира Оливье Бажар, Патрик Казула,
            Гийом Мобиё, Ханс Овандо, Мишель Вийом. Это очень крутой опыт! Я
            увидела, как организована профессиональная кухня и поняла, над чем
            нужно работать ближайшие годы.
          </Typography>
          <Typography
            variant='body1'
            style={{ marginBottom: isMobile ? '1rem' : '2rem' }}
          >
            Появилось желание доказать, что современные десерты – это больше,
            чем просто «что-то сладкое». Это – вкус, эстетика и удовольствие.
            Так родилась концепция ONI. Каждый день мы делаем людям вкусно и
            разделяем главную идею – кондитерский мир слишком интересный, чтобы
            кушать плохие десерты.
          </Typography>
        </Flex>
      </Flex>

      <Flex
        justifyCenter
        direction={isMobile ? 'column' : 'row'}
        style={{
          backgroundColor: '#f6f8f7',
          padding: isMobile ? '2rem' : '0 0 80px 0',
        }}
      >
        <Flex
          direction='column'
          style={{
            paddingTop: isMobile ? '' : '3.5rem',
            alignItems: 'flex-end',
          }}
        >
          <Flex direction='column' style={{ width: isMobile ? 'auto' : 450 }}>
            <Typography
              variant='body1'
              style={{
                marginBottom: '1rem',
                marginTop: isMobile ? '1rem' : '3rem',
              }}
            >
              Всё начинается с выбора ингредиентов. Лучший десерт может
              получиться только из лучших продуктов – это наше чёткое убеждение.
              Если шоколад – то бельгийский, если миндальная мука – то из
              калифорнийского миндаля, если ваниль – то свежие стручки из
              Мадагаскара. В наших изделиях вы не найдёте ароматизаторы и
              усилители вкуса. Только натуральные ингредиенты. Без компромиссов.
            </Typography>
          </Flex>
          {isMobile && (
            <ImageWithFallback
              src='./images/pages/about/about_9'
              style={{
                width: isMobile ? '100%' : '710px',
                height: isMobile ? 'auto' : '320px',
                objectFit: 'cover',
                marginTop: isMobile ? '1rem' : '2rem',
              }}
            />
          )}
          <Flex
            style={{
              position: 'relative',
              marginTop: isMobile ? '2rem' : '4rem',
            }}
          >
            <Quotes isMobile={isMobile}>“</Quotes>
            <Typography
              variant='h1'
              style={{
                width: isMobile ? '' : 590,
                zIndex: 1,
                fontSize: isMobile ? 32 : 46,
              }}
            >
              Только{' '}
              <span style={{ color: colors.secondary.gold }}>натуральные</span>{' '}
              ингредиенты. Без компромиссов.
            </Typography>
          </Flex>
          {!isMobile && (
            <ImageWithFallback
              src='./images/pages/about/about_9'
              style={{
                width: '710px',
                height: 'auto',
                objectFit: 'cover',
                marginTop: '4rem',
              }}
            />
          )}
        </Flex>

        <Flex
          direction='column'
          style={{
            padding: isMobile ? '' : '3rem 7rem 0 5rem',
            flexBasis: isMobile ? '' : '30rem',
          }}
        >
          {isMobile ? (
            <>
              <Typography
                variant='body1'
                style={{
                  marginBottom: '2rem',
                  marginTop: '2rem',
                }}
              >
                Все десерты мы делаем вручную. Нам удалось собрать команду, где
                все горят свои делом. Мы фанаты новых вкусов и безумных
                экспериментов. Каждое новое изделие – это вызов: десятки
                вариантов, килограммы выброшенных продуктов и бесконечные споры
                о том, как сделать ещё лучше. В нашем меню жёсткий фейс-контроль
                – туда попадают только избранные. Мы работаем до тех пор, пока
                результат не устроит нас на 100%. Больше всего вдохновляет,
                когда получилось сделать десерт, который вы называете «любимым».
              </Typography>
              <ImageWithFallback
                src={'./images/pages/about/about_11'}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  textAlign: 'center',
                }}
              />
            </>
          ) : (
            <>
              <ImageWithFallback
                src={'./images/pages/about/about_11'}
                style={{
                  width: isMobile ? '100%' : '575px',
                  objectFit: 'cover',
                  textAlign: 'center',
                  paddingTop: '2.5rem',
                }}
              />
              <Typography
                variant='body1'
                style={{ marginBottom: '2rem', marginTop: '4rem' }}
              >
                Все десерты мы делаем вручную. Нам удалось собрать команду, где
                все горят свои делом. Мы фанаты новых вкусов и безумных
                экспериментов. Каждое новое изделие – это вызов: десятки
                вариантов, килограммы выброшенных продуктов и бесконечные споры
                о том, как сделать ещё лучше. В нашем меню жёсткий фейс-контроль
                – туда попадают только избранные. Мы работаем до тех пор, пока
                результат не устроит нас на 100%. Больше всего вдохновляет,
                когда получилось сделать десерт, который вы называете «любимым».
              </Typography>
            </>
          )}
          <Typography
            variant='h3'
            style={{ marginBottom: '2rem', marginTop: '2rem' }}
          >
            СВЯЗАТЬСЯ С НАМИ
          </Typography>
          <ContactUsSection>
            <Flex direction='column' style={{ marginRight: '2rem' }}>
              <TextWrapper>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                <Link
                  href='tel:+380962490430'
                  style={{ textDecoration: 'underline' }}
                  color='inherit'
                >
                  +38 096 249 04 30
                </Link>
              </TextWrapper>
              <TextWrapper>
                <IconWrapper>
                  <EnvelopeIcon />
                </IconWrapper>
                <Link
                  href='mailto:info@oni.ua'
                  style={{ textDecoration: 'underline' }}
                  color='inherit'
                >
                  info@oni.ua
                </Link>
              </TextWrapper>
            </Flex>
            <Button
              rounded
              onClick={() => {
                history.push('/contacts');
              }}
            >
              КОНТАКТЫ
            </Button>
          </ContactUsSection>
        </Flex>
      </Flex>
    </Flex>
  );
}
