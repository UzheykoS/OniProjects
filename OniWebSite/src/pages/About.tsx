import React, { useState } from 'react';
import { Nav } from '../components/Nav';
import { Busy } from '../components/common/Busy';
import { Footer } from '../components/Footer';
import { Pages } from '@constants/routes';

export function About() {
  const [loading, setLoading] = useState(true);
  const [height, setHeight] = useState('0px');

  const onImageLoaded = () => {
    setLoading(false);
    setHeight('auto');
  };

  return (
    <div className='about-container'>
      <Nav tab={Pages.About} />
      <div className='about-header'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='about-photo' style={{ height: height }}>
              <img
                src='./images/images_large/about/about_header.jpg'
                onLoad={onImageLoaded}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='header-main'>О нас</div>
            {/* <div className='header-desc'></div> */}
            <div className='header-body'>
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
            </div>
          </div>
        </div>
      </div>
      <div className='about-body'>
        <div style={{ height: '500px' }} />
      </div>
      <Footer />
      <Busy loading={loading} />
    </div>
  );
}
