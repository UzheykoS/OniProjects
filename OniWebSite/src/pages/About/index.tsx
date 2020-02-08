import React, { useState, useEffect } from 'react';
import { AboutContainer, AboutHeader, AboutPhoto, AboutBody } from './styled';
import { HeaderBody, HeaderMain } from '@styles/styled';
import { useLoading } from '@hooks/useLoading';

export function About() {
  const { showLoading, closeLoading } = useLoading();
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    showLoading();
  }, []);

  const onImageLoaded = () => {
    closeLoading();
    setHeight('auto');
  };

  return (
    <AboutContainer>
      <AboutHeader>
        <div className='row'>
          <div className='col-md-6'>
            <AboutPhoto style={{ height: height }}>
              <img
                src='./images/images_large/about/about_header.jpg'
                onLoad={onImageLoaded}
              />
            </AboutPhoto>
          </div>
          <div className='col-md-6'>
            <HeaderMain>О нас</HeaderMain>
            <HeaderBody>
              Привет! Меня зовут Ирина Ужейко и я – основатель кондитерской ONI.
              Каждый день мы создаём десерты, которые вдохновляют. Наша главная
              цель – показать, что современное кондитерское искусство – это
              больше, чем просто «что-то сладкое». Это – интересные сочетания
              вкусов и текстур, натуральные ингредиенты высочайшего качества,
              авторские рецептуры и внимание к деталям.
              <br />
              <br />
              Мы чтим традиции французской школы, которая по праву считается
              мировым лидером в сфере кондитерского искусства. Обучение в одной
              из лучших академий Франции Ecole Internationale de Patisserie
              Olivier Bajard, множество теоретических семинаров и практических
              мастер-классов – мы получаем знания из первых рук и перенимаем
              опыт ведущих шефов мира, чтобы привезти все самое лучшее в
              Украину.
              <br />
            </HeaderBody>
          </div>
        </div>
      </AboutHeader>
      <AboutBody>
        <div style={{ height: '500px' }} />
      </AboutBody>
    </AboutContainer>
  );
}
