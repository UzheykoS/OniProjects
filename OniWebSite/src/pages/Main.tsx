import * as React from 'react'
import { Nav } from '../components/Nav';
import { Tabs } from '../utils/Helper'
import { preloadImages, loadMainPageImage } from '../utils/Helper';
import { Busy } from '../components/Busy';
import Slider from 'react-slick';

interface IMainState {
    backgroundImage?: string;
    loading?: boolean;
}

export class Main extends React.Component<any, IMainState>{
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        // preloads the rest
        // loadCakes(() => { })
        await loadMainPageImage('./images/images_large/main.jpg');

        this.setState({
            loading: false
        });
        await preloadImages([
            './images/images_large/cakes/cake1.jpg',
            './images/images_large/cakes/cake2.jpg',
            './images/images_large/cakes/cake3.jpg',
            './images/images_large/cakes/cake4.jpg',
            './images/images_large/cakes/cake5.jpg',
            './images/images_large/cakes/cut1.jpg',
            './images/images_large/cakes/cut2.jpg',
            './images/images_large/cakes/cut3.jpg',
            './images/images_large/cakes/cut4.jpg',
            './images/images_large/cakes/cut5.jpg',
            './images/images_large/macarons/macaron1.jpg',
            './images/images_large/macarons/macaron2.jpg',
            './images/images_large/macarons/macaron3.jpg',
            './images/images_large/macarons/macaron4.jpg',
            './images/images_large/macarons/macaron5.jpg',
            './images/images_large/macarons/macaron6.jpg',
            './images/images_large/macarons/macaron7.jpg',
            './images/images_large/macarons/macaron8.jpg',
            './images/images_large/main.jpg',
            './images/images_large/main2.jpg',
            './images/images_large/main3.jpg',])
    }

    onImageLoaded = () => {
        this.setState({
            loading: false
        });
    }

    renderInfo() {
        return <div className='info-section'>
            <div className='image-section'>
                <img src='./images/images_large/about/MF2A8377.jpg' onLoad={this.onImageLoaded} />
            </div>
            <div className='text-section'>
                <h2>КАЖДЫЙ ДЕНЬ МЫ СОЗДАЁМ ДЕСЕРТЫ, КОТОРЫЕ ВДОХНОВЛЯЮТ!</h2>
                <p>Наша главная цель – показать, что современное кондитерское  искусство – это больше, чем просто «что-то сладкое». Это – интересные сочетания вкусов и текстур, натуральные ингредиенты высокого качества, авторские рецептуры и внимание к деталям. </p>
                <p>Все десерты в нашей кондитерской изготавливаются вручную. За каждым изделием стоят десятки теоретических и практических мастер-классов. Мы перенимаем опыт ведущих шефов мира и получаем знания из первых рук, чтобы привезти всё самое лучшее в Украину.   </p>
                <p>Для нас идеальный десерт – это 100% натуральный состав, честный вкус и современная подача. Мы работаем в своем стиле и уверенны, что люди, которые выбирают наш продукт, знают толк в кондитерском искусстве!</p>
            </div>
        </div>
    }

    renderSocials() {
        return <div className='socials'>
            <a target='_blank' href='https://www.facebook.com/'>
                <img className='social_network' src='images/icons/facebook.png' />
            </a>
            <a target='_blank' href='https://www.instagram.com'>
                <img className='social_network' src='images/icons/instagram.png' />
            </a>
            <a target='_blank' href='https://www.telegram.com'>
                <img className='social_network' src='images/icons/twitter.png' />
            </a>
        </div>;
    }

    renderImages() {
        const settings = {
            className: '',
            dots: false,
            fade: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: 'linear',
            arrows: false
        };

        return <div className='images-container'>
            <Slider {...settings}>
                <img className='background-img' src='./images/images_large/main1.jpg' />
                <img className='background-img' src='./images/images_large/main2.jpg' />
            </Slider>
        </div>;
    }

    render() {
        const { loading } = this.state;

        return <div className='main-container'>
            <Nav tab={Tabs.Main} />
            {this.renderImages()}
            {this.renderInfo()}
            {this.renderSocials()}
            <Busy loading={loading} />
        </div>;
    }
};